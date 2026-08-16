import Hero from "@/components/home/Hero";
import ProblemSection from "@/components/home/ProblemSection";
import Solutions from "@/components/home/Solutions";
import WhyLinsera from "@/components/home/WhyLinsera";
import Process from "@/components/home/Process";
import Technologies from "@/components/home/Technologies";
import FeaturedWork from "@/components/home/FeaturedWork";
import ProductHighlight from "@/components/home/ProductHighlight";
import TeamPreview from "@/components/home/TeamPreview";
import CTA from "@/components/home/CTA";

export default function HomePage() {
  return (
    <>
      <Hero />
      <ProblemSection />
      <Solutions />
      <WhyLinsera />
      <Process />
      <Technologies />
      <FeaturedWork />
      <ProductHighlight />
      <TeamPreview />
      <CTA />
    </>
  );
}
