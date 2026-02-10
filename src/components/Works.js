import React, { useState, useRef, memo, useEffect, useCallback, useMemo, startTransition, useDeferredValue } from 'react';
import './Works.css';

const projects = [
  {
    id: 1,
    title: 'Joyce',
    categories: ['Sosyal Medya Yönetimi', 'Dijital Pazarlama', 'Prodüksiyon'],
    image: '/images/WorksImages/JoyceWorks.jpg',
    gradient: 'linear-gradient(135deg, #1e3c72 0%, #2a5298 50%, #4a7bc9 100%)'
  },
  {
    id: 2,
    title: 'Joyce Teknoloji',
    categories: ['Sosyal Medya Yönetimi', 'Dijital Pazarlama', 'Prodüksiyon'],
    image: '/images/WorksImages/JoyceTeknolojiWorks.jpg',
    gradient: 'linear-gradient(135deg, #1e3c72 0%, #2a5298 50%, #4a7bc9 100%)'
  },
  {
    id: 3,
    title: 'TozzBike & 90',
    categories: ['Sosyal Medya Yönetimi', 'Dijital Pazarlama', 'Prodüksiyon'],
    image: '/images/WorksImages/TozzBikeWorks.jpg',
    gradient: 'linear-gradient(135deg, #2d3436 0%, #636e72 50%, #2d3436 100%)'
  },
  {
    id: 4,
    title: 'Beaulife Club',
    categories: ['Sosyal Medya Yönetimi', 'Dijital Pazarlama', 'Prodüksiyon'],
    image: '/images/WorksImages/BeaulifeClubWorks.jpg',
    gradient: 'linear-gradient(135deg, #d4a574 0%, #e8c5a0 50%, #f5d9b8 100%)'
  },
  {
    id: 5,
    title: 'Turmotsan',
    categories: ['Sosyal Medya Yönetimi', 'Dijital Pazarlama', 'Prodüksiyon'],
    image: '/images/WorksImages/TurmotsanWorks.jpg',
    gradient: 'linear-gradient(135deg, #2c3e50 0%, #34495e 50%, #4a5f7a 100%)'
  },
  {
    id: 6,
    title: 'Yume Boulangerie',
    categories: ['Sosyal Medya Yönetimi', 'Dijital Pazarlama', 'Prodüksiyon'],
    image: '/images/WorksImages/YumeBoulangerieWorks.jpg',
    gradient: 'linear-gradient(135deg, #8b6f47 0%, #a67c52 50%, #c49b6a 100%)'
  },
  {
    id: 7,
    title: 'Allshape Clinic',
    categories: ['Sosyal Medya Yönetimi', 'Dijital Pazarlama', 'Prodüksiyon'],
    image: '/images/WorksImages/AllshapeWorks.jpg',
    gradient: 'linear-gradient(135deg, #6c5ce7 0%, #a29bfe 50%, #c8c4ff 100%)'
  },
  {
    id: 8,
    title: 'Valens Caravan',
    categories: ['Sosyal Medya Yönetimi', 'Dijital Pazarlama', 'Prodüksiyon'],
    image: '/images/WorksImages/ValensWorks.jpg',
    gradient: 'linear-gradient(135deg, #8b7355 0%, #c4a574 50%, #d4b896 75%, #8b7355 100%)'
  },
  {
    id: 9,
    title: 'Yokote',
    categories: ['Sosyal Medya Yönetimi', 'Dijital Pazarlama', 'Prodüksiyon'],
    image: '/images/WorksImages/YokoteWorks.jpg',
    gradient: 'linear-gradient(135deg, #1a5a7a 0%, #2d8ab8 30%, #45b5c8 60%, #1a5a7a 100%)'
  },
  {
    id: 10,
    title: 'Mithras M.C',
    categories: ['Sosyal Medya Yönetimi', 'Dijital Pazarlama', 'Prodüksiyon'],
    image: '/images/WorksImages/MithrasWorks.jpg',
    gradient: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)'
  },
  {
    id: 11,
    title: 'Reverie Night Club',
    categories: ['Sosyal Medya Yönetimi', 'Dijital Pazarlama', 'Prodüksiyon'],
    image: '/images/WorksImages/ReverieWorks.jpg',
    gradient: 'linear-gradient(135deg, #2d3436 0%, #636e72 50%, #2d3436 100%)'
  }
];

const Works = () => {
  const [current, setCurrent] = useState(0);
  const deferredCurrent = useDeferredValue(current);
  const containerRef = useRef(null);

  const runTransition = useCallback((fn) => {
    requestAnimationFrame(() => {
      requestAnimationFrame(() => startTransition(fn));
    });
  }, []);

  const handleSlideClick = useCallback((index) => {
    runTransition(() => setCurrent(index));
  }, [runTransition]);

  const handlePrevious = useCallback(() => {
    runTransition(() => setCurrent((prev) => (prev === 0 ? projects.length - 1 : prev - 1)));
  }, [runTransition]);

  const handleNext = useCallback(() => {
    runTransition(() => setCurrent((prev) => (prev + 1) % projects.length));
  }, [runTransition]);

  const visibleIndices = useMemo(() => {
    const n = projects.length;
    return [
      (deferredCurrent - 1 + n) % n,
      deferredCurrent,
      (deferredCurrent + 1) % n,
      (deferredCurrent + 2) % n
    ];
  }, [deferredCurrent]);

  const preloadAheadIndices = useMemo(() => {
    const n = projects.length;
    return [(deferredCurrent + 3) % n];
  }, [deferredCurrent]);

  useEffect(() => {
    const scheduleDecode = (img, priority = false) => {
      if (!img.decode) return;
      const run = () => { img.decode().catch(() => {}); };
      if (typeof requestIdleCallback !== 'undefined') {
        requestIdleCallback(run, { timeout: priority ? 150 : 2500 });
      } else {
        setTimeout(run, priority ? 50 : 100);
      }
    };

    projects.forEach((p, i) => {
      const img = new Image();
      img.onload = () => {
        scheduleDecode(img, i < 5);
      };
      img.src = p.image;
    });
  }, []);

  return (
    <section className="works">
      <div className="carousel-container" ref={containerRef}>
        <div className="works-preload-imgs" aria-hidden="true">
          {preloadAheadIndices.map((index) => (
            <img
              key={projects[index].id}
              src={projects[index].image}
              alt=""
              loading="eager"
              fetchPriority="high"
            />
          ))}
        </div>
        <div className="carousel-slides">
          {visibleIndices.map((index) => (
            <Slide
              key={projects[index].id}
              slide={projects[index]}
              index={index}
              current={deferredCurrent}
              total={projects.length}
              handleSlideClick={handleSlideClick}
            />
          ))}
        </div>
        
        <div className="carousel-controls">
          <button 
            className="carousel-control-btn carousel-prev"
            onClick={handlePrevious}
            aria-label="Previous slide"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="control-icon"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 19.5L8.25 12l7.5-7.5"
              />
            </svg>
          </button>
          
          <button 
            className="carousel-control-btn carousel-next"
            onClick={handleNext}
            aria-label="Next slide"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="control-icon"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.25 4.5l7.5 7.5-7.5 7.5"
              />
            </svg>
          </button>
        </div>

        <div className="carousel-pagination">
          {projects.map((_, index) => (
            <button
              key={index}
              className={`carousel-dot ${index === deferredCurrent ? 'active' : ''}`}
              onClick={() => handleSlideClick(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

const Slide = memo(({ slide, index, current, total, handleSlideClick }) => {
  const offset = (index - current + total) % total;
  const isActive = offset === 0;
  const isPreview = offset === 1;
  const isPreload = offset === 2;
  const isPrev = offset === total - 1;
  const imgRef = useRef(null);

  const onImgLoad = useCallback(() => {
    const img = imgRef.current;
    if (!img?.decode || (!isPreview && !isPreload)) return;
    if (typeof requestIdleCallback !== 'undefined') {
      requestIdleCallback(() => { img.decode().catch(() => {}); }, { timeout: 300 });
    } else {
      setTimeout(() => { img.decode?.().catch(() => {}); }, 50);
    }
  }, [isPreview, isPreload]);

  const projectSlug = slide.title.toLowerCase().replace(/\s+/g, '-').replace(/'/g, '').replace(/\./g, '').replace(/&/g, '').replace(/-+/g, '-');

  return (
    <div
      className={`carousel-slide ${isActive ? 'active' : ''} ${isPreview ? 'preview' : ''} ${isPreload ? 'preload' : ''} ${isPrev ? 'prev' : ''}`}
      data-project={projectSlug}
      style={{
        zIndex: isActive ? 1000 : isPreview ? 10 : isPreload ? 5 : 1,
        pointerEvents: isActive || isPreview ? 'auto' : 'none'
      }}
      tabIndex={-1}
      onClick={() => isPreview && handleSlideClick(index)}
    >
      <div className="slide-background" style={{ background: slide.gradient }}>
        <img
          ref={imgRef}
          src={slide.image}
          alt={`${slide.title} proje görseli`}
          loading="eager"
          decoding="async"
          fetchPriority={isActive || isPreview || isPreload ? 'high' : 'low'}
          onLoad={onImgLoad}
          tabIndex={-1}
        />
      </div>

      {isActive && (
        <div className="slide-content">
          <h2 className="slide-title">{slide.title}</h2>
          <div className="slide-categories" data-category-count={slide.categories.length}>
            {slide.categories.map((cat, idx) => (
              <span key={`${slide.id}-${idx}`} className="slide-category">{cat}</span>
            ))}
          </div>
          <a
            href={`#${projectSlug}`}
            className="slide-project-link"
            onClick={(e) => {
              e.stopPropagation();
              window.location.hash = `#${projectSlug}`;
            }}
            aria-label={`${slide.title} proje detaylarına git`}
          >
            Detaylı Bilgi<span className="arrow-icon" aria-hidden="true">→</span>
          </a>
        </div>
      )}
    </div>
  );
});

export default Works;

