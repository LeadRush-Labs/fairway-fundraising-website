export default function About() {
  return (
    <section className="bg-white py-12 sm:py-16 md:py-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-8 sm:mb-10">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#131722] mb-3 sm:mb-4">
            Built by someone who has had to run the tournament.
          </h2>
          <div className="w-16 sm:w-20 h-1 bg-[#1E8E3E] mx-auto"></div>
        </div>

        <div className="mb-10">
          <img
            src="/openart-image_dfif9w8q_1770140953099_raw_(1).jpg"
            alt="Harrison Strohl on a golf course"
            className="w-full max-w-md mx-auto rounded-lg shadow-lg"
          />
        </div>

        <div className="prose prose-lg max-w-none text-center">
          <p className="text-lg sm:text-xl text-[#131722] font-semibold leading-relaxed mb-6">
            Hi, my name is Harrison Strohl.
          </p>

          <div className="text-base sm:text-lg text-[#5D5A6A] leading-relaxed space-y-6 text-left max-w-2xl mx-auto">
            <p>
              I started Fairway Fundraising after helping run a charity golf tournament and seeing how much work falls on the organizer.
            </p>
            <p>
              The event itself was meaningful. The cause mattered. But the behind-the-scenes work was constant: promotion, registration, sponsor materials, golfer communication, follow-up, and all the small details that make the tournament feel organized.
            </p>
            <p>
              Most charity tournaments do not fail because people do not care. They struggle because the team is stretched thin.
            </p>
            <p>
              Fairway Fundraising exists to give tournament organizers practical support without adding cost. We help with the marketing and event work that makes a tournament look more professional, reach more people, and run more smoothly.
            </p>
            <p>
              If you are organizing a charity golf tournament and could use help, I would love to see if we can support your event.
            </p>
          </div>
        </div>

        <div className="mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-gray-200 text-center">
          <button
            onClick={() => document.getElementById('calendly')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-[#1E8E3E] text-white px-6 sm:px-8 py-3 sm:py-3.5 rounded-md hover:bg-[#2E7D32] transition-colors font-medium text-base sm:text-lg"
          >
            Get in Touch
          </button>
        </div>
      </div>
    </section>
  );
}
