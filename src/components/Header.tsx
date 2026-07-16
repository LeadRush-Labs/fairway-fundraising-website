import { Link, useLocation } from 'react-router-dom';
import { Flag } from 'lucide-react';

export default function Header() {
  const location = useLocation();
  const isHome = location.pathname === '/';
  const isSponsorships = location.pathname === '/get-sponsorships';

  return (
    <header className="bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 sm:py-4">
        <nav className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 text-lg sm:text-xl font-semibold text-[#131722] hover:text-[#1E8E3E] transition-colors">
            <Flag className="w-4 h-4 sm:w-5 sm:h-5 text-[#1E8E3E]" />
            <span>Fairway Fundraising</span>
          </Link>

          <div className="hidden md:flex items-center gap-8 text-[#5D5A6A]">
            {isHome ? (
              <>
                <a href="#how-it-works" className="hover:text-[#131722] transition-colors">
                  How It Works
                </a>
                <a href="#sponsors" className="hover:text-[#131722] transition-colors">
                  Sponsors
                </a>
                <a href="#faq" className="hover:text-[#131722] transition-colors">
                  FAQ
                </a>
              </>
            ) : isSponsorships ? (
              <>
                <a href="#how-it-works" className="hover:text-[#131722] transition-colors">
                  How It Works
                </a>
                <a href="#sponsors" className="hover:text-[#131722] transition-colors">
                  Sponsors
                </a>
                <a href="#faq" className="hover:text-[#131722] transition-colors">
                  FAQ
                </a>
              </>
            ) : (
              <Link to="/" className="hover:text-[#131722] transition-colors">
                Home
              </Link>
            )}
            <Link to="/about" className="hover:text-[#131722] transition-colors">
              About
            </Link>
          </div>

          <button
            onClick={() => document.getElementById('calendly')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-white text-[#1E8E3E] border-2 border-[#1E8E3E] px-3 sm:px-6 md:px-8 py-2 sm:py-2.5 md:py-3 rounded-lg hover:bg-[#1E8E3E] hover:text-white transition-all duration-300 font-bold text-sm sm:text-base md:text-lg shadow-md hover:shadow-lg"
          >
            <span className="hidden sm:inline">Request for Your Event</span>
            <span className="sm:hidden">Request</span>
          </button>
        </nav>
      </div>
    </header>
  );
}
