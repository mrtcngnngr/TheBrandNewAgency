import React, { useEffect } from 'react';
import './ProjectDetail.css';

const TurmotsanDetail = () => {
  useEffect(() => {
    document.body.className = 'page-project-detail';
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const description = `Turmotsan Motors, endüstriyel motor teknolojileri alanında uzmanlaşmış, mühendislik temelli bir üretim ve bilgi markasıdır. Proje kapsamında, markanın teknik yetkinliğini ve sektörel birikimini dijital dünyada net, güvenilir ve profesyonel bir iletişim yapısıyla temsil etmek hedeflendi.

Turmotsan için yürütülen çalışmalarda, markanın yalnızca üretim yapan bir firma değil; bilgi üreten, eğiten ve sektöre yön veren bir yapı olduğu yaklaşımı benimsendi. Bu doğrultuda marka kimliği, iletişim dili ve dijital varlıklar, mühendislik disiplinini yansıtan sade ve güçlü bir sistem üzerine kuruldu.

Marka kimliği sürecinde; Turmotsan'ın teknik karakterini destekleyen, kurumsal ve zamansız bir görsel dil oluşturuldu. Bu dil, web sitesi ve tüm dijital mecralarda tutarlı şekilde uygulandı. Web sitesi, kullanıcıyı yormayan, bilgiye hızlı erişim sağlayan ve markanın uzmanlığını ön plana çıkaran bir yapı ile tasarlandı.

Sosyal medya ve içerik üretim sürecinde ise, motor teknolojileri ve mühendislik bilgisi sadeleştirilerek erişilebilir bir anlatı haline getirildi. Atölye ortamı, üretim süreçleri ve teknik eğitimler; markanın uzmanlığını görünür kılan içerikler olarak konumlandırıldı.
Fotoğraf ve video prodüksiyonları, gerçek üretim ortamlarını ve teknik gücü doğrudan yansıtacak şekilde kurgulandı.

Ortaya çıkan bütüncül yapı sayesinde Turmotsan Motors, dijital dünyada yalnızca ürünlerini sergileyen değil; bilgi, deneyim ve güven sunan bir mühendislik markası olarak konumlandı. Marka iletişimi, sektördeki profesyonellere hitap eden net ve güçlü bir çizgiye oturtuldu.`;

  return (
    <section className="project-detail">
      <div className="project-detail-container">
        <div className="project-detail-page project-detail-page-1 turmotsan-page-1">
          <div className="project-detail-header">
            <span className="project-detail-client-label">Client</span>
            <h1 className="project-detail-title">Turmotsan</h1>
          </div>

          <div className="project-detail-left">
            <div className="project-detail-image-wrapper">
              <img
                src="/images/Turmotsan/Turmotsan1.jpg"
                alt="Turmotsan"
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
                  <span className="project-detail-meta-copyright">©2024</span>
                  <span className="project-detail-meta-place">Istanbul, Türkiye</span>
                </div>
                <div className="project-detail-meta-right">
                  <a
                    href="https://www.instagram.com/turmotsanmotors/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-detail-link"
                  >
                    Instagram
                  </a>
                  <a
                    href="https://www.turmotsan.com/"
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

        <div className="project-detail-page project-detail-page-2 turmotsan-page-2">
          <div className="turmotsan-grid-layout">
            <div className="turmotsan-photo-item">
              <img src="/images/Turmotsan/Turmotsan2.jpg" alt="Turmotsan" />
            </div>
            <div className="turmotsan-photo-item">
              <img src="/images/Turmotsan/Turmotsan3.jpg" alt="Turmotsan" />
            </div>
            <div className="turmotsan-photo-item">
              <img src="/images/Turmotsan/Turmotsan4.jpg" alt="Turmotsan" />
            </div>
          </div>
        </div>

        <div className="project-detail-page project-detail-page-3 turmotsan-page-3">
          <div className="turmotsan-page-3-grid">
            <div className="turmotsan-page-3-item">
              <img src="/images/Turmotsan/Turmotsanst1.jpg" alt="Turmotsan" />
            </div>
            <div className="turmotsan-page-3-item">
              <img src="/images/Turmotsan/Turmotsanst2.jpg" alt="Turmotsan" />
            </div>
            <div className="turmotsan-page-3-item">
              <img src="/images/Turmotsan/Turmotsanst3.jpg" alt="Turmotsan" />
            </div>
            <div className="turmotsan-page-3-item">
              <img src="/images/Turmotsan/Turmotsanst4.jpg" alt="Turmotsan" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TurmotsanDetail;

