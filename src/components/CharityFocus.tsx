export default function CharityFocus() {
  return (
    <section className="bg-white py-10 sm:py-12 md:py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#131722] text-center mb-10 sm:mb-12 md:mb-16">
          Built for charity tournaments, not generic marketing
        </h2>

        <div className="grid md:grid-cols-2 gap-8 sm:gap-10 md:gap-12 items-center">
          <div>
            <img
              src="https://images.pexels.com/photos/1325659/pexels-photo-1325659.jpeg?auto=compress&cs=tinysrgb&w=1200"
              alt="Golf course and charity event"
              className="w-full h-[300px] sm:h-[400px] md:h-[500px] object-cover rounded-lg shadow-lg"
            />
          </div>

          <div className="space-y-4 sm:space-y-6 text-base sm:text-lg text-[#5D5A6A] leading-relaxed">
            <p>
              We work specifically with charity golf tournaments, not mass-market advertising campaigns.
            </p>
            <p>
              Our focus is on sponsor alignment, respectful outreach, and event-specific timing. That means no blasting lists, no confusing asks, and no impact on the relationships you already have.
            </p>
            <p>
              Every tournament is treated as a standalone event with a clear outreach window and a clear goal: bring in sponsors who would not have heard about the event otherwise.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
