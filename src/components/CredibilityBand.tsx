import { Globe, UserPlus, Shield } from 'lucide-react';

export default function CredibilityBand() {
  const features = [
    {
      icon: Globe,
      headline: 'NATIONAL REACH',
      subline: 'Access to sponsor-ready businesses across multiple markets.',
    },
    {
      icon: UserPlus,
      headline: 'NEW SPONSORS',
      subline: 'We focus on sponsors that would not have heard about your event otherwise.',
    },
    {
      icon: Shield,
      headline: 'NO COST TO YOU',
      subline: 'No upfront fees. We only participate when new sponsors come in.',
    },
  ];

  return (
    <section className="relative py-16 sm:py-24 md:py-32 bg-gradient-to-b from-[#FAFAFA] to-[#F8F8F8] overflow-hidden">
      {/* Subtle Golf Pattern Background */}
      <div className="absolute inset-0 opacity-[0.03]">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="golf-pattern" x="0" y="0" width="120" height="120" patternUnits="userSpaceOnUse">
              <circle cx="15" cy="15" r="8" fill="none" stroke="#1E8E3E" strokeWidth="1.5"/>
              <circle cx="12" cy="12" r="1" fill="#1E8E3E" fillOpacity="0.4"/>
              <circle cx="18" cy="12" r="1" fill="#1E8E3E" fillOpacity="0.4"/>
              <circle cx="15" cy="18" r="1" fill="#1E8E3E" fillOpacity="0.4"/>
              <line x1="90" y1="90" x2="90" y2="110" stroke="#1E8E3E" strokeWidth="2"/>
              <path d="M90 90 L105 97 L90 104 Z" fill="#1E8E3E"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#golf-pattern)"/>
        </svg>
      </div>

      {/* Divider Lines */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#1E8E3E]/20 to-transparent"></div>
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#1E8E3E]/20 to-transparent"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid md:grid-cols-3 gap-12 md:gap-10 lg:gap-12">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-6 sm:mb-8">
                  <Icon className="w-16 h-16 sm:w-18 sm:h-18 md:w-20 md:h-20 text-[#1E8E3E] stroke-[1.5]" />
                </div>
                <h3 className="text-[#131722] font-bold text-base sm:text-lg mb-3 sm:mb-4 tracking-[0.15em] uppercase">
                  {feature.headline}
                </h3>
                <p className="text-[#5D5A6A] text-base sm:text-lg leading-relaxed">
                  {feature.subline}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
