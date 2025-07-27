import Hero from "@/components/Hero";
import ValuePropositions from "@/components/ValuePropositions";
import TargetIndustries from "@/components/TargetIndustries";
import LocalEmphasis from "@/components/LocalEmphasis";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <ValuePropositions />
      <TargetIndustries />
      <LocalEmphasis />
      <CTA />
      <Footer />
    </div>
  );
};

export default Index;
