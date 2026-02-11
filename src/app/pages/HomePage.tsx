import { CompanyCloud } from "../components/homepage/CompanyCloud";
import { HeroSection } from "../components/homepage/HeroSection";
import { FeaturesGrid } from "../components/homepage/FeaturesGrid";
import { HowItWorks } from "../components/homepage/HowItWorks";
import { ProductPreview } from "../components/homepage/ProductPreview";
import { UseCases } from "../components/homepage/UseCases";
import { Testimonials } from "../components/homepage/Testimonial";
import { Pricing } from "../components/homepage/Pricing";
import { CTAsection } from "../components/homepage/CTAsection";

export function HomePage() {
  return <>
    <HeroSection/>
    <CompanyCloud/>
    <FeaturesGrid/>
    <HowItWorks/>
    <ProductPreview/>
    <UseCases/>
    <Testimonials/>
    <Pricing/>
    <CTAsection/>
  </>;
}