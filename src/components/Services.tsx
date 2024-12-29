import { Shield, Wrench, Recycle, Award } from "lucide-react";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

const services = [
  {
    title: "Fabrication sur mesure",
    description: "Solutions personnalisées selon vos spécifications exactes",
    icon: Wrench,
  },
  {
    title: "Qualité supérieure",
    description: "Des produits qui répondent aux plus hauts standards de l'industrie",
    icon: Shield,
  },
  {
    title: "Développement durable",
    description: "Engagement envers des pratiques respectueuses de l'environnement",
    icon: Recycle,
  },
  {
    title: "Expertise reconnue",
    description: "Plus de 20 ans d'expérience dans le secteur de l'aluminium",
    icon: Award,
  },
];

const Services = () => {
  return (
    <section id="services" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Nos Services</h2>
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