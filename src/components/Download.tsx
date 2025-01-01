import { Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";
import { toast } from "sonner";

const DownloadSection = () => {
  const { t } = useTranslation();
  const filePath = '/lovable-uploads/MondeALUGroupe.pdf';

  const handleDownload = async () => {
    try {
      // Vérifier si le fichier existe
      const response = await fetch(filePath, {
        method: 'HEAD' // Utiliser HEAD pour vérifier uniquement les métadonnées
      });

      if (!response.ok) {
        console.error('Statut de la réponse:', response.status);
        console.error('Headers:', Object.fromEntries(response.headers.entries()));
        toast.error(t('download.error', `Erreur: Le fichier est introuvable (${response.status})`));
        return;
      }

      // Vérifier le type MIME
      const contentType = response.headers.get('content-type');
      if (contentType && !contentType.includes('application/pdf')) {
        console.error('Type de fichier incorrect:', contentType);
        toast.error(t('download.error', 'Format de fichier invalide'));
        return;
      }

      // Télécharger le fichier
      const downloadResponse = await fetch(filePath);
      const blob = await downloadResponse.blob();
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = 'MondeALUGroupe.pdf';
      document.body.appendChild(link);
      link.click();
      window.URL.revokeObjectURL(url);
      document.body.removeChild(link);
      
      toast.success(t('download.success', 'Téléchargement démarré'));
    } catch (error) {
      console.error('Erreur détaillée:', error);
      toast.error(t('download.error', 'Erreur lors du téléchargement'));
    }
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