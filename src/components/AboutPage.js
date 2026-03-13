import React, { useEffect, useRef } from 'react';
import './AboutPage.css';

const AboutPage = () => {
  const containerRef = useRef(null);
  const rightRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    let rafId = null;
    let ro = null;

    const fitAboutText = () => {
      const container = containerRef.current;
      const right = rightRef.current;
      const content = contentRef.current;
      if (!container || !right || !content) return;

      // Only apply on desktop where layout is constrained to viewport height.
      if (window.innerWidth < 1025) {
        content.style.removeProperty('--about-text-size');
        return;
      }

      const availableHeight = right.clientHeight;
      if (!availableHeight) return;

      const minPx = 12.5;
      const maxPx = window.innerHeight >= 900 ? 18 : 16.5;

      let low = minPx;
      let high = maxPx;
      let best = minPx;

      // Keep intent: readable line height, but fit the column.
      content.style.setProperty('--about-text-line-height', '1.7');

      while (high - low > 0.1) {
        const mid = (low + high) / 2;
        content.style.setProperty('--about-text-size', `${mid}px`);

        if (content.scrollHeight <= availableHeight) {
          best = mid;
          low = mid;
        } else {
          high = mid;
        }
      }

      content.style.setProperty('--about-text-size', `${best}px`);
    };

    const scheduleFit = () => {
      if (rafId) cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(() => {
        rafId = requestAnimationFrame(fitAboutText);
      });
    };

    scheduleFit();
    window.addEventListener('resize', scheduleFit);
    window.addEventListener('orientationchange', scheduleFit);

    if ('ResizeObserver' in window) {
      ro = new ResizeObserver(scheduleFit);
      if (containerRef.current) ro.observe(containerRef.current);
      if (rightRef.current) ro.observe(rightRef.current);
    }

    return () => {
      if (rafId) cancelAnimationFrame(rafId);
      if (ro) ro.disconnect();
      window.removeEventListener('resize', scheduleFit);
      window.removeEventListener('orientationchange', scheduleFit);
    };
  }, []);

  return (
    <section className="about-page" id="about-us">
      <div className="about-page-bg" aria-hidden="true"></div>
      <div className="noise-overlay" aria-hidden="true"></div>
      
      <div className="about-page-container" ref={containerRef}>
        <div className="about-page-left">
          <h2 className="about-page-headline">Markalar İçin Kurulan Dijital Sistemler</h2>
        </div>

        <div className="about-page-right" ref={rightRef}>
          <div className="about-page-content" ref={contentRef}>
            <p className="about-page-text">
              The Brand New Agency, markaların dijital dünyadaki varlığını tasarım, içerik ve pazarlama ekseninde ele alan sosyal medya odaklı bir yaratıcı ajanstır. Yaratıcılığı yalnızca estetik bir yaklaşım olarak değil; strateji, görsel sistemler ve ölçülebilir uygulamalarla birlikte ele alarak markalar için işleyen bir iletişim yapısı kurar.
            </p>
            <p className="about-page-text">
              Her projeye net hedefler ve somut çıktılarla yaklaşır. Tasarım, içerik üretimi ve pazarlama süreçlerinin birbiriyle uyum içinde ilerlemesi gerektiğini esas alır. Bu yaklaşım, markalar için yalnızca dikkat çeken değil, sürdürülebilir ve tutarlı bir dijital görünürlük oluşturur.
            </p>
            <p className="about-page-text">
              TBNA’da sosyal medya tek başına bir mecra olarak değil; markanın konumlandırmasını, algısını ve büyüme potansiyelini destekleyen stratejik bir alan olarak değerlendirilir. İçerik dili, görsel kimlik ve kampanya kurguları bu bütünlük içinde şekillenir.
            </p>
            <p className="about-page-text">
              Özellikle hizmet sektöründeki markalarla çalışırken, yaratıcı üretimi gerçek ihtiyaçlara ve ölçülebilir hedeflere bağlayan bir yaklaşım benimsenir. Böylece markaların yalnızca bugünün dijital gerekliliklerine uyum sağlaması değil, uzun vadeli iletişim gücünü artırması hedeflenir.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPage;

