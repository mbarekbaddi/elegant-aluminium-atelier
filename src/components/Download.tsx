import { Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";

const DownloadSection = () => {
  const { t } = useTranslation();

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/lovable-uploads/MondeALUGroupe.pdf';
    link.download = 'MondeALUGroupe.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="section-padding bg-gray-50">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-8">
          {t('download.title', 'Téléchargements')}
        </h2>
        <div className="max-w-xl mx-auto bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-4">
            {t('download.catalogue', 'Notre Catalogue')}
          </h3>
          <p className="text-gray-600 mb-6">
            {t('download.description', 'Découvrez notre catalogue complet de produits et services')}
          </p>
          <Button
            onClick={handleDownload}
            className="bg-metal-dark hover:bg-metal text-white flex items-center gap-2 mx-auto"
          >
            <Download className="w-4 h-4" />
            {t('download.button', 'Télécharger le catalogue')}
          </Button>
        </div>
      </div>
    </section>
  );
};

export default DownloadSection;