import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Phone, Mail, CheckCircle } from "lucide-react";

const CTA = () => {
  return (
    <section className="py-20 px-4 bg-gradient-hero text-primary-foreground">
      <div className="max-w-4xl mx-auto text-center">
        <div className="space-y-8">
          <h2 className="text-4xl lg:text-5xl font-bold">
            Ready to Grow Your Business?
          </h2>
          
          <p className="text-xl text-primary-foreground/90 max-w-2xl mx-auto">
            Let's build you a website that works as hard as you do. Get started with 
            your free consultation and see how we can help your Colorado business thrive online.
          </p>
          
          <Card className="bg-white/10 backdrop-blur border-white/20 max-w-2xl mx-auto">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-6 text-white">
                What You'll Get in Your Free Consultation:
              </h3>
              
              <div className="grid sm:grid-cols-2 gap-4 mb-8">
                <div className="flex items-center gap-3 text-white/90">
                  <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                  <span>Website strategy tailored to your industry</span>
                </div>
                <div className="flex items-center gap-3 text-white/90">
                  <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                  <span>Competitor analysis and opportunities</span>
                </div>
                <div className="flex items-center gap-3 text-white/90">
                  <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                  <span>Custom quote with no hidden fees</span>
                </div>
                <div className="flex items-center gap-3 text-white/90">
                  <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                  <span>Timeline and next steps</span>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="hero" className="bg-white text-primary hover:bg-white/90">
                  <Phone className="w-4 h-4" />
                  Call (720) 555-0123
                </Button>
                
                <Button variant="outline" className="border-white/30 text-white hover:bg-white/10">
                  <Mail className="w-4 h-4" />
                  Email Us Your Project
                </Button>
              </div>
            </CardContent>
          </Card>
          
          <div className="space-y-4">
            <Button variant="hero" size="lg" className="group bg-accent text-accent-foreground hover:bg-accent/90">
              Get Your Free Website Quote Today
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <p className="text-sm text-primary-foreground/70">
              No pressure, no sales pitch. Just honest advice about growing your business online.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;