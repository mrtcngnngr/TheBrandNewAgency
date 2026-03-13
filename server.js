// Load environment variables (first .env, then override with .env.local if present)
require('dotenv').config();
require('dotenv').config({ path: '.env.local', override: true });

const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const BREVO_API_KEY = process.env.BREVO_API_KEY;
const EMAIL_FROM = process.env.EMAIL_FROM || 'tbnwebsitemail@gmail.com';
const EMAIL_TO = process.env.EMAIL_TO || 'mrtcngnngr@gmail.com';

if (!BREVO_API_KEY) {
  // eslint-disable-next-line no-console
  console.warn(
    '[server] BREVO_API_KEY environment variable is not set. Email sending will fail until it is configured.'
  );
}

const buildScheduleHtml = (data) => {
  const { name, email, phone, company, message } = data;

  return `
  <div style="background:#050505;padding:32px 16px;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif;color:#f7f7f7;">
    <table role="presentation" cellpadding="0" cellspacing="0" width="100%" style="max-width:640px;margin:0 auto;border-collapse:separate;border-radius:16px;overflow:hidden;background:#050505;border:1px solid rgba(255,255,255,0.06);box-shadow:0 18px 45px rgba(0,0,0,0.65);">
      <tr>
        <td style="padding:24px 28px 12px 28px;border-bottom:1px solid rgba(255,255,255,0.04);">
          <div style="font-size:11px;letter-spacing:0.18em;text-transform:uppercase;color:rgba(247,247,247,0.72);margin-bottom:4px;">
            THE BRAND NEW™
          </div>
          <div style="font-size:20px;line-height:1.4;font-weight:500;color:#ffffff;">
            Yeni Görüşme Talebi
          </div>
        </td>
      </tr>
      <tr>
        <td style="padding:20px 28px 4px 28px;">
          <p style="margin:0 0 14px 0;font-size:14px;line-height:1.7;color:rgba(247,247,247,0.78);">
            Web sitesi &ldquo;Görüşme Ayarlayın&rdquo; formundan yeni bir talep alındı. Detaylar aşağıdadır.
          </p>
        </td>
      </tr>
      <tr>
        <td style="padding:4px 20px 20px 20px;">
          <table role="presentation" cellpadding="0" cellspacing="0" width="100%" style="border-collapse:separate;border-radius:12px;background:rgba(8,8,8,0.96);border:1px solid rgba(255,255,255,0.06);">
            <tr>
              <td style="padding:18px 20px 6px 20px;">
                <div style="font-size:12px;letter-spacing:0.16em;text-transform:uppercase;color:rgba(247,247,247,0.52);margin-bottom:2px;">
                  Başvuru Sahibi
                </div>
                <div style="font-size:16px;font-weight:500;color:#ffffff;">
                  ${name || '-'}
                </div>
              </td>
            </tr>
            <tr>
              <td style="padding:8px 20px;">
                <table role="presentation" cellpadding="0" cellspacing="0" width="100%" style="border-collapse:collapse;">
                  <tr>
                    <td style="padding:6px 0;width:50%;vertical-align:top;">
                      <div style="font-size:11px;text-transform:uppercase;letter-spacing:0.14em;color:rgba(247,247,247,0.52);margin-bottom:2px;">
                        E-posta
                      </div>
                      <a href="mailto:${email}" style="font-size:14px;color:#e5e5e5;text-decoration:none;">
                        ${email || '-'}
                      </a>
                    </td>
                    <td style="padding:6px 0;width:50%;vertical-align:top;">
                      <div style="font-size:11px;text-transform:uppercase;letter-spacing:0.14em;color:rgba(247,247,247,0.52);margin-bottom:2px;">
                        Telefon
                      </div>
                      <a href="tel:${phone}" style="font-size:14px;color:#e5e5e5;text-decoration:none;">
                        ${phone || '-'}
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td colspan="2" style="padding-top:10px;">
                      <div style="font-size:11px;text-transform:uppercase;letter-spacing:0.14em;color:rgba(247,247,247,0.52);margin-bottom:2px;">
                        Marka / Şirket
                      </div>
                      <div style="font-size:14px;color:#e5e5e5;">
                        ${company || 'Belirtilmemiş'}
                      </div>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
            <tr>
              <td style="padding:12px 20px 18px 20px;">
                <div style="font-size:11px;text-transform:uppercase;letter-spacing:0.14em;color:rgba(247,247,247,0.52);margin-bottom:6px;">
                  Mesaj
                </div>
                <div style="font-size:14px;line-height:1.7;color:rgba(247,247,247,0.9);white-space:pre-wrap;">
                  ${message || '-'}
                </div>
              </td>
            </tr>
          </table>
        </td>
      </tr>
      <tr>
        <td style="padding:8px 28px 22px 28px;">
          <div style="font-size:11px;color:rgba(180,180,180,0.75);line-height:1.6;">
            Bu e-posta, thebrandnew.agency üzerindeki formdan otomatik olarak oluşturulmuştur.
          </div>
        </td>
      </tr>
    </table>
  </div>
  `;
};

app.post('/api/schedule', async (req, res) => {
  const { name, email, phone, company, message } = req.body || {};

  if (!name || !email || !phone || !message) {
    return res.status(400).json({ ok: false, error: 'Missing required fields' });
  }

  try {
    const brevoRes = await fetch('https://api.brevo.com/v3/smtp/email', {
      method: 'POST',
      headers: {
        'api-key': BREVO_API_KEY || '',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        sender: {
          name: 'THE BRAND NEW Website',
          email: EMAIL_FROM,
        },
        to: [{ email: EMAIL_TO }],
        replyTo: { email },
        subject: `Yeni Görüşme Talebi – ${name}`,
        htmlContent: buildScheduleHtml({ name, email, phone, company, message }),
      }),
    });

    if (!brevoRes.ok) {
      const errBody = await brevoRes.text();
      // eslint-disable-next-line no-console
      console.error('Brevo API error:', brevoRes.status, errBody);
      return res.status(500).json({ ok: false, error: 'Email send failed' });
    }

    return res.json({ ok: true });
  } catch (err) {
    // eslint-disable-next-line no-console
    console.error('Email send error:', err);
    return res.status(500).json({ ok: false, error: 'Email send failed' });
  }
});

app.get('/health', (req, res) => {
  res.json({ ok: true });
});

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Schedule mail server running on port ${PORT}`);
});

