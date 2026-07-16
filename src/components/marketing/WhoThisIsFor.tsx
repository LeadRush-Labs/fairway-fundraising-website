import { CheckCircle2 } from 'lucide-react';

export default function WhoThisIsFor() {
  const fitFor = [
    'You are organizing a charity golf tournament.',
    'You could use help with promotion, registration, or event communication.',
  ];

  return (
    <section className="relative py-12 sm:py-16 md:py-20 bg-white overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-10 sm:mb-12 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#131722] mb-3 sm:mb-4">
            Built for charity tournaments that need more support, not more work.
          </h2>
          <div className="w-16 sm:w-20 h-1 bg-[#1E8E3E] mx-auto"></div>
        </div>

        <div className="bg-[#F5F5F7] rounded-2xl p-6 sm:p-8 md:p-10">
          <p className="text-lg sm:text-xl font-semibold text-[#131722] text-center mb-6 sm:mb-8">
            This is a good fit if:
          </p>
          <div className="space-y-4 sm:space-y-6 max-w-2xl mx-auto">
            {fitFor.map((item, index) => (
              <div key={index} className="flex items-start gap-3 sm:gap-4 bg-white rounded-lg p-4 sm:p-5 shadow-sm">
                <CheckCircle2 className="w-6 h-6 text-[#1E8E3E] flex-shrink-0 mt-0.5" />
                <span className="text-base sm:text-lg text-[#131722] leading-relaxed">{item}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-10 sm:mt-12">
          <button
            onClick={() => document.getElementById('calendly')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-[#1E8E3E] text-white px-8 sm:px-10 md:px-12 py-4 sm:py-4.5 md:py-5 rounded-lg hover:bg-[#2E7D32] hover:scale-105 transition-all duration-300 font-bold text-lg sm:text-xl md:text-2xl shadow-xl"
          >
            See If Your Tournament Qualifies
          </button>
        </div>
      </div>
    </section>
  );
}
