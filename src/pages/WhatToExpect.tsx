import { CheckCircle2, Mail, Sparkles, PartyPopper } from 'lucide-react';

export default function WhatToExpect() {
  const youControl = [
    'Which sponsors are accepted',
    'Sponsor categories to avoid',
    'Messaging tone',
    'Event positioning'
  ];

  const weDoNot = [
    'Contact your existing sponsors',
    'Access your donor lists',
    'Override your relationships',
    'Require long-term commitments'
  ];

  return (
    <div className="min-h-screen bg-white">
      <section className="relative overflow-hidden bg-gradient-to-br from-[#1E8E3E] via-[#1E8E3E] to-[#146B2E] py-16 sm:py-20 md:py-24">
        <div className="absolute inset-0 opacity-10">
          <svg className="absolute top-10 left-10 w-20 h-20 text-white animate-pulse" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
          </svg>
          <svg className="absolute top-20 right-20 w-16 h-16 text-white animate-bounce" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
          </svg>
          <svg className="absolute bottom-10 left-1/4 w-24 h-24 text-white animate-pulse" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
          </svg>
          <svg className="absolute bottom-20 right-1/3 w-14 h-14 text-white" fill="currentColor" viewBox="0 0 24 24">
            <circle cx="12" cy="12" r="3"/>
            <circle cx="12" cy="4" r="2"/>
            <circle cx="12" cy="20" r="2"/>
            <circle cx="4" cy="12" r="2"/>
            <circle cx="20" cy="12" r="2"/>
          </svg>
        </div>

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <div className="flex justify-center gap-3 mb-6">
            <PartyPopper className="w-10 h-10 sm:w-12 sm:h-12 text-yellow-300 animate-bounce" />
            <Sparkles className="w-10 h-10 sm:w-12 sm:h-12 text-yellow-300 animate-pulse" />
            <PartyPopper className="w-10 h-10 sm:w-12 sm:h-12 text-yellow-300 animate-bounce" style={{ animationDelay: '0.2s' }} />
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 sm:mb-5">
            You're Approved!
          </h1>
          <p className="text-xl sm:text-2xl text-yellow-300 font-semibold mb-3">
            Let's get started raising sponsorships
          </p>
          <p className="text-base sm:text-lg text-white/80 max-w-2xl mx-auto">
            Your event has been approved for our sponsorship program. Here's your roadmap from today to payout.
          </p>
        </div>
      </section>

      <section className="relative py-12 sm:py-16 md:py-20 bg-gradient-to-b from-[#F5F5F7] to-white overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <svg className="absolute top-10 right-10 w-32 h-32 text-[#1E8E3E]" viewBox="0 0 100 100">
            <circle cx="50" cy="50" r="40" fill="currentColor"/>
          </svg>
          <svg className="absolute bottom-20 left-10 w-40 h-40 text-[#1E8E3E]" viewBox="0 0 100 100">
            <polygon points="50,10 90,90 10,90" fill="currentColor"/>
          </svg>
          <svg className="absolute top-1/3 left-1/4 w-24 h-24 text-[#1E8E3E]" viewBox="0 0 100 100">
            <rect x="10" y="10" width="80" height="80" fill="currentColor"/>
          </svg>
        </div>

        <div className="relative max-w-5xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#131722] mb-3">
              Your Timeline
            </h2>
            <p className="text-lg text-[#5D5A6A]">
              From approval to payout, here's what to expect
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-[#1E8E3E] to-[#146B2E] hidden sm:block"></div>

            <div className="space-y-8">
              <div className="flex items-start gap-6">
                <div className="relative flex-shrink-0">
                  <div className="bg-[#1E8E3E] text-white rounded-full w-16 h-16 flex items-center justify-center font-bold text-2xl shadow-lg z-10 relative">1</div>
                </div>
                <div className="bg-white rounded-xl p-6 shadow-lg flex-1 border-l-4 border-[#1E8E3E]">
                  <h3 className="text-xl font-bold text-[#131722] mb-2">Agreement Confirmation</h3>
                  <p className="text-[#5D5A6A]">Sign simple service agreement</p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="relative flex-shrink-0">
                  <div className="bg-[#1E8E3E] text-white rounded-full w-16 h-16 flex items-center justify-center font-bold text-2xl shadow-lg z-10 relative">2</div>
                </div>
                <div className="bg-white rounded-xl p-6 shadow-lg flex-1 border-l-4 border-[#1E8E3E]">
                  <h3 className="text-xl font-bold text-[#131722] mb-2">Campaign Prep <span className="text-sm font-normal text-[#5D5A6A]">(2–3 days)</span></h3>
                  <p className="text-[#5D5A6A]">We prepare your outreach strategy and sponsor link</p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="relative flex-shrink-0">
                  <div className="bg-[#1E8E3E] text-white rounded-full w-16 h-16 flex items-center justify-center font-bold text-2xl shadow-lg z-10 relative">3</div>
                </div>
                <div className="bg-white rounded-xl p-6 shadow-lg flex-1 border-l-4 border-[#1E8E3E]">
                  <h3 className="text-xl font-bold text-[#131722] mb-2">Active Outreach <span className="text-sm font-normal text-[#5D5A6A]">(starts 3+ months before event)</span></h3>
                  <p className="text-[#5D5A6A]">Focused sponsor outreach begins</p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="relative flex-shrink-0">
                  <div className="bg-[#1E8E3E] text-white rounded-full w-16 h-16 flex items-center justify-center font-bold text-2xl shadow-lg z-10 relative">4</div>
                </div>
                <div className="bg-white rounded-xl p-6 shadow-lg flex-1 border-l-4 border-[#1E8E3E]">
                  <h3 className="text-xl font-bold text-[#131722] mb-2">Sponsor Confirmations</h3>
                  <p className="text-[#5D5A6A]">Real-time updates as sponsors commit and pay</p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="relative flex-shrink-0">
                  <div className="bg-gradient-to-br from-[#1E8E3E] to-[#146B2E] text-white rounded-full w-16 h-16 flex items-center justify-center font-bold text-2xl shadow-lg z-10 relative">5</div>
                </div>
                <div className="bg-gradient-to-br from-[#1E8E3E] to-[#146B2E] text-white rounded-xl p-6 shadow-xl flex-1 border-l-4 border-yellow-400">
                  <h3 className="text-xl font-bold mb-2">Your Payout</h3>
                  <p className="text-white/90">Revenue split 50/50 after approved expenses</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative py-12 sm:py-16 bg-gradient-to-br from-[#131722] to-[#2A2D3A] overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <svg className="absolute top-10 left-10 w-32 h-32 text-white" viewBox="0 0 100 100">
            <circle cx="50" cy="50" r="40" fill="currentColor"/>
          </svg>
          <svg className="absolute bottom-10 right-10 w-40 h-40 text-white rotate-45" viewBox="0 0 100 100">
            <rect x="20" y="20" width="60" height="60" fill="currentColor" rx="8"/>
          </svg>
        </div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            How It Works: The Details
          </h2>
          <p className="text-lg sm:text-xl text-white/80 max-w-2xl mx-auto">
            Now let's dive deeper into each step of the process and what you need to know
          </p>
        </div>
      </section>

      <section className="relative py-12 sm:py-16 md:py-20 bg-white overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]">
          <svg className="absolute top-1/4 right-20 w-48 h-48 text-[#1E8E3E] rotate-12" viewBox="0 0 100 100">
            <rect x="20" y="20" width="60" height="60" fill="currentColor" rx="10"/>
          </svg>
          <svg className="absolute bottom-1/4 left-20 w-56 h-56 text-[#1E8E3E] -rotate-12" viewBox="0 0 100 100">
            <circle cx="50" cy="50" r="45" fill="currentColor"/>
          </svg>
        </div>

        <div className="relative max-w-5xl mx-auto px-4 sm:px-6">
          <div className="bg-white rounded-2xl p-8 sm:p-10 md:p-12 shadow-xl mb-8 border-l-8 border-[#1E8E3E]">
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-[#1E8E3E]/10 p-4 rounded-xl">
                <div className="text-3xl font-bold text-[#1E8E3E]">1</div>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#131722]">
                Event Review & Campaign Preparation
              </h2>
            </div>
            <div className="pl-0 sm:pl-20">
              <p className="text-lg text-[#131722] leading-relaxed mb-6">
                Over the next few days, our team:
              </p>
              <div className="grid sm:grid-cols-2 gap-4 mb-6">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#1E8E3E] flex-shrink-0 mt-1" />
                  <span className="text-base text-[#131722]">Reviews your sponsorship tiers and pricing</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#1E8E3E] flex-shrink-0 mt-1" />
                  <span className="text-base text-[#131722]">Understands your mission and beneficiary</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#1E8E3E] flex-shrink-0 mt-1" />
                  <span className="text-base text-[#131722]">Confirms sponsor categories to avoid</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#1E8E3E] flex-shrink-0 mt-1" />
                  <span className="text-base text-[#131722]">Cross-checks your Do Not Contact list</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#1E8E3E] flex-shrink-0 mt-1" />
                  <span className="text-base text-[#131722]">Identifies best-fit business types</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#1E8E3E] flex-shrink-0 mt-1" />
                  <span className="text-base text-[#131722]">Prepares outreach messaging tailored to your event</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#1E8E3E] flex-shrink-0 mt-1" />
                  <span className="text-base text-[#131722]">Prepares your secure sponsor payment link</span>
                </div>
              </div>
              <div className="bg-[#F5F5F7] p-5 rounded-lg border-l-4 border-[#1E8E3E]">
                <p className="text-base text-[#131722] font-semibold mb-2">
                  We do not activate outreach until everything is aligned.
                </p>
                <p className="text-base text-[#5D5A6A]">
                  You do not need to take action during this stage unless clarification is needed.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-8 sm:p-10 md:p-12 shadow-xl mb-8 border-l-8 border-[#1E8E3E]">
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-[#1E8E3E]/10 p-4 rounded-xl">
                <div className="text-3xl font-bold text-[#1E8E3E]">2</div>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#131722]">
                Sponsor Identification
              </h2>
            </div>
            <div className="pl-0 sm:pl-20">
              <p className="text-lg text-[#131722] leading-relaxed mb-6">
                We focus on sponsor-ready businesses, typically including:
              </p>
              <div className="grid sm:grid-cols-2 gap-3 mb-8">
                {['Banks and credit unions', 'Insurance agencies', 'Real estate brokerages', 'Medical practices', 'Construction companies', 'Home service businesses', 'Local and regional brands with community budgets'].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3 bg-[#F5F5F7] px-4 py-3 rounded-lg">
                    <div className="w-2 h-2 bg-[#1E8E3E] rounded-full"></div>
                    <span className="text-base text-[#131722]">{item}</span>
                  </div>
                ))}
              </div>

              <div className="bg-gradient-to-br from-[#F5F5F7] to-white p-6 rounded-xl border border-gray-200">
                <p className="text-lg font-semibold text-[#131722] mb-4">Businesses are matched based on:</p>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#1E8E3E] flex-shrink-0 mt-1" />
                    <span className="text-base text-[#131722]">Location</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#1E8E3E] flex-shrink-0 mt-1" />
                    <span className="text-base text-[#131722]">Sponsor tier size</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#1E8E3E] flex-shrink-0 mt-1" />
                    <span className="text-base text-[#131722]">Mission alignment</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#1E8E3E] flex-shrink-0 mt-1" />
                    <span className="text-base text-[#131722]">History sponsoring golf or charity events</span>
                  </div>
                </div>
              </div>

            </div>
          </div>

          <div className="bg-white rounded-2xl p-8 sm:p-10 md:p-12 shadow-xl mb-8 border-l-8 border-[#1E8E3E]">
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-[#1E8E3E]/10 p-4 rounded-xl">
                <div className="text-3xl font-bold text-[#1E8E3E]">3</div>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#131722]">
                Sponsor Outreach Begins
              </h2>
            </div>
            <div className="pl-0 sm:pl-20">
              <p className="text-lg text-[#131722] leading-relaxed mb-6">
                We open a short, focused outreach window. Messaging is local, respectful, and mission-centered.
              </p>

              <div className="my-8">
                <div className="flex items-center gap-3 mb-4">
                  <Mail className="w-6 h-6 text-[#1E8E3E]" />
                  <h3 className="text-xl font-semibold text-[#131722]">Example Outreach Email</h3>
                </div>
                <div className="bg-gradient-to-br from-gray-50 to-white border-2 border-gray-200 rounded-xl p-6 sm:p-8 shadow-inner">
                  <div className="font-mono text-sm sm:text-base space-y-4">
                    <p className="text-[#131722]">Hi {'{'}{'{'}First_Name{'}'}{'}'},</p>
                    <p className="text-[#131722]">I'm reaching out from a local college just minutes from you in Winter Park.</p>
                    <p className="text-[#131722]">We're hosting our November 14th Golf Classic supporting student scholarships and community impact.</p>
                    <p className="text-[#131722]">We're currently inviting local businesses to participate as hole sponsors or event partners.</p>
                    <p className="text-[#131722]">Even small participation makes a meaningful difference, and we ensure sponsors are recognized as part of the community making it possible.</p>
                    <p className="text-[#131722]">Would you be open to reviewing the sponsorship options?</p>
                  </div>
                </div>
              </div>

              <div className="grid sm:grid-cols-3 gap-4 mt-6">
                <div className="bg-[#F5F5F7] p-5 rounded-lg text-center">
                  <CheckCircle2 className="w-8 h-8 text-[#1E8E3E] mx-auto mb-3" />
                  <p className="text-sm font-semibold text-[#131722]">Clear & professional positioning</p>
                </div>
                <div className="bg-[#F5F5F7] p-5 rounded-lg text-center">
                  <CheckCircle2 className="w-8 h-8 text-[#1E8E3E] mx-auto mb-3" />
                  <p className="text-sm font-semibold text-[#131722]">No pressure or misrepresentation</p>
                </div>
                <div className="bg-[#F5F5F7] p-5 rounded-lg text-center">
                  <CheckCircle2 className="w-8 h-8 text-[#1E8E3E] mx-auto mb-3" />
                  <p className="text-sm font-semibold text-[#131722]">Existing sponsors never contacted</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-8 sm:p-10 md:p-12 shadow-xl mb-8 border-l-8 border-[#1E8E3E]">
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-[#1E8E3E]/10 p-4 rounded-xl">
                <div className="text-3xl font-bold text-[#1E8E3E]">4</div>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#131722]">
                Managing Sponsor Conversations
              </h2>
            </div>
            <div className="pl-0 sm:pl-20">
              <p className="text-lg text-[#131722] leading-relaxed mb-6">
                When a business expresses interest:
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-4 bg-[#F5F5F7] p-5 rounded-lg">
                  <CheckCircle2 className="w-6 h-6 text-[#1E8E3E] flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-[#131722] mb-1">We respond to initial questions</p>
                    <p className="text-sm text-[#5D5A6A]">Handling logistics and answering sponsor inquiries</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 bg-[#F5F5F7] p-5 rounded-lg">
                  <CheckCircle2 className="w-6 h-6 text-[#1E8E3E] flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-[#131722] mb-1">We provide your sponsorship materials</p>
                    <p className="text-sm text-[#5D5A6A]">Sharing details about tiers, benefits, and opportunities</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 bg-[#F5F5F7] p-5 rounded-lg">
                  <CheckCircle2 className="w-6 h-6 text-[#1E8E3E] flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-[#131722] mb-1">You approve sponsors before final confirmation</p>
                    <p className="text-sm text-[#5D5A6A]">No sponsor is confirmed without your explicit approval</p>
                  </div>
                </div>
              </div>

            </div>
          </div>

          <div className="bg-white rounded-2xl p-8 sm:p-10 md:p-12 shadow-xl mb-8 border-l-8 border-[#1E8E3E]">
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-[#1E8E3E]/10 p-4 rounded-xl">
                <div className="text-3xl font-bold text-[#1E8E3E]">5</div>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#131722]">
                Sponsor Payments & Financial Structure
              </h2>
            </div>
            <div className="pl-0 sm:pl-20">
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-[#1E8E3E] mb-4">How Payments Are Collected</h3>
                <p className="text-lg text-[#131722] leading-relaxed mb-4">
                  All sponsor payments are processed securely through 4Giving.com.
                </p>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="flex items-start gap-3 bg-[#F5F5F7] p-4 rounded-lg">
                    <CheckCircle2 className="w-5 h-5 text-[#1E8E3E] flex-shrink-0 mt-1" />
                    <span className="text-base text-[#131722]">Sponsors receive a direct, secure payment link</span>
                  </div>
                  <div className="flex items-start gap-3 bg-[#F5F5F7] p-4 rounded-lg">
                    <CheckCircle2 className="w-5 h-5 text-[#1E8E3E] flex-shrink-0 mt-1" />
                    <span className="text-base text-[#131722]">You have read-only visibility into the portal</span>
                  </div>
                  <div className="flex items-start gap-3 bg-[#F5F5F7] p-4 rounded-lg">
                    <CheckCircle2 className="w-5 h-5 text-[#1E8E3E] flex-shrink-0 mt-1" />
                    <span className="text-base text-[#131722]">You are copied on sponsor confirmations</span>
                  </div>
                  <div className="flex items-start gap-3 bg-[#F5F5F7] p-4 rounded-lg">
                    <CheckCircle2 className="w-5 h-5 text-[#1E8E3E] flex-shrink-0 mt-1" />
                    <span className="text-base text-[#131722]">Payments are handled compliantly and transparently</span>
                  </div>
                </div>
                <p className="text-base text-[#5D5A6A] mt-4 italic">
                  We do not use your internal payment portal.
                </p>
              </div>

              <div className="bg-gradient-to-br from-[#1E8E3E]/5 to-white p-6 rounded-xl border border-[#1E8E3E]/20">
                <h3 className="text-xl font-semibold text-[#131722] mb-4">When You Receive Funds</h3>
                <p className="text-base text-[#131722] mb-4">
                  As sponsor payments are received and cleared, remaining sponsorship revenue is split 50/50.
                </p>
                <div className="mt-6 pt-6 border-t border-[#1E8E3E]/20">
                  <p className="text-base text-[#131722]">
                    Your funds are transferred after the outreach period concludes, and no later than two days before your tournament date.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative py-12 sm:py-16 md:py-20 bg-[#F5F5F7] overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <svg className="absolute top-10 left-1/3 w-32 h-32 text-[#1E8E3E]" viewBox="0 0 100 100">
            <polygon points="50,10 90,40 75,90 25,90 10,40" fill="currentColor"/>
          </svg>
          <svg className="absolute bottom-10 right-1/4 w-40 h-40 text-[#1E8E3E] rotate-45" viewBox="0 0 100 100">
            <rect x="30" y="30" width="40" height="40" fill="currentColor"/>
          </svg>
        </div>

        <div className="relative max-w-5xl mx-auto px-4 sm:px-6">
          <div className="bg-white rounded-2xl p-8 sm:p-10 md:p-12 shadow-xl mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#131722] mb-6">
              Communication Rhythm
            </h2>
            <p className="text-lg text-[#131722] leading-relaxed mb-6">
              You can expect:
            </p>
            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-4 bg-[#F5F5F7] p-5 rounded-lg">
                <div className="w-2 h-2 bg-[#1E8E3E] rounded-full mt-2.5 flex-shrink-0"></div>
                <span className="text-base text-[#131722]">An initial "Outreach Activated" update</span>
              </div>
              <div className="flex items-start gap-4 bg-[#F5F5F7] p-5 rounded-lg">
                <div className="w-2 h-2 bg-[#1E8E3E] rounded-full mt-2.5 flex-shrink-0"></div>
                <span className="text-base text-[#131722]">Periodic progress updates</span>
              </div>
              <div className="flex items-start gap-4 bg-[#F5F5F7] p-5 rounded-lg">
                <div className="w-2 h-2 bg-[#1E8E3E] rounded-full mt-2.5 flex-shrink-0"></div>
                <span className="text-base text-[#131722]">Immediate notification when sponsors commit</span>
              </div>
            </div>
            <div className="bg-gradient-to-br from-[#F5F5F7] to-white p-6 rounded-xl border border-gray-200">
              <p className="text-base text-[#131722] leading-relaxed mb-4">
                If at any point you have questions, we respond directly.
              </p>
              <p className="text-base text-[#131722] leading-relaxed">
                Most sponsor conversations occur within the first few weeks of outreach. Earlier activation generally produces better results.
              </p>
            </div>
          </div>

          <div className="relative bg-gradient-to-br from-[#1E8E3E] to-[#146B2E] rounded-2xl p-8 sm:p-10 md:p-12 shadow-xl text-white overflow-hidden">
            <div className="absolute inset-0 opacity-10">
              <svg className="absolute top-5 right-5 w-24 h-24 text-white rotate-12" viewBox="0 0 100 100">
                <path d="M50 10 L90 30 L90 70 L50 90 L10 70 L10 30 Z" fill="currentColor"/>
              </svg>
              <svg className="absolute bottom-5 left-5 w-20 h-20 text-white -rotate-12" viewBox="0 0 100 100">
                <path d="M50 10 L90 30 L90 70 L50 90 L10 70 L10 30 Z" fill="currentColor"/>
              </svg>
            </div>

            <h2 className="text-2xl sm:text-3xl font-bold mb-8 relative">
              Control & Protection
            </h2>

            <div className="grid md:grid-cols-2 gap-8 relative">
              <div>
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-3">
                  <CheckCircle2 className="w-6 h-6" />
                  You retain control over:
                </h3>
                <div className="space-y-3">
                  {youControl.map((item, index) => (
                    <div key={index} className="flex items-start gap-3 bg-white/10 backdrop-blur-sm p-4 rounded-lg">
                      <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-0.5" />
                      <span className="text-base leading-relaxed">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4">
                  We do not:
                </h3>
                <div className="space-y-3">
                  {weDoNot.map((item, index) => (
                    <div key={index} className="flex items-start gap-3 bg-white/10 backdrop-blur-sm p-4 rounded-lg">
                      <div className="w-5 h-5 flex-shrink-0 mt-0.5 flex items-center justify-center">
                        <div className="w-2 h-2 bg-white rounded-full"></div>
                      </div>
                      <span className="text-base leading-relaxed">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
