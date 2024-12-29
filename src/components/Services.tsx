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
    description: "Normes strictes et contrôle qualité rigoureux",
    icon: Shield,
  },
  {
    title: "Développement durable",
    description: "Processus respectueux de l'environnement",
    icon: Recycle,
  },
  {
    title: "Expertise reconnue",
    description: "Plus de 20 ans d'expérience dans l'industrie",
    icon: Award,
  },
];

const Services = () => {
  return (
    <section className="section-padding bg-gray-50">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Nos Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="mb-4 w-12 h-12 bg-metal-light rounded-lg flex items-center justify-center">
                  <service.icon className="w-6 h-6 text-metal-dark" />
                </div>
                <CardTitle className="text-xl mb-2">{service.title}</CardTitle>
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