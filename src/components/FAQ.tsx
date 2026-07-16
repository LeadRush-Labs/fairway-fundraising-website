import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs: FAQItem[] = [
    {
      question: 'What type of businesses will you bring to sponsor my tournament?',
      answer: 'These are mostly local and regional businesses - think banks, insurance agencies, real estate groups, medical practices, construction companies, local brands like that. We\'ve built relationships with them through previous events, sponsor outreach, and ongoing conversations with businesses that regularly support golf events.',
    },
    {
      question: 'Do you contact our existing sponsors?',
      answer: 'No, we only reach out to new potential sponsors that you would not have otherwise connected with. We focus exclusively on expanding your sponsor base, not contacting your existing relationships.',
    },
    {
      question: 'What if we already have sponsors lined up?',
      answer: "That's great! We work alongside your existing sponsor efforts. Our goal is to bring additional sponsors to your event that complement the ones you've already secured through your own networks.",
    },
    {
      question: 'How quickly can you start?',
      answer: 'We can typically begin the matching process within a few days of receiving your event information. The outreach window is designed to be efficient and coordinated around your tournament timeline.',
    },
    {
      question: 'How are sponsors introduced to the event?',
      answer: 'We handle the initial outreach and coordination, then facilitate a warm introduction between you and the sponsor. You maintain full control over the final sponsorship agreement and relationship.',
    },
    {
      question: 'What information do you need from us?',
      answer: 'We need basic details about your tournament including the date, location, beneficiary organization, available sponsorship levels, and any specific missions or causes your event supports.',
    },
    {
      question: 'Is there any long-term commitment?',
      answer: 'No, there are no long-term contracts or commitments. We work with you on a per-event basis, and you only benefit when we successfully bring new sponsors to your tournament.',
    },
  ];

  return (
    <section id="faq" className="relative bg-[#F5F5F7] py-12 sm:py-16 md:py-24 overflow-hidden">
      {/* Scattered Golf Icons Background */}
      <div className="absolute inset-0 z-0">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1400 800" preserveAspectRatio="xMidYMid slice">
          {/* Golf Ball - Top Left */}
          <g opacity="0.3" transform="translate(150, 100)">
            <circle cx="0" cy="0" r="50" fill="white" stroke="#1E8E3E" strokeWidth="3"/>
            <circle cx="-20" cy="-20" r="3" fill="#1E8E3E" fillOpacity="0.6"/>
            <circle cx="0" cy="-25" r="3" fill="#1E8E3E" fillOpacity="0.6"/>
            <circle cx="20" cy="-20" r="3" fill="#1E8E3E" fillOpacity="0.6"/>
            <circle cx="-25" cy="0" r="3" fill="#1E8E3E" fillOpacity="0.6"/>
            <circle cx="25" cy="0" r="3" fill="#1E8E3E" fillOpacity="0.6"/>
            <circle cx="-20" cy="20" r="3" fill="#1E8E3E" fillOpacity="0.6"/>
            <circle cx="0" cy="25" r="3" fill="#1E8E3E" fillOpacity="0.6"/>
            <circle cx="20" cy="20" r="3" fill="#1E8E3E" fillOpacity="0.6"/>
            <circle cx="0" cy="0" r="3" fill="#1E8E3E" fillOpacity="0.6"/>
          </g>

          {/* Golf Tee with Ball - Mid Left */}
          <g opacity="0.28" transform="translate(250, 380)">
            <line x1="0" y1="60" x2="0" y2="130" stroke="#1E8E3E" strokeWidth="5"/>
            <path d="M-15 60 L15 60 L10 130 L-10 130 Z" fill="#1E8E3E"/>
            <circle cx="0" cy="25" r="28" fill="white" stroke="#1E8E3E" strokeWidth="3"/>
            <circle cx="-12" cy="18" r="2.5" fill="#1E8E3E" fillOpacity="0.6"/>
            <circle cx="0" cy="12" r="2.5" fill="#1E8E3E" fillOpacity="0.6"/>
            <circle cx="12" cy="18" r="2.5" fill="#1E8E3E" fillOpacity="0.6"/>
            <circle cx="0" cy="25" r="2.5" fill="#1E8E3E" fillOpacity="0.6"/>
          </g>

          {/* Golf Flag - Bottom Left */}
          <g opacity="0.22" transform="translate(180, 650)">
            <line x1="0" y1="0" x2="0" y2="100" stroke="#1E8E3E" strokeWidth="5"/>
            <path d="M0 0 L50 20 L0 40 Z" fill="#1E8E3E"/>
            <circle cx="0" cy="100" r="7" fill="#1E8E3E"/>
          </g>

          {/* Golf Ball - Center Top */}
          <g opacity="0.25" transform="translate(700, 150)">
            <circle cx="0" cy="0" r="40" fill="white" stroke="#1E8E3E" strokeWidth="3"/>
            <circle cx="-16" cy="-16" r="2.5" fill="#1E8E3E" fillOpacity="0.6"/>
            <circle cx="0" cy="-20" r="2.5" fill="#1E8E3E" fillOpacity="0.6"/>
            <circle cx="16" cy="-16" r="2.5" fill="#1E8E3E" fillOpacity="0.6"/>
            <circle cx="-20" cy="0" r="2.5" fill="#1E8E3E" fillOpacity="0.6"/>
            <circle cx="20" cy="0" r="2.5" fill="#1E8E3E" fillOpacity="0.6"/>
            <circle cx="0" cy="0" r="2.5" fill="#1E8E3E" fillOpacity="0.6"/>
          </g>

          {/* Golf Ball - Center Bottom */}
          <g opacity="0.26" transform="translate(650, 600)">
            <circle cx="0" cy="0" r="48" fill="white" stroke="#1E8E3E" strokeWidth="3"/>
            <circle cx="-19" cy="-19" r="3" fill="#1E8E3E" fillOpacity="0.6"/>
            <circle cx="0" cy="-24" r="3" fill="#1E8E3E" fillOpacity="0.6"/>
            <circle cx="19" cy="-19" r="3" fill="#1E8E3E" fillOpacity="0.6"/>
            <circle cx="0" cy="0" r="3" fill="#1E8E3E" fillOpacity="0.6"/>
          </g>

          {/* Golf Ball - Top Right */}
          <g opacity="0.28" transform="translate(1200, 120)">
            <circle cx="0" cy="0" r="45" fill="white" stroke="#1E8E3E" strokeWidth="3"/>
            <circle cx="-18" cy="-18" r="3" fill="#1E8E3E" fillOpacity="0.6"/>
            <circle cx="0" cy="-22" r="3" fill="#1E8E3E" fillOpacity="0.6"/>
            <circle cx="18" cy="-18" r="3" fill="#1E8E3E" fillOpacity="0.6"/>
            <circle cx="0" cy="0" r="3" fill="#1E8E3E" fillOpacity="0.6"/>
          </g>

          {/* Golf Flag - Right Side */}
          <g opacity="0.24" transform="translate(1250, 400)">
            <line x1="0" y1="0" x2="0" y2="120" stroke="#1E8E3E" strokeWidth="5"/>
            <path d="M0 0 L60 25 L0 50 Z" fill="#1E8E3E"/>
            <circle cx="0" cy="120" r="8" fill="#1E8E3E"/>
          </g>

          {/* Golf Ball - Bottom Right */}
          <g opacity="0.32" transform="translate(1150, 680)">
            <circle cx="0" cy="0" r="55" fill="white" stroke="#1E8E3E" strokeWidth="3"/>
            <circle cx="-22" cy="-22" r="3" fill="#1E8E3E" fillOpacity="0.6"/>
            <circle cx="0" cy="-28" r="3" fill="#1E8E3E" fillOpacity="0.6"/>
            <circle cx="22" cy="-22" r="3" fill="#1E8E3E" fillOpacity="0.6"/>
            <circle cx="0" cy="0" r="3" fill="#1E8E3E" fillOpacity="0.6"/>
          </g>
        </svg>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#131722] text-center mb-10 sm:mb-12 md:mb-16">
          Frequently Asked Questions
        </h2>

        <div className="space-y-3 sm:space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white rounded-lg overflow-hidden shadow-sm">
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-4 sm:px-6 py-4 sm:py-5 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
              >
                <span className="text-base sm:text-lg font-semibold text-[#131722] pr-3 sm:pr-4">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`w-5 h-5 text-[#5D5A6A] flex-shrink-0 transition-transform ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>

              {openIndex === index && (
                <div className="px-4 sm:px-6 pb-4 sm:pb-5">
                  <p className="text-sm sm:text-base text-[#5D5A6A] leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
