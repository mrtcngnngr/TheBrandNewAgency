import React, { useEffect } from 'react';
import './ProjectDetail.css';

const ReverieNightClubDetail = () => {
  useEffect(() => {
    document.body.className = 'page-project-detail';
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <section className="project-detail">
      <div className="project-detail-container">
        <div className="project-detail-page project-detail-page-1">
          <div className="project-detail-header">
            <span className="project-detail-client-label">Client</span>
            <h1 className="project-detail-title">Reverie Night Club</h1>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReverieNightClubDetail;

