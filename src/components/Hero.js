import React, { useRef, useEffect, useState } from 'react';
import './Hero.css';

const Hero = () => {
  const videoRef = useRef(null);
  const wrapperRef = useRef(null);
  const [needPlayGesture, setNeedPlayGesture] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.setAttribute('playsinline', 'true');
    video.setAttribute('webkit-playsinline', 'true');

    const forcePlay = (retriesLeft = 4) => {
      const p = video.play();
      if (p && typeof p.then === 'function') {
        p.then(() => setNeedPlayGesture(false)).catch(() => {
          if (retriesLeft > 0) {
            setTimeout(() => forcePlay(retriesLeft - 1), 400);
          } else {
            setNeedPlayGesture(true);
          }
        });
      }
    };

    const handleVideoEnd = () => {
      video.pause();
      if (wrapperRef.current) wrapperRef.current.classList.add('video-ended');
    };

    const handlePlay = () => setNeedPlayGesture(false);

    const handleLoadedMetadata = () => {
      video.setAttribute('poster', '');
    };

    const handleCanPlay = () => {
      video.playbackRate = 1.0;
      forcePlay(3);
    };

    video.addEventListener('ended', handleVideoEnd);
    video.addEventListener('play', handlePlay);
    video.addEventListener('loadedmetadata', handleLoadedMetadata);
    video.addEventListener('canplay', handleCanPlay);

    forcePlay();

    return () => {
      video.removeEventListener('ended', handleVideoEnd);
      video.removeEventListener('play', handlePlay);
      video.removeEventListener('loadedmetadata', handleLoadedMetadata);
      video.removeEventListener('canplay', handleCanPlay);
    };
  }, []);

  const handlePlayClick = () => {
    const video = videoRef.current;
    if (video && needPlayGesture) {
      video.play();
      setNeedPlayGesture(false);
    }
  };

  return (
    <section className="hero page-first-section" id="home">
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
      {needPlayGesture && (
        <button
          type="button"
          className="hero-play-overlay"
          onClick={handlePlayClick}
          aria-label="Videoyu oynat"
        >
          <span className="hero-play-icon" aria-hidden="true" />
        </button>
      )}
      <div className="hero-content">
        <h1 className="hero-title">
          <span className="title-line-1">Make Your Brand</span>
          <span className="title-line-2">Impossible To Ignore.</span>
        </h1>
      </div>
    </section>
  );
};

export default Hero;

