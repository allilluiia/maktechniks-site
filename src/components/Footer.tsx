import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="relative bg-gradient-to-b from-card to-background border-t border-border/50 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-primary rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-primary rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
              <div className="h-8 w-1 bg-primary rounded-full" />
              {t('footer.company')}
            </h3>
            <div className="space-y-3">
              <p className="text-sm font-semibold text-primary">
                © 2015 - 2025
              </p>
              <div className="text-sm text-muted-foreground space-y-2 leading-relaxed">
                <p className="flex items-start gap-2">
                  <span className="text-primary mt-0.5">•</span>
                  <span><span className="font-medium">{t('footer.inn')}:</span> 5009099963</span>
                </p>
                <p className="flex items-start gap-2">
                  <span className="text-primary mt-0.5">•</span>
                  <span className="break-words">
                    <span className="font-medium">{t('footer.address')}:</span> 142007, {t('footer.addressDetails')}
                  </span>
                </p>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
              <div className="h-8 w-1 bg-primary rounded-full" />
              {t('footer.quickLinks')}
            </h3>
            <nav className="flex flex-col space-y-3">
              <Link
                to="/"
                className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center gap-2 group"
              >
                <span className="w-0 group-hover:w-4 h-0.5 bg-primary transition-all duration-300" />
                {t('nav.home')}
              </Link>
              <Link
                to="/service"
                className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center gap-2 group"
              >
                <span className="w-0 group-hover:w-4 h-0.5 bg-primary transition-all duration-300" />
                {t('nav.service')}
              </Link>
              <Link
                to="/documents"
                className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center gap-2 group"
              >
                <span className="w-0 group-hover:w-4 h-0.5 bg-primary transition-all duration-300" />
                {t('nav.documents')}
              </Link>
              <Link
                to="/contacts"
                className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center gap-2 group"
              >
                <span className="w-0 group-hover:w-4 h-0.5 bg-primary transition-all duration-300" />
                {t('nav.contacts')}
              </Link>
            </nav>
          </div>

          {/* Additional Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
              <div className="h-8 w-1 bg-primary rounded-full" />
              {t('footer.info')}
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {t('footer.description')}
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-border/50">
          <p className="text-center text-sm text-muted-foreground">
            ООО "МакТехникс"
          </p>
          <p className="text-center text-xs text-muted-foreground/70 mt-1">
            2015 - 2025
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
