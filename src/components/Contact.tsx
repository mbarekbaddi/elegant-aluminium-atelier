import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import { useTranslation } from 'react-i18next';

const Contact = () => {
  const { t } = useTranslation();
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    
    try {
      const response = await fetch('https://formsubmit.co/ajax/groupemondealu@gmail.com', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        toast({
          title: t('contact.success'),
          description: t('contact.successDesc'),
        });
        (e.target as HTMLFormElement).reset();
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      toast({
        title: t('contact.error'),
        description: t('contact.errorDesc'),
        variant: "destructive",
      });
    }
  };

  return (
    <section id="contact" className="section-padding bg-metal-light/10">
      <div className="container mx-auto max-w-2xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          {t('contact.title')}
        </h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium mb-2">{t('contact.name')}</label>
              <Input required name="name" placeholder={t('contact.name')} />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">{t('contact.email')}</label>
              <Input required name="email" type="email" placeholder="votre@email.com" />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">{t('contact.message')}</label>
            <Textarea required name="message" placeholder={t('contact.message')} className="min-h-[150px]" />
          </div>
          <Button type="submit" className="w-full bg-metal-dark hover:bg-metal text-white">
            {t('contact.send')}
          </Button>
        </form>
      </div>
    </section>
  );
};

export default Contact;