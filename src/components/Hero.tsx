import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
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
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            L'Excellence dans la Fabrication d'Aluminium
          </h1>
          <p className="text-lg md:text-xl text-gray-200 mb-8">
            Nous transformons l'aluminium en solutions innovantes pour répondre à vos besoins industriels.
          </p>
          <Button className="bg-white text-metal-dark hover:bg-metal-light flex items-center gap-2">
            Découvrir nos services
            <ArrowRight className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Hero;