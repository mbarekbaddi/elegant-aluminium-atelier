import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Realisations from "@/components/Realisations";
import LanguageSelector from "@/components/LanguageSelector";

const Index = () => {
  return (
    <main className="overflow-hidden">
      <LanguageSelector />
      <Hero />
      <Services />
      <About />
      <Realisations />
      <Contact />
    </main>
  );
};

export default Index;