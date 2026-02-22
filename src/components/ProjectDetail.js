import React, { useEffect, useRef, useState } from 'react';
import { DeviceFrameset } from 'react-device-frameset';
import 'react-device-frameset/styles/marvel-devices.min.css';
import './ProjectDetail.css';

const useResponsive = () => {
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1200);
  
  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  return {
    isMobile: windowWidth <= 768,
    isTablet: windowWidth > 768 && windowWidth <= 1024,
    isDesktop: windowWidth > 1024
  };
};

const SimpleMockup = ({ type, children }) => (
  <div className={`simple-mockup simple-mockup-${type}`}>
    <div className="simple-mockup-screen">
      {children}
    </div>
  </div>
);

const projects = [
  {
    id: 1,
    title: 'Yokote',
    slug: 'yokote-motors',
    dateLocation: {
      copyright: '©2023',
      place: 'Istanbul, Türkiye',
      instagram: 'https://www.instagram.com/yokotemotors/'
    },
    description: `Yokote Motors, elektrik motorları alanında yerli üretimi ve teknolojik bağımsızlığı merkeze alan bir markadır. Proje sürecinde, markanın dijital dünyadaki iletişiminin doğru bir çerçeveye oturtulması ve sosyal medyada tutarlı bir marka dili oluşturulması hedeflendi.

Marka ile yürütülen çalışmalarda; Yokote'nin vizyonu, teknik yetkinliği ve sektörel konumu yakından ele alındı. Mühendislik odaklı yapının dijital iletişimde doğru temsil edilmesi, sürecin temel önceliği oldu. Bu doğrultuda sosyal medya stratejisi, içerik dili ve görsel anlatım markanın karakteriyle uyumlu şekilde kurgulandı.

Sosyal medya yönetimi kapsamında; içerik planlaması, görsel yönlendirme ve dijital iletişim dili üzerinde çalışıldı. Teknik bilgiyi sade ve anlaşılır bir biçimde aktaran içerikler üretilerek, markanın yalnızca bir üretici değil, aynı zamanda teknoloji ve sürdürülebilirlik odağında düşünen bir yapı olduğu vurgulandı.

Yokote Motors'un dijital iletişim süreci, bu yaklaşım sayesinde daha tutarlı, güçlü ve güven veren bir yapıya kavuştu. Sosyal medya, markanın mühendislik gücünü destekleyen stratejik bir iletişim alanı olarak konumlandırıldı.`,
    image: '/images/yokote-motors.jpg'
  },
  {
    id: 2,
    title: 'Valens Karavan',
    slug: 'valens-karavan',
    pageCount: 3,
    dateLocation: {
      copyright: '©2022',
      place: 'Istanbul, Türkiye',
      instagram: 'https://www.instagram.com/valenscaravan/'
    },
    description: `Valens, doğayla uyumlu, sürdürülebilir ve modern mobil yaşam alanları sunan bir karavan markasıdır. Proje kapsamında, markanın yaşam tarzı odağını dijital dünyada doğru şekilde yansıtacak bir iletişim dili ve görünürlük yapısı oluşturulması hedeflendi.

Valens ile yürütülen çalışmalarda, markanın temsil ettiği özgürlük, bağımsızlık ve modern gezgin yaşamı merkeze alındı. Mobil yaşam ve dijital nomad kültürünün yükselişi doğrultusunda, Valens'in yalnızca bir ürün değil, bütüncül bir yaşam deneyimi sunduğu vurgulandı. Bu yaklaşım, markanın dijital iletişiminde temel referans noktası olarak ele alındı.

Sosyal medya ve dijital pazarlama sürecinde; içerik dili, yayın planı ve görsel anlatım Valens'in yaşam tarzı perspektifiyle uyumlu şekilde kurgulandı. Ürünlerin teknik özellikleri kadar, sunduğu deneyimi ve kullanıcıyla kurduğu duygusal bağ ön plana çıkarıldı. Fotoğraf ve video içerikler, bu anlatımı destekleyecek şekilde planlandı ve üretildi.

Dijital kanallar üzerinden yürütülen iletişim, Valens'in hedef kitlesiyle daha güçlü ve tutarlı bir bağ kurmasını sağladı. Sosyal medya, markanın yaşam tarzını görünür kılan; dijital pazarlama ise bu görünürlüğü destekleyen stratejik bir büyüme alanı olarak konumlandırıldı.`,
    image: '/images/valens-karavan.jpg'
  },
  {
    id: 3,
    title: 'Yume Boulangerie',
    slug: 'yume-boulangerie',
    pageCount: 2,
    dateLocation: {
      copyright: '©2025',
      place: 'Istanbul, Türkiye',
      instagram: null,
      website: null
    },
    description: `Yume Boulangerie için yürüttüğümüz çalışma, markanın el işçiliğine dayalı üretim anlayışını ve ürün kalitesini dijital dünyada doğru bir anlatı ile konumlandırmayı hedefledi. Sürecin başlangıcında, markanın hedef kitlesi, ürün çeşitliliği ve premium konumlandırması analiz edilerek sosyal medya iletişim dili ve içerik stratejisi yeniden yapılandırıldı.

Sosyal medya yönetimi kapsamında; içerik planlama, görsel tasarım, metin kurgusu ve yayın akışı bütüncül bir sistem içerisinde ele alınarak markanın dijital platformlarda tutarlı ve karakter sahibi bir görünüm kazanması sağlandı. Fotoğraf ve video prodüksiyonlarıyla, ürünlerin doğal yapısını ve zanaat odaklı üretim sürecini vurgulayan güçlü görsel içerikler üretildi; bu içerikler markanın sıcak, samimi ve premium kimliğini yansıtan bir görsel dil ile desteklendi.

Dijital pazarlama ve reklam yönetimi süreçlerinde, ürün ve mağaza trafiğini destekleyen kampanya kurguları oluşturularak markanın görünürlüğü ve hedef kitle erişimi artırıldı. Bu bütüncül iletişim yaklaşımı sonucunda Yume Boulangerie, dijital platformlarda ürün kalitesini doğru yansıtan, güçlü ve tutarlı bir marka algısı oluşturarak hedef kitlesiyle daha etkili bir bağ kuran bir yapıya kavuştu.`,
    image: '/images/yume-boulangerie.jpg'
  },
  {
    id: 4,
    title: 'Mithras M.C',
    slug: 'mithras-mc',
    pageCount: 2,
    dateLocation: {
      copyright: '©2025',
      place: 'Istanbul, Türkiye',
      instagram: null,
      website: null
    },
    description: `Teknik mühendislik gücünü dijital dünyada doğru ve anlaşılır bir iletişim yapısına dönüştürmek

Mithras Motor Controllers için yürüttüğümüz çalışmada, markanın mühendislik odaklı ürün ve çözümlerini daha anlaşılır ve güçlü bir anlatı ile sunabilmek amacıyla sosyal medya ve web sitesi odaklı bir dijital iletişim yapısı kurgulandı. Sürecin başlangıcında, markanın teknik ürün yapısı, hedef müşteri profili ve sektörel konumlandırması analiz edilerek içerik dili ve dijital iletişim stratejisi oluşturuldu.

Sosyal medya yönetimi kapsamında; teknik içeriklerin sadeleştirilmesi, ürün ve mühendislik süreçlerini anlatan içerik planlamaları, görsel tasarım çalışmaları ve düzenli yayın akışı planlanarak markanın dijital platformlarda daha anlaşılır ve profesyonel bir görünüm kazanması sağlandı.

Web sitesi tarafında ise, markanın ürün ve teknoloji altyapısını doğru şekilde anlatan, kullanıcı deneyimi odaklı ve teknik bilgiyi sade bir yapıyla sunan bir içerik ve tasarım kurgusu oluşturuldu. Bu çalışmalar sonucunda Mithras Motor Controllers, mühendislik gücünü dijital dünyada daha görünür, daha anlaşılır ve daha güçlü bir marka anlatısı ile temsil eden bir yapıya kavuştu.`,
    image: '/images/mithras-mc.jpg'
  },
  {
    id: 5,
    title: 'Joyce',
    slug: 'joyce',
    pageCount: 4,
    dateLocation: {
      copyright: '©2025',
      place: 'Istanbul, Türkiye',
      instagram: 'https://www.instagram.com/joyceforbigboys/',
      website: 'https://www.joyceforbigboys.com/'
    },
    description: `Joyce, yerli üretimle geliştirilen elektrikli mikromobilite çözümleriyle şehir yaşamına sürdürülebilir ve estetik bir alternatif sunan bir markadır. Proje kapsamında, markanın çevre bilinci, tasarım yaklaşımı ve teknoloji odağını dijital dünyada tutarlı ve güçlü bir iletişim diliyle görünür kılmak hedeflendi.

Joyce için yürütülen çalışmalarda, markanın modern şehir yaşamına entegre olma vizyonu merkeze alındı. Mikromobilite, yalnızca bir ulaşım aracı olarak değil; günlük hayatın doğal bir parçası olarak ele alındı.`,
    image: '/images/joyce.jpg',
  },
  {
    id: 6,
    title: "Joyce '90",
    slug: 'joyce-90',
    dateLocation: {
      copyright: '©2025',
      place: 'Istanbul, Türkiye',
      instagram: null,
      website: null
    },
    description: `Joyce ’90, geçmişin ikonik tasarım ruhunu günümüzün elektrikli mobilite teknolojisiyle buluşturan, karakteri güçlü bir alt markadır. Proje kapsamında, bu özgün konseptin dijital dünyada ayrı bir anlatı ve görsel dil ile konumlandırılması hedeflendi.

Joyce ’90 için geliştirilen iletişim yaklaşımı, ürünü yalnızca fonksiyonel bir araç olarak değil; stil, ifade ve nostalji taşıyan bir yaşam tarzı nesnesi olarak ele aldı. 90’lar estetiğinden ilham alan görsel dünya, markanın enerjik ve asi karakterini yansıtacak şekilde kurgulandı.

Sosyal medya ve dijital pazarlama sürecinde; lifestyle odaklı içerikler, güçlü görsel anlatımlar ve kampanya dili ön plana çıkarıldı. Fotoğraf ve video prodüksiyonları, ürünün tasarım detaylarını ve duygusal bağ kuran yönünü öne çıkaracak biçimde planlandı. Joyce ’90, Joyce markasının yenilikçi vizyonunu farklı bir estetik perspektifle tamamlayan bir alt marka olarak konumlandırıldı.

Bu iletişim dili sayesinde Joyce ’90, mikromobilite dünyasında yalnızca farklı değil, ayırt edici bir duruş kazandı.`,
    image: '/images/joyce90.jpg'
  },
  {
    id: 7,
    title: 'Turmotsan',
    slug: 'turmotsan',
    pageCount: 2,
    dateLocation: {
      copyright: '©2024',
      place: 'Istanbul, Türkiye',
      instagram: 'https://www.instagram.com/turmotsanmotors/',
      website: 'https://www.turmotsan.com/'
    },
    description: `Turmotsan Motors, endüstriyel motor teknolojileri alanında uzmanlaşmış, mühendislik temelli bir üretim ve bilgi markasıdır. Proje kapsamında, markanın teknik yetkinliğini ve sektörel birikimini dijital dünyada net, güvenilir ve profesyonel bir iletişim yapısıyla temsil etmek hedeflendi.

Turmotsan için yürütülen çalışmalarda, markanın yalnızca üretim yapan bir firma değil; bilgi üreten, eğiten ve sektöre yön veren bir yapı olduğu yaklaşımı benimsendi.`,
    image: '/images/turmotsan.jpg'
  },
  {
    id: 8,
    title: 'Celestial Anatolia',
    slug: 'celestial-anatolia',
    dateLocation: {
      copyright: '©2025',
      place: 'Kapadokya, Türkiye',
      instagram: null,
      website: null
    },
    description: `Celestial Anatolia, Kapadokya'da gerçekleşen, müzik ve mekân deneyimini bir araya getiren özel bir festivaldir. Proje kapsamında, festivalin atmosferini dijital dünyaya taşıyacak sosyal medya şablonları ve hareketli grafik tasarımlar hazırlandı.

Görsel dil oluşturulurken, Kapadokya'nın doğal yapısı ve peri bacalarının karakteristik formları temel ilham kaynağı olarak ele alındı.`,
    image: '/images/celestial-anatolia.jpg'
  },
  {
    id: 9,
    title: 'Beaulife Club',
    slug: 'beaulife-club',
    pageCount: 2,
    dateLocation: {
      copyright: '©2025',
      place: 'Istanbul, Türkiye',
      instagram: 'https://www.instagram.com/beaulifeclub/',
      website: null
    },
    description: `Beaulife Club, güzellik ve kişisel bakım alanında geniş hizmet yelpazesi sunan, deneyim odaklı bir beauty & lifestyle markasıdır. Proje kapsamında, markanın dijital dünyadaki tüm iletişiminin bütüncül bir sosyal medya ve pazarlama sistemiyle yapılandırılması hedeflendi.

Beaulife Club için sosyal medya yönetimi; planlı içerik üretimi, düzenli yayın akışı ve etkileşim odaklı bir stratejiyle ele alındı.

Saç, cilt, güzellik ve bakım hizmetleri için ayrı içerik kurguları oluşturularak, her hizmetin doğru hedef kitleyle net biçimde buluşması sağlandı. Reels, post ve story içerikleri; bilgilendiren, güven oluşturan ve randevuya yönlendiren bir anlatı üzerine inşa edildi.

Dijital pazarlama tarafında, kampanya dönemleri ve öne çıkarılmak istenen hizmetler için reklam kurguları geliştirildi. İçerik üretimi ve reklam süreçleri bir arada ele alınarak, görünürlük ve etkileşim artırıldı. Influencer marketing çalışmalarıyla, markanın hedef kitlesiyle örtüşen içerik üreticileri üzerinden güven temelli bir iletişim kuruldu.

Kreatif prodüksiyon ve grafik tasarım süreçlerinde; Beaulife Club’ın premium duruşunu destekleyen görsel bir dil oluşturuldu. Hizmet tanıtımları, kampanya duyuruları ve bilgilendirici içerikler için markaya özel tasarımlar üretildi. Tüm içerikler, sosyal medya kanallarında tutarlı ve ayırt edici bir görünüm sağlayacak şekilde planlandı.

Bu kapsamlı çalışma sayesinde Beaulife Club, sosyal medyada yalnızca kampanya paylaşan bir marka değil; sunduğu hizmetleri doğru anlatan, güven veren ve etkileşim yaratan güçlü bir dijital varlık haline geldi.`,
    image: '/images/beaulife-club.jpg'
  },
  {
    id: 10,
    title: 'Allshape',
    slug: 'allshape',
    pageCount: 5,
    dateLocation: {
      copyright: '©2024',
      place: 'Istanbul, Türkiye',
      instagram: 'https://www.instagram.com/allshapeclinic/',
      website: null
    },
    description: `Allshape Clinic, estetik ve sağlık alanında kişiye özel çözümler sunan, güven ve profesyonellik odağında konumlanan bir kliniktir. Proje kapsamında, markanın belirlenen konumlandırmasının sosyal medya üzerinden doğru ve tutarlı bir iletişim diliyle yansıtılması hedeflendi.

Allshape Clinic ile yürütülen çalışmalarda, kliniğin estetik anlayışı ve hizmet yaklaşımı merkeze alındı. Marka konumlandırma sürecinde yapılan analizler ve belirlenen iletişim çerçevesi doğrultusunda, sosyal medya içerikleri güven veren, sade ve bilgilendirici bir yapı üzerine kurgulandı. Amaç, kliniğin uzmanlığını ön plana çıkarırken, estetik beklentileri abartıdan uzak bir dil ile aktarmaktı.

Sosyal medya yönetimi sürecinde; hizmet tanıtımları, bilgilendirici içerikler ve kampanya iletişimi dengeli bir içerik yapısı içerisinde ele alındı. Klinik hizmetlerin doğası gereği, içerik dili; doğal görünüm, profesyonel yaklaşım ve danışan güveni ekseninde şekillendirildi. Reels, post ve story içerikleri, markanın duruşunu destekleyecek şekilde planlandı.

Bu süreç sayesinde Allshape Clinic'in sosyal medya hesapları, yalnızca görsel paylaşım yapılan alanlar olmaktan çıkarak; kliniğin yaklaşımını, uzmanlığını ve hizmet anlayışını doğru şekilde yansıtan bir dijital iletişim kanalına dönüştü. Sosyal medya, markanın konumlandırmasını destekleyen tamamlayıcı bir mecra olarak ele alındı.`,
    image: '/images/allshape.jpg'
  }
];

const ProjectDetail = () => {
  const macbookRef = useRef(null);
  const ipadRef = useRef(null);
  const iphoneRef = useRef(null);
  const { isMobile, isTablet, isDesktop } = useResponsive();

  useEffect(() => {
    document.body.className = 'page-project-detail';
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  useEffect(() => {
    const alignDevices = () => {
      const hash = window.location.hash.replace('#', '').toLowerCase();
      const isValensOrJoyceOrAllshapeOrMithras = hash === 'valens-karavan' || hash === 'joyce' || hash === 'allshape' || hash === 'mithras-mc';
      
      if (!isValensOrJoyceOrAllshapeOrMithras) return;

      if (macbookRef.current && ipadRef.current && iphoneRef.current) {
        const macbookHeight = macbookRef.current.offsetHeight;
        const ipadHeight = ipadRef.current.offsetHeight;
        const iphoneHeight = iphoneRef.current.offsetHeight;

        if (macbookHeight > 0 && ipadHeight > 0 && iphoneHeight > 0) {
          const ipadOffset = macbookHeight - ipadHeight;
          const iphoneOffset = macbookHeight - iphoneHeight;

          ipadRef.current.style.setProperty('margin-top', `${ipadOffset}px`, 'important');
          iphoneRef.current.style.setProperty('margin-top', `${iphoneOffset}px`, 'important');
        }
      }
    };

    const timers = [
      setTimeout(alignDevices, 100),
      setTimeout(alignDevices, 500),
      setTimeout(alignDevices, 1000),
      setTimeout(alignDevices, 2000),
      setTimeout(alignDevices, 3000)
    ];

    window.addEventListener('resize', alignDevices);

    return () => {
      timers.forEach(timer => clearTimeout(timer));
      window.removeEventListener('resize', alignDevices);
    };
  }, []);

  const getProjectSlug = (title) => {
    return title.toLowerCase().replace(/\s+/g, '-').replace(/'/g, '').replace(/\./g, '');
  };

  const hash = window.location.hash.replace('#', '').toLowerCase();
  const project = projects.find(p => {
    const slugMatch = p.slug === hash;
    const titleSlugMatch = getProjectSlug(p.title) === hash;
    return slugMatch || titleSlugMatch;
  });

  if (!project) {
    window.location.hash = '#works';
    return null;
  }

  const USE_OLD_DETAIL_PAGES = false;

  if (!USE_OLD_DETAIL_PAGES) {
    return null;
  }

  return (
    <section className="project-detail">
      <div className="project-detail-container">
        <div className="project-detail-page project-detail-page-1">
          <div className="project-detail-header">
            <span className="project-detail-client-label">Client</span>
            <h1 className="project-detail-title">{project.title}</h1>
          </div>
          
          <div className="project-detail-left">
            <div className="project-detail-image-wrapper">
              <img 
                src={project.image} 
                alt={project.title}
                className="project-detail-main-image"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.parentElement.classList.add('no-image');
                }}
              />
              <div className="project-detail-image-placeholder">
                <span>Fotoğraf Alanı</span>
              </div>
            </div>
          </div>
          
          <div className="project-detail-right">
            <div className="project-detail-description-section">
              <p className="project-detail-description">
                {project.description}
              </p>
            </div>

            <div className="project-detail-meta-section">
              <h2 className="project-detail-section-title">
                {project.slug === 'joyce' ? 'Tarih—Yer / Date—Location / Social' : 'Tarih—Yer / Date—Location'}
              </h2>
              <div className="project-detail-meta-row">
                <div className="project-detail-meta-left">
                  <span className="project-detail-meta-copyright">{project.dateLocation.copyright}</span>
                  <span className="project-detail-meta-place">{project.dateLocation.place}</span>
                </div>
                <div className="project-detail-meta-right">
                  {project.dateLocation.instagram && (
                    <a 
                      href={project.dateLocation.instagram} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="project-detail-link"
                    >
                      Instagram
                    </a>
                  )}
                  {project.dateLocation.website && (
                    <a 
                      href={project.dateLocation.website} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="project-detail-link"
                    >
                      Website
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        {project.slug === 'valens-karavan' ? (
          <>
            <div className="project-detail-page project-detail-page-2 valens-page-2">
              <div className="valens-photo-grid">
                <div className="valens-grid-left">
                  <div className="valens-grid-top">
                    <div className="valens-photo-item valens-photo-small">
                      <span>Fotoğraf Alanı 1</span>
                    </div>
                    <div className="valens-photo-item valens-photo-small">
                      <span>Fotoğraf Alanı 2</span>
                    </div>
                  </div>
                  <div className="valens-photo-item valens-photo-wide">
                    <span>Fotoğraf Alanı 3</span>
                  </div>
                </div>
                <div className="valens-grid-right">
                  <div className="valens-photo-item valens-photo-tall">
                    <span>Fotoğraf Alanı 4</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="project-detail-page project-detail-page-3 valens-page-3">
              <div className="valens-devices-showcase">
                {isDesktop ? (
                  <>
                    <div className="valens-device-wrapper valens-macbook" ref={macbookRef}>
                      <DeviceFrameset device="MacBook Pro" zoom={0.75}>
                        <div className="device-screen-content">
                          <span>Laptop Görünümü</span>
                        </div>
                      </DeviceFrameset>
                    </div>
                    <div className="valens-device-wrapper valens-ipad" ref={ipadRef}>
                      <DeviceFrameset device="iPad Mini" color="black" zoom={0.52}>
                        <div className="device-screen-content">
                          <span>Tablet Görünümü</span>
                        </div>
                      </DeviceFrameset>
                    </div>
                    <div className="valens-device-wrapper valens-iphone" ref={iphoneRef}>
                      <DeviceFrameset device="iPhone X" zoom={0.45}>
                        <div className="device-screen-content">
                          <span>Telefon Görünümü</span>
                        </div>
                      </DeviceFrameset>
                    </div>
                  </>
                ) : (
                  <div className="mobile-devices-grid">
                    <SimpleMockup type="phone">
                      <span>Telefon Görünümü</span>
                    </SimpleMockup>
                    {isTablet && (
                      <SimpleMockup type="tablet">
                        <span>Tablet Görünümü</span>
                      </SimpleMockup>
                    )}
                  </div>
                )}
              </div>
            </div>
          </>
        ) : project.slug === 'turmotsan' ? (
          <div className="project-detail-page project-detail-page-2 valens-page-2">
            <div className="valens-photo-grid">
              <div className="valens-grid-left">
                <div className="valens-grid-top">
                  <div className="valens-photo-item valens-photo-small">
                    <span>Fotoğraf Alanı 1</span>
                  </div>
                  <div className="valens-photo-item valens-photo-small">
                    <span>Fotoğraf Alanı 2</span>
                  </div>
                </div>
                <div className="valens-photo-item valens-photo-wide">
                  <span>Fotoğraf Alanı 3</span>
                </div>
              </div>
              <div className="valens-grid-right">
                <div className="valens-photo-item valens-photo-tall">
                  <span>Fotoğraf Alanı 4</span>
                </div>
              </div>
            </div>
          </div>
        ) : project.slug === 'joyce' ? (
          <>
            <div className="project-detail-page project-detail-page-2 joyce-page-2">
              <div className="valens-photo-grid">
                <div className="valens-grid-left">
                  <div className="valens-grid-top">
                    <div className="valens-photo-item valens-photo-small">
                      <span>Fotoğraf Alanı 1</span>
                    </div>
                    <div className="valens-photo-item valens-photo-small">
                      <span>Fotoğraf Alanı 2</span>
                    </div>
                  </div>
                  <div className="valens-photo-item valens-photo-wide">
                    <span>Fotoğraf Alanı 3</span>
                  </div>
                </div>
                <div className="valens-grid-right">
                  <div className="valens-photo-item valens-photo-tall">
                    <span>Fotoğraf Alanı 4</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="project-detail-page project-detail-page-3 joyce-page-3">
              <div className="valens-photo-grid">
                <div className="valens-grid-left">
                  <div className="valens-grid-top">
                    <div className="valens-photo-item valens-photo-small">
                      <span>Fotoğraf Alanı 1</span>
                    </div>
                    <div className="valens-photo-item valens-photo-small">
                      <span>Fotoğraf Alanı 2</span>
                    </div>
                  </div>
                  <div className="valens-photo-item valens-photo-wide">
                    <span>Fotoğraf Alanı 3</span>
                  </div>
                </div>
                <div className="valens-grid-right">
                  <div className="valens-photo-item valens-photo-tall">
                    <span>Fotoğraf Alanı 4</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="project-detail-page project-detail-page-4 joyce-page-4">
              <div className="valens-devices-showcase">
                {isDesktop ? (
                  <>
                    <div className="valens-device-wrapper valens-macbook" ref={macbookRef}>
                      <DeviceFrameset device="MacBook Pro" zoom={0.75}>
                        <div className="device-screen-content">
                          <span>Laptop Görünümü</span>
                        </div>
                      </DeviceFrameset>
                    </div>
                    <div className="valens-device-wrapper valens-ipad" ref={ipadRef}>
                      <DeviceFrameset device="iPad Mini" color="black" zoom={0.52}>
                        <div className="device-screen-content">
                          <span>Tablet Görünümü</span>
                        </div>
                      </DeviceFrameset>
                    </div>
                    <div className="valens-device-wrapper valens-iphone" ref={iphoneRef}>
                      <DeviceFrameset device="iPhone X" zoom={0.45}>
                        <div className="device-screen-content">
                          <span>Telefon Görünümü</span>
                        </div>
                      </DeviceFrameset>
                    </div>
                  </>
                ) : (
                  <div className="mobile-devices-grid">
                    <SimpleMockup type="phone">
                      <span>Telefon Görünümü</span>
                    </SimpleMockup>
                    {isTablet && (
                      <SimpleMockup type="tablet">
                        <span>Tablet Görünümü</span>
                      </SimpleMockup>
                    )}
                  </div>
                )}
              </div>
            </div>
          </>
        ) : project.slug === 'beaulife-club' ? (
          <div className="project-detail-page project-detail-page-2 beaulife-page-2">
            <div className="beaulife-grid-layout">
              <div className="beaulife-photo-item">
                <span>Fotoğraf Alanı 1</span>
              </div>
              <div className="beaulife-photo-item">
                <span>Fotoğraf Alanı 2</span>
              </div>
              <div className="beaulife-photo-item">
                <span>Fotoğraf Alanı 3</span>
              </div>
            </div>
          </div>
        ) : project.slug === 'yume-boulangerie' ? (
          <div className="project-detail-page project-detail-page-2 yume-page-2">
            <div className="yume-grid-layout">
              <div className="yume-panel">
                <span>Fotoğraf Alanı 1</span>
              </div>
              <div className="yume-panel">
                <span>Fotoğraf Alanı 2</span>
              </div>
              <div className="yume-panel">
                <span>Fotoğraf Alanı 3</span>
              </div>
              <div className="yume-panel">
                <span>Fotoğraf Alanı 4</span>
              </div>
            </div>
          </div>
        ) : project.slug === 'mithras-mc' ? (
          <div className="project-detail-page project-detail-page-2 valens-page-3">
            <div className="valens-devices-showcase">
              {isDesktop ? (
                <>
                  <div className="valens-device-wrapper valens-macbook" ref={macbookRef}>
                    <DeviceFrameset device="MacBook Pro" zoom={0.75}>
                      <div className="device-screen-content">
                        <span>Laptop Görünümü</span>
                      </div>
                    </DeviceFrameset>
                  </div>
                  <div className="valens-device-wrapper valens-ipad" ref={ipadRef}>
                    <DeviceFrameset device="iPad Mini" color="black" zoom={0.52}>
                      <div className="device-screen-content">
                        <span>Tablet Görünümü</span>
                      </div>
                    </DeviceFrameset>
                  </div>
                  <div className="valens-device-wrapper valens-iphone" ref={iphoneRef}>
                    <DeviceFrameset device="iPhone X" zoom={0.45}>
                      <div className="device-screen-content">
                        <span>Telefon Görünümü</span>
                      </div>
                    </DeviceFrameset>
                  </div>
                </>
              ) : (
                <div className="mobile-devices-grid">
                  <SimpleMockup type="phone">
                    <span>Telefon Görünümü</span>
                  </SimpleMockup>
                  {isTablet && (
                    <SimpleMockup type="tablet">
                      <span>Tablet Görünümü</span>
                    </SimpleMockup>
                  )}
                </div>
              )}
            </div>
          </div>
        ) : project.slug === 'allshape' ? (
          <>
            <div className="project-detail-page project-detail-page-2 valens-page-2">
              <div className="valens-photo-grid">
                <div className="valens-grid-left">
                  <div className="valens-grid-top">
                    <div className="valens-photo-item valens-photo-small">
                      <span>Fotoğraf Alanı 1</span>
                    </div>
                    <div className="valens-photo-item valens-photo-small">
                      <span>Fotoğraf Alanı 2</span>
                    </div>
                  </div>
                  <div className="valens-photo-item valens-photo-wide">
                    <span>Fotoğraf Alanı 3</span>
                  </div>
                </div>
                <div className="valens-grid-right">
                  <div className="valens-photo-item valens-photo-tall">
                    <span>Fotoğraf Alanı 4</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="project-detail-page project-detail-page-3 valens-page-2">
              <div className="valens-photo-grid">
                <div className="valens-grid-left">
                  <div className="valens-grid-top">
                    <div className="valens-photo-item valens-photo-small">
                      <span>Fotoğraf Alanı 1</span>
                    </div>
                    <div className="valens-photo-item valens-photo-small">
                      <span>Fotoğraf Alanı 2</span>
                    </div>
                  </div>
                  <div className="valens-photo-item valens-photo-wide">
                    <span>Fotoğraf Alanı 3</span>
                  </div>
                </div>
                <div className="valens-grid-right">
                  <div className="valens-photo-item valens-photo-tall">
                    <span>Fotoğraf Alanı 4</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="project-detail-page project-detail-page-4 allshape-page-4">
              <div className="allshape-grid-6">
                <div className="allshape-panel">
                  <span>Fotoğraf Alanı 1</span>
                </div>
                <div className="allshape-panel">
                  <span>Fotoğraf Alanı 2</span>
                </div>
                <div className="allshape-panel allshape-panel-merged">
                  <span>Fotoğraf Alanı 3</span>
                </div>
                <div className="allshape-panel">
                  <span>Fotoğraf Alanı 4</span>
                </div>
                <div className="allshape-panel">
                  <span>Fotoğraf Alanı 5</span>
                </div>
              </div>
            </div>

            <div className="project-detail-page project-detail-page-5 allshape-page-5">
              <div className="allshape-devices-showcase">
                {isDesktop ? (
                  <>
                    <div className="allshape-device-wrapper allshape-macbook" ref={macbookRef}>
                      <DeviceFrameset device="MacBook Pro" zoom={0.75}>
                        <div className="device-screen-content">
                          <span>Laptop Görünümü</span>
                        </div>
                      </DeviceFrameset>
                    </div>
                    <div className="allshape-device-wrapper allshape-iphone" ref={iphoneRef}>
                      <DeviceFrameset device="iPhone X" zoom={0.45}>
                        <div className="device-screen-content">
                          <span>Telefon Görünümü</span>
                        </div>
                      </DeviceFrameset>
                    </div>
                  </>
                ) : (
                  <div className="mobile-devices-grid">
                    <SimpleMockup type="phone">
                      <span>Telefon Görünümü</span>
                    </SimpleMockup>
                  </div>
                )}
              </div>
            </div>
          </>
        ) : (
          <div className="project-detail-page project-detail-page-2">
            <div className="project-detail-showcase">
              {isMobile ? (
                <div className="mobile-showcase-grid">
                  <div className="mobile-showcase-item">
                    <span>Fotoğraf Alanı 1</span>
                  </div>
                  <div className="mobile-showcase-item">
                    <span>Fotoğraf Alanı 2</span>
                  </div>
                  <div className="mobile-showcase-device">
                    <SimpleMockup type="phone">
                      <span>Telefon Görünümü</span>
                    </SimpleMockup>
                  </div>
                  <div className="mobile-showcase-item">
                    <span>Fotoğraf Alanı 3</span>
                  </div>
                  <div className="mobile-showcase-item">
                    <span>Fotoğraf Alanı 4</span>
                  </div>
                </div>
              ) : (
                <>
                  <div className="showcase-side showcase-left">
                    <div className="showcase-item">
                      <span>Fotoğraf Alanı 1</span>
                    </div>
                    <div className="showcase-item">
                      <span>Fotoğraf Alanı 2</span>
                    </div>
                  </div>
                  
                  <div className="showcase-center">
                    <div className="showcase-device-wrapper">
                      {isTablet ? (
                        <SimpleMockup type="phone">
                          <span>Telefon Görünümü</span>
                        </SimpleMockup>
                      ) : (
                        <DeviceFrameset device="iPhone X" zoom={0.65}>
                          <div className="device-screen-content">
                            <span>Telefon Görünümü</span>
                          </div>
                        </DeviceFrameset>
                      )}
                    </div>
                  </div>
                  
                  <div className="showcase-side showcase-right">
                    <div className="showcase-item">
                      <span>Fotoğraf Alanı 3</span>
                    </div>
                    <div className="showcase-item">
                      <span>Fotoğraf Alanı 4</span>
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProjectDetail;
