import React, { useState, useEffect, useRef } from 'react';
import './Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [currentPage, setCurrentPage] = useState('home');
  const menuRef = useRef(null);
  const mobileMenuRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target) && 
          !event.target.closest('.mobile-menu-toggle')) {
        setIsMobileMenuOpen(false);
      }
    };

    if (isMenuOpen || isMobileMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      if (isMobileMenuOpen) {
        document.body.style.overflow = 'hidden';
      } else {
        document.body.style.overflow = '';
      }
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.body.style.overflow = '';
    };
  }, [isMenuOpen, isMobileMenuOpen]);

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '') || 'home';
      setCurrentPage(hash);
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    
    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  useEffect(() => {
    const getScrollTop = () => {
      const se = document.scrollingElement;
      if (se) return se.scrollTop;
      return window.pageYOffset ?? document.documentElement.scrollTop ?? document.body.scrollTop ?? 0;
    };

    const projectDetailSlugs = [
      'yokote-motors', 'yokote', 'valens-karavan', 'valens-caravan', 'yume-boulangerie',
      'mithras-mc', 'reverie-night-club', 'joyce', 'joyce-teknoloji', 'joyce-90', 'tozzbike-90',
      'turmotsan', 'celestial-anatolia', 'beaulife-club', 'allshape', 'allshape-clinic'
    ];
    const isProjectPage = projectDetailSlugs.includes(currentPage);

    const attach = () => {
      const container = document.querySelector('.project-detail-container');
      if (container) {
        const onScroll = () => setIsScrolled(container.scrollTop > 6);
        container.addEventListener('scroll', onScroll, { passive: true });
        onScroll();
        return () => container.removeEventListener('scroll', onScroll);
      }
      const onWindowScroll = () => {
        const y = getScrollTop();
        if (y > 6) setIsScrolled(true);
        else if (y < 2) setIsScrolled(false);
      };
      onWindowScroll();
      window.addEventListener('scroll', onWindowScroll, { passive: true });
      window.addEventListener('touchmove', onWindowScroll, { passive: true });
      window.addEventListener('resize', onWindowScroll, { passive: true });
      return () => {
        window.removeEventListener('scroll', onWindowScroll);
        window.removeEventListener('touchmove', onWindowScroll);
        window.removeEventListener('resize', onWindowScroll);
      };
    };

    let cleanup = attach();
    if (isProjectPage) {
      const t = setTimeout(() => {
        if (cleanup) cleanup();
        cleanup = attach();
      }, 350);
      return () => {
        clearTimeout(t);
        if (cleanup) cleanup();
      };
    }
    return () => { if (cleanup) cleanup(); };
  }, [currentPage]);

  const handleMenuClick = (page) => {
    setIsMenuOpen(false);
    setIsMobileMenuOpen(false);
    window.location.hash = page;
  };

  const menuItems = (
    <>
      <a href="#home" className="dropdown-link" onClick={(e) => { e.preventDefault(); handleMenuClick('home'); }} aria-label="Ana Sayfa">
        Ana Sayfa<span className="arrow-icon" aria-hidden="true">→</span>
      </a>
      <a href="#works" className="dropdown-link" onClick={(e) => { e.preventDefault(); handleMenuClick('works'); }} aria-label="İşlerimiz">
        İşlerimiz<span className="arrow-icon" aria-hidden="true">→</span>
      </a>
      <a href="#services" className="dropdown-link" onClick={(e) => { e.preventDefault(); handleMenuClick('services'); }} aria-label="Hizmetlerimiz">
        Hizmetlerimiz<span className="arrow-icon" aria-hidden="true">→</span>
      </a>
      <a href="#about-us" className="dropdown-link" onClick={(e) => { e.preventDefault(); handleMenuClick('about-us'); }} aria-label="Hakkımızda">
        Hakkımızda<span className="arrow-icon" aria-hidden="true">→</span>
      </a>
      <div className="dropdown-divider"></div>
      <div className="social-links-container">
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="Instagram hesabımızı ziyaret edin">
          <span>Instagram</span>
          <span className="social-arrow" aria-hidden="true">↗</span>
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="LinkedIn sayfamızı ziyaret edin">
          <span>LinkedIn</span>
          <span className="social-arrow" aria-hidden="true">↗</span>
        </a>
        <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="TikTok hesabımızı ziyaret edin">
          <span>TikTok</span>
          <span className="social-arrow" aria-hidden="true">↗</span>
        </a>
      </div>
      <div className="dropdown-divider"></div>
      <a href="#contact" className="dropdown-cta" onClick={(e) => { e.preventDefault(); handleMenuClick('contact'); }} aria-label="İletişim sayfasına git">İletişim</a>
    </>
  );

  const projectDetailSlugs = [
    'yokote-motors',
    'yokote',
    'valens-karavan',
    'valens-caravan',
    'yume-boulangerie',
    'mithras-mc',
    'reverie-night-club',
    'joyce',
    'joyce-teknoloji',
    'joyce-90',
    'tozzbike-90',
    'turmotsan',
    'celestial-anatolia',
    'beaulife-club',
    'allshape',
    'allshape-clinic'
  ];
  
  const hash = window.location.hash.replace('#', '').toLowerCase();
  
  const isProjectDetail = projectDetailSlugs.includes(currentPage) || projectDetailSlugs.includes(hash);
  const isLightBackground = currentPage === 'contact' || isProjectDetail;
  const showBlur = isScrolled;
  const logoSrc = isLightBackground ? '/images/TBNA_Logo2.png' : '/images/TBNA_Logo1.png';

  const headerBlur = showBlur ? 'blur(14px) saturate(100%)' : 'none';

  return (
    <header 
      className={`header ${showBlur ? 'scrolled' : ''} ${isLightBackground || showBlur ? 'light-background' : ''}`}
      style={{
        backgroundColor: 'transparent',
        backdropFilter: headerBlur,
        WebkitBackdropFilter: headerBlur,
        boxShadow: 'none',
        transition: 'none'
      }}
    >
      <div className="header-container">
        <a 
          href="#home" 
          className="logo" 
          onClick={(e) => { e.preventDefault(); handleMenuClick('home'); }}
        >
          <img 
            src={logoSrc} 
            alt="TBNA Logo" 
            className="logo-image"
            draggable="false"
            style={{
              height: '70px',
              width: 'auto',
              objectFit: 'contain',
              display: 'block',
              margin: 0,
              padding: 0
            }}
            onError={() => {}}
          />
        </a>
        <div className="header-right">
          <div className="menu-wrapper desktop-menu" ref={menuRef}>
            <button 
              className={`menu-button ${isMenuOpen ? 'menu-open' : ''}`}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label={isMenuOpen ? 'Menüyü kapat' : 'Menüyü aç'}
              aria-expanded={isMenuOpen}
            >
              Menü
            </button>
            {isMenuOpen && (
              <div className="dropdown-menu">
                {menuItems}
              </div>
            )}
          </div>
          <button 
            className="cta-button desktop-cta"
            onClick={(e) => {
              e.preventDefault();
              window.location.hash = 'schedule';
            }}
            aria-label="Görüşme ayarlayın sayfasına git"
          >
            Görüşme Ayarlayın
          </button>
          
          <button 
            className={`mobile-menu-toggle ${isMobileMenuOpen ? 'active' : ''}`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
      
      <div 
        className={`mobile-menu-overlay ${isMobileMenuOpen ? 'open' : ''}`}
        onClick={() => setIsMobileMenuOpen(false)}
      ></div>
      
      <div 
        className={`mobile-menu-sidebar ${isMobileMenuOpen ? 'open' : ''}`}
        ref={mobileMenuRef}
      >
        <div className="mobile-menu-content">
          {menuItems}
        </div>
        <button 
          className="mobile-cta-button" 
          onClick={(e) => {
            e.preventDefault();
            setIsMobileMenuOpen(false);
            handleMenuClick('schedule');
          }}
        >
          Görüşme Ayarlayın
        </button>
      </div>
    </header>
  );
};

export default React.memo(Header);

