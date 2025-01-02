import React from 'react';
import { useTranslation } from 'react-i18next';
import { Play } from 'lucide-react';

const Video = () => {
  const { t } = useTranslation();

  return (
    <section className="section-padding bg-gray-50">
      <div className="container mx-auto container-padding">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 reveal">
          {t('video.title', 'Nos Réalisations en Action')}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 reveal">
          <div className="relative aspect-video bg-gray-200 rounded-lg overflow-hidden group cursor-pointer">
            <iframe
              src="https://www.youtube.com/embed/your-video-id"
              title="Monde ALU - Présentation"
              className="absolute inset-0 w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40 group-hover:bg-opacity-30 transition-all">
              <Play className="w-16 h-16 text-white group-hover:scale-110 transition-transform" />
            </div>
          </div>
          <div className="flex flex-col justify-center space-y-4">
            <h3 className="text-2xl font-semibold">
              {t('video.mainTitle', 'Découvrez Notre Savoir-faire')}
            </h3>
            <p className="text-metal">
              {t('video.description', 'Plongez dans l\'univers de Monde ALU à travers nos vidéos. Découvrez nos processus de fabrication, nos installations et nos réalisations les plus impressionnantes.')}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Video;