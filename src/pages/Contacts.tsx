import { useState } from "react";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { useLanguage } from "@/contexts/LanguageContext";
import YandexMap from "@/components/YandexMap";

const Contacts = () => {
  const { toast } = useToast();
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create mailto link
    const subject = encodeURIComponent(`${t('contacts.form.title')} от ${formData.name}`);
    const body = encodeURIComponent(
      `${t('contacts.form.name')}: ${formData.name}\n${t('contacts.form.email')}: ${formData.email}\n\n${t('contacts.form.message')}:\n${formData.message}`
    );
    const mailtoLink = `mailto:maktechniks@yandex.ru?subject=${subject}&body=${body}`;
    
    window.location.href = mailtoLink;

    toast({
      title: t('contacts.form.success'),
      description: "Откроется почтовая программа для отправки сообщения.",
    });

    // Reset form
    setFormData({ name: "", email: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen bg-background pt-16">
      {/* Header */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 liquid-gradient" />
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <div className="glass-morphism p-10 rounded-3xl backdrop-blur-2xl inline-block">
            <h1 className="text-5xl md:text-6xl font-bold text-primary-foreground mb-4 tracking-tight">
              {t('contacts.title')}
            </h1>
            <p className="text-xl text-primary-foreground/90 max-w-2xl mx-auto">
              {t('contacts.subtitle')}
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="glass-morphism p-8 rounded-3xl">
              <h2 className="text-3xl font-bold text-foreground mb-6 tracking-tight">
                {t('contacts.form.title')}
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                    {t('contacts.form.name')} *
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder={t('contacts.form.name')}
                    className="rounded-xl"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    {t('contacts.form.email')}
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder={t('contacts.form.email')}
                    className="rounded-xl"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    {t('contacts.form.message')} *
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    placeholder={t('contacts.form.message')}
                    className="rounded-xl"
                  />
                </div>
                <Button type="submit" size="lg" className="w-full">
                  {t('contacts.form.submit')}
                </Button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-6">
              <div className="glass-morphism p-8 rounded-3xl">
                <h2 className="text-3xl font-bold text-foreground mb-6 tracking-tight">
                  {t('contacts.info.title')}
                </h2>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <MapPin className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">{t('contacts.address')}</h3>
                      <p className="text-muted-foreground">
                        {t('contacts.address.value')}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Phone className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">{t('contacts.phone')}</h3>
                      <p className="text-muted-foreground">+7 (926) 575 85 75</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Mail className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">{t('contacts.email')}</h3>
                      <p className="text-muted-foreground">maktechniks@yandex.ru</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Clock className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">{t('contacts.hours')}</h3>
                      <p className="text-muted-foreground">
                        {t('contacts.hours.value')}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Yandex Map */}
              <div className="glass-morphism rounded-3xl overflow-hidden h-96">
                <YandexMap 
                  address="Московская обл., г. Домодедово, мкр. Авиационный, ул. Ильюшина, д.1 а"
                  className="w-full h-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contacts;
