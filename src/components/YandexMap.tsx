import { useEffect, useRef } from 'react';

interface YandexMapProps {
  address: string;
  className?: string;
}

declare global {
  interface Window {
    ymaps: any;
  }
}

const YandexMap = ({ address, className = '' }: YandexMapProps) => {
  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Wait for Yandex Maps API to load
    const initMap = () => {
      if (window.ymaps && mapRef.current) {
        window.ymaps.ready(() => {
          // Geocode the address
          window.ymaps.geocode(address).then((res: any) => {
            const firstGeoObject = res.geoObjects.get(0);
            const coords = firstGeoObject.geometry.getCoordinates();

            // Create the map
            const map = new window.ymaps.Map(mapRef.current, {
              center: coords,
              zoom: 16,
              controls: ['zoomControl', 'fullscreenControl']
            });

            // Add a placemark
            const placemark = new window.ymaps.Placemark(coords, {
              balloonContent: address,
              hintContent: 'МакТехникс'
            }, {
              preset: 'islands#blueDotIcon'
            });

            map.geoObjects.add(placemark);
          });
        });
      }
    };

    // Check if ymaps is already loaded
    if (window.ymaps) {
      initMap();
    } else {
      // Wait for script to load
      const checkYmaps = setInterval(() => {
        if (window.ymaps) {
          clearInterval(checkYmaps);
          initMap();
        }
      }, 100);

      return () => clearInterval(checkYmaps);
    }
  }, [address]);

  return <div ref={mapRef} className={className} />;
};

export default YandexMap;
