import { FileText, Download, Award, Shield, FileCheck, Fuel } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import certifiedQualityImage from "@/assets/certified-quality.png";

const Documents = () => {
  const { t } = useLanguage();
  
  const documents = [
    {
      titleKey: "docs.doc1.title",
      descKey: "docs.doc1.desc",
      icon: Award,
      categoryKey: "docs.cat.certificates",
      file: "/documents/certificate-1-2020.pdf",
    },
    {
      titleKey: "docs.doc2.title",
      descKey: "docs.doc2.desc",
      icon: Award,
      categoryKey: "docs.cat.certificates",
      file: "/documents/certificate-2-2020.pdf",
    },
    {
      titleKey: "docs.doc3.title",
      descKey: "docs.doc3.desc",
      icon: Award,
      categoryKey: "docs.cat.certificates",
      file: "/documents/certificate-3-2020.pdf",
    },
    {
      titleKey: "docs.doc4.title",
      descKey: "docs.doc4.desc",
      icon: Award,
      categoryKey: "docs.cat.certificates",
      file: "/documents/certificate-4-2020.pdf",
    },
    {
      titleKey: "docs.doc5.title",
      descKey: "docs.doc5.desc",
      icon: Award,
      categoryKey: "docs.cat.certificates",
      file: "/documents/certificate-conformity.pdf",
    },
    {
      titleKey: "docs.doc8.title",
      descKey: "docs.doc8.desc",
      icon: Award,
      categoryKey: "docs.cat.certificates",
      file: "/documents/certificate-auto.pdf",
    },
    {
      titleKey: "docs.doc9.title",
      descKey: "docs.doc9.desc",
      icon: Shield,
      categoryKey: "docs.cat.licenses",
      file: "/documents/aviation-license.pdf",
    },
    {
      titleKey: "docs.doc10.title",
      descKey: "docs.doc10.desc",
      icon: Award,
      categoryKey: "docs.cat.certificates",
      file: "/documents/certificate-gost-iso-2024.pdf",
    },
  ];

  const handleDownload = (file: string) => {
    window.open(file, '_blank');
  };

  return (
    <div className="min-h-screen bg-background pt-16">
      {/* Header Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 liquid-gradient" />
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <div className="glass-morphism p-10 rounded-3xl backdrop-blur-2xl inline-block">
            <FileCheck className="h-12 w-12 text-primary-foreground mx-auto mb-4 animate-float" />
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-primary-foreground mb-4 tracking-tight leading-tight">
              {t('docs.title')}
            </h1>
            <p className="text-xl text-primary-foreground/90 max-w-2xl mx-auto">
              {t('docs.subtitle')}
            </p>
          </div>
        </div>
      </section>

      {/* Documents Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {documents.map((doc, index) => (
              <div
                key={index}
                className="glass-morphism p-6 rounded-2xl hover:scale-105 transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                    <doc.icon className="h-6 w-6 text-primary" />
                  </div>
                  <span className="text-xs font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">
                    {t(doc.categoryKey)}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2 break-words">
                  {t(doc.titleKey)}
                </h3>
                <p className="text-muted-foreground mb-4 text-sm leading-relaxed break-words">
                  {t(doc.descKey)}
                </p>
                <Button
                  onClick={() => handleDownload(doc.file)}
                  variant="outline"
                  className="w-full group"
                >
                  <Download className="mr-2 h-4 w-4 group-hover:translate-y-0.5 transition-transform" />
                  {t('docs.download')}
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};

export default Documents;
