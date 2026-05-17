
import React from "react";
import { ArrowRight, CheckCircle, Monitor, Palette, Globe, Smartphone, Layers } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const DesignFeatures = [
  {
    title: "Professional Trade Brand",
    description: "A clean, credible design that builds trust with homeowners before they ever pick up the phone",
    icon: <Palette className="h-10 w-10 text-summit-forest" />
  },
  {
    title: "Mobile Optimization",
    description: "Responsive designs that look great on any device — most customers search from their phone",
    icon: <Smartphone className="h-10 w-10 text-summit-forest" />
  },
  {
    title: "Local SEO for Trade Niches",
    description: "Specialized SEO strategies to get your business found when local homeowners search for your trade",
    icon: <Globe className="h-10 w-10 text-summit-forest" />
  },
  {
    title: "Quote Forms & Click-to-Call",
    description: "Turn website visitors into customers with easy-to-use quote forms and prominent click-to-call buttons",
    icon: <Layers className="h-10 w-10 text-summit-forest" />
  },
  {
    title: "Service Area Pages",
    description: "Dedicated pages for every city and neighborhood you serve so you rank in all the right places",
    icon: <Monitor className="h-10 w-10 text-summit-forest" />
  }
];

const WebsiteDesign = () => {
  return (
    <div className="min-h-screen bg-summit-cream">
      <Navbar />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-white to-summit-light/30">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="flex-1">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
                Custom Website Design for Trade Contractors
              </h1>
              <p className="text-summit-dark text-lg mb-8 max-w-2xl">
                Stand out online with a website built specifically for electricians, plumbers,
                HVAC companies, roofers, and other trade businesses.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-summit-forest hover:bg-summit-forest/90 text-white py-6 px-8 text-lg flex items-center gap-2">
                  Get a Free Consultation <ArrowRight size={18} />
                </Button>
                <Button variant="outline" className="border-summit-forest text-summit-forest hover:bg-summit-forest hover:text-white py-6 px-8 text-lg">
                  View Portfolio
                </Button>
              </div>
            </div>
            <div className="flex-1 relative">
              <div className="bg-white p-6 rounded-2xl shadow-lg border border-summit-light animate-float">
                <img 
                  src="https://images.unsplash.com/photo-1517292987719-0369a794ec0f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
                  alt="Mountain bike shop website" 
                  className="rounded-xl w-full h-64 object-cover"
                />
                <div className="mt-4">
                  <div className="h-4 bg-summit-light/50 rounded-full w-3/4 mb-3"></div>
                  <div className="h-4 bg-summit-light/50 rounded-full w-1/2 mb-3"></div>
                  <div className="h-8 bg-summit-forest/80 rounded-md w-1/3 mt-4"></div>
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-xl shadow-lg border border-summit-light rotate-3 animate-float">
                <img 
                  src="https://images.unsplash.com/photo-1609710228159-0fa9bd7c0827?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80" 
                  alt="Mobile view" 
                  className="rounded-lg w-32 h-60 object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">
              Website Features Built for Trade Contractors
            </h2>
            <p className="text-summit-dark max-w-2xl mx-auto text-lg">
              We build websites that get your trade business found on Google and turn visitors into calls and booked jobs.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {DesignFeatures.map((feature, index) => (
              <div 
                key={index}
                className="bg-summit-cream rounded-xl p-8 border border-summit-light hover:shadow-lg transition-all duration-300"
              >
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-summit-dark">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-summit-light/30">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">
              Our Design Process
            </h2>
            <p className="text-summit-dark max-w-2xl mx-auto text-lg">
              We follow a straightforward process so you always know what's happening and your site launches fast.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 lg:gap-24 items-center">
            <div>
              <ol className="relative border-l border-summit-forest">
                {[
                  {
                    step: "Discovery & Strategy",
                    description: "We learn about your trade business, service area, and target customers to build a site strategy that drives real leads."
                  },
                  {
                    step: "Design & Prototyping",
                    description: "We create a professional design that reflects your brand's quality and credibility, focused on converting visitors into callers."
                  },
                  {
                    step: "Development & Launch",
                    description: "We build your site with clean code, set up your quote forms, click-to-call, and local SEO — then get it live fast."
                  },
                  {
                    step: "Ongoing Support",
                    description: "We monitor performance, make updates, and keep your site ranking so you can focus on the job site."
                  }
                ].map((item, i) => (
                  <li key={i} className="mb-12 ml-6">
                    <span className="absolute flex items-center justify-center w-8 h-8 bg-summit-forest rounded-full -left-4 ring-4 ring-summit-cream text-white">
                      {i + 1}
                    </span>
                    <h3 className="text-xl font-semibold mb-2">{item.step}</h3>
                    <p className="text-summit-dark">{item.description}</p>
                  </li>
                ))}
              </ol>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-lg border border-summit-light">
              <img 
                src="https://images.unsplash.com/photo-1517247864542-6226ab25a9bd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
                alt="Design process" 
                className="rounded-xl w-full h-96 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-summit-forest text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              What Our Clients Say
            </h2>
            <p className="text-white/80 max-w-2xl mx-auto text-lg">
              Hear from trade contractors who went from hard to find online to booked solid.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                quote: "I've been a licensed electrician for 12 years but my website looked like it was built in 2005. Summit Sites had me something professional in two weeks. The phone hasn't stopped ringing since.",
                name: "Dave Kowalski",
                role: "Owner, Kowalski Electric"
              },
              {
                quote: "We were getting crushed by the big HVAC chains on Google. Summit Sites got us ranking locally and now we're booking jobs months out. Best investment we've made in the business.",
                name: "Lisa Reyes",
                role: "Founder, Mountain Air HVAC"
              },
              {
                quote: "My roofing business had no website at all. Summit Sites built one fast and now homeowners find me when they need storm damage repairs. Already paid for itself ten times over.",
                name: "Tom Buchanan",
                role: "Owner, Buchanan Roofing"
              }
            ].map((testimonial, index) => (
              <div 
                key={index}
                className="bg-white/10 rounded-xl p-8 backdrop-blur-sm border border-white/20 hover:shadow-lg transition-all duration-300"
              >
                <div className="mb-4 text-2xl">"</div>
                <p className="text-lg mb-6">{testimonial.quote}</p>
                <div>
                  <p className="font-bold">{testimonial.name}</p>
                  <p className="text-white/80 text-sm">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="bg-summit-cream rounded-3xl overflow-hidden p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Get More Calls from Your Website?
            </h2>
            <p className="text-summit-dark text-lg mb-8 max-w-2xl mx-auto">
              Let's build a site that works as hard as you do — bringing in steady leads and booked jobs for your trade business.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button className="bg-summit-forest hover:bg-summit-forest/90 text-white py-6 px-8 text-lg">
                Schedule Your Free Consultation
              </Button>
              <Button variant="outline" className="border-summit-forest text-summit-forest hover:bg-summit-forest hover:text-white py-6 px-8 text-lg">
                View Our Portfolio
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default WebsiteDesign;

