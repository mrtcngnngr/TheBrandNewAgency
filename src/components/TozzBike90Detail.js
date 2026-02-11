import React, { useEffect } from 'react';
import './ProjectDetail.css';

const TozzBike90Detail = () => {
  useEffect(() => {
    document.body.className = 'page-project-detail';
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const servicesPlaceholder = 'Eklenecek.';

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
