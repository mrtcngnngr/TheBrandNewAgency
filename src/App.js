import React, { useState, useEffect, Suspense, lazy, useCallback } from 'react';
import './App.css';
import Header from './components/Header';
import ErrorBoundary from './components/ErrorBoundary';
import LoadingScreen from './components/LoadingScreen';

const PROJECT_SLUGS = [
  'joyce', 'joyce-teknoloji', 'tozzbike-90', 'beaulife-club', 'beaulife',
  'turmotsan', 'yume-boulangerie', 'allshape-clinic', 'valens-caravan',
  'yokote', 'mithras-mc', 'reverie-night-club'
];

const ROUTE_SLUGS = ['works', 'services', 'contact', 'about-us', 'schedule', 'home'];

const Hero = lazy(() => import('./components/Hero'));
const Works = lazy(() => import('./components/Works'));
const Services = lazy(() => import('./components/Services'));
const About = lazy(() => import('./components/About'));
const AboutPage = lazy(() => import('./components/AboutPage'));
const Schedule = lazy(() => import('./components/Schedule'));
const JoyceDetail = lazy(() => import('./components/JoyceDetail'));
const JoyceTeknolojiDetail = lazy(() => import('./components/JoyceTeknolojiDetail'));
const TozzBike90Detail = lazy(() => import('./components/TozzBike90Detail'));
const BeaulifeClubDetail = lazy(() => import('./components/BeaulifeClubDetail'));
const BeaulifeDetail = lazy(() => import('./components/BeaulifeDetail'));
const TurmotsanDetail = lazy(() => import('./components/TurmotsanDetail'));
const YumeBoulangerieDetail = lazy(() => import('./components/YumeBoulangerieDetail'));
const AllshapeClinicDetail = lazy(() => import('./components/AllshapeClinicDetail'));
const ValensCaravanDetail = lazy(() => import('./components/ValensCaravanDetail'));
const YokoteDetail = lazy(() => import('./components/YokoteDetail'));
const MithrasMCDetail = lazy(() => import('./components/MithrasMCDetail'));
const ReverieNightClubDetail = lazy(() => import('./components/ReverieNightClubDetail'));

const loadingFallbackStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  minHeight: '100vh',
  fontFamily: 'Satoshi-Regular, sans-serif'
};

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState('home');

  const handleLoadingComplete = useCallback(() => {
    setIsLoading(false);
  }, []);

  useEffect(() => {
    const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
    const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
    
    if (isSafari || isIOS) {
      document.documentElement.classList.add('is-safari');
      document.body.classList.add('is-safari');
      
      const setVH = () => {
        const vh = window.innerHeight * 0.01;
        document.documentElement.style.setProperty('--vh', `${vh}px`);
      };
      
      setVH();
      window.addEventListener('resize', setVH);
      window.addEventListener('orientationchange', setVH);
      
      return () => {
        window.removeEventListener('resize', setVH);
        window.removeEventListener('orientationchange', setVH);
      };
    }
  }, []);

  useEffect(() => {
    const handleHashChange = () => {
      const hash = (window.location.hash.replace('#', '') || 'home').toLowerCase();
      const page = PROJECT_SLUGS.includes(hash) || ROUTE_SLUGS.includes(hash) ? hash : 'home';
      setCurrentPage(page);
      document.body.className = PROJECT_SLUGS.includes(page) ? 'page-project-detail' : `page-${page}`;
      window.scrollTo(0, 0);
    };
    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  useEffect(() => {
    if (!PROJECT_SLUGS.includes(currentPage)) return undefined;

    let rafId = null;
    let ro = null;

    const fitProjectDescription = () => {
      const page = document.querySelector('.project-detail-page-1');
      const descSection = page?.querySelector('.project-detail-description-section');
      const desc = page?.querySelector('.project-detail-description');
      if (!descSection || !desc) return;

      if (window.innerWidth < 1025) {
        desc.style.fontSize = '';
        desc.style.lineHeight = '';
        return;
      }

      const availableHeight = descSection.clientHeight;
      if (!availableHeight) return;

      const minPx = 10.5;
      const maxPx = window.innerHeight >= 900 ? 16 : 14.5;
      let low = minPx;
      let high = maxPx;
      let best = minPx;

      desc.style.lineHeight = '1.5';

      while (high - low > 0.1) {
        const mid = (low + high) / 2;
        desc.style.fontSize = `${mid}px`;

        if (desc.scrollHeight <= availableHeight) {
          best = mid;
          low = mid;
        } else {
          high = mid;
        }
      }

      desc.style.fontSize = `${best}px`;
    };

    const scheduleFit = () => {
      if (rafId) cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(() => {
        rafId = requestAnimationFrame(fitProjectDescription);
      });
    };

    scheduleFit();

    window.addEventListener('resize', scheduleFit);
    window.addEventListener('orientationchange', scheduleFit);

    if ('ResizeObserver' in window) {
      ro = new ResizeObserver(scheduleFit);
      const page = document.querySelector('.project-detail-page-1');
      const right = page?.querySelector('.project-detail-right');
      const meta = page?.querySelector('.project-detail-meta-section');
      if (page) ro.observe(page);
      if (right) ro.observe(right);
      if (meta) ro.observe(meta);
    }

    return () => {
      if (rafId) cancelAnimationFrame(rafId);
      if (ro) ro.disconnect();
      window.removeEventListener('resize', scheduleFit);
      window.removeEventListener('orientationchange', scheduleFit);
    };
  }, [currentPage]);

  return (
    <ErrorBoundary>
    <div className="App">
        {isLoading && <LoadingScreen onComplete={handleLoadingComplete} />}
        {!isLoading && (
          <>
            <Header />
            <Suspense fallback={<div style={loadingFallbackStyle} />}>
      {currentPage === 'works' && <Works />}
      {currentPage === 'services' && <Services />}
              {currentPage === 'contact' && <About />}
              {currentPage === 'about-us' && <AboutPage />}
              {currentPage === 'schedule' && <Schedule />}
      {currentPage === 'joyce' && <JoyceDetail />}
      {currentPage === 'joyce-teknoloji' && <JoyceTeknolojiDetail />}
      {currentPage === 'tozzbike-90' && <TozzBike90Detail />}
      {currentPage === 'beaulife-club' && <BeaulifeClubDetail />}
      {currentPage === 'beaulife' && <BeaulifeDetail />}
      {currentPage === 'turmotsan' && <TurmotsanDetail />}
      {currentPage === 'yume-boulangerie' && <YumeBoulangerieDetail />}
      {currentPage === 'allshape-clinic' && <AllshapeClinicDetail />}
      {currentPage === 'valens-caravan' && <ValensCaravanDetail />}
      {currentPage === 'yokote' && <YokoteDetail />}
      {currentPage === 'mithras-mc' && <MithrasMCDetail />}
      {currentPage === 'reverie-night-club' && <ReverieNightClubDetail />}
      {currentPage === 'home' && <Hero />}
            </Suspense>
          </>
        )}
    </div>
    </ErrorBoundary>
  );
}

export default App;
