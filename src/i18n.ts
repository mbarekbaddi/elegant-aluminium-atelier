import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      fr: {
        translation: {
          hero: {
            title: "L'Excellence dans la Fabrication d'Aluminium",
            description: "Nous transformons l'aluminium en solutions innovantes pour répondre à vos besoins industriels.",
            discover: "Découvrir nos services"
          },
          services: {
            title: "Nos Services",
            custom: {
              title: "Fabrication sur mesure",
              description: "Solutions personnalisées selon vos spécifications exactes"
            },
            quality: {
              title: "Qualité supérieure",
              description: "Des produits qui répondent aux plus hauts standards de l'industrie"
            },
            sustainable: {
              title: "Développement durable",
              description: "Engagement envers des pratiques respectueuses de l'environnement"
            },
            expertise: {
              title: "Expertise reconnue",
              description: "Plus de 20 ans d'expérience dans le secteur de l'aluminium"
            }
          },
          about: {
            title: "Notre Histoire",
            description1: "Depuis notre création, nous nous sommes engagés à fournir des solutions d'aluminium de la plus haute qualité. Notre expertise et notre engagement envers l'excellence nous ont permis de devenir un leader dans l'industrie.",
            description2: "Nous investissons continuellement dans les technologies les plus récentes et dans la formation de notre équipe pour garantir des produits qui dépassent les attentes de nos clients."
          },
          contact: {
            title: "Contactez-nous",
            name: "Nom",
            email: "Email",
            message: "Message",
            send: "Envoyer",
            success: "Message envoyé",
            successDesc: "Nous vous répondrons dans les plus brefs délais."
          }
        }
      },
      en: {
        translation: {
          hero: {
            title: "Excellence in Aluminum Manufacturing",
            description: "We transform aluminum into innovative solutions to meet your industrial needs.",
            discover: "Discover our services"
          },
          services: {
            title: "Our Services",
            custom: {
              title: "Custom Manufacturing",
              description: "Customized solutions according to your exact specifications"
            },
            quality: {
              title: "Superior Quality",
              description: "Products that meet the highest industry standards"
            },
            sustainable: {
              title: "Sustainable Development",
              description: "Commitment to environmentally friendly practices"
            },
            expertise: {
              title: "Recognized Expertise",
              description: "Over 20 years of experience in the aluminum sector"
            }
          },
          about: {
            title: "Our Story",
            description1: "Since our inception, we have been committed to providing the highest quality aluminum solutions. Our expertise and commitment to excellence have enabled us to become an industry leader.",
            description2: "We continuously invest in the latest technologies and team training to ensure products that exceed customer expectations."
          },
          contact: {
            title: "Contact Us",
            name: "Name",
            email: "Email",
            message: "Message",
            send: "Send",
            success: "Message sent",
            successDesc: "We will respond as soon as possible."
          }
        }
      },
      ar: {
        translation: {
          hero: {
            title: "التميز في صناعة الألمنيوم",
            description: "نحول الألمنيوم إلى حلول مبتكرة لتلبية احتياجاتك الصناعية.",
            discover: "اكتشف خدماتنا"
          },
          services: {
            title: "خدماتنا",
            custom: {
              title: "تصنيع مخصص",
              description: "حلول مخصصة وفقاً لمواصفاتك الدقيقة"
            },
            quality: {
              title: "جودة متفوقة",
              description: "منتجات تلبي أعلى معايير الصناعة"
            },
            sustainable: {
              title: "التنمية المستدامة",
              description: "التزام بالممارسات الصديقة للبيئة"
            },
            expertise: {
              title: "خبرة معترف بها",
              description: "أكثر من 20 عاماً من الخبرة في قطاع الألمنيوم"
            }
          },
          about: {
            title: "قصتنا",
            description1: "منذ تأسيسنا، التزمنا بتقديم حلول ألمنيوم عالية الجودة. مكنتنا خبرتنا والتزامنا بالتميز من أن نصبح رواداً في الصناعة.",
            description2: "نستثمر باستمرار في أحدث التقنيات وتدريب فريقنا لضمان منتجات تتجاوز توقعات العملاء."
          },
          contact: {
            title: "اتصل بنا",
            name: "الاسم",
            email: "البريد الإلكتروني",
            message: "الرسالة",
            send: "إرسال",
            success: "تم إرسال الرسالة",
            successDesc: "سنرد عليك في أقرب وقت ممكن."
          }
        }
      }
    },
    fallbackLng: 'fr',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;