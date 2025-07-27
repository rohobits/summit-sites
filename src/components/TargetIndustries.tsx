import { Card, CardContent } from "@/components/ui/card";
import { 
  Baby, 
  Mountain, 
  Briefcase, 
  Heart, 
  ShoppingBag, 
  GraduationCap,
  Home,
  PartyPopper,
  Users
} from "lucide-react";

const industries = [
  {
    icon: Baby,
    title: "Child-Care Centers",
    description: "Build trust with parents through professional websites that showcase your programs and make enrollment easy."
  },
  {
    icon: Mountain,
    title: "Ski & Bike Retail",
    description: "Show off your gear and services with stunning visuals that capture the Colorado outdoor lifestyle."
  },
  {
    icon: Briefcase,
    title: "Professional & Technical Services",
    description: "Establish credibility and attract clients with polished, professional websites that convert visitors into leads."
  },
  {
    icon: Heart,
    title: "Health & Wellness Clinics",
    description: "Connect with patients through welcoming designs that make booking appointments simple and stress-free."
  },
  {
    icon: ShoppingBag,
    title: "Specialty Retail & Studios",
    description: "Showcase your unique products and create memorable brand experiences that drive foot traffic and sales."
  },
  {
    icon: GraduationCap,
    title: "Education & Enrichment",
    description: "Engage students and parents with informative websites that highlight your programs and make registration seamless."
  },
  {
    icon: Home,
    title: "Home & Property Services",
    description: "Build trust with homeowners through professional portfolios and easy-to-use contact forms."
  },
  {
    icon: PartyPopper,
    title: "Event & Party Services",
    description: "Show off your creativity with visual portfolios that make booking your services irresistible."
  },
  {
    icon: Users,
    title: "Non-Profits & Associations",
    description: "Tell your story and drive donations with compelling websites that connect with your community."
  }
];

const TargetIndustries = () => {
  return (
    <section className="py-20 px-4 bg-summit-cream">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            We Specialize in Your Industry
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From the mountains to the metro, we understand the unique needs of Colorado businesses. 
            Our templates and strategies are tailored to help you succeed in your specific market.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.map((industry, index) => {
            const Icon = industry.icon;
            return (
              <Card 
                key={index} 
                className="group hover:shadow-card-summit transition-all duration-300 hover:-translate-y-1 bg-card border-border/50"
              >
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                    <Icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-3">
                    {industry.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {industry.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TargetIndustries;