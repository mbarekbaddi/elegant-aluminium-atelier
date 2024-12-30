import { useTranslation } from 'react-i18next';

const Realisations = () => {
  const { t } = useTranslation();

  const projects = [
    {
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
      title: t('realisations.kitchen.title'),
      description: t('realisations.kitchen.description')
    },
    {
      image: "https://images.unsplash.com/photo-1497366811353-6870744d04b2",
      title: t('realisations.office.title'),
      description: t('realisations.office.description')
    },
    {
      image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72",
      title: t('realisations.meeting.title'),
      description: t('realisations.meeting.description')
    },
    {
      image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3",
      title: t('realisations.entrance.title'),
      description: t('realisations.entrance.description')
    },
    {
      image: "https://images.unsplash.com/photo-1600121848594-d8644e57abab",
      title: t('realisations.living.title'),
      description: t('realisations.living.description')
    },
    {
      image: "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf",
      title: t('realisations.dining.title'),
      description: t('realisations.dining.description')
    }
  ];

  return (
    <section id="realisations" className="section-padding bg-white">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          {t('realisations.title')}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="group relative overflow-hidden rounded-lg shadow-lg">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <h3 className="text-white text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-white/90">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Realisations;