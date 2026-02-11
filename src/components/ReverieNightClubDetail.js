import React, { useEffect } from 'react';
import './ProjectDetail.css';

const ReverieNightClubDetail = () => {
  useEffect(() => {
    document.body.className = 'page-project-detail';
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const description = `Reveire, gece hayatını yalnızca bir eğlence alanı olarak değil, güçlü bir atmosfer ve deneyim olarak konumlayan bir nightlife markasıdır. Proje kapsamında, markanın dijital dünyadaki görünürlüğünü güçlendirecek ve mekânın karakterini doğru yansıtacak bir sosyal medya dili oluşturulması hedeflendi.
Çalışma sürecinde, Reveire'ın müzik anlayışı, hedef kitlesi ve mekânsal atmosferi merkeze alındı. Sosyal medya içerikleri; yalnızca etkinlik duyuruları üzerinden değil, mekânın hissini, temposunu ve geceyle kurduğu ilişkiyi yansıtan bir anlatı üzerinden kurgulandı. Amaç, Reveire'ı yalnızca görülen değil, hissedilen bir marka haline getirmekti.
Sosyal medya yönetimi kapsamında; post ve story içerikleri için tutarlı ve ayırt edici bir görsel dil oluşturuldu. Işık, kalabalık, müzik ve hareket gibi gece kulübü dinamikleri içerik kurgusunun temel unsurları olarak ele alındı. Yayın dili, hızlı tüketilen ancak akılda kalan bir iletişim yapısı üzerine inşa edildi.
Ortaya çıkan içerikler, Reveire'ın gece hayatındaki konumunu güçlendiren; enerjik, çağdaş ve karakter sahibi bir dijital görünüm sağladı. Sosyal medya, markanın atmosferini dijital dünyaya taşıyan ve hedef kitlesiyle sürekli temas kuran stratejik bir iletişim alanı olarak konumlandırıldı.`;

  return (
    <section className="project-detail">
      <div className="project-detail-container">
        <div className="project-detail-page project-detail-page-1 reverie-page-1">
          <div className="project-detail-header">
            <span className="project-detail-client-label">Client</span>
            <h1 className="project-detail-title">Reverie Night Club</h1>
          </div>

          <div className="project-detail-left">
            <div className="project-detail-image-wrapper">
              <img
                src="/images/Reverie/Reverie1.jpg"
                alt="Reverie Night Club"
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
                  <span className="project-detail-meta-copyright">©2024</span>
                  <span className="project-detail-meta-place">Istanbul, Türkiye</span>
                </div>
                <div className="project-detail-meta-right">
                  <a
                    href="https://www.instagram.com/reverienightclub/"
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

        <div className="project-detail-page project-detail-page-2 reverie-page-2">
          <div className="reverie-page-2-grid">
            <div className="reverie-page-2-item">
              <img src="/images/Reverie/Reveriest1.jpg" alt="Reverie Night Club" />
            </div>
            <div className="reverie-page-2-item">
              <img src="/images/Reverie/Reveriest2.jpg" alt="Reverie Night Club" />
            </div>
            <div className="reverie-page-2-item">
              <img src="/images/Reverie/Reveriest3.jpg" alt="Reverie Night Club" />
            </div>
            <div className="reverie-page-2-item">
              <img src="/images/Reverie/Reveriest4.jpg" alt="Reverie Night Club" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReverieNightClubDetail;

