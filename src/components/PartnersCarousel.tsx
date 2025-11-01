import { useEffect, useRef, useState } from "react";
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
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let scrollPosition = 0;
    const scrollSpeed = isMobile ? 1.2 : 0.5;
    let lastTime = performance.now();

    const scroll = (currentTime: number) => {
      const deltaTime = currentTime - lastTime;
      lastTime = currentTime;
      
      scrollPosition += scrollSpeed * (deltaTime / 16);
      
      if (scrollPosition >= scrollContainer.scrollWidth / 2) {
        scrollPosition = 0;
      }
      
      scrollContainer.scrollLeft = scrollPosition;
      requestAnimationFrame(scroll);
    };

    const animationId = requestAnimationFrame(scroll);

    return () => cancelAnimationFrame(animationId);
  }, [isMobile]);

  useEffect(() => {
    if (!isMobile) return;

    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    const updateCenterItem = () => {
      const containerRect = scrollContainer.getBoundingClientRect();
      const centerX = containerRect.left + containerRect.width / 2;
      
      const items = scrollContainer.querySelectorAll('[data-partner-item]');
      items.forEach((item) => {
        const itemRect = item.getBoundingClientRect();
        const itemCenterX = itemRect.left + itemRect.width / 2;
        const distance = Math.abs(centerX - itemCenterX);
        
        if (distance < itemRect.width / 2) {
          item.classList.remove('grayscale');
          item.classList.add('grayscale-0');
        } else {
          item.classList.add('grayscale');
          item.classList.remove('grayscale-0');
        }
      });
    };

    const interval = setInterval(updateCenterItem, 50);
    return () => clearInterval(interval);
  }, [isMobile]);

  return (
    <div 
      ref={scrollRef}
      className="flex gap-8 md:gap-12 overflow-hidden"
      style={{ scrollBehavior: "auto" }}
    >
      {/* First set */}
      {partners.map((partner, index) => (
        <div
          key={`first-${index}`}
          data-partner-item
          className="flex-shrink-0 w-32 h-16 md:w-48 md:h-24 flex items-center justify-center grayscale md:hover:grayscale-0 transition-all duration-300 opacity-70 md:hover:opacity-100"
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
          data-partner-item
          className="flex-shrink-0 w-32 h-16 md:w-48 md:h-24 flex items-center justify-center grayscale md:hover:grayscale-0 transition-all duration-300 opacity-70 md:hover:opacity-100"
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
