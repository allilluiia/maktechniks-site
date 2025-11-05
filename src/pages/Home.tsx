import { ArrowRight, Shield, Wrench, Zap, Award, Users, Clock, Cog, CheckCircle, Settings, Plane } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import PartnersCarousel from "@/components/PartnersCarousel";
import PhotoCarousel from "@/components/PhotoCarousel";
import facilityImage from "@/assets/fuel-service-operations.jpg";
import logoImage from "@/assets/logo.png";

const Home = () => {
  const { t } = useLanguage();
  
  const advantages = [
    { icon: Shield, title: t("home.adv1.title"), description: t("home.adv1.desc") },
    { icon: Zap, title: t("home.adv2.title"), description: t("home.adv2.desc") },
    { icon: Wrench, title: t("home.adv3.title"), description: t("home.adv3.desc") },
    { icon: Award, title: t("home.adv4.title"), description: t("home.adv4.desc") },
    { icon: Users, title: t("home.adv5.title"), description: t("home.adv5.desc") },
    { icon: Cog, title: t("home.adv6.title"), description: t("home.adv6.desc") },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden" style={{ background: 'linear-gradient(to bottom, #f3f7fb, #ffffff)' }}>
        <div className="relative z-10 max-w-5xl mx-auto px-8 sm:px-6 lg:px-8 text-center pt-32 pb-20">
          <div className="space-y-8 md:space-y-10">
            {/* Logo */}
            <div className="animate-fade-in flex justify-center">
              <img 
                src={logoImage} 
                alt="МакТехникс" 
                className="h-16 md:h-20 lg:h-24 w-auto"
              />
            </div>
            
            {/* Tagline */}
            <div className="animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
              <p className="text-xs md:text-sm tracking-[0.3em] text-muted-foreground uppercase font-medium">
                {t("home.hero.tagline")}
              </p>
            </div>

            {/* Main Title */}
            <div className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight max-w-4xl mx-auto">
                {t("home.hero.title")}
              </h1>
            </div>

            {/* Buttons */}
            <div className="flex flex-wrap justify-center gap-4 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
              <Link to="/contacts">
                <Button size="lg" variant="default" className="group px-8">
                  {t("home.hero.cta")}
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link to="/documents">
                <Button size="lg" variant="outline" className="group px-8">
                  {t("home.hero.docs")}
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>

            {/* Features */}
            <div className="flex flex-wrap justify-center gap-8 pt-8 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Zap className="h-4 w-4" />
                <span>{t("home.hero.feature1")}</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <CheckCircle className="h-4 w-4" />
                <span>{t("home.hero.feature2")}</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Settings className="h-4 w-4" />
                <span>{t("home.hero.feature3")}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-card relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full opacity-5 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />
        </div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 tracking-tight">
                {t('home.about.title')}
              </h2>
              <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
                {t('home.about.p1')}
              </p>
              <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
                {t('home.about.p2')}
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {t('home.about.p3')}
              </p>
              <div className="mt-6 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10">
                <Clock className="h-5 w-5 text-primary" />
                <span className="text-sm font-semibold text-primary">{t('home.about.experience')}</span>
              </div>
            </div>
            <div className="relative h-96 rounded-3xl overflow-hidden shadow-2xl animate-fade-in glass-card group">
              <img 
                src={facilityImage} 
                alt="Авиационный ремонтный центр МАК Техникс"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* Photo Gallery */}
      <PhotoCarousel />

      {/* Advantages Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-foreground mb-4 tracking-tight">
            {t('home.advantages.title')}
          </h2>
          <p className="text-center text-muted-foreground mb-12 text-lg max-w-2xl mx-auto">
            {t('home.advantages.subtitle')}
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {advantages.map((advantage, index) => (
              <div
                key={index}
                className="glass-morphism p-8 rounded-2xl hover:scale-105 transition-all duration-300 group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors group-hover:scale-110 duration-300">
                  <advantage.icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {advantage.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {advantage.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-card/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-3 tracking-tight">
            {t('home.partners.title')}
          </h2>
          <p className="text-center text-muted-foreground mb-12 text-base">
            {t('home.partners.subtitle')}
          </p>
          <PartnersCarousel />
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 liquid-gradient" />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-primary/10" />
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="glass-morphism p-12 rounded-3xl backdrop-blur-2xl">
            <Cog className="h-12 w-12 text-primary-foreground mx-auto mb-6 animate-float" />
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-primary-foreground tracking-tight">
              {t('home.cta.title')}
            </h2>
            <p className="text-xl mb-8 text-primary-foreground/90 max-w-2xl mx-auto leading-relaxed">
              {t('home.cta.text')}
            </p>
            <Link to="/contacts">
              <Button size="lg" variant="glass" className="group shadow-2xl text-white border-white/30 hover:border-white/50">
                {t('home.cta.button')}
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
