import { CompanyCloud } from "../components/homepage/CompanyCloud";
import { HeroSection } from "../components/homepage/HeroSection";
import { FeaturesGrid } from "../components/homepage/FeaturesGrid";
import { HowItWorks } from "../components/homepage/HowItWorks";

export function HomePage() {
  return <>
    <HeroSection/>
    <CompanyCloud/>
    <FeaturesGrid/>
    <HowItWorks/>
  </>;
}