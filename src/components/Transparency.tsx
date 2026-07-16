import { Check } from 'lucide-react';

export default function Transparency() {
  const benefits = [
    'No cost to your organization',
    'We split funds raised from new sponsors that would not have heard about the event otherwise',
    'No long-term contracts',
    'No impact on your existing sponsors',
  ];

  return (
    <section id="sponsors" className="bg-gradient-to-br from-[#E8F5E9] to-[#F1F8E9] py-12 sm:py-16 md:py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-10 sm:mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#131722] mb-3 sm:mb-4">
            Transparent and Aligned
          </h2>
          <div className="w-16 sm:w-20 h-1 bg-[#FBBB04] mx-auto"></div>
        </div>

        <p className="text-lg sm:text-xl text-[#131722] text-center mb-8 sm:mb-10 font-medium">
          Designed to add money to your event, not complexity.
        </p>

        <div className="bg-white rounded-xl p-6 sm:p-8 md:p-10 shadow-lg">
          <div className="space-y-4 sm:space-y-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start gap-3 sm:gap-4">
                <Check className="w-6 h-6 sm:w-7 sm:h-7 text-[#1E8E3E] flex-shrink-0 mt-0.5 sm:mt-1" />
                <span className="text-base sm:text-lg text-[#131722] leading-relaxed">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
