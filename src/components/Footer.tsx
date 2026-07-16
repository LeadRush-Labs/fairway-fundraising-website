export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 py-8 sm:py-10 md:py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center">
          <div className="text-lg sm:text-xl font-semibold text-[#131722] mb-3 sm:mb-4">
            Fairway Fundraising
          </div>
          <p className="text-sm sm:text-base text-[#5D5A6A] mb-4 sm:mb-6">
            Connecting charity golf tournaments with mission-aligned sponsors
          </p>
          <div className="text-xs sm:text-sm text-[#5D5A6A] space-y-1">
            <div>© 2026 Fairway Fundraising. All rights reserved.</div>
            <div>
              <a
                href="https://www.flaticon.com/free-icons/golf"
                title="golf icons"
                className="hover:text-[#1e6b3e] transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                Golf icons created by Hilmy Abiyyu A. - Flaticon
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
