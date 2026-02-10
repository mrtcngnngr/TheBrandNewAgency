import React, { useState, useRef, useEffect } from 'react';
import './Services.css';

const services = [
  {
    name: 'Sosyal Medya Yönetimi',
    tooltip: (
      <div>
        <p><strong>Sosyal Medya Yönetimi</strong></p>
        <p>Markanın dijital kanallardaki günlük iletişimi planlı ve tutarlı bir yapıya oturtulur. İçerik planı ve yayın takvimi oluşturulur, görsel ve metinsel dil standartlaştırılır. Süreç; düzenli paylaşım, topluluk yönetimi ve performans takibiyle desteklenir.</p>
      </div>
    )
  },
  {
    name: 'Dijital Pazarlama ve Reklam',
    tooltip: (
      <div>
        <p><strong>Dijital Pazarlama ve Reklam</strong></p>
        <p>Marka hedefleri doğrultusunda reklam stratejileri kurgulanır ve dijital platformlarda uygulanır. Kampanya yapıları, hedef kitle ve bütçe doğrultusunda şekillendirilir; kreatif üretim ve optimizasyon süreçleri birlikte ele alınır. Amaç, görünürlüğü artırırken ölçülebilir sonuçlar elde etmektir.</p>
      </div>
    )
  },
  {
    name: 'Kreatif Prodüksiyon',
    tooltip: (
      <div>
        <p><strong>Kreatif Prodüksiyon</strong></p>
        <p>Fotoğraf, video ve dijital içerikler; kullanım alanı ve platform gereksinimleri göz önünde bulundurularak planlanır. İçerik üretim süreci, marka kimliğiyle uyumlu ve net bir anlatım diliyle ilerler. Ortaya çıkan işler, estetik olduğu kadar işlevsel bir iletişim sağlar.</p>
      </div>
    )
  },
  {
    name: 'Marka Stratejisi ve Danışmanlık',
    tooltip: (
      <div>
        <p><strong>Marka Stratejisi ve Danışmanlık</strong></p>
        <p>Konumlandırma, marka dili ve iletişim yaklaşımı mevcut durum ve hedefler doğrultusunda ele alınır. Stratejik çerçeve, markanın karar alma süreçlerine rehberlik edecek şekilde yapılandırılır. Bu süreç, kısa vadeli ihtiyaçlarla uzun vadeli hedefleri aynı zeminde buluşturur.</p>
      </div>
    )
  },
  {
    name: 'Grafik ve Hareketli Tasarım',
    tooltip: (
      <div>
        <p><strong>Grafik ve Hareketli Tasarım</strong></p>
        <p>Görsel anlatım, markanın kimliğini net ve tutarlı biçimde yansıtacak şekilde kurgulanır. Statik tasarımlar ve motion içerikler, farklı mecralarda sorunsuz çalışacak biçimde üretilir. Tasarım dili, markanın genel iletişim sistemiyle uyumlu şekilde ilerler.</p>
      </div>
    )
  }
];

const Services = () => {
  const [activeService, setActiveService] = useState(null);
  const titleRefs = useRef([]);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    if (activeService !== null && titleRefs.current[activeService]) {
      const titleElement = titleRefs.current[activeService];
      const underlineElement = titleElement.parentElement.querySelector('.service-underline');
      if (underlineElement) {
        requestAnimationFrame(() => {
          underlineElement.style.width = `${titleElement.offsetWidth}px`;
        });
      }
    } else {
      titleRefs.current.forEach((ref) => {
        if (ref) {
          const underlineElement = ref.parentElement?.querySelector('.service-underline');
          if (underlineElement) {
            underlineElement.style.width = '0px';
          }
        }
      });
    }
  }, [activeService]);

  return (
    <section className="services" id="services">
      <div className="services-container">
        <div className="services-left">
          <h2 className="services-headline">
            <span className="headline-line-1">Markanızın ihtiyaç duyduğu her</span>
            <span className="headline-line-2">şeyi gerçeğe dönüştürüyoruz <span className="services-arrow" aria-hidden="true">→</span></span>
          </h2>
        </div>

        <div className="services-right">
          <div className="services-list">
            {services.map((service, index) => (
              <div
                key={index}
                className={`service-item ${activeService === index ? 'active' : ''}`}
                onMouseEnter={() => !isMobile && setActiveService(index)}
                onMouseLeave={() => !isMobile && setActiveService(null)}
                onFocus={() => !isMobile && setActiveService(index)}
                onBlur={() => !isMobile && setActiveService(null)}
                tabIndex={0}
                role="button"
                aria-label={`${service.name} hizmeti hakkında bilgi`}
              >
                <span 
                  ref={el => titleRefs.current[index] = el}
                  className="service-title"
                >
                  {service.name}
                </span>
                {activeService === index && <div className="service-underline" aria-hidden="true"></div>}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
