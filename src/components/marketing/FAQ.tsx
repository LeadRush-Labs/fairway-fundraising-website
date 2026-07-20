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
      question: 'Is this really free?',
      answer: 'Yes. There is no cost to your organization. Our work is funded through new local business support connected to the event.',
    },
    {
      question: 'Do you contact our existing sponsors?',
      answer: 'No. We do not contact your existing sponsors, donors, or warm relationships.',
    },
    {
      question: 'What do you need from us?',
      answer: 'Usually the event date, location, cause, registration link, sponsor info, and any existing materials.',
    },
    {
      question: 'How quickly can you help?',
      answer: 'We can usually start once we understand the tournament, what materials already exist, and where support is most needed.',
    },
    {
      question: 'Do we have to use every service?',
      answer: 'No. We focus on what will be most useful for your tournament.',
    },
    {
      question: 'Will this create more work for our team?',
      answer: 'The goal is the opposite. We help with the tasks that usually slow tournament organizers down.',
    },
    {
      question: 'Do we approve what gets used?',
      answer: 'Yes. Your team stays in control of the event, brand, and relationships.',
    },
  ];

  return (
    <section id="faq" className="relative bg-[#F5F5F7] py-12 sm:py-16 md:py-24 overflow-hidden">
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
