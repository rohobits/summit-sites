
import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Zap, Phone } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative pt-28 pb-20 md:pt-36 md:pb-32 overflow-hidden bg-gradient-to-b from-summit-cream to-summit-light">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="flex-1 text-center md:text-left">
            <div className="inline-flex items-center bg-white/50 rounded-full py-1 px-3 mb-6">
              <Zap size={16} className="text-summit-forest mr-2" />
              <span className="text-sm font-medium">Web Design for Trade Contractors</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 gradient-text">
              Great Work Deserves <br />
              a Website <br />
              <span className="text-summit-forest">That Shows It</span>
            </h1>
            <p className="text-lg md:text-xl text-summit-dark mb-8 max-w-md mx-auto md:mx-0">
              We build professional websites for electricians, plumbers, HVAC companies, roofers, and other trade businesses that do great work but need a better online presence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <a href="#contact" className="w-full sm:w-auto">
                <Button className="w-full sm:w-auto bg-summit-forest hover:bg-summit-forest/90 text-white py-6 px-8 text-lg flex items-center justify-center gap-2">
                  Get a Free Consultation <ArrowRight size={18} />
                </Button>
              </a>
              <a href="#services" className="w-full sm:w-auto">
                <Button variant="outline" className="w-full sm:w-auto border-summit-forest text-summit-forest hover:bg-summit-forest/10 py-6 px-8 text-lg">
                  See Our Services
                </Button>
              </a>
            </div>
          </div>
          <div className="flex-1 relative">
            <img
              src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              alt="Electrician at work"
              className="rounded-2xl shadow-2xl w-full max-w-lg mx-auto md:mx-0 h-[400px] object-cover"
            />
            <div className="absolute -bottom-10 -left-10 hidden lg:block">
              <div className="bg-white rounded-xl shadow-lg p-4 w-48 animate-float">
                <div className="flex items-center gap-3 mb-2">
                  <div className="h-8 w-8 rounded-full bg-green-100 flex items-center justify-center">
                    <Phone size={16} className="text-summit-forest" />
                  </div>
                  <div>
                    <p className="font-medium text-sm">Client Results</p>
                  </div>
                </div>
                <div className="font-bold text-2xl">+3x</div>
                <div className="text-xs text-summit-medium">More inbound quote requests</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
