import React, { useEffect } from 'react';
import './ProjectDetail.css';

const JoyceDetail = () => {
  useEffect(() => {
    document.body.className = 'page-project-detail';
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const description = `Joyce, yerli üretimle geliştirilen elektrikli mikromobilite çözümleriyle şehir yaşamına sürdürülebilir ve estetik bir alternatif sunan bir markadır. Proje kapsamında, markanın çevre bilinci, tasarım yaklaşımı ve teknoloji odağını dijital dünyada tutarlı ve güçlü bir iletişim diliyle görünür kılmak hedeflendi.

Joyce için yürütülen çalışmalarda, markanın modern şehir yaşamına entegre olma vizyonu merkeze alındı. Mikromobilite, yalnızca bir ulaşım aracı olarak değil; günlük hayatın doğal bir parçası olarak ele alındı. Dijital iletişim dili, bu yaklaşımı destekleyecek şekilde sade, erişilebilir ve güven veren bir yapı üzerine kuruldu.

Sosyal medya ve dijital pazarlama sürecinde; içerik stratejisi, yayın dili ve kampanya kurguları Joyce'un sürdürülebilirlik ve kullanıcı deneyimi odağıyla uyumlu biçimde ele alındı. Ürünlerin fonksiyonel ve estetik yönleri, lifestyle odaklı fotoğraf ve video içeriklerle desteklendi. Dijital kampanyalar aracılığıyla marka bilinirliği ve etkileşim artırıldı.

Bu çalışmalar, Joyce'un dijital dünyada yalnızca bir araç üreticisi değil; çağdaş, çevreye duyarlı ve stil sahibi bir mobilite markası olarak konumlanmasını destekledi.`;

  return (
    <section className="project-detail joyce-detail">
      <div className="project-detail-container">
        <div className="project-detail-page project-detail-page-1">
          <div className="project-detail-header">
            <span className="project-detail-client-label">Client</span>
            <h1 className="project-detail-title">Joyce</h1>
          </div>
          
          <div className="project-detail-left">
            <div className="project-detail-image-wrapper">
              <img 
                src="/images/Joyce/Joyce1.jpg" 
                alt="Joyce"
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
              <p className="project-detail-description">
                {description}
              </p>
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
                    href="https://www.instagram.com/joyceforbigboys/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="project-detail-link"
                  >
                    Instagram
                  </a>
                  <a 
                    href="https://www.joyceforbigboys.com/" 
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

        <div className="project-detail-page project-detail-page-2 joyce-page-2">
          <div className="beaulife-grid-layout">
            <div className="joyce-page-2-left">
              <div className="joyce-page-2-top">
                <div className="joyce-page-2-photo">
                  <img src="/images/Joyce/Joyce2.jpg" alt="Joyce" />
                </div>
              </div>
              <div className="joyce-page-2-bottom">
                <div className="joyce-page-2-photo">
                  <img src="/images/Joyce/Joyce3.jpg" alt="Joyce" />
                </div>
              </div>
            </div>
            <div className="beaulife-photo-item">
              <img src="/images/Joyce/Joyce6.jpg" alt="Joyce" />
            </div>
            <div className="beaulife-photo-item">
              <img src="/images/Joyce/Joyce4.jpg" alt="Joyce" />
            </div>
          </div>
        </div>

        <div className="project-detail-page project-detail-page-3 joyce-page-3">
          <div className="joyce-page-3-photo">
            <img src="/images/Joyce/Joyce5.jpg" alt="Joyce" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default JoyceDetail;

