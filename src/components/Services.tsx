import { Shield, Wrench, Recycle, Award } from "lucide-react";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { useTranslation } from 'react-i18next';

const Services = () => {
  const { t } = useTranslation();

  const services = [
    {
      title: t('services.custom.title'),
      description: t('services.custom.description'),
      icon: Wrench,
    },
    {
      title: t('services.quality.title'),
      description: t('services.quality.description'),
      icon: Shield,
    },
    {
      title: t('services.sustainable.title'),
      description: t('services.sustainable.description'),
      icon: Recycle,
    },
    {
      title: t('services.expertise.title'),
      description: t('services.expertise.description'),
      icon: Award,
    },
  ];

  return (
    <section id="services" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">{t('services.title')}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Card key={index} className="border-none shadow-lg">
              <CardHeader>
                <div className="w-12 h-12 bg-metal-light rounded-lg flex items-center justify-center mb-4">
                  <service.icon className="w-6 h-6 text-metal-dark" />
                </div>
                <CardTitle className="mb-2">{service.title}</CardTitle>
                <CardDescription>{service.description}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;