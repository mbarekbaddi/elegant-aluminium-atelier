import { ArrowRight, Phone, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTranslation } from 'react-i18next';

const Hero = () => {
  const { t } = useTranslation();
  
  const scrollToServices = () => {
    const servicesSection = document.getElementById('services');
    servicesSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="relative min-h-screen flex items-center">
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1496307653780-42ee777d4833')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "brightness(0.7)"
        }}
      />
      <div className="container relative z-10 mx-auto px-4">
        <div className="max-w-3xl">
          <img 
            src="/lovable-uploads/df88b5fe-d0c0-4576-b3b3-82977c4872f2.png" 
            alt="Monde ALU Groupe" 
            className="w-64 md:w-80 mb-8"
          />
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            {t('hero.title')}
          </h1>
          <p className="text-lg md:text-xl text-gray-200 mb-8">
            {t('hero.description')}
          </p>
          <div className="flex flex-col md:flex-row gap-4 items-start md:items-center">
            <Button 
              onClick={scrollToServices}
              className="bg-white text-metal-dark hover:bg-metal-light flex items-center gap-2"
            >
              {t('hero.discover')}
              <ArrowRight className="w-4 h-4" />
            </Button>
            <div className="flex items-center bg-metal-dark/70 text-white px-4 py-2 rounded-md">
              <Phone className="w-5 h-5 mr-2" />
              <span className="text-sm md:text-base">+212 620 203 799</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;