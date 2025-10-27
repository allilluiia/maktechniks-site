import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import LanguageSwitcher from "./LanguageSwitcher";
import logo from "@/assets/logo.png";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const { t } = useLanguage();

  const navItems = [
    { name: t("nav.home"), path: "/" },
    { name: t("nav.service"), path: "/service" },
    { name: t("nav.documents"), path: "/documents" },
    { name: t("nav.contacts"), path: "/contacts" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-primary/20 shadow-[0_4px_24px_0_rgba(49,130,194,0.12)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <img 
              src={logo} 
              alt="МАК Техникс" 
              className="h-10 w-auto hover:opacity-80 transition-opacity"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <Link key={item.path} to={item.path}>
                <Button
                  variant="ghost"
                  className={`text-foreground hover:bg-primary/10 hover:text-primary transition-all ${
                    isActive(item.path) ? "bg-primary text-primary-foreground shadow-lg" : ""
                  }`}
                >
                  {item.name}
                </Button>
              </Link>
            ))}
            <LanguageSwitcher />
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
              className="text-foreground hover:text-primary"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-xl border-t border-primary/20 rounded-b-2xl">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setIsOpen(false)}
              >
                <Button
                  variant="ghost"
                  className={`w-full justify-start text-foreground hover:bg-primary/10 hover:text-primary ${
                    isActive(item.path) ? "bg-primary text-primary-foreground" : ""
                  }`}
                >
                  {item.name}
                </Button>
              </Link>
            ))}
            <div className="px-3 py-2">
              <LanguageSwitcher />
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
