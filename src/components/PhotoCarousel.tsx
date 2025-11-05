import { useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext, type CarouselApi } from "@/components/ui/carousel";
import { X } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { useEffect } from "react";
import fuelTruck1 from "@/assets/fuel-truck-1.jpg";
import fuelEquipment2 from "@/assets/fuel-equipment-2.jpg";
import aircraftRefueling3 from "@/assets/aircraft-refueling-3.jpg";
import winterRefueling4 from "@/assets/winter-refueling-4.jpg";
import nightRefueling5 from "@/assets/night-refueling-5.jpg";
import airportRefueling6 from "@/assets/airport-refueling-6.jpg";

const photos = [
  { src: fuelTruck1, alt: "Топливозаправочная техника МакТехникс" },
  { src: fuelEquipment2, alt: "Оборудование ГСМ" },
  { src: aircraftRefueling3, alt: "Заправка воздушного судна" },
  { src: winterRefueling4, alt: "Заправка в зимних условиях" },
  { src: nightRefueling5, alt: "Ночная заправка" },
  { src: airportRefueling6, alt: "Работа на аэродроме" },
];

const PhotoCarousel = () => {
  const { t } = useLanguage();
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) return;

    setCurrent(api.selectedScrollSnap());

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  const handleImageClick = (src: string) => {
    setSelectedImage(src);
  };

  return (
    <>
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-foreground mb-4 tracking-tight">
            {t('home.gallery.title')}
          </h2>
          <p className="text-center text-muted-foreground mb-12 text-lg max-w-2xl mx-auto">
            {t('home.gallery.subtitle')}
          </p>

          <Carousel
            opts={{
              loop: true,
              align: "center",
            }}
            setApi={setApi}
            className="w-full"
          >
            <CarouselContent className="-ml-8">
              {photos.map((photo, index) => (
                <CarouselItem 
                  key={index}
                  className="pl-8 basis-[85%] md:basis-[45%] lg:basis-[30%]"
                >
                  <div
                    className="relative h-80 rounded-2xl overflow-hidden shadow-xl cursor-pointer group"
                    onClick={() => handleImageClick(photo.src)}
                  >
                    <img
                      src={photo.src}
                      alt={photo.alt}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden lg:flex" />
            <CarouselNext className="hidden lg:flex" />
          </Carousel>
          
          {/* Dot indicators for mobile and tablet */}
          <div className="flex justify-center gap-2 mt-6 lg:hidden">
            {photos.map((_, index) => (
              <button
                key={index}
                onClick={() => api?.scrollTo(index)}
                className={`h-2 rounded-full transition-all ${
                  index === current 
                    ? "w-8 bg-primary" 
                    : "w-2 bg-muted-foreground/30"
                }`}
                aria-label={`Перейти к фото ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="max-w-[95vw] max-h-[95vh] p-0 bg-black/95 border-none">
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-4 right-4 z-50 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
          >
            <X className="h-6 w-6 text-white" />
          </button>
          {selectedImage && (
            <img
              src={selectedImage}
              alt="Полноэкранный просмотр"
              className="w-full h-full object-contain animate-scale-in"
            />
          )}
        </DialogContent>
      </Dialog>
    </>
  );
};

export default PhotoCarousel;
