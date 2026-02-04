import { CompanyCloud } from "../components/homepage/CompanyCloud";
import { HeroSection } from "../components/homepage/HeroSection";
import { FeaturesGrid } from "../components/homepage/FeaturesGrid";

export function HomePage() {
  return <>
    <HeroSection/>
    <CompanyCloud/>
    <FeaturesGrid/>
  </>;
}