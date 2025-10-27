import { CheckCircle, Settings, Wrench, Shield, Fuel, TrendingUp } from "lucide-react";
import serviceImage from "@/assets/aircraft-maintenance-team.jpg";
import { useLanguage } from "@/contexts/LanguageContext";

const Service = () => {
  const { t } = useLanguage();
  
  const services = [
    {
      icon: Settings,
      title: t('service1.title'),
      description: t('service1.desc'),
    },
    {
      icon: Wrench,
      title: t('service2.title'),
      description: t('service2.desc'),
    },
    {
      icon: TrendingUp,
      title: t('service3.title'),
      description: t('service3.desc'),
    },
    {
      icon: Fuel,
      title: t('service4.title'),
      description: t('service4.desc'),
    },
  ];

  return (
    <div className="min-h-screen bg-background pt-16">
      {/* Header Section */}
      <section className="relative h-96 flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${serviceImage})` }}
        >
          <div className="absolute inset-0 liquid-gradient opacity-85" />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="glass-morphism p-10 rounded-3xl backdrop-blur-2xl inline-block">
            <Wrench className="h-12 w-12 text-primary-foreground mx-auto mb-4 animate-float" />
            <h1 className="text-5xl md:text-6xl font-bold text-primary-foreground mb-4 tracking-tight">
              {t('service.title')}
            </h1>
            <p className="text-xl text-primary-foreground/90 max-w-2xl mx-auto">
              {t('service.subtitle')}
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="glass-morphism p-8 rounded-2xl hover:scale-105 transition-all duration-300"
              >
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                  <service.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-2xl font-semibold text-foreground mb-4">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Warranty Details */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-card relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        
        <div className="max-w-4xl mx-auto relative z-10">
          <div className="glass-morphism p-10 rounded-3xl">
            <div className="flex items-center justify-center mb-8">
              <Shield className="h-12 w-12 text-primary mr-4" />
              <h2 className="text-4xl font-bold text-foreground tracking-tight">
                {t('service.warranty.title')}
              </h2>
            </div>
            <div className="space-y-6 text-lg text-muted-foreground">
              <p className="leading-relaxed">
                {t('service.warranty.p1')}
              </p>
              <p className="leading-relaxed">
                {t('service.warranty.p2')}
              </p>
              <ul className="space-y-4 ml-6">
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-primary mr-3 flex-shrink-0 mt-0.5" />
                  <span>{t('service.warranty.li1')}</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-primary mr-3 flex-shrink-0 mt-0.5" />
                  <span>{t('service.warranty.li2')}</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-primary mr-3 flex-shrink-0 mt-0.5" />
                  <span>{t('service.warranty.li3')}</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-primary mr-3 flex-shrink-0 mt-0.5" />
                  <span>{t('service.warranty.li4')}</span>
                </li>
              </ul>
              <p className="leading-relaxed pt-4">
                {t('service.warranty.p3')}
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Service;
