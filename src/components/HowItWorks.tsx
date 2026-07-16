export default function HowItWorks() {
  const steps = [
    {
      number: '1',
      title: 'Submit your event',
      description: 'Share the basics about your tournament, date, location, and sponsorship opportunities.',
    },
    {
      number: '2',
      title: 'We match sponsors',
      description: 'We place your tournament in front of businesses that already sponsor golf events and align with your mission.',
    },
    {
      number: '3',
      title: 'We handle outreach and coordination',
      description: 'We manage sponsor conversations and coordination during a short outreach window.',
    },
    {
      number: '4',
      title: 'You receive new sponsorships',
      description: 'Any sponsors that come through us are new to your event.',
    },
  ];

  return (
    <section id="how-it-works" className="relative py-10 sm:py-12 md:py-14 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.pexels.com/photos/914682/pexels-photo-914682.jpeg?auto=compress&cs=tinysrgb&w=1600"
          alt="Golf tournament with people"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-white/60"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-10 sm:mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#131722] mb-3 sm:mb-4">
            How it works
          </h2>
          <div className="w-16 sm:w-20 h-1 bg-[#1E8E3E] mx-auto"></div>
        </div>

        <div className="relative mb-10 sm:mb-12 md:mb-16">
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#1E8E3E] via-[#1E8E3E]/50 to-transparent transform -translate-x-1/2"></div>

          <div className="grid md:grid-cols-2 gap-x-8 md:gap-x-12 gap-y-6 sm:gap-y-8 md:gap-y-10">
            {steps.map((step, index) => (
              <div
                key={step.number}
                className={`relative ${index % 2 === 0 ? 'md:mt-0' : 'md:mt-12'}`}
              >
                <div className="bg-white rounded-xl p-6 sm:p-8 md:p-10 shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="flex items-start gap-4 sm:gap-6">
                    <div className="flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-[#1E8E3E] text-white rounded-full flex items-center justify-center text-xl sm:text-2xl font-bold shadow-md">
                      {step.number}
                    </div>
                    <div>
                      <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-[#131722] mb-2 sm:mb-3 md:mb-4">
                        {step.title}
                      </h3>
                      <p className="text-[#5D5A6A] leading-relaxed text-sm sm:text-base md:text-lg">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center">
          <button
            onClick={() => document.getElementById('calendly')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-gradient-to-r from-[#FBBB04] to-[#FFA500] text-white px-8 sm:px-10 md:px-12 py-4 sm:py-4.5 md:py-5 rounded-lg hover:from-[#FFA500] hover:to-[#FBBB04] hover:scale-105 transition-all duration-500 font-bold text-lg sm:text-xl md:text-2xl shadow-xl hover:shadow-[#FBBB04]/50"
          >
            Request for Your Event
          </button>
        </div>
      </div>
    </section>
  );
}
