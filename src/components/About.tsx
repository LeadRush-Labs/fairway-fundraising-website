export default function About() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-12 sm:py-16 md:py-20">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#131722] mb-6 sm:mb-8">About</h1>

        <div className="mb-12">
          <img
            src="/openart-image_dfif9w8q_1770140953099_raw_(1).jpg"
            alt="Harrison Strohl and partner on golf course"
            className="w-full max-w-2xl mx-auto rounded-lg shadow-lg"
          />
        </div>

        <div className="prose prose-lg max-w-none">
          <p className="text-lg sm:text-xl text-[#5D5A6A] leading-relaxed mb-6">
            Hi, my name is Harrison Strohl.
          </p>

          <p className="text-base sm:text-lg text-[#5D5A6A] leading-relaxed mb-6">
            I've spent the last six years working in sales and marketing, but I found my real calling in fundraising.
          </p>

          <p className="text-base sm:text-lg text-[#5D5A6A] leading-relaxed mb-6">
            When I stepped into a new fundraising coordinator role at John Melvin Christian College, one of my first responsibilities was helping run a charity golf tournament. The event itself was solid. The cause mattered. But sponsor outreach quickly became the hardest part of the job. It was time-consuming, uncomfortable at times, and easy to push down the list when everything else needed attention.
          </p>

          <p className="text-base sm:text-lg text-[#5D5A6A] leading-relaxed mb-6">
            What became clear was that the issue wasn't the tournament. It was awareness. Many local businesses that regularly sponsor golf events simply never heard about it.
          </p>

          <p className="text-base sm:text-lg text-[#5D5A6A] leading-relaxed mb-6">
            So we built a simple, focused way to put the tournament in front of the right sponsors without asking the same donors for more or leaning entirely on personal networks. That approach helped us run a successful event in our first year and bring in meaningful new sponsorship support.
          </p>

          <p className="text-base sm:text-lg text-[#5D5A6A] leading-relaxed mb-6">
            Fairway Fundraising came directly out of that experience.
          </p>

          <p className="text-base sm:text-lg text-[#5D5A6A] leading-relaxed mb-6">
            This isn't theory or generic marketing. It's built by someone who has been in the seat, felt the pressure of making a tournament succeed, and genuinely cares about helping charity events raise more money without adding stress to the people running them.
          </p>

          <p className="text-lg text-[#5D5A6A] leading-relaxed mb-8">
            If you're organizing a golf tournament and could use help reaching new sponsors, I'd love to see if this could be useful for your event.
          </p>

          <div className="mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-gray-200 text-center">
            <button
              onClick={() => document.getElementById('calendly')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-[#1E8E3E] text-white px-6 sm:px-8 py-3 sm:py-3.5 rounded-md hover:bg-[#2E7D32] transition-colors font-medium text-base sm:text-lg"
            >
              Get in Touch
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
