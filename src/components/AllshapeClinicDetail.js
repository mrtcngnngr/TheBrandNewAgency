import React, { useEffect } from 'react';
import './ProjectDetail.css';

const AllshapeClinicDetail = () => {
  useEffect(() => {
    document.body.className = 'page-project-detail';
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const description = `Allshape Clinic, estetik ve sağlık alanında kişiye özel çözümler sunan, güven ve profesyonellik odağında konumlanan bir kliniktir. Proje kapsamında, markanın belirlenen konumlandırmasının sosyal medya üzerinden doğru ve tutarlı bir iletişim diliyle yansıtılması hedeflendi.
Allshape Clinic ile yürütülen çalışmalarda, kliniğin estetik anlayışı ve hizmet yaklaşımı merkeze alındı. Marka konumlandırma sürecinde yapılan analizler ve belirlenen iletişim çerçevesi doğrultusunda, sosyal medya içerikleri güven veren, sade ve bilgilendirici bir yapı üzerine kurgulandı. Amaç, kliniğin uzmanlığını ön plana çıkarırken, estetik beklentileri abartıdan uzak bir dil ile aktarmaktı.
Sosyal medya yönetimi sürecinde; hizmet tanıtımları, bilgilendirici içerikler ve kampanya iletişimi dengeli bir içerik yapısı içerisinde ele alındı. Klinik hizmetlerin doğası gereği, içerik dili; doğal görünüm, profesyonel yaklaşım ve danışan güveni ekseninde şekillendirildi. Reels, post ve story içerikleri, markanın duruşunu destekleyecek şekilde planlandı.
Bu süreç sayesinde Allshape Clinic'in sosyal medya hesapları, yalnızca görsel paylaşım yapılan alanlar olmaktan çıkarak; kliniğin yaklaşımını, uzmanlığını ve hizmet anlayışını doğru şekilde yansıtan bir dijital iletişim kanalına dönüştü. Sosyal medya, markanın konumlandırmasını destekleyen tamamlayıcı bir mecra olarak ele alındı.`;

  return (
    <section className="project-detail">
      <div className="project-detail-container">
        <div className="project-detail-page project-detail-page-1 allshape-page-1">
          <div className="project-detail-header">
            <span className="project-detail-client-label">Client</span>
            <h1 className="project-detail-title">Allshape Clinic</h1>
          </div>

          <div className="project-detail-left">
            <div className="project-detail-image-wrapper">
              <img
                src="/images/AllshapeClinic/Allshape1.jpg"
                alt="Allshape Clinic"
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
                  <span className="project-detail-meta-copyright">©2024</span>
                  <span className="project-detail-meta-place">Istanbul, Türkiye</span>
                </div>
                <div className="project-detail-meta-right">
                  <a
                    href="https://www.instagram.com/allshapeclinic/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-detail-link"
                  >
                    Instagram
                  </a>
                  <a
                    href="https://www.allshapeclinic.com/"
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

        <div className="project-detail-page project-detail-page-2 beaulife-page-2">
          <div className="beaulife-grid-layout">
            <div className="beaulife-photo-item beaulife-photo-left">
              <img src="/images/AllshapeClinic/Allshape2.jpg" alt="Allshape Clinic" />
            </div>

            <div className="beaulife-photo-item beaulife-photo-center">
              <img src="/images/AllshapeClinic/Allshape1.jpg" alt="Allshape Clinic" />
            </div>

            <div className="beaulife-photo-item beaulife-photo-right">
              <img src="/images/AllshapeClinic/Allshape3.jpg" alt="Allshape Clinic" />
            </div>
          </div>
        </div>

        <div className="project-detail-page project-detail-page-3 allshape-page-3">
          <div className="allshape-page-3-photo">
            <img src="/images/AllshapeClinic/Allshapefull.jpg" alt="Allshape Clinic" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AllshapeClinicDetail;

