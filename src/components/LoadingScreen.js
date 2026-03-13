import React, { useState, useEffect, useRef } from 'react';
import './LoadingScreen.css';

const LoadingScreen = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [isFading, setIsFading] = useState(false);
  const screenRef = useRef(null);
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

    const handlePlay = () => setNeedPlayGesture(false);

    const handleLoadedMetadata = () => {
      video.setAttribute('poster', '');
    };

    const handleCanPlay = () => {
      video.playbackRate = 1.0;
      forcePlay(3);
    };

    video.addEventListener('play', handlePlay);
    video.addEventListener('loadedmetadata', handleLoadedMetadata);
    video.addEventListener('canplay', handleCanPlay);

    forcePlay();

    return () => {
      video.removeEventListener('play', handlePlay);
      video.removeEventListener('loadedmetadata', handleLoadedMetadata);
      video.removeEventListener('canplay', handleCanPlay);
    };
  }, []);

  useEffect(() => {
    const duration = 3000;
    const interval = 20;
    const increment = 100 / (duration / interval);
    let timeoutId = null;

    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setIsFading(true);
          timeoutId = setTimeout(() => {
            if (onComplete) onComplete();
          }, 500);
          return 100;
        }
        return Math.min(prev + increment, 100);
      });
    }, interval);

    return () => {
      clearInterval(timer);
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, [onComplete]);

  return (
    <div 
      ref={screenRef}
      className={`loading-screen ${isFading ? 'fade-out' : ''}`}
    >
      <div className="loading-video-wrapper" ref={wrapperRef}>
        <video 
          ref={videoRef}
          className="loading-video" 
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
        <div className="loading-overlay"></div>
      </div>
      {needPlayGesture && (
        <button
          type="button"
          className="loading-play-overlay"
          onClick={() => {
            const v = videoRef.current;
            if (v) {
              v.play();
              setNeedPlayGesture(false);
            }
          }}
          aria-label="Videoyu oynat"
        >
          <span className="loading-play-icon" aria-hidden="true" />
        </button>
      )}
      <div className="loading-content">
        <h1 className="loading-title">
          <span className="loading-line-1">Make Your Brand</span>
          <span className="loading-line-2">Impossible To Ignore.</span>
        </h1>
        <div className="loading-progress-container">
          <div 
            className="loading-progress-bar" 
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;

