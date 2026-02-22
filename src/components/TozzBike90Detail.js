import React, { useEffect } from 'react';
import './ProjectDetail.css';

const TozzBike90Detail = () => {
  useEffect(() => {
    document.body.className = 'page-project-detail';
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const description = `Joyce ’90, geçmişin ikonik tasarım ruhunu günümüzün elektrikli mobilite teknolojisiyle buluşturan, karakteri güçlü bir alt markadır. Proje kapsamında, bu özgün konseptin dijital dünyada ayrı bir anlatı ve görsel dil ile konumlandırılması hedeflendi.

Joyce ’90 için geliştirilen iletişim yaklaşımı, ürünü yalnızca fonksiyonel bir araç olarak değil; stil, ifade ve nostalji taşıyan bir yaşam tarzı nesnesi olarak ele aldı. 90’lar estetiğinden ilham alan görsel dünya, markanın enerjik ve asi karakterini yansıtacak şekilde kurgulandı.

Sosyal medya ve dijital pazarlama sürecinde; lifestyle odaklı içerikler, güçlü görsel anlatımlar ve kampanya dili ön plana çıkarıldı. Fotoğraf ve video prodüksiyonları, ürünün tasarım detaylarını ve duygusal bağ kuran yönünü öne çıkaracak biçimde planlandı. Joyce ’90, Joyce markasının yenilikçi vizyonunu farklı bir estetik perspektifle tamamlayan bir alt marka olarak konumlandırıldı.

Bu iletişim dili sayesinde Joyce ’90, mikromobilite dünyasında yalnızca farklı değil, ayırt edici bir duruş kazandı.`;

  return (
    <section className="project-detail">
      <div className="project-detail-container">
        <div className="project-detail-page project-detail-page-1 tozzbike-page-1">
          <div className="project-detail-header">
            <span className="project-detail-client-label">Client</span>
            <h1 className="project-detail-title">TozzBike & 90</h1>
          </div>

          <div className="project-detail-left">
            <div className="project-detail-image-wrapper">
              <img
                src="/images/TozzBike&90/TozzBike1.jpg"
                alt="TozzBike & 90"
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
                Tarih—Yer / Date—Location / Social
              </h2>
              <div className="project-detail-meta-row">
                <div className="project-detail-meta-left">
                  <span className="project-detail-meta-copyright">©2025</span>
                  <span className="project-detail-meta-place">Istanbul, Türkiye</span>
                </div>
                <div className="project-detail-meta-right">
                  <a
                    href="https://www.instagram.com/tozzbike90/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-detail-link"
                  >
                    Instagram
                  </a>
                  <a
                    href="https://www.tozzbike90.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-detail-link"
                  >
                    Website
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="project-detail-page project-detail-page-2 valens-page-2">
          <div className="valens-photo-grid">
            <div className="valens-grid-left">
              <div className="valens-grid-top">
                <div className="valens-photo-item valens-photo-small">
                  <img src="/images/TozzBike&90/TozzBike2.jpg" alt="TozzBike & 90" />
                </div>
                <div className="valens-photo-item valens-photo-small">
                  <img src="/images/TozzBike&90/TozzBike3.jpg" alt="TozzBike & 90" />
                </div>
              </div>
              <div className="valens-photo-item valens-photo-wide">
                <img src="/images/TozzBike&90/TozzBike4.jpg" alt="TozzBike & 90" />
              </div>
            </div>
            <div className="valens-grid-right">
              <div className="valens-photo-item valens-photo-tall">
                <img src="/images/TozzBike&90/TozzBike5.jpg" alt="TozzBike & 90" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TozzBike90Detail;
