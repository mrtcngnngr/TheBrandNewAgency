import React, { useRef, useEffect } from 'react';
import './Hero.css';

const Hero = () => {
  const videoRef = useRef(null);
  const wrapperRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.setAttribute('playsinline', 'true');
    video.setAttribute('webkit-playsinline', 'true');

    const forcePlay = (retriesLeft = 4) => {
      const p = video.play();
      if (p && typeof p.then === 'function') {
        p.catch(() => {
          if (retriesLeft > 0) setTimeout(() => forcePlay(retriesLeft - 1), 400);
        });
      }
    };

    const handleVideoEnd = () => {
      video.pause();
      if (wrapperRef.current) wrapperRef.current.classList.add('video-ended');
    };

    const handleLoadedMetadata = () => {
      video.setAttribute('poster', '');
    };

    const handleCanPlay = () => {
      video.playbackRate = 1.0;
      forcePlay(3);
    };

    video.addEventListener('ended', handleVideoEnd);
    video.addEventListener('loadedmetadata', handleLoadedMetadata);
    video.addEventListener('canplay', handleCanPlay);

    forcePlay();

    return () => {
      video.removeEventListener('ended', handleVideoEnd);
      video.removeEventListener('loadedmetadata', handleLoadedMetadata);
      video.removeEventListener('canplay', handleCanPlay);
    };
  }, []);

  return (
    <section className="hero" id="home">
      <div className="hero-video-wrapper" ref={wrapperRef}>
        <video 
          ref={videoRef}
          className="hero-video" 
          autoPlay 
          muted 
          playsInline
          preload="auto"
          webkit-playsinline="true"
          aria-label="Brand transformation video"
        >
          <source src="/videos/Blu_Video.mp4" type="video/mp4" />
          Tarayıcınız video oynatmayı desteklemiyor.
        </video>
        <div className="hero-overlay"></div>
      </div>
      <div className="hero-content">
        <h1 className="hero-title">
          <span className="title-line-1">Transforming Brands</span>
          <span className="title-line-2">On All Fronts.</span>
        </h1>
      </div>
    </section>
  );
};

export default Hero;

