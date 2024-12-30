import { useTranslation } from 'react-i18next';

const About = () => {
  const { t } = useTranslation();

  return (
    <section className="section-padding">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="relative h-[400px]">
            <img
              src="https://images.unsplash.com/photo-1487958449943-2429e8be8625"
              alt="Notre usine"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              {t('about.title')}
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              {t('about.description1')}
            </p>
            <p className="text-lg text-gray-600">
              {t('about.description2')}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;