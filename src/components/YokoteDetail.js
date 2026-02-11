import React, { useEffect } from 'react';
import './ProjectDetail.css';

const YokoteDetail = () => {
  useEffect(() => {
    document.body.className = 'page-project-detail';
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const description = `Yokote Motors, elektrik motorları alanında yerli üretimi ve teknolojik bağımsızlığı merkeze alan bir markadır. Proje sürecinde, markanın dijital dünyadaki iletişiminin doğru bir çerçeveye oturtulması ve sosyal medyada tutarlı bir marka dili oluşturulması hedeflendi.
Marka ile yürütülen çalışmalarda; Yokote'nin vizyonu, teknik yetkinliği ve sektörel konumu yakından ele alındı. Mühendislik odaklı yapının dijital iletişimde doğru temsil edilmesi, sürecin temel önceliği oldu. Bu doğrultuda sosyal medya stratejisi, içerik dili ve görsel anlatım markanın karakteriyle uyumlu şekilde kurgulandı.
Sosyal medya yönetimi kapsamında; içerik planlaması, görsel yönlendirme ve dijital iletişim dili üzerinde çalışıldı. Teknik bilgiyi sade ve anlaşılır bir biçimde aktaran içerikler üretilerek, markanın yalnızca bir üretici değil, aynı zamanda teknoloji ve sürdürülebilirlik odağında düşünen bir yapı olduğu vurgulandı.
Yokote Motors'un dijital iletişim süreci, bu yaklaşım sayesinde daha tutarlı, güçlü ve güven veren bir yapıya kavuştu. Sosyal medya, markanın mühendislik gücünü destekleyen stratejik bir iletişim alanı olarak konumlandırıldı.`;

  return (
    <section className="project-detail">
      <div className="project-detail-container">
        <div className="project-detail-page project-detail-page-1 yokote-page-1">
          <div className="project-detail-header">
            <span className="project-detail-client-label">Client</span>
            <h1 className="project-detail-title">Yokote</h1>
          </div>

          <div className="project-detail-left">
            <div className="project-detail-image-wrapper">
              <img
                src="/images/Yokote/Yokote1.jpg"
                alt="Yokote"
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
                    href="https://www.instagram.com/yokotemotors/"
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

        <div className="project-detail-page project-detail-page-2 yokote-page-2">
          <div className="yokote-page-2-photo">
            <img src="/images/Yokote/Yokote2.jpg" alt="Yokote" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default YokoteDetail;

