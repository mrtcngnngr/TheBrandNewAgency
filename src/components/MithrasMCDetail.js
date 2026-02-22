import React, { useEffect } from 'react';
import './ProjectDetail.css';

const MithrasMCDetail = () => {
  useEffect(() => {
    document.body.className = 'page-project-detail';
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const description = `Teknik mühendislik gücünü dijital dünyada doğru ve anlaşılır bir iletişim yapısına dönüştürmek

Mithras Motor Controllers için yürüttüğümüz çalışmada, markanın mühendislik odaklı ürün ve çözümlerini daha anlaşılır ve güçlü bir anlatı ile sunabilmek amacıyla sosyal medya ve web sitesi odaklı bir dijital iletişim yapısı kurgulandı. Sürecin başlangıcında, markanın teknik ürün yapısı, hedef müşteri profili ve sektörel konumlandırması analiz edilerek içerik dili ve dijital iletişim stratejisi oluşturuldu.

Sosyal medya yönetimi kapsamında; teknik içeriklerin sadeleştirilmesi, ürün ve mühendislik süreçlerini anlatan içerik planlamaları, görsel tasarım çalışmaları ve düzenli yayın akışı planlanarak markanın dijital platformlarda daha anlaşılır ve profesyonel bir görünüm kazanması sağlandı.

Web sitesi tarafında ise, markanın ürün ve teknoloji altyapısını doğru şekilde anlatan, kullanıcı deneyimi odaklı ve teknik bilgiyi sade bir yapıyla sunan bir içerik ve tasarım kurgusu oluşturuldu. Bu çalışmalar sonucunda Mithras Motor Controllers, mühendislik gücünü dijital dünyada daha görünür, daha anlaşılır ve daha güçlü bir marka anlatısı ile temsil eden bir yapıya kavuştu.`;

  return (
    <section className="project-detail">
      <div className="project-detail-container">
        <div className="project-detail-page project-detail-page-1 mithras-page-1">
          <div className="project-detail-header">
            <span className="project-detail-client-label">Client</span>
            <h1 className="project-detail-title">Mithras M.C</h1>
          </div>

          <div className="project-detail-left">
            <div className="project-detail-image-wrapper">
              <img
                src="/images/Mithras/Mithras1.jpg"
                alt="Mithras M.C"
                className="project-detail-main-image"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.parentElement.classList.add('no-image');
                }}
              />
              <div className="project-detail-image-placeholder">
                <span>Fotoğraf Alanı</span>
              </div>
            </div>
          </div>

          <div className="project-detail-right">
            <div className="project-detail-description-section">
              <p className="project-detail-description">{description}</p>
            </div>

            <div className="project-detail-meta-section">
              <h2 className="project-detail-section-title">
                Tarih-Yer / Date-Location
              </h2>
              <div className="project-detail-meta-row">
                <div className="project-detail-meta-left">
                  <span className="project-detail-meta-copyright">©2023</span>
                  <span className="project-detail-meta-place">Istanbul, Türkiye</span>
                </div>
                <div className="project-detail-meta-right">
                  <a
                    href="https://www.instagram.com/mithrasmc/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-detail-link"
                  >
                    Instagram
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="project-detail-page project-detail-page-2 mithras-page-2">
          <div className="mithras-page-2-photo">
            <img src="/images/Mithras/Mithras2.jpg" alt="Mithras M.C" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default MithrasMCDetail;

