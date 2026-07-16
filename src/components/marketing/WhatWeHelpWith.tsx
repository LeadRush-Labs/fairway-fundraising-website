import { Megaphone, ClipboardCheck, FileText, Mail, ClipboardList, MessageSquareHeart } from 'lucide-react';

const cards = [
  {
    icon: Megaphone,
    title: 'Tournament Promotion',
    description: 'Social media content, event visibility, local awareness, and simple marketing support.',
    value: 'More people in your community actually hear about your event before tee-off.',
    extras: ['We try to get your event on the news', 'We let local businesses in your network know the tournament is happening'],
  },
  {
    icon: ClipboardCheck,
    title: 'Registration Support',
    description: 'QR codes, registration links, golfer forms, payment links, and reminder communication.',
    value: 'Golfers and sponsors can sign up in minutes instead of chasing you for details.',
  },
  {
    icon: FileText,
    title: 'Event Materials',
    description: 'Flyers, sponsor-facing materials, golfer information, website updates, and simple tournament assets.',
    value: 'Your event looks organized and professional from the first impression.',
  },
  {
    icon: Mail,
    title: 'Golfer Communication',
    description: 'Emails, reminders, event instructions, check-in details, and follow-up messaging.',
    value: 'Golfers show up prepared, on time, and knowing exactly what to expect.',
  },
  {
    icon: ClipboardList,
    title: 'Day-Of Readiness',
    description: 'Check-in sheets, timelines, volunteer notes, sponsor lists, and organized event documents.',
    value: 'The day runs smoothly because everything is organized before anyone arrives.',
  },
  {
    icon: MessageSquareHeart,
    title: 'Post-Event Follow-Up',
    description: 'Thank-you messages, recap content, photo collection, and next-year momentum.',
    value: 'Sponsors and golfers feel appreciated and are more likely to return next year.',
  },
];

export default function WhatWeHelpWith() {
  return (
    <section className="relative py-12 sm:py-16 md:py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-10 sm:mb-12 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#131722] mb-3 sm:mb-4">
            We help with the work that makes your tournament feel bigger and run smoother.
          </h2>
          <div className="w-16 sm:w-20 h-1 bg-[#1E8E3E] mx-auto"></div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {cards.map((card, index) => {
            const Icon = card.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-xl p-6 sm:p-8 shadow-lg border border-gray-100 hover:shadow-xl hover:border-[#1E8E3E]/30 transition-all duration-300"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 bg-[#1E8E3E]/10 rounded-xl flex items-center justify-center">
                    <Icon className="w-6 h-6 sm:w-7 sm:h-7 text-[#1E8E3E]" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-[#131722]">{card.title}</h3>
                </div>
                <p className="text-[#5D5A6A] leading-relaxed text-sm sm:text-base mb-4">{card.description}</p>

                {card.extras && (
                  <ul className="space-y-2 mb-4">
                    {card.extras.map((extra, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-[#5D5A6A]">
                        <span className="w-1.5 h-1.5 bg-[#1E8E3E] rounded-full mt-2 flex-shrink-0"></span>
                        <span>{extra}</span>
                      </li>
                    ))}
                  </ul>
                )}

                <div className="pt-4 border-t border-gray-100">
                  <p className="text-sm font-semibold text-[#1E8E3E] leading-relaxed">{card.value}</p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-10 sm:mt-12 md:mt-16">
          <button
            onClick={() => document.getElementById('calendly')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-gradient-to-r from-[#FBBB04] to-[#FFA500] text-white px-8 sm:px-10 md:px-12 py-4 sm:py-4.5 md:py-5 rounded-lg hover:from-[#FFA500] hover:to-[#FBBB04] hover:scale-105 transition-all duration-500 font-bold text-lg sm:text-xl md:text-2xl shadow-xl hover:shadow-[#FBBB04]/50"
          >
            Request Support for Your Event
          </button>
        </div>
      </div>
    </section>
  );
}
