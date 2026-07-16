import Hero from '../components/marketing/Hero';
import Problem from '../components/marketing/Problem';
import WhatWeHelpWith from '../components/marketing/WhatWeHelpWith';
import HowItWorks from '../components/marketing/HowItWorks';
import HowItStaysFree from '../components/marketing/HowItStaysFree';
import WhoThisIsFor from '../components/marketing/WhoThisIsFor';
import ValueStack from '../components/marketing/ValueStack';
import FAQ from '../components/marketing/FAQ';
import CalendlySection from '../components/CalendlySection';
import About from '../components/marketing/About';

export default function Home() {
  return (
    <>
      <Hero />
      <Problem />
      <WhatWeHelpWith />
      <HowItWorks />
      <HowItStaysFree />
      <WhoThisIsFor />
      <ValueStack />
      <FAQ />
      <CalendlySection />
      <About />
    </>
  );
}
