import React, { useEffect } from 'react';
import './ProjectDetail.css';

const BeaulifeClubDetail = () => {
  useEffect(() => {
    document.body.className = 'page-project-detail';
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const servicesPlaceholder = 'Eklenecek.';

  return (
    <section className="project-detail">
      <div className="project-detail-container">
        <div className="project-detail-page project-detail-page-1 beaulife-page-1">
          <div className="project-detail-header">
            <span className="project-detail-client-label">Client</span>
            <h1 className="project-detail-title">Beaulife Club</h1>
          </div>

          <div className="project-detail-left">
            <div className="project-detail-image-wrapper">
              <img
                src="/images/BeaulifeClub/BeaulifeClub1.jpg"
                alt="Beaulife Club"
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
              <p className="project-detail-description">{servicesPlaceholder}</p>
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
                    href="https://www.instagram.com/beaulifeclub/"
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

        <div className="project-detail-page project-detail-page-2 beaulife-page-2">
          <div className="beaulife-grid-layout">
            <div className="beaulife-photo-item beaulife-photo-left">
              <img src="/images/BeaulifeClub/BeaulifeClub2.jpg" alt="Beaulife Club" />
            </div>

            <div className="beaulife-photo-item beaulife-photo-center">
              <img src="/images/BeaulifeClub/BeaulifeClub3.jpg" alt="Beaulife Club" />
            </div>

            <div className="beaulife-photo-item beaulife-photo-right">
              <img src="/images/BeaulifeClub/BeaulifeClub4.jpg" alt="Beaulife Club" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BeaulifeClubDetail;

