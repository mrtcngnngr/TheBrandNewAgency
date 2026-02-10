import React, { useState, useRef, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './TooltipCard.css';

const TooltipCard = ({ content, children, containerClassName = '' }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const tooltipRef = useRef(null);
  const triggerRef = useRef(null);
  const touchTimeoutRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(/iPhone|iPad|iPod|Android/i.test(navigator.userAgent) || window.innerWidth <= 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const calculatePosition = useCallback((clientX, clientY) => {
    const tooltip = tooltipRef.current;
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;

    if (!tooltip) {
      if (isMobile) {
        return { x: (viewportWidth - 300) / 2, y: clientY + 60 };
      }
      return { x: clientX + 20, y: clientY + 20 };
    }

    const tooltipRect = tooltip.getBoundingClientRect();
    let x, y;

    if (isMobile) {
      x = Math.max(20, (viewportWidth - tooltipRect.width) / 2);
      y = clientY + 50;
      
      if (y + tooltipRect.height > viewportHeight - 20) {
        y = Math.max(20, clientY - tooltipRect.height - 30);
      }
      
      if (y < 20) {
        y = (viewportHeight - tooltipRect.height) / 2;
      }
    } else {
      x = clientX + 20;
      y = clientY + 20;
    }

    if (x + tooltipRect.width > viewportWidth - 20) {
      x = isMobile ? Math.max(20, (viewportWidth - tooltipRect.width) / 2) : clientX - tooltipRect.width - 20;
    }

    if (y + tooltipRect.height > viewportHeight - 20) {
      y = Math.max(20, viewportHeight - tooltipRect.height - 20);
    }

    if (x < 20) {
      x = 20;
    }

    if (y < 20) {
      y = 20;
    }

    return { x, y };
  }, [isMobile]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!isVisible || isMobile) return;
      
      requestAnimationFrame(() => {
        const newPosition = calculatePosition(e.clientX, e.clientY);
        setPosition(newPosition);
      });
    };

    if (isVisible && !isMobile) {
      document.addEventListener('mousemove', handleMouseMove);
      return () => document.removeEventListener('mousemove', handleMouseMove);
    }
  }, [isVisible, isMobile, calculatePosition]);

  useEffect(() => {
    if (isVisible && isMobile) {
      const updatePosition = () => {
        if (tooltipRef.current && triggerRef.current) {
          const triggerRect = triggerRef.current.getBoundingClientRect();
          const newPosition = calculatePosition(
            triggerRect.left + triggerRect.width / 2,
            triggerRect.bottom + 30
          );
          setPosition(newPosition);
        }
      };
      
      const timeoutId = setTimeout(() => {
        requestAnimationFrame(updatePosition);
      }, 100);

      return () => clearTimeout(timeoutId);
    }
  }, [isVisible, isMobile, calculatePosition]);

  const handleMouseEnter = (e) => {
    if (isMobile) return;
    setIsVisible(true);
    const newPosition = calculatePosition(e.clientX || e.touches?.[0]?.clientX || 0, e.clientY || e.touches?.[0]?.clientY || 0);
    setPosition(newPosition);
  };

  const handleMouseLeave = () => {
    if (isMobile) return;
    setIsVisible(false);
  };

  useEffect(() => {
    return () => {
      if (touchTimeoutRef.current) {
        clearTimeout(touchTimeoutRef.current);
      }
    };
  }, []);

  const handleTouchStart = (e) => {
    if (!isMobile) return;
    if (!isVisible) {
      e.preventDefault();
      e.stopPropagation();
      const touch = e.touches[0];
      setIsVisible(true);
      
      if (touchTimeoutRef.current) {
        clearTimeout(touchTimeoutRef.current);
      }
      
      touchTimeoutRef.current = setTimeout(() => {
        if (tooltipRef.current && triggerRef.current) {
          const triggerRect = triggerRef.current.getBoundingClientRect();
          const newPosition = calculatePosition(
            triggerRect.left + triggerRect.width / 2,
            triggerRect.bottom + 30
          );
          setPosition(newPosition);
        } else {
          const newPosition = calculatePosition(touch.clientX, touch.clientY);
          setPosition(newPosition);
        }
      }, 200);
    }
  };

  const handleTouchEnd = (e) => {
    if (!isMobile) return;
    e.stopPropagation();
  };

  return (
    <div
      className={`tooltip-wrapper ${containerClassName}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      ref={triggerRef}
    >
      {children}
      <AnimatePresence>
        {isVisible && (
          <>
            {isMobile && (
              <motion.div
                className="tooltip-overlay"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                onTouchStart={(e) => {
                  const tooltipElement = tooltipRef.current;
                  if (tooltipElement && !tooltipElement.contains(e.target)) {
                    e.preventDefault();
                    e.stopPropagation();
                    setIsVisible(false);
                  }
                }}
                onTouchEnd={(e) => {
                  const tooltipElement = tooltipRef.current;
                  if (tooltipElement && !tooltipElement.contains(e.target)) {
                    e.preventDefault();
                    e.stopPropagation();
                    setIsVisible(false);
                  }
                }}
                onClick={(e) => {
                  const tooltipElement = tooltipRef.current;
                  if (tooltipElement && !tooltipElement.contains(e.target)) {
                    e.preventDefault();
                    e.stopPropagation();
                    setIsVisible(false);
                  }
                }}
                style={{
                  position: 'fixed',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  zIndex: 9999,
                  background: 'rgba(0, 0, 0, 0.3)',
                  backdropFilter: 'blur(2px)',
                  WebkitBackdropFilter: 'blur(2px)',
                  pointerEvents: 'auto',
                }}
              />
            )}
            <motion.div
              ref={tooltipRef}
              className="tooltip-card"
              initial={{ opacity: 0, scale: 0.8, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: 10 }}
              transition={{ duration: 0.2 }}
              onClick={(e) => {
                e.stopPropagation();
              }}
              onTouchStart={(e) => {
                e.stopPropagation();
              }}
              onTouchEnd={(e) => {
                e.stopPropagation();
              }}
              style={{
                position: 'fixed',
                left: `${position.x}px`,
                top: `${position.y}px`,
                zIndex: 10000,
                pointerEvents: 'auto',
              }}
            >
              {content}
              {isMobile && (
                <button
                  className="tooltip-close"
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    setIsVisible(false);
                  }}
                  onTouchEnd={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    setIsVisible(false);
                  }}
                  aria-label="Close tooltip"
                >
                  ×
                </button>
              )}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default TooltipCard;

