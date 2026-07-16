export default function HowItWorks() {
  const steps = [
    {
      number: '1',
      title: 'Submit your tournament',
      description: 'Share the event date, location, cause, registration link, and what support would help most.',
    },
    {
      number: '2',
      title: 'We build your support plan',
      description: 'We identify the highest-value ways we can help, from promotion and registration to event materials and golfer communication.',
    },
    {
      number: '3',
      title: 'We help execute',
      description: 'Our team supports the marketing and event details so your tournament looks more professional and runs more smoothly.',
    },
    {
      number: '4',
      title: 'Your tournament gets more visibility',
      description: 'You get practical support without adding cost, stress, or extra work to your team.',
    },
  ];

  return (
    <section id="how-it-works" className="relative py-10 sm:py-12 md:py-14 overflow-hidden">
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
            Simple support. No upfront cost. No added complexity.
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
      </div>
    </section>
  );
}
