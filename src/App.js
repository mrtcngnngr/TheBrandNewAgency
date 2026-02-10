import React, { useState, useEffect, Suspense, lazy } from 'react';
import './App.css';
import Header from './components/Header';
import ErrorBoundary from './components/ErrorBoundary';
import LoadingScreen from './components/LoadingScreen';

const Hero = lazy(() => import('./components/Hero'));
const Works = lazy(() => import('./components/Works'));
const Services = lazy(() => import('./components/Services'));
const About = lazy(() => import('./components/About'));
const AboutPage = lazy(() => import('./components/AboutPage'));
const Schedule = lazy(() => import('./components/Schedule'));
const ProjectDetail = lazy(() => import('./components/ProjectDetail'));

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

const LoadingFallback = () => (
  <div style={{
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '100vh',
    fontFamily: 'Satoshi-Regular, sans-serif'
  }}>
  </div>
);

if (!document.getElementById('spin-animation-style')) {
  const style = document.createElement('style');
  style.id = 'spin-animation-style';
  style.textContent = `
    @keyframes spin {
      to { transform: rotate(360deg); }
    }
  `;
  document.head.appendChild(style);
}

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState('home');

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
      const hash = window.location.hash.replace('#', '') || 'home';
      let page = 'home';
      
      const projectSlugs = [
        'joyce',
        'joyce-teknoloji',
        'tozzbike-90',
        'beaulife-club',
        'beaulife',
        'turmotsan',
        'yume-boulangerie',
        'allshape-clinic',
        'valens-caravan',
        'yokote',
        'mithras-mc',
        'reverie-night-club'
      ];
      
      if (projectSlugs.includes(hash)) {
        page = hash;
      } else if (hash === 'works' || hash === 'services' || hash === 'contact' || hash === 'about-us' || hash === 'schedule' || hash === 'home') {
        page = hash;
      }
      
      setCurrentPage(page);
      document.body.className = page.startsWith('project-detail') || projectSlugs.includes(page) ? 'page-project-detail' : `page-${page}`;
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  return (
    <ErrorBoundary>
    <div className="App">
        {isLoading && <LoadingScreen onComplete={handleLoadingComplete} />}
        {!isLoading && (
          <>
      <Header />
            <Suspense fallback={<LoadingFallback />}>
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
