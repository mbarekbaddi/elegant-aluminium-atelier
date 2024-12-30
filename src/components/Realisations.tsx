import { useTranslation } from 'react-i18next';

const Realisations = () => {
  const { t } = useTranslation();

  const projects = [
    {
      image: "/lovable-uploads/57d0694a-517e-4ddb-8127-15073ba3fd04.png",
      title: t('realisations.kitchen.title'),
      description: t('realisations.kitchen.description')
    },
    {
      image: "/lovable-uploads/5992a7c2-6292-4ebb-95e3-7353755b7e4f.png",
      title: t('realisations.office.title'),
      description: t('realisations.office.description')
    },
    {
      image: "/lovable-uploads/650ba817-92b1-4c22-8fbc-621948f046e8.png",
      title: t('realisations.meeting.title'),
      description: t('realisations.meeting.description')
    },
    {
      image: "/lovable-uploads/d70cb2b4-9286-4e9b-bf8d-e8423522b7cb.png",
      title: t('realisations.entrance.title'),
      description: t('realisations.entrance.description')
    },
    {
      image: "/lovable-uploads/7c328778-e1c2-4d47-b3e8-88bc62b34d97.png",
      title: t('realisations.living.title'),
      description: t('realisations.living.description')
    },
    {
      image: "/lovable-uploads/32d1c402-74a2-4efd-870d-e44b3a070d24.png",
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