import React, { useEffect } from 'react';
import './ProjectDetail.css';

const YumeBoulangerieDetail = () => {
  useEffect(() => {
    document.body.className = 'page-project-detail';
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const description = `Yume Boulangerie için yürüttüğümüz çalışma, markanın el işçiliğine dayalı üretim anlayışını ve ürün kalitesini dijital dünyada doğru bir anlatı ile konumlandırmayı hedefledi. Sürecin başlangıcında, markanın hedef kitlesi, ürün çeşitliliği ve premium konumlandırması analiz edilerek sosyal medya iletişim dili ve içerik stratejisi yeniden yapılandırıldı.

Sosyal medya yönetimi kapsamında; içerik planlama, görsel tasarım, metin kurgusu ve yayın akışı bütüncül bir sistem içerisinde ele alınarak markanın dijital platformlarda tutarlı ve karakter sahibi bir görünüm kazanması sağlandı. Fotoğraf ve video prodüksiyonlarıyla, ürünlerin doğal yapısını ve zanaat odaklı üretim sürecini vurgulayan güçlü görsel içerikler üretildi; bu içerikler markanın sıcak, samimi ve premium kimliğini yansıtan bir görsel dil ile desteklendi.

Dijital pazarlama ve reklam yönetimi süreçlerinde, ürün ve mağaza trafiğini destekleyen kampanya kurguları oluşturularak markanın görünürlüğü ve hedef kitle erişimi artırıldı. Bu bütüncül iletişim yaklaşımı sonucunda Yume Boulangerie, dijital platformlarda ürün kalitesini doğru yansıtan, güçlü ve tutarlı bir marka algısı oluşturarak hedef kitlesiyle daha etkili bir bağ kuran bir yapıya kavuştu.`;

  return (
    <section className="project-detail">
      <div className="project-detail-container">
        <div className="project-detail-page project-detail-page-1 yume-page-1">
          <div className="project-detail-header">
            <span className="project-detail-client-label">Client</span>
            <h1 className="project-detail-title">Yume Boulangerie</h1>
          </div>

          <div className="project-detail-left">
            <div className="project-detail-image-wrapper">
              <img
                src="/images/YumeBoulangerie/YumeBoulangerie1.jpg"
                alt="Yume Boulangerie"
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
                Tarih—Yer / Date—Location
              </h2>
              <div className="project-detail-meta-row">
                <div className="project-detail-meta-left">
                  <span className="project-detail-meta-copyright">©2025</span>
                  <span className="project-detail-meta-place">Istanbul, Türkiye</span>
                </div>
                <div className="project-detail-meta-right">
                  <a
                    href="https://www.instagram.com/yumeboulangerie/"
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

        <div className="project-detail-page project-detail-page-2 yume-page-2">
          <div className="yume-grid-layout">
            <div className="yume-panel">
              <img src="/images/YumeBoulangerie/YumeBoulangerie2.jpg" alt="Yume Boulangerie" />
            </div>
            <div className="yume-panel yume-panel-center yume-panel-center-portrait">
              <img src="/images/YumeBoulangerie/YumeBoulangerie3.jpg" alt="Yume Boulangerie" />
            </div>
            <div className="yume-panel">
              <img src="/images/YumeBoulangerie/YumeBoulangerie4.jpg" alt="Yume Boulangerie" />
            </div>
          </div>
        </div>

        <div className="project-detail-page project-detail-page-3 yume-page-3">
          <div className="yume-page-3-grid">
            <div className="yume-page-3-item">
              <img src="/images/YumeBoulangerie/YumeBoulangeriest1.jpg" alt="Yume Boulangerie" />
            </div>
            <div className="yume-page-3-item">
              <img src="/images/YumeBoulangerie/YumeBoulangeriest2.jpg" alt="Yume Boulangerie" />
            </div>
            <div className="yume-page-3-item">
              <img src="/images/YumeBoulangerie/YumeBoulangeriest3.jpg" alt="Yume Boulangerie" />
            </div>
            <div className="yume-page-3-item">
              <img src="/images/YumeBoulangerie/YumeBoulangeriest4.jpg" alt="Yume Boulangerie" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default YumeBoulangerieDetail;

