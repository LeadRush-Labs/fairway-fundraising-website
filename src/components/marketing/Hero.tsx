import { Check } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-[500px] sm:min-h-[600px] flex items-center justify-center">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url(https://images.pexels.com/photos/1409004/pexels-photo-1409004.jpeg?auto=compress&cs=tinysrgb&w=1920)',
        }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center py-8 sm:py-0">
        <div className="bg-white/95 backdrop-blur-sm rounded-lg p-6 sm:p-10 md:p-12 shadow-xl">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#131722] mb-4 sm:mb-6 leading-tight">
            Free Marketing and Event Support for Charity Golf Tournaments
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-[#5D5A6A] mb-6 sm:mb-8 leading-relaxed">
            We help your tournament get more exposure, simplify registration, and run smoother without adding cost or work to your team.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-6 sm:mb-8">
            <button
              onClick={() => document.getElementById('calendly')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-[#1E8E3E] text-white px-6 sm:px-8 py-3 sm:py-3.5 rounded-lg hover:bg-[#2E7D32] transition-colors font-bold text-base sm:text-lg shadow-xl"
            >
              Request Support for Your Event
            </button>
            <button
              onClick={() => document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' })}
              className="border-2 border-[#1E8E3E] text-[#1E8E3E] px-6 sm:px-8 py-3 sm:py-3.5 rounded-md hover:bg-gray-50 transition-colors font-semibold text-base sm:text-lg"
            >
              See How It Works
            </button>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center text-sm text-[#5D5A6A]">
            <div className="flex items-center justify-center gap-2">
              <Check className="w-5 h-5 text-[#1E8E3E] flex-shrink-0" />
              <span>No cost to your tournament</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <Check className="w-5 h-5 text-[#1E8E3E] flex-shrink-0" />
              <span>No added work for your team</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <Check className="w-5 h-5 text-[#1E8E3E] flex-shrink-0" />
              <span>Built specifically for charity golf events</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
