import { useState, type FormEvent } from 'react';
import { Link } from 'react-router-dom';
import {
  Flag,
  Calendar,
  MapPin,
  Clock,
  Users,
  User,
  Mail,
  Phone,
  Globe,
  QrCode,
  Check,
  ArrowRight,
  MessageSquare,
  Smartphone,
  Facebook,
  ChevronDown,
} from 'lucide-react';
import { supabase } from '../lib/supabase';

function SampleLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="inline-flex items-center gap-1.5 bg-[#F5F5F7] text-[#5D5A6A] text-xs font-semibold px-3 py-1 rounded-full border border-gray-200">
      <span className="w-1.5 h-1.5 bg-[#C8A04F] rounded-full" />
      {children}
    </div>
  );
}

function Caption({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-center text-sm sm:text-base text-[#5D5A6A] mt-4 italic max-w-xl mx-auto">
      {children}
    </p>
  );
}

export default function Examples() {
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    organization: '',
    email: '',
    phone: '',
    tournamentName: '',
    tournamentDate: '',
    helpWith: '',
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleChange = (field: string, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    const { error } = await supabase.from('contact_requests').insert({
      first_name: form.firstName,
      last_name: form.lastName,
      organization: form.organization,
      email: form.email,
      phone: form.phone,
      tournament_name: form.tournamentName,
      tournament_date: form.tournamentDate || null,
      help_with: form.helpWith,
    });
    if (error) {
      setStatus('error');
    } else {
      setStatus('success');
    }
  };

  const scrollToForm = () => {
    document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  const helpItems = [
    'Registration links and pages',
    'Golfer reminders',
    'Social media posts',
    'Event promotion',
    'Website and event page updates',
    'QR codes',
    'Basic tournament details',
    'Simple event admin',
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-[#0F3D1F] to-[#1E8E3E] py-16 sm:py-20 md:py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-[0.08]">
          <svg className="w-full h-full" viewBox="0 0 1400 600" preserveAspectRatio="xMidYMid slice">
            <g transform="translate(100, 80)">
              <circle cx="0" cy="0" r="40" fill="white" stroke="white" strokeWidth="3" />
              <circle cx="-16" cy="-16" r="3" fill="#1E8E3E" />
              <circle cx="0" cy="-20" r="3" fill="#1E8E3E" />
              <circle cx="16" cy="-16" r="3" fill="#1E8E3E" />
            </g>
            <g transform="translate(1200, 120)">
              <line x1="0" y1="0" x2="0" y2="100" stroke="white" strokeWidth="5" />
              <path d="M0 0 L50 20 L0 40 Z" fill="white" />
              <circle cx="0" cy="100" r="6" fill="white" />
            </g>
            <g transform="translate(700, 450) scale(0.9)">
              <circle cx="0" cy="0" r="45" fill="white" stroke="white" strokeWidth="3" />
              <circle cx="-18" cy="-18" r="3" fill="#1E8E3E" />
              <circle cx="0" cy="-22" r="3" fill="#1E8E3E" />
              <circle cx="18" cy="-18" r="3" fill="#1E8E3E" />
            </g>
          </svg>
        </div>

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-1.5 mb-6 border border-white/20">
            <Flag className="w-4 h-4 text-[#C8A04F]" />
            <span className="text-white/90 text-sm font-medium">Fairway Fundraising</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6 leading-tight">
            See What We Can Set Up for Your Tournament
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-white/85 mb-8 max-w-2xl mx-auto leading-relaxed">
            Simple examples of the registration, reminders, event pages, social posts, and QR codes we can help create for free.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <button
              onClick={scrollToForm}
              className="bg-white text-[#0F3D1F] px-6 sm:px-8 py-3 sm:py-3.5 rounded-lg hover:bg-gray-100 transition-colors font-bold text-base sm:text-lg shadow-lg"
            >
              Can You Help With My Tournament?
            </button>
            <button
              onClick={scrollToForm}
              className="border-2 border-white/60 text-white px-6 sm:px-8 py-3 sm:py-3.5 rounded-lg hover:bg-white/10 transition-colors font-semibold text-base sm:text-lg"
            >
              Talk Through My Event
            </button>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="py-10 sm:py-12 bg-[#F5F5F7]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <p className="text-base sm:text-lg text-[#5D5A6A] leading-relaxed">
            Below are six examples of the kind of digital support we can put together for your charity golf tournament.
            Everything here is a sample, made for a fictional event called the Fairway Hope Classic.
          </p>
        </div>
      </section>

      {/* Section 1 - Registration Page */}
      <section className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-8">
            <SampleLabel>Example 1</SampleLabel>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#131722] mt-3 mb-2">Registration Page</h2>
          </div>

          <div className="bg-white rounded-2xl border border-gray-200 shadow-lg overflow-hidden">
            {/* Browser chrome */}
            <div className="bg-[#F5F5F7] px-4 py-3 flex items-center gap-2 border-b border-gray-200">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-400" />
                <div className="w-3 h-3 rounded-full bg-yellow-400" />
                <div className="w-3 h-3 rounded-full bg-green-400" />
              </div>
              <div className="flex-1 bg-white rounded-md px-3 py-1 text-xs text-[#5D5A6A] ml-3 border border-gray-200">
                fairwayhopeclassic.org/register
              </div>
            </div>

            {/* Page content */}
            <div className="p-6 sm:p-8">
              <div className="bg-gradient-to-br from-[#0F3D1F] to-[#1E8E3E] rounded-xl p-6 sm:p-8 text-white mb-6">
                <h3 className="text-2xl sm:text-3xl font-bold mb-3">Fairway Hope Classic</h3>
                <div className="flex flex-wrap gap-4 sm:gap-6 text-sm sm:text-base text-white/90">
                  <span className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" /> Friday, September 18
                  </span>
                  <span className="flex items-center gap-2">
                    <Clock className="w-4 h-4" /> 8:00 AM Check-in
                  </span>
                  <span className="flex items-center gap-2">
                    <MapPin className="w-4 h-4" /> Pine Ridge Golf Club
                  </span>
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4 mb-6">
                <div className="border border-gray-200 rounded-xl p-5 hover:border-[#1E8E3E] transition-colors">
                  <div className="flex items-center gap-2 mb-2">
                    <User className="w-5 h-5 text-[#1E8E3E]" />
                    <h4 className="font-bold text-[#131722]">Single Golfer</h4>
                  </div>
                  <p className="text-2xl font-bold text-[#131722] mb-1">$150</p>
                  <p className="text-sm text-[#5D5A6A] mb-3">Includes lunch and cart</p>
                  <button className="w-full bg-[#1E8E3E] text-white py-2.5 rounded-lg font-semibold hover:bg-[#0F3D1F] transition-colors">
                    Register as Golfer
                  </button>
                </div>
                <div className="border border-gray-200 rounded-xl p-5 hover:border-[#1E8E3E] transition-colors">
                  <div className="flex items-center gap-2 mb-2">
                    <Users className="w-5 h-5 text-[#1E8E3E]" />
                    <h4 className="font-bold text-[#131722]">Foursome</h4>
                  </div>
                  <p className="text-2xl font-bold text-[#131722] mb-1">$500</p>
                  <p className="text-sm text-[#5D5A6A] mb-3">Team of four golfers</p>
                  <button className="w-full bg-[#1E8E3E] text-white py-2.5 rounded-lg font-semibold hover:bg-[#0F3D1F] transition-colors">
                    Register a Foursome
                  </button>
                </div>
              </div>

              <div className="bg-[#F5F5F7] rounded-xl p-5 mb-6">
                <h4 className="font-bold text-[#131722] mb-3 flex items-center gap-2">
                  <Flag className="w-5 h-5 text-[#C8A04F]" /> Sponsorship Options
                </h4>
                <div className="space-y-2">
                  {[
                    ['Hole Sponsor', '$250'],
                    ['Cart Sponsor', '$500'],
                    ['Lunch Sponsor', '$750'],
                    ['Title Sponsor', '$2,500'],
                  ].map(([label, price]) => (
                    <div key={label} className="flex items-center justify-between bg-white rounded-lg px-4 py-2.5 border border-gray-200">
                      <span className="text-sm font-medium text-[#131722]">{label}</span>
                      <span className="text-sm font-bold text-[#1E8E3E]">{price}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-4 border-t border-gray-200">
                <div className="text-sm text-[#5D5A6A]">
                  <p className="font-semibold text-[#131722]">Questions?</p>
                  <p className="flex items-center gap-2 mt-1">
                    <Mail className="w-4 h-4" /> info@fairwayhopeclassic.org
                  </p>
                  <p className="flex items-center gap-2 mt-1">
                    <Phone className="w-4 h-4" /> (555) 123-4567
                  </p>
                </div>
                <button className="bg-[#C8A04F] text-white px-8 py-3 rounded-lg font-bold hover:bg-[#B8902F] transition-colors w-full sm:w-auto">
                  Register Now
                </button>
              </div>
            </div>
          </div>

          <Caption>A simple place for golfers and sponsors to find the details and sign up.</Caption>
        </div>
      </section>

      {/* Section 2 - Event Landing Page */}
      <section className="py-12 sm:py-16 md:py-20 bg-[#F5F5F7]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-8">
            <SampleLabel>Example 2</SampleLabel>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#131722] mt-3 mb-2">Event Landing Page</h2>
          </div>

          <div className="bg-white rounded-2xl border border-gray-200 shadow-lg overflow-hidden">
            <div className="bg-[#F5F5F7] px-4 py-3 flex items-center gap-2 border-b border-gray-200">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-400" />
                <div className="w-3 h-3 rounded-full bg-yellow-400" />
                <div className="w-3 h-3 rounded-full bg-green-400" />
              </div>
              <div className="flex-1 bg-white rounded-md px-3 py-1 text-xs text-[#5D5A6A] ml-3 border border-gray-200">
                fairwayhopeclassic.org
              </div>
            </div>

            <div className="p-6 sm:p-8">
              {/* Hero banner */}
              <div className="bg-gradient-to-br from-[#0F3D1F] to-[#1E8E3E] rounded-xl p-6 sm:p-8 text-white mb-6">
                <h3 className="text-2xl sm:text-3xl font-bold mb-2">Fairway Hope Classic</h3>
                <p className="text-white/85 mb-4">Supporting the Hope Community Fund</p>
                <div className="flex flex-wrap gap-4 text-sm text-white/90">
                  <span className="flex items-center gap-2"><Calendar className="w-4 h-4" /> Sept 18, 2026</span>
                  <span className="flex items-center gap-2"><MapPin className="w-4 h-4" /> Pine Ridge Golf Club</span>
                </div>
              </div>

              {/* Overview */}
              <div className="mb-6">
                <h4 className="font-bold text-[#131722] mb-2">Tournament Overview</h4>
                <p className="text-sm text-[#5D5A6A] leading-relaxed">
                  Join us for a day of golf supporting the Hope Community Fund, which provides food
                  assistance and youth programs for families in our area.
                </p>
              </div>

              {/* Cause */}
              <div className="bg-[#F5F5F7] rounded-xl p-5 mb-6">
                <h4 className="font-bold text-[#131722] mb-2">The Cause</h4>
                <p className="text-sm text-[#5D5A6A] leading-relaxed">
                  The Hope Community Fund has served local families for over 15 years, providing meals,
                  school supplies, and after-school programs. Every registration and sponsorship directly
                  supports these programs.
                </p>
              </div>

              {/* Schedule */}
              <div className="mb-6">
                <h4 className="font-bold text-[#131722] mb-3">Schedule</h4>
                <div className="space-y-2">
                  {[
                    ['8:00 AM', 'Check-in and range open'],
                    ['9:00 AM', 'Shotgun start'],
                    ['1:30 PM', 'Lunch and awards'],
                  ].map(([time, event]) => (
                    <div key={time} className="flex items-center gap-3 text-sm">
                      <span className="font-bold text-[#1E8E3E] w-20">{time}</span>
                      <span className="text-[#5D5A6A]">{event}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Course */}
              <div className="mb-6">
                <h4 className="font-bold text-[#131722] mb-2">Course Details</h4>
                <p className="text-sm text-[#5D5A6A]">
                  Pine Ridge Golf Club - 18 holes, par 72. 5800 Pine Ridge Rd, Pineville.
                </p>
              </div>

              {/* Sponsors */}
              <div className="mb-6">
                <h4 className="font-bold text-[#131722] mb-3">Our Sponsors</h4>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {['Ridge Realty', 'Pine Bank', 'Local Grill', 'Valley Auto'].map((name) => (
                    <div key={name} className="bg-[#F5F5F7] border border-gray-200 rounded-lg p-4 text-center">
                      <span className="text-xs font-semibold text-[#5D5A6A]">{name}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* FAQ */}
              <div className="mb-6">
                <h4 className="font-bold text-[#131722] mb-3">Frequently Asked Questions</h4>
                <div className="space-y-2">
                  {[
                    ['What is included with registration?', 'Golf, cart, lunch, and a gift bag.'],
                    ['Can I sign up as a single golfer?', 'Yes, we will place you in a foursome.'],
                  ].map(([q, a]) => (
                    <div key={q} className="border border-gray-200 rounded-lg p-3">
                      <p className="text-sm font-semibold text-[#131722]">{q}</p>
                      <p className="text-sm text-[#5D5A6A] mt-1">{a}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Contact + Register */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-4 border-t border-gray-200">
                <div className="text-sm text-[#5D5A6A]">
                  <p className="flex items-center gap-2"><Mail className="w-4 h-4" /> info@fairwayhopeclassic.org</p>
                  <p className="flex items-center gap-2 mt-1"><Phone className="w-4 h-4" /> (555) 123-4567</p>
                </div>
                <button className="bg-[#1E8E3E] text-white px-8 py-3 rounded-lg font-bold hover:bg-[#0F3D1F] transition-colors w-full sm:w-auto">
                  Register for the Event
                </button>
              </div>
            </div>
          </div>

          <Caption>One clear page with everything golfers need before the event.</Caption>
        </div>
      </section>

      {/* Section 3 - Reminder Email */}
      <section className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-8">
            <SampleLabel>Example 3</SampleLabel>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#131722] mt-3 mb-2">Reminder Email</h2>
          </div>

          <div className="bg-white rounded-2xl border border-gray-200 shadow-lg overflow-hidden">
            {/* Email client chrome */}
            <div className="bg-[#F5F5F7] px-4 py-3 border-b border-gray-200">
              <div className="flex items-center gap-2 mb-2">
                <Mail className="w-4 h-4 text-[#5D5A6A]" />
                <span className="text-xs text-[#5D5A6A]">Inbox</span>
              </div>
            </div>

            <div className="p-6 sm:p-8">
              <div className="border-b border-gray-200 pb-4 mb-4">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#1E8E3E] flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                    FH
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-semibold text-[#131722]">Fairway Hope Classic</p>
                    <p className="text-xs text-[#5D5A6A]">to james@example.com</p>
                  </div>
                </div>
              </div>

              <div className="bg-[#F5F5F7] rounded-lg px-4 py-2.5 mb-4">
                <p className="text-sm font-semibold text-[#131722]">
                  Subject: A few details for tournament day
                </p>
              </div>

              <div className="space-y-4 text-sm text-[#131722] leading-relaxed">
                <p>Hi James,</p>
                <p>We are looking forward to seeing you at the Fairway Hope Classic this Friday.</p>
                <p>Check-in opens at 8:00 AM, and the shotgun start is at 9:00 AM.</p>
                <p>The tournament will be held at Pine Ridge Golf Club.</p>
                <p>
                  You can view directions and event details here:{' '}
                  <span className="text-[#1E8E3E] underline">[Event Link]</span>
                </p>
                <p>See you Friday.</p>
              </div>
            </div>
          </div>

          <Caption>Clear reminders that keep golfers informed and cut down on last-minute questions.</Caption>
        </div>
      </section>

      {/* Section 4 - Reminder Text */}
      <section className="py-12 sm:py-16 md:py-20 bg-[#F5F5F7]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-8">
            <SampleLabel>Example 4</SampleLabel>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#131722] mt-3 mb-2">Reminder Text</h2>
          </div>

          {/* Phone mockup */}
          <div className="flex justify-center">
            <div className="w-full max-w-[320px] bg-[#131722] rounded-[2.5rem] p-3 shadow-2xl">
              <div className="bg-white rounded-[2rem] overflow-hidden">
                {/* Status bar */}
                <div className="bg-[#F5F5F7] px-6 py-2 flex items-center justify-between text-xs text-[#5D5A6A]">
                  <span>9:41 AM</span>
                  <div className="flex items-center gap-1">
                    <Smartphone className="w-3 h-3" />
                    <span>100%</span>
                  </div>
                </div>
                {/* Messages header */}
                <div className="bg-[#1E8E3E] px-4 py-3 flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                    <MessageSquare className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <p className="text-white text-sm font-semibold">Fairway Hope</p>
                    <p className="text-white/70 text-xs">Text Message</p>
                  </div>
                </div>
                {/* Message bubble */}
                <div className="p-4 bg-white min-h-[200px]">
                  <div className="bg-[#F5F5F7] rounded-2xl rounded-tl-sm p-4 max-w-[90%]">
                    <p className="text-sm text-[#131722] leading-relaxed">
                      Fairway Hope Classic reminder: Check-in opens Friday at 8:00 AM at Pine Ridge Golf Club. Shotgun start is at 9:00 AM. Event details: <span className="text-[#1E8E3E] underline">[Link]</span>
                    </p>
                  </div>
                  <p className="text-xs text-[#5D5A6A] mt-2 ml-2">Now</p>
                </div>
              </div>
            </div>
          </div>

          <Caption>Short updates golfers can read in a few seconds.</Caption>
        </div>
      </section>

      {/* Section 5 - Facebook Post */}
      <section className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-8">
            <SampleLabel>Example 5</SampleLabel>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#131722] mt-3 mb-2">Facebook Post</h2>
          </div>

          <div className="bg-white rounded-2xl border border-gray-200 shadow-lg overflow-hidden">
            {/* Post header */}
            <div className="p-4 flex items-center gap-3">
              <div className="w-11 h-11 rounded-full bg-gradient-to-br from-[#1E8E3E] to-[#0F3D1F] flex items-center justify-center">
                <Flag className="w-5 h-5 text-white" />
              </div>
              <div className="flex-1">
                <p className="font-semibold text-[#131722] text-sm">Fairway Hope Classic</p>
                <p className="text-xs text-[#5D5A6A] flex items-center gap-1">
                  <Facebook className="w-3 h-3" /> Just now
                </p>
              </div>
            </div>

            {/* Post body */}
            <div className="px-4 pb-4 space-y-3 text-sm text-[#131722] leading-relaxed">
              <p>Registration is open for the Fairway Hope Classic.</p>
              <p>Join us on September 18 at Pine Ridge Golf Club for a great day of golf supporting the Hope Community Fund.</p>
              <p>Golfer spots and sponsorships are available.</p>
              <p>
                Register here: <span className="text-[#1E8E3E] underline">[Link]</span>
              </p>
            </div>

            {/* Post image placeholder */}
            <div className="bg-gradient-to-br from-[#0F3D1F] to-[#1E8E3E] h-48 flex items-center justify-center">
              <div className="text-center text-white">
                <Flag className="w-12 h-12 mx-auto mb-2 opacity-80" />
                <p className="text-sm font-semibold">Fairway Hope Classic</p>
                <p className="text-xs text-white/70">Sept 18 - Pine Ridge Golf Club</p>
              </div>
            </div>

            {/* Engagement bar */}
            <div className="px-4 py-3 border-t border-gray-200 flex items-center justify-around text-xs text-[#5D5A6A]">
              <span className="flex items-center gap-1.5"><MessageSquare className="w-4 h-4" /> Comment</span>
              <span className="flex items-center gap-1.5"><ArrowRight className="w-4 h-4" /> Share</span>
            </div>
          </div>

          <Caption>Simple posts that help organizers promote the event without starting from scratch.</Caption>
        </div>
      </section>

      {/* Section 6 - QR Code Flyer */}
      <section className="py-12 sm:py-16 md:py-20 bg-[#F5F5F7]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-8">
            <SampleLabel>Example 6</SampleLabel>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#131722] mt-3 mb-2">QR Code Flyer</h2>
          </div>

          {/* Flyer mockup */}
          <div className="bg-white rounded-2xl border border-gray-200 shadow-lg p-8 sm:p-12 max-w-md mx-auto">
            <div className="text-center mb-6">
              <div className="inline-flex items-center gap-2 mb-3">
                <Flag className="w-5 h-5 text-[#1E8E3E]" />
                <span className="text-xs font-semibold text-[#5D5A6A] uppercase tracking-wide">Charity Golf Tournament</span>
              </div>
              <h3 className="text-2xl font-bold text-[#131722] mb-2">Fairway Hope Classic</h3>
              <p className="text-sm text-[#5D5A6A] flex items-center justify-center gap-2">
                <Calendar className="w-4 h-4" /> September 18, 2026
              </p>
              <p className="text-sm text-[#5D5A6A] flex items-center justify-center gap-2 mt-1">
                <MapPin className="w-4 h-4" /> Pine Ridge Golf Club
              </p>
            </div>

            <div className="bg-[#F5F5F7] rounded-xl p-4 mb-6 text-center">
              <p className="text-sm text-[#5D5A6A] italic leading-relaxed">
                Supporting the Hope Community Fund - helping local families with food and youth programs.
              </p>
            </div>

            {/* QR code */}
            <div className="flex flex-col items-center mb-6">
              <div className="relative bg-white border-2 border-[#131722] rounded-xl p-4">
                <QrCode className="w-40 h-40 text-[#131722]" />
                <div className="absolute top-2 right-2 bg-[#C8A04F] text-white text-[10px] font-bold px-2 py-0.5 rounded-full">
                  SAMPLE
                </div>
              </div>
              <p className="text-sm font-bold text-[#131722] mt-3 flex items-center gap-1.5">
                <Smartphone className="w-4 h-4 text-[#1E8E3E]" /> Scan to Register
              </p>
            </div>

            <div className="border-t border-gray-200 pt-4 text-center space-y-1">
              <p className="text-sm text-[#131722] font-semibold flex items-center justify-center gap-2">
                <Globe className="w-4 h-4 text-[#1E8E3E]" /> fairwayhopeclassic.org
              </p>
              <p className="text-xs text-[#5D5A6A] flex items-center justify-center gap-2">
                <Phone className="w-3.5 h-3.5" /> (555) 123-4567
              </p>
              <p className="text-xs text-[#5D5A6A] flex items-center justify-center gap-2">
                <Mail className="w-3.5 h-3.5" /> info@fairwayhopeclassic.org
              </p>
            </div>
          </div>

          <Caption>An easy way to send people from printed materials straight to registration.</Caption>
        </div>
      </section>

      {/* What We Can Help With */}
      <section className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#131722] mb-4">What We Can Help With</h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-3 mb-8">
            {helpItems.map((item) => (
              <div key={item} className="flex items-center gap-3 bg-[#F5F5F7] rounded-xl px-5 py-4 border border-gray-200">
                <div className="w-6 h-6 rounded-full bg-[#1E8E3E] flex items-center justify-center flex-shrink-0">
                  <Check className="w-3.5 h-3.5 text-white" />
                </div>
                <span className="text-sm sm:text-base text-[#131722] font-medium">{item}</span>
              </div>
            ))}
          </div>
          <div className="bg-gradient-to-br from-[#0F3D1F] to-[#1E8E3E] rounded-2xl p-6 sm:p-8 text-center">
            <p className="text-base sm:text-lg text-white leading-relaxed">
              You do not need to use every service. We can help with the parts that are taking up time or have not been set up yet.
            </p>
          </div>
        </div>
      </section>

      {/* Simple Setup */}
      <section className="py-12 sm:py-16 md:py-20 bg-[#F5F5F7]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#131722] mb-4">Simple Setup</h2>
          </div>
          <div className="bg-white rounded-2xl border border-gray-200 shadow-lg p-6 sm:p-8">
            <p className="text-base sm:text-lg text-[#5D5A6A] leading-relaxed text-center mb-6">
              It usually takes about 20 to 30 minutes to go over the tournament details and decide what would be helpful.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              {['No cost', 'No major changes to the event', 'No extra work for your team'].map((point) => (
                <div key={point} className="flex items-center gap-2 justify-center">
                  <div className="w-5 h-5 rounded-full bg-[#1E8E3E] flex items-center justify-center flex-shrink-0">
                    <Check className="w-3 h-3 text-white" />
                  </div>
                  <span className="text-sm font-medium text-[#131722]">{point}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA + Form */}
      <section id="contact-form" className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-[#0F3D1F] to-[#1E8E3E]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-8">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
              Want Help With Your Tournament?
            </h2>
            <p className="text-base sm:text-lg text-white/85 max-w-xl mx-auto leading-relaxed">
              Tell us a little about the event, and we can talk through the digital pieces that would be useful.
            </p>
          </div>

          {status === 'success' ? (
            <div className="bg-white rounded-2xl shadow-xl p-8 sm:p-10 text-center">
              <div className="w-16 h-16 rounded-full bg-[#1E8E3E] flex items-center justify-center mx-auto mb-4">
                <Check className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-[#131722] mb-2">Thanks, we got your request</h3>
              <p className="text-[#5D5A6A]">
                We will reach out shortly to set up a short call about your tournament.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-xl p-6 sm:p-8">
              {status === 'error' && (
                <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6">
                  <p className="text-sm text-red-700">
                    Something went wrong submitting the form. Please try again or email us directly.
                  </p>
                </div>
              )}

              <div className="grid sm:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-sm font-medium text-[#131722] mb-1.5">First name</label>
                  <input
                    type="text"
                    required
                    value={form.firstName}
                    onChange={(e) => handleChange('firstName', e.target.value)}
                    className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm focus:border-[#1E8E3E] focus:ring-1 focus:ring-[#1E8E3E] outline-none"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#131722] mb-1.5">Last name</label>
                  <input
                    type="text"
                    required
                    value={form.lastName}
                    onChange={(e) => handleChange('lastName', e.target.value)}
                    className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm focus:border-[#1E8E3E] focus:ring-1 focus:ring-[#1E8E3E] outline-none"
                  />
                </div>
              </div>

              <div className="mb-4">
                <label className="block text-sm font-medium text-[#131722] mb-1.5">Organization</label>
                <input
                  type="text"
                  value={form.organization}
                  onChange={(e) => handleChange('organization', e.target.value)}
                  className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm focus:border-[#1E8E3E] focus:ring-1 focus:ring-[#1E8E3E] outline-none"
                />
              </div>

              <div className="grid sm:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-sm font-medium text-[#131722] mb-1.5">Email</label>
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => handleChange('email', e.target.value)}
                    className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm focus:border-[#1E8E3E] focus:ring-1 focus:ring-[#1E8E3E] outline-none"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#131722] mb-1.5">Phone</label>
                  <input
                    type="tel"
                    value={form.phone}
                    onChange={(e) => handleChange('phone', e.target.value)}
                    className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm focus:border-[#1E8E3E] focus:ring-1 focus:ring-[#1E8E3E] outline-none"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-sm font-medium text-[#131722] mb-1.5">Tournament name</label>
                  <input
                    type="text"
                    value={form.tournamentName}
                    onChange={(e) => handleChange('tournamentName', e.target.value)}
                    className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm focus:border-[#1E8E3E] focus:ring-1 focus:ring-[#1E8E3E] outline-none"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#131722] mb-1.5">Tournament date</label>
                  <input
                    type="date"
                    value={form.tournamentDate}
                    onChange={(e) => handleChange('tournamentDate', e.target.value)}
                    className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm focus:border-[#1E8E3E] focus:ring-1 focus:ring-[#1E8E3E] outline-none"
                  />
                </div>
              </div>

              <div className="mb-6">
                <label className="block text-sm font-medium text-[#131722] mb-1.5">
                  What would you like help with?
                </label>
                <textarea
                  rows={3}
                  value={form.helpWith}
                  onChange={(e) => handleChange('helpWith', e.target.value)}
                  className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm focus:border-[#1E8E3E] focus:ring-1 focus:ring-[#1E8E3E] outline-none resize-none"
                  placeholder="Tell us which parts you need help with..."
                />
              </div>

              <button
                type="submit"
                disabled={status === 'submitting'}
                className="w-full bg-[#1E8E3E] text-white py-3.5 rounded-lg font-bold text-base hover:bg-[#0F3D1F] transition-colors disabled:opacity-60 flex items-center justify-center gap-2"
              >
                {status === 'submitting' ? (
                  <>Sending...</>
                ) : (
                  <>
                    Set Up a Short Call
                    <ArrowRight className="w-5 h-5" />
                  </>
                )}
              </button>
            </form>
          )}

          <div className="text-center mt-6">
            <Link to="/" className="text-white/70 hover:text-white text-sm flex items-center justify-center gap-1 transition-colors">
              <ChevronDown className="w-4 h-4 rotate-90" /> Back to home
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
