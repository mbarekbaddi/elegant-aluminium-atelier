import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Realisations from "@/components/Realisations";
import DownloadSection from "@/components/Download";
import LanguageSelector from "@/components/LanguageSelector";
import Video from "@/components/Video";

const Index = () => {
  return (
    <main className="overflow-hidden">
      <LanguageSelector />
      <Hero />
      <Services />
      <About />
      <Realisations />
      <Video />
      <DownloadSection />
      <Contact />
    </main>
  );
};

export default Index;