import { Hero } from "@/components/sections/Hero";
import { Marquee } from "@/components/sections/Marquee";
import { Treatments } from "@/components/sections/Treatments";
import { BeforeAfter } from "@/components/sections/BeforeAfter";
import { Journey } from "@/components/sections/Journey";
import { Ethos } from "@/components/sections/Ethos";
import { Voices } from "@/components/sections/Voices";
import { Pricing } from "@/components/sections/Pricing";
import { CTABand } from "@/components/sections/CTABand";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/sections/Footer";
import { MobileBar } from "@/components/sections/MobileBar";

export default function Home() {
  return (
    <>
      <Hero />
      <Marquee />
      <Treatments />
      <BeforeAfter />
      <Journey />
      <Ethos />
      <Voices />
      <Pricing />
      <CTABand />
      <Contact />
      <Footer />
      <MobileBar />
    </>
  );
}
