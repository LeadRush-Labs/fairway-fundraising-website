import { useEffect, useState } from 'react';

export default function CalendlySection() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.body.appendChild(script);

    const checkMobile = () => {
      setIsMobile(window.innerWidth < 640);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => {
      const existingScript = document.querySelector('script[src="https://assets.calendly.com/assets/external/widget.js"]');
      if (existingScript) {
        document.body.removeChild(existingScript);
      }
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  return (
    <section id="calendly" className="relative bg-white py-8 sm:py-12 md:py-16 overflow-hidden">
      {/* Scattered Golf Icons Background */}
      <div className="absolute inset-0 z-0">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1400 800" preserveAspectRatio="xMidYMid slice">
          {/* Golf Ball - Top Left */}
          <g opacity="0.25" transform="translate(120, 80)">
            <circle cx="0" cy="0" r="45" fill="white" stroke="#3B82F6" strokeWidth="3"/>
            <circle cx="-18" cy="-18" r="3" fill="#3B82F6" fillOpacity="0.6"/>
            <circle cx="0" cy="-22" r="3" fill="#3B82F6" fillOpacity="0.6"/>
            <circle cx="18" cy="-18" r="3" fill="#3B82F6" fillOpacity="0.6"/>
            <circle cx="-22" cy="0" r="3" fill="#3B82F6" fillOpacity="0.6"/>
            <circle cx="22" cy="0" r="3" fill="#3B82F6" fillOpacity="0.6"/>
            <circle cx="-18" cy="18" r="3" fill="#3B82F6" fillOpacity="0.6"/>
            <circle cx="0" cy="22" r="3" fill="#3B82F6" fillOpacity="0.6"/>
            <circle cx="18" cy="18" r="3" fill="#3B82F6" fillOpacity="0.6"/>
            <circle cx="0" cy="0" r="3" fill="#3B82F6" fillOpacity="0.6"/>
          </g>

          {/* Golf Flag - Mid Left */}
          <g opacity="0.22" transform="translate(200, 400)">
            <line x1="0" y1="0" x2="0" y2="110" stroke="#3B82F6" strokeWidth="5"/>
            <path d="M0 0 L55 22 L0 44 Z" fill="#3B82F6"/>
            <circle cx="0" cy="110" r="7" fill="#3B82F6"/>
          </g>

          {/* Golf Tee with Ball - Bottom Left */}
          <g opacity="0.28" transform="translate(150, 650)">
            <line x1="0" y1="60" x2="0" y2="130" stroke="#3B82F6" strokeWidth="5"/>
            <path d="M-15 60 L15 60 L10 130 L-10 130 Z" fill="#3B82F6"/>
            <circle cx="0" cy="25" r="32" fill="white" stroke="#3B82F6" strokeWidth="3"/>
            <circle cx="-14" cy="18" r="2.5" fill="#3B82F6" fillOpacity="0.6"/>
            <circle cx="0" cy="12" r="2.5" fill="#3B82F6" fillOpacity="0.6"/>
            <circle cx="14" cy="18" r="2.5" fill="#3B82F6" fillOpacity="0.6"/>
            <circle cx="0" cy="25" r="2.5" fill="#3B82F6" fillOpacity="0.6"/>
          </g>

          {/* Golf Ball - Center Top */}
          <g opacity="0.26" transform="translate(700, 120)">
            <circle cx="0" cy="0" r="50" fill="white" stroke="#3B82F6" strokeWidth="3"/>
            <circle cx="-20" cy="-20" r="3" fill="#3B82F6" fillOpacity="0.6"/>
            <circle cx="0" cy="-25" r="3" fill="#3B82F6" fillOpacity="0.6"/>
            <circle cx="20" cy="-20" r="3" fill="#3B82F6" fillOpacity="0.6"/>
            <circle cx="-25" cy="0" r="3" fill="#3B82F6" fillOpacity="0.6"/>
            <circle cx="25" cy="0" r="3" fill="#3B82F6" fillOpacity="0.6"/>
            <circle cx="0" cy="0" r="3" fill="#3B82F6" fillOpacity="0.6"/>
          </g>

          {/* Golf Ball - Center Bottom */}
          <g opacity="0.24" transform="translate(600, 620)">
            <circle cx="0" cy="0" r="52" fill="white" stroke="#3B82F6" strokeWidth="3"/>
            <circle cx="-21" cy="-21" r="3" fill="#3B82F6" fillOpacity="0.6"/>
            <circle cx="0" cy="-26" r="3" fill="#3B82F6" fillOpacity="0.6"/>
            <circle cx="21" cy="-21" r="3" fill="#3B82F6" fillOpacity="0.6"/>
            <circle cx="0" cy="0" r="3" fill="#3B82F6" fillOpacity="0.6"/>
          </g>

          {/* Golf Ball - Top Right */}
          <g opacity="0.3" transform="translate(1180, 100)">
            <circle cx="0" cy="0" r="48" fill="white" stroke="#3B82F6" strokeWidth="3"/>
            <circle cx="-19" cy="-19" r="3" fill="#3B82F6" fillOpacity="0.6"/>
            <circle cx="0" cy="-24" r="3" fill="#3B82F6" fillOpacity="0.6"/>
            <circle cx="19" cy="-19" r="3" fill="#3B82F6" fillOpacity="0.6"/>
            <circle cx="0" cy="0" r="3" fill="#3B82F6" fillOpacity="0.6"/>
          </g>

          {/* Golf Flag - Right Side */}
          <g opacity="0.25" transform="translate(1220, 450)">
            <line x1="0" y1="0" x2="0" y2="115" stroke="#3B82F6" strokeWidth="5"/>
            <path d="M0 0 L58 24 L0 48 Z" fill="#3B82F6"/>
            <circle cx="0" cy="115" r="8" fill="#3B82F6"/>
          </g>

          {/* Golf Ball - Bottom Right */}
          <g opacity="0.28" transform="translate(1100, 680)">
            <circle cx="0" cy="0" r="55" fill="white" stroke="#3B82F6" strokeWidth="3"/>
            <circle cx="-22" cy="-22" r="3" fill="#3B82F6" fillOpacity="0.6"/>
            <circle cx="0" cy="-28" r="3" fill="#3B82F6" fillOpacity="0.6"/>
            <circle cx="22" cy="-22" r="3" fill="#3B82F6" fillOpacity="0.6"/>
            <circle cx="0" cy="0" r="3" fill="#3B82F6" fillOpacity="0.6"/>
          </g>
        </svg>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center mb-6 sm:mb-8 bg-white p-4 sm:p-6 rounded-lg">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#131722] mb-2 sm:mb-3">
            Learn More / Use Us for Your Tournament
          </h2>
          <p className="text-base sm:text-lg text-[#5D5A6A]">
            Select a date and time that works for you using the calendar tool below
          </p>
        </div>

        <div
          className="calendly-inline-widget rounded-lg shadow-lg"
          data-url="https://calendly.com/leadrushlabs/golf-tournament"
          style={{ minWidth: '320px', height: isMobile ? '500px' : '600px' }}
        ></div>
      </div>
    </section>
  );
}
