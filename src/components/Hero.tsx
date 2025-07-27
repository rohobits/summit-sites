import { Button } from "@/components/ui/button";
import { ArrowRight, MapPin, Phone } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative bg-gradient-hero text-primary-foreground py-20 px-4 overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white rounded-full -translate-y-32 translate-x-32"></div>
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-white rounded-full translate-y-24 -translate-x-24"></div>
      </div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="flex items-center gap-2 text-primary-foreground/90">
              <MapPin className="w-5 h-5" />
              <span className="font-medium">Proudly serving Denver & the Front Range</span>
            </div>
            
            <div className="space-y-6">
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                Beautiful Websites That
                <span className="block text-accent"> Bring In Customers</span>
              </h1>
              
              <p className="text-xl text-primary-foreground/90 max-w-lg">
                Done-for-you websites that look amazing and actually grow your business. 
                No stress, no technical headaches—just results.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" className="group">
                Get Your Free Website Quote
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              
              <Button variant="outline" className="border-white/30 text-white hover:bg-white/10">
                <Phone className="w-4 h-4" />
                Call (720) 555-0123
              </Button>
            </div>
            
            <div className="flex items-center gap-6 text-sm text-primary-foreground/80">
              <div className="flex items-center gap-2">
                ✓ <span>Local Denver Business</span>
              </div>
              <div className="flex items-center gap-2">
                ✓ <span>Done in 2 Weeks</span>
              </div>
              <div className="flex items-center gap-2">
                ✓ <span>All-Inclusive Service</span>
              </div>
            </div>
          </div>
          
          <div className="lg:justify-self-end">
            <div className="relative">
              <img 
                src="assets/Summit_Sites_Logo_Optimized.jpg" 
                alt="Summit Sites Logo" 
                className="w-80 h-80 object-contain drop-shadow-2xl"
              />
              <div className="absolute -inset-4 bg-white/20 rounded-full blur-3xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
