import React, { useEffect } from 'react';
import './ProjectDetail.css';

const ValensCaravanDetail = () => {
  useEffect(() => {
    document.body.className = 'page-project-detail';
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const description = `Valens, doğayla uyumlu, sürdürülebilir ve modern mobil yaşam alanları sunan bir karavan markasıdır. Proje kapsamında, markanın yaşam tarzı odağını dijital dünyada doğru şekilde yansıtacak bir iletişim dili ve görünürlük yapısı oluşturulması hedeflendi.

Valens ile yürütülen çalışmalarda, markanın temsil ettiği özgürlük, bağımsızlık ve modern gezgin yaşamı merkeze alındı. Mobil yaşam ve dijital nomad kültürünün yükselişi doğrultusunda, Valens'in yalnızca bir ürün değil, bütüncül bir yaşam deneyimi sunduğu vurgulandı. Bu yaklaşım, markanın dijital iletişiminde temel referans noktası olarak ele alındı.

Sosyal medya ve dijital pazarlama sürecinde; içerik dili, yayın planı ve görsel anlatım Valens'in yaşam tarzı perspektifiyle uyumlu şekilde kurgulandı. Ürünlerin teknik özellikleri kadar, sunduğu deneyimi ve kullanıcıyla kurduğu duygusal bağ ön plana çıkarıldı. Fotoğraf ve video içerikler, bu anlatımı destekleyecek şekilde planlandı ve üretildi.

Dijital kanallar üzerinden yürütülen iletişim, Valens'in hedef kitlesiyle daha güçlü ve tutarlı bir bağ kurmasını sağladı. Sosyal medya, markanın yaşam tarzını görünür kılan; dijital pazarlama ise bu görünürlüğü destekleyen stratejik bir büyüme alanı olarak konumlandırıldı.`;

  return (
    <section className="project-detail">
      <div className="project-detail-container">
        <div className="project-detail-page project-detail-page-1 valens-page-1">
          <div className="project-detail-header">
            <span className="project-detail-client-label">Client</span>
            <h1 className="project-detail-title">Valens Caravan</h1>
          </div>

          <div className="project-detail-left">
            <div className="project-detail-image-wrapper">
              <img
                src="/images/ValensCaravan/Valens1.jpg"
                alt="Valens Caravan"
                className="project-detail-main-image"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.parentElement.classList.add('no-image');
                }}
              />
              <div className="project-detail-image-placeholder">
                <span>Fotograf Alani</span>
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
                  <span className="project-detail-meta-copyright">©2022</span>
                  <span className="project-detail-meta-place">Istanbul, Turkiye</span>
                </div>
                <div className="project-detail-meta-right">
                  <a
                    href="https://www.instagram.com/valenskaravan/"
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

        <div className="project-detail-page project-detail-page-2 valens-page-2">
          <div className="valens-photo-grid">
            <div className="valens-grid-left">
              <div className="valens-grid-top">
                <div className="valens-photo-item valens-photo-small">
                  <img src="/images/ValensCaravan/Valens2.jpg" alt="Valens Caravan" />
                </div>
                <div className="valens-photo-item valens-photo-small">
                  <img src="/images/ValensCaravan/Valens3.jpg" alt="Valens Caravan" />
                </div>
              </div>
              <div className="valens-photo-item valens-photo-wide">
                <img src="/images/ValensCaravan/Valens4.jpg" alt="Valens Caravan" />
              </div>
            </div>
            <div className="valens-grid-right">
              <div className="valens-photo-item valens-photo-tall">
                <img src="/images/ValensCaravan/Valens5.jpg" alt="Valens Caravan" />
              </div>
            </div>
          </div>
        </div>

        <div className="project-detail-page project-detail-page-3 valens-page-3">
          <div className="valens-devices-showcase">
            <img
              src="/images/ValensCaravan/Valens6.jpg"
              alt="Valens Caravan Devices"
              className="valens-devices-image"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValensCaravanDetail;

