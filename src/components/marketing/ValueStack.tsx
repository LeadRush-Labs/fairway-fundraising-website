import { QrCode, Share2, Globe, Bell, FileBadge, Recycle } from 'lucide-react';

const items = [
  {
    icon: QrCode,
    title: 'QR Code Registration Setup',
    description: 'Make it easier for golfers and sponsors to sign up.',
  },
  {
    icon: Share2,
    title: 'Social Media Content Pack',
    description: 'Get ready-to-use posts for promoting the tournament.',
  },
  {
    icon: Globe,
    title: 'Tournament Landing Page Support',
    description: 'Give golfers, sponsors, and donors one clear place to take action.',
  },
  {
    icon: Bell,
    title: 'Email and Text Reminders',
    description: 'Keep golfers informed before the event.',
  },
  {
    icon: FileBadge,
    title: 'Sponsor and Golfer Materials',
    description: 'Make the event feel organized and professional.',
  },
  {
    icon: Recycle,
    title: 'Post-Event Recap Support',
    description: 'Thank sponsors, share impact, and build momentum for next year.',
  },
];

export default function ValueStack() {
  return (
    <section className="relative py-12 sm:py-16 md:py-20 bg-[#F5F5F7] overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-10 sm:mb-12 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#131722] mb-3 sm:mb-4">
            What your tournament can get at no cost
          </h2>
          <p className="text-lg text-[#5D5A6A] mb-3 sm:mb-4">Possible support includes:</p>
          <div className="w-16 sm:w-20 h-1 bg-[#1E8E3E] mx-auto"></div>
        </div>

        <div className="grid sm:grid-cols-2 gap-6 sm:gap-8">
          {items.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-xl p-6 sm:p-8 shadow-md hover:shadow-lg transition-shadow duration-300 border-l-4 border-[#1E8E3E]"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-[#1E8E3E]/10 rounded-lg flex items-center justify-center">
                    <Icon className="w-6 h-6 text-[#1E8E3E]" />
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-[#131722] mb-2">{item.title}</h3>
                    <p className="text-[#5D5A6A] leading-relaxed text-sm sm:text-base">{item.description}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
