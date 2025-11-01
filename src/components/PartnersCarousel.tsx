import { useEffect, useRef } from "react";
import yamalLogo from "@/assets/partners/yamal-logo.png";
import pulkovoLogo from "@/assets/partners/pulkovo-logo.svg";
import utairLogo from "@/assets/partners/utair-logo.svg";
import gazpromLogo from "@/assets/partners/gazprom-logo.svg";
import aeroflotLogo from "@/assets/partners/aeroflot-logo.svg";
import lukoilLogo from "@/assets/partners/lukoil-logo.svg";
import rosneftLogo from "@/assets/partners/rosneft-logo.svg";
import svoLogo from "@/assets/partners/svo-logo.svg";
import tupolevLogo from "@/assets/partners/tupolev-logo.png";
import heliportLogo from "@/assets/partners/heliport-logo.png";
import tatneftLogo from "@/assets/partners/tatneft-logo.png";

const partners = [
  { src: yamalLogo, alt: "Ямал" },
  { src: pulkovoLogo, alt: "Пулково" },
  { src: utairLogo, alt: "Ютэйр" },
  { src: gazpromLogo, alt: "Газпром Нефть" },
  { src: aeroflotLogo, alt: "Аэрофлот" },
  { src: lukoilLogo, alt: "Лукойл" },
  { src: rosneftLogo, alt: "Роснефть" },
  { src: svoLogo, alt: "Шереметьево" },
  { src: tupolevLogo, alt: "Туполев Сервис" },
  { src: heliportLogo, alt: "Heliport Moscow" },
  { src: tatneftLogo, alt: "Татнефть" },
];

const PartnersCarousel = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let scrollPosition = 0;
    const scrollSpeed = 0.5;

    const scroll = () => {
      scrollPosition += scrollSpeed;
      
      if (scrollPosition >= scrollContainer.scrollWidth / 2) {
        scrollPosition = 0;
      }
      
      scrollContainer.scrollLeft = scrollPosition;
      requestAnimationFrame(scroll);
    };

    const animationId = requestAnimationFrame(scroll);

    return () => cancelAnimationFrame(animationId);
  }, []);

  return (
    <div 
      ref={scrollRef}
      className="flex gap-12 overflow-hidden"
      style={{ scrollBehavior: "auto" }}
    >
      {/* First set */}
      {partners.map((partner, index) => (
        <div
          key={`first-${index}`}
          className="flex-shrink-0 w-48 h-24 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300 opacity-70 hover:opacity-100"
        >
          <img
            src={partner.src}
            alt={partner.alt}
            className="max-w-full max-h-full object-contain"
          />
        </div>
      ))}
      {/* Duplicate set for seamless loop */}
      {partners.map((partner, index) => (
        <div
          key={`second-${index}`}
          className="flex-shrink-0 w-48 h-24 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300 opacity-70 hover:opacity-100"
        >
          <img
            src={partner.src}
            alt={partner.alt}
            className="max-w-full max-h-full object-contain"
          />
        </div>
      ))}
    </div>
  );
};

export default PartnersCarousel;
