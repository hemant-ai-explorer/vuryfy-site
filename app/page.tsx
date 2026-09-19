import { Hero } from "@/components/sections/Hero";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { VerifyTypes } from "@/components/sections/VerifyTypes";
import { WhyVuryfy } from "@/components/sections/WhyVuryfy";
import { PricingPreview } from "@/components/sections/PricingPreview";
import { CTASection } from "@/components/sections/CTASection";

export default function Home() {
  return (
    <>
      <Hero />
      <HowItWorks />
      <VerifyTypes />
      <WhyVuryfy />
      <PricingPreview />
      <CTASection />
    </>
  );
}
