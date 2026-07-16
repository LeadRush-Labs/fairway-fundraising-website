import { Check } from 'lucide-react';

export default function ValueStatement() {
  return (
    <section className="relative py-12 sm:py-16 md:py-20 overflow-hidden bg-[#F5F5F7]">
      {/* Scattered Golf Icons Background */}
      <div className="absolute inset-0 z-0">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1400 800" preserveAspectRatio="xMidYMid slice">
          {/* Golf Ball - Top Left */}
          <g opacity="0.4" transform="translate(150, 100)">
            <circle cx="0" cy="0" r="50" fill="white" stroke="#1E8E3E" strokeWidth="3"/>
            <circle cx="-20" cy="-20" r="3" fill="#1E8E3E" fillOpacity="0.6"/>
            <circle cx="0" cy="-25" r="3" fill="#1E8E3E" fillOpacity="0.6"/>
            <circle cx="20" cy="-20" r="3" fill="#1E8E3E" fillOpacity="0.6"/>
            <circle cx="-25" cy="0" r="3" fill="#1E8E3E" fillOpacity="0.6"/>
            <circle cx="25" cy="0" r="3" fill="#1E8E3E" fillOpacity="0.6"/>
            <circle cx="-20" cy="20" r="3" fill="#1E8E3E" fillOpacity="0.6"/>
            <circle cx="0" cy="25" r="3" fill="#1E8E3E" fillOpacity="0.6"/>
            <circle cx="20" cy="20" r="3" fill="#1E8E3E" fillOpacity="0.6"/>
            <circle cx="-15" cy="-10" r="3" fill="#1E8E3E" fillOpacity="0.6"/>
            <circle cx="15" cy="-10" r="3" fill="#1E8E3E" fillOpacity="0.6"/>
            <circle cx="-15" cy="10" r="3" fill="#1E8E3E" fillOpacity="0.6"/>
            <circle cx="15" cy="10" r="3" fill="#1E8E3E" fillOpacity="0.6"/>
            <circle cx="0" cy="0" r="3" fill="#1E8E3E" fillOpacity="0.6"/>
          </g>

          {/* Golf Tee with Ball - Mid Left */}
          <g opacity="0.38" transform="translate(250, 380)">
            <line x1="0" y1="60" x2="0" y2="130" stroke="#1E8E3E" strokeWidth="5"/>
            <path d="M-15 60 L15 60 L10 130 L-10 130 Z" fill="#1E8E3E"/>
            <circle cx="0" cy="25" r="28" fill="white" stroke="#1E8E3E" strokeWidth="3"/>
            <circle cx="-12" cy="18" r="2.5" fill="#1E8E3E" fillOpacity="0.6"/>
            <circle cx="0" cy="12" r="2.5" fill="#1E8E3E" fillOpacity="0.6"/>
            <circle cx="12" cy="18" r="2.5" fill="#1E8E3E" fillOpacity="0.6"/>
            <circle cx="-12" cy="32" r="2.5" fill="#1E8E3E" fillOpacity="0.6"/>
            <circle cx="12" cy="32" r="2.5" fill="#1E8E3E" fillOpacity="0.6"/>
            <circle cx="0" cy="25" r="2.5" fill="#1E8E3E" fillOpacity="0.6"/>
          </g>

          {/* Golf Flag - Bottom Left */}
          <g opacity="0.28" transform="translate(180, 650)">
            <line x1="0" y1="0" x2="0" y2="100" stroke="#1E8E3E" strokeWidth="5"/>
            <path d="M0 0 L50 20 L0 40 Z" fill="#1E8E3E"/>
            <circle cx="0" cy="100" r="7" fill="#1E8E3E"/>
          </g>

          {/* Golf Ball - Center Top */}
          <g opacity="0.32" transform="translate(700, 150)">
            <circle cx="0" cy="0" r="40" fill="white" stroke="#1E8E3E" strokeWidth="3"/>
            <circle cx="-16" cy="-16" r="2.5" fill="#1E8E3E" fillOpacity="0.6"/>
            <circle cx="0" cy="-20" r="2.5" fill="#1E8E3E" fillOpacity="0.6"/>
            <circle cx="16" cy="-16" r="2.5" fill="#1E8E3E" fillOpacity="0.6"/>
            <circle cx="-20" cy="0" r="2.5" fill="#1E8E3E" fillOpacity="0.6"/>
            <circle cx="20" cy="0" r="2.5" fill="#1E8E3E" fillOpacity="0.6"/>
            <circle cx="-16" cy="16" r="2.5" fill="#1E8E3E" fillOpacity="0.6"/>
            <circle cx="0" cy="20" r="2.5" fill="#1E8E3E" fillOpacity="0.6"/>
            <circle cx="16" cy="16" r="2.5" fill="#1E8E3E" fillOpacity="0.6"/>
            <circle cx="0" cy="0" r="2.5" fill="#1E8E3E" fillOpacity="0.6"/>
          </g>

          {/* Golf Ball - Center Bottom */}
          <g opacity="0.36" transform="translate(650, 600)">
            <circle cx="0" cy="0" r="48" fill="white" stroke="#1E8E3E" strokeWidth="3"/>
            <circle cx="-19" cy="-19" r="3" fill="#1E8E3E" fillOpacity="0.6"/>
            <circle cx="0" cy="-24" r="3" fill="#1E8E3E" fillOpacity="0.6"/>
            <circle cx="19" cy="-19" r="3" fill="#1E8E3E" fillOpacity="0.6"/>
            <circle cx="-24" cy="0" r="3" fill="#1E8E3E" fillOpacity="0.6"/>
            <circle cx="24" cy="0" r="3" fill="#1E8E3E" fillOpacity="0.6"/>
            <circle cx="-19" cy="19" r="3" fill="#1E8E3E" fillOpacity="0.6"/>
            <circle cx="0" cy="24" r="3" fill="#1E8E3E" fillOpacity="0.6"/>
            <circle cx="19" cy="19" r="3" fill="#1E8E3E" fillOpacity="0.6"/>
            <circle cx="0" cy="0" r="3" fill="#1E8E3E" fillOpacity="0.6"/>
          </g>

          {/* Golf Ball - Top Right */}
          <g opacity="0.35" transform="translate(1200, 120)">
            <circle cx="0" cy="0" r="45" fill="white" stroke="#1E8E3E" strokeWidth="3"/>
            <circle cx="-18" cy="-18" r="3" fill="#1E8E3E" fillOpacity="0.6"/>
            <circle cx="0" cy="-22" r="3" fill="#1E8E3E" fillOpacity="0.6"/>
            <circle cx="18" cy="-18" r="3" fill="#1E8E3E" fillOpacity="0.6"/>
            <circle cx="-22" cy="0" r="3" fill="#1E8E3E" fillOpacity="0.6"/>
            <circle cx="22" cy="0" r="3" fill="#1E8E3E" fillOpacity="0.6"/>
            <circle cx="-18" cy="18" r="3" fill="#1E8E3E" fillOpacity="0.6"/>
            <circle cx="0" cy="22" r="3" fill="#1E8E3E" fillOpacity="0.6"/>
            <circle cx="18" cy="18" r="3" fill="#1E8E3E" fillOpacity="0.6"/>
            <circle cx="-12" cy="-9" r="3" fill="#1E8E3E" fillOpacity="0.6"/>
            <circle cx="12" cy="-9" r="3" fill="#1E8E3E" fillOpacity="0.6"/>
            <circle cx="0" cy="0" r="3" fill="#1E8E3E" fillOpacity="0.6"/>
          </g>

          {/* Golf Flag - Right Side */}
          <g opacity="0.3" transform="translate(1250, 400)">
            <line x1="0" y1="0" x2="0" y2="120" stroke="#1E8E3E" strokeWidth="5"/>
            <path d="M0 0 L60 25 L0 50 Z" fill="#1E8E3E"/>
            <circle cx="0" cy="120" r="8" fill="#1E8E3E"/>
          </g>

          {/* Golf Ball - Bottom Right */}
          <g opacity="0.42" transform="translate(1150, 680)">
            <circle cx="0" cy="0" r="55" fill="white" stroke="#1E8E3E" strokeWidth="3"/>
            <circle cx="-22" cy="-22" r="3" fill="#1E8E3E" fillOpacity="0.6"/>
            <circle cx="0" cy="-28" r="3" fill="#1E8E3E" fillOpacity="0.6"/>
            <circle cx="22" cy="-22" r="3" fill="#1E8E3E" fillOpacity="0.6"/>
            <circle cx="-28" cy="0" r="3" fill="#1E8E3E" fillOpacity="0.6"/>
            <circle cx="28" cy="0" r="3" fill="#1E8E3E" fillOpacity="0.6"/>
            <circle cx="-22" cy="22" r="3" fill="#1E8E3E" fillOpacity="0.6"/>
            <circle cx="0" cy="28" r="3" fill="#1E8E3E" fillOpacity="0.6"/>
            <circle cx="22" cy="22" r="3" fill="#1E8E3E" fillOpacity="0.6"/>
            <circle cx="-16" cy="-11" r="3" fill="#1E8E3E" fillOpacity="0.6"/>
            <circle cx="16" cy="-11" r="3" fill="#1E8E3E" fillOpacity="0.6"/>
            <circle cx="-16" cy="11" r="3" fill="#1E8E3E" fillOpacity="0.6"/>
            <circle cx="16" cy="11" r="3" fill="#1E8E3E" fillOpacity="0.6"/>
            <circle cx="0" cy="0" r="3" fill="#1E8E3E" fillOpacity="0.6"/>
          </g>
        </svg>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6">
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-6 sm:p-10 md:p-12 lg:p-16 relative overflow-hidden">
          <div
            className="absolute inset-0 opacity-[0.03] pointer-events-none"
            style={{
              backgroundImage: 'url("https://images.pexels.com/photos/54123/pexels-photo-54123.jpeg?auto=compress&cs=tinysrgb&w=1200")',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          />

          <div className="relative z-10">
            <div className="text-center mb-8 sm:mb-10">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#131722] mb-4 sm:mb-5">
                More sponsors. No Out-Of-Pocket Cost to You.
              </h2>
              <div className="w-20 sm:w-24 h-1 bg-[#1E8E3E] mx-auto"></div>
            </div>

            <div className="max-w-2xl mx-auto">
              <div className="text-base sm:text-lg md:text-xl text-[#5D5A6A] leading-relaxed space-y-6 sm:space-y-8 text-center">
                <p>
                  Most tournaments rely on personal networks and repeat donors. We help you reach businesses that already sponsor golf events but would not have heard about your tournament otherwise.
                </p>

                <div className="flex items-center justify-center gap-3 pt-2 sm:pt-4">
                  <Check className="w-5 h-5 sm:w-6 sm:h-6 text-[#1E8E3E] flex-shrink-0" />
                  <p className="font-semibold text-[#131722] text-base sm:text-lg md:text-xl">
                    We only focus on sponsors you wouldn't otherwise reach.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
