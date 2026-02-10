import React, { useMemo } from 'react';
import './AboutPage.css';

const AboutPage = () => {
  const particles = useMemo(() => {
    return Array.from({ length: 20 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 5,
      duration: 15 + Math.random() * 10
    }));
  }, []);

  return (
    <section className="about-page" id="about-us">
      <div className="aurora-background-about"></div>
      
      <div className="noise-overlay"></div>
      
      <div className="about-page-container">
        <div className="about-page-left">
          <h2 className="about-page-headline">Hakkımızda</h2>
        </div>

        <div className="about-page-right">
          <div className="about-page-content">
            <p className="about-page-text">
              TBNA, markaların dijital dünyadaki varlığını tasarım, içerik ve pazarlama ekseninde ele alan, sosyal medya odaklı bir yaratıcı ajanstır. Yaratıcılığı; strateji, görsel sistemler ve ölçülebilir uygulamalarla birlikte ele alarak markalar için işleyen bir iletişim yapısı kurar.
            </p>
            <p className="about-page-text">
              Her projeye estetik bir bakışın yanı sıra net hedefler ve somut çıktılarla yaklaşır. Tasarım, içerik üretimi ve pazarlama süreçlerinin birbiriyle uyum içinde ilerlemesi gerektiğini esas alır. Bu yaklaşım, markalar için yalnızca dikkat çeken değil, sürdürülebilir ve tutarlı bir dijital görünürlük oluşturur.
            </p>
            <p className="about-page-text">
              TBNA'da sosyal medya, tek başına bir mecra olarak değil; markanın konumlandırmasını, algısını ve büyüme potansiyelini destekleyen stratejik bir alan olarak ele alınır. İçerik dili, görsel kimlik ve kampanya kurguları bu bütünlük içinde şekillenir.
            </p>
            <p className="about-page-text">
              Özellikle hizmet sektöründeki markalarla çalışırken, yaratıcı üretimi gerçek ihtiyaçlara ve ölçülebilir hedeflere bağlayan bir anlayış benimsenir. Bugünün gerekliliklerini karşılayan, markanın uzun vadeli iletişim gücünü destekleyen çözümler geliştirilir.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPage;

