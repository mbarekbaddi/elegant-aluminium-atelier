import { useTranslation } from 'react-i18next';
import { Button } from "@/components/ui/button";

const LanguageSelector = () => {
  const { i18n } = useTranslation();

  return (
    <div className="fixed top-4 right-4 z-50 flex gap-2">
      <Button
        variant={i18n.language === 'fr' ? 'default' : 'outline'}
        onClick={() => i18n.changeLanguage('fr')}
        className="px-3 py-1"
      >
        FR
      </Button>
      <Button
        variant={i18n.language === 'en' ? 'default' : 'outline'}
        onClick={() => i18n.changeLanguage('en')}
        className="px-3 py-1"
      >
        EN
      </Button>
      <Button
        variant={i18n.language === 'ar' ? 'default' : 'outline'}
        onClick={() => i18n.changeLanguage('ar')}
        className="px-3 py-1"
      >
        عربي
      </Button>
    </div>
  );
};

export default LanguageSelector;