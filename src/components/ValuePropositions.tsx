import { Card, CardContent } from "@/components/ui/card";
import { 
  CheckCircle, 
  Target, 
  Puzzle, 
  Shield, 
  TrendingUp, 
  RefreshCw,
  Heart
} from "lucide-react";

const valueProps = [
  {
    icon: CheckCircle,
    title: "Done-For-You, Stress-Free Setup",
    description: "We handle everything from start to launch—design, content, hosting, SEO, and edits—so you don't have to. Designed for busy owners and directors who need a beautiful website without the overwhelm."
  },
  {
    icon: Target,
    title: "Lead-Generating Websites That Work",
    description: "Our websites don't just look great—they're built to bring in new customers through forms, booking widgets, and SEO. Conversion-focused layouts drive calls, signups, and sales automatically."
  },
  {
    icon: Puzzle,
    title: "Template-Powered = Fast + Affordable",
    description: "We use a curated set of high-performing templates tailored to your industry to deliver professional results quickly and affordably. No bloated agency fees or long timelines."
  },
  {
    icon: Shield,
    title: "Hosting, Security & Maintenance Included",
    description: "Every site includes secure hosting, SSL encryption, and ongoing maintenance. No hidden fees. No worries about updates, outages, or broken pages."
  },
  {
    icon: TrendingUp,
    title: "Built-In SEO & Performance Tracking",
    description: "Our sites are optimized for local search from day one. We'll track performance and deliver regular reports so you see your ROI clearly."
  },
  {
    icon: RefreshCw,
    title: "Ongoing Edits & Priority Support",
    description: "Monthly plan includes hours of hands-on updates, content swaps, and quick fixes—so your site stays fresh. Need changes? Just email us. We'll handle it."
  },
  {
    icon: Heart,
    title: "Local Business with a Personal Touch",
    description: "We're based in Lakewood, CO, and we specialize in working with small businesses across the Front Range. You'll always talk to a real person who knows your name—and your business."
  }
];

const ValuePropositions = () => {
  return (
    <section className="py-20 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Why Choose Summit Sites?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We're not just another web design agency. We're your local Colorado partners 
            who understand what it takes to grow a business in the Front Range.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {valueProps.map((prop, index) => {
            const Icon = prop.icon;
            return (
              <Card 
                key={index} 
                className="group hover:shadow-card-summit transition-all duration-300 hover:-translate-y-1 bg-gradient-card border-border/50"
              >
                <CardContent className="p-8">
                  <div className="mb-6">
                    <div className="w-14 h-14 bg-primary rounded-lg flex items-center justify-center mb-4 group-hover:bg-summit-green-light transition-colors duration-300">
                      <Icon className="w-7 h-7 text-primary-foreground" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground mb-3">
                      {prop.title}
                    </h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    {prop.description}
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

export default ValuePropositions;