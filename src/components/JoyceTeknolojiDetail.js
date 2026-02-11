import React, { useEffect } from 'react';
import './ProjectDetail.css';

const JoyceTeknolojiDetail = () => {
  useEffect(() => {
    document.body.className = 'page-project-detail';
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const description = `Joyce Teknoloji, elektrikli araçlar, mikromobilite ve ileri mühendislik teknolojileri alanında yerli üretim ve inovasyonu merkeze alan bir teknoloji markasıdır. Proje kapsamında, markanın mühendislik gücünü ve vizyonunu dijital dünyada doğru ve anlaşılır bir iletişim diliyle aktarmak hedeflendi.
Joyce Teknoloji ile yürütülen çalışmalarda, markanın teknik derinliği ve sürdürülebilirlik odağı ön planda tutuldu. Elektrik motorları, batarya sistemleri ve otonom sürüş teknolojileri gibi karmaşık konuların; sade, güven veren ve tutarlı bir dijital anlatımla sunulması sürecin temel yaklaşımı oldu.
Sosyal medya ve dijital pazarlama tarafında; içerik stratejisi, yayın dili ve kampanya kurguları markanın mühendislik karakterine uygun şekilde ele alındı. Teknik bilgi, erişilebilir ve anlaşılır bir dile dönüştürülerek, Joyce Teknoloji'nin yalnızca teknoloji üreten değil, vizyon ortaya koyan bir marka olarak konumlanması desteklendi.
Dijital iletişim süreci boyunca; web sitesi ve sosyal medya kanallarında markanın uzmanlığını yansıtan içerikler üretildi, kampanya ve tanıtım çalışmalarıyla marka bilinirliği güçlendirildi. Joyce Teknoloji, bu çalışmalar sayesinde dijital dünyada daha net, güvenilir ve sürdürülebilir bir iletişim yapısına kavuştu.`;

  return (
    <section className="project-detail">
      <div className="project-detail-container">
        <div className="project-detail-page project-detail-page-1 joyce-teknoloji-page-1">
          <div className="project-detail-header">
            <span className="project-detail-client-label">Client</span>
            <h1 className="project-detail-title">Joyce Teknoloji</h1>
          </div>
          
          <div className="project-detail-left">
            <div className="project-detail-image-wrapper">
              <img 
                src="/images/JoyceTeknoloji/JoyceTeknoloji1-2.jpg" 
                alt="Joyce Teknoloji"
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
                    href="https://www.instagram.com/joyceteknoloji/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="project-detail-link"
                  >
                    Instagram
                  </a>
                  <a 
                    href="https://www.joyceteknoloji.com/" 
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
                  <img src="/images/JoyceTeknoloji/JoyceTeknoloji2.jpg" alt="Joyce Teknoloji" />
                </div>
              </div>
              <div className="joyce-page-2-bottom">
                <div className="joyce-page-2-photo">
                  <img src="/images/JoyceTeknoloji/JoyceTeknoloji3.jpg" alt="Joyce Teknoloji" />
                </div>
              </div>
            </div>
            <div className="beaulife-photo-item joyce-teknoloji-center-item">
              <img src="/images/JoyceTeknoloji/JoyceTeknoloji4.jpg" alt="Joyce Teknoloji" />
            </div>
            <div className="beaulife-photo-item">
              <img src="/images/JoyceTeknoloji/JoyceTeknoloji5.jpg" alt="Joyce Teknoloji" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JoyceTeknolojiDetail;

