
import React from "react";
import { ArrowRight, MapPin, Star, Search, FileText, BarChart2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactSection from "@/components/ContactSection";

const features = [
  {
    title: "Google Business Profile",
    description: "We set up and fully optimize your Google Business Profile so you show up in the map results when locals search for your trade",
    icon: <MapPin className="h-10 w-10 text-summit-forest" />
  },
  {
    title: "Local Keyword Targeting",
    description: "We find exactly what homeowners in your area are searching for and build your site's content around those terms",
    icon: <Search className="h-10 w-10 text-summit-forest" />
  },
  {
    title: "Service Area Pages",
    description: "Dedicated pages for every city, town, and neighborhood you serve — so you rank in all the right places, not just one",
    icon: <FileText className="h-10 w-10 text-summit-forest" />
  },
  {
    title: "Review Generation Strategy",
    description: "More 5-star Google reviews means higher rankings and more trust from potential customers before they even call",
    icon: <Star className="h-10 w-10 text-summit-forest" />
  },
  {
    title: "Monthly Ranking Reports",
    description: "Clear, no-jargon reports showing your rankings, traffic, and leads so you always know exactly where you stand",
    icon: <BarChart2 className="h-10 w-10 text-summit-forest" />
  }
];

const LocalSEO = () => {
  return (
    <div className="min-h-screen bg-summit-cream">
      <Navbar />

      {/* Hero */}
      <section className="py-20 bg-gradient-to-b from-white to-summit-light/30">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="flex-1">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
                Get Found When Homeowners Search for Your Trade
              </h1>
              <p className="text-summit-dark text-lg mb-8 max-w-2xl">
                When someone in your area searches "plumber near me" or "best HVAC company," we make sure your business shows up at the top — not your competitors.
              </p>
              <a href="#contact" className="w-full sm:w-auto">
                <Button className="w-full sm:w-auto bg-summit-forest hover:bg-summit-forest/90 text-white py-6 px-8 text-lg flex items-center justify-center gap-2">
                  Get a Free SEO Audit <ArrowRight size={18} />
                </Button>
              </a>
            </div>
            <div className="flex-1 relative">
              <img
                src="https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?auto=format&fit=crop&w=800&q=80"
                alt="Google search results on a laptop"
                className="rounded-2xl shadow-xl w-full h-[400px] object-cover"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-lg border border-summit-light">
                <p className="font-bold text-summit-forest text-2xl">Page 1</p>
                <p className="text-sm text-summit-dark">Google rankings in 6 weeks</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">
              Everything That Gets You Ranking Locally
            </h2>
            <p className="text-summit-dark max-w-2xl mx-auto text-lg">
              Local SEO for trade businesses isn't one thing — it's a system. We handle all of it so you can stay focused on the work.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
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

      {/* Process */}
      <section className="py-20 bg-summit-light/30">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">
              How We Get You Ranking
            </h2>
            <p className="text-summit-dark max-w-2xl mx-auto text-lg">
              A proven process that gets trade businesses visible on Google — fast.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-12 lg:gap-24 items-center">
            <div>
              <ol className="relative border-l border-summit-forest">
                {[
                  {
                    step: "Local SEO Audit",
                    description: "We analyze your current online presence, your top competitors, and exactly what searches customers are using to find trade businesses in your area."
                  },
                  {
                    step: "On-Page Optimization",
                    description: "We update your website's content, headings, and structure to match local search intent and signal relevance to Google."
                  },
                  {
                    step: "Google Business Setup",
                    description: "We claim, verify, and fully optimize your Google Business Profile — often the fastest win for local visibility in the map results."
                  },
                  {
                    step: "Ongoing SEO & Reporting",
                    description: "We build service area pages, manage your local citations, and send monthly rank reports so you always know how you're performing."
                  }
                ].map((item, i) => (
                  <li key={i} className="mb-12 ml-6">
                    <span className="absolute flex items-center justify-center w-8 h-8 bg-summit-forest rounded-full -left-4 ring-4 ring-summit-cream text-white font-bold text-sm">
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
                src="https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&w=800&q=80"
                alt="Analytics and rankings on a laptop"
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Clients Say</h2>
            <p className="text-white/80 max-w-2xl mx-auto text-lg">
              Hear from trade contractors who went from invisible on Google to booked solid.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                quote: "We were getting crushed by the big HVAC chains on Google. Summit Sites got us ranking locally and now we're booking jobs months out. Best investment we've made in the business.",
                name: "Lisa Reyes",
                role: "Founder, Mountain Air HVAC"
              },
              {
                quote: "I didn't even know what SEO was before Summit Sites. Now my phone rings every day from people who found me on Google. It's made a huge difference for my plumbing business.",
                name: "Carlos Mendez",
                role: "Owner, Mendez Plumbing"
              },
              {
                quote: "My roofing business had no website at all. Summit Sites built one fast and now homeowners actually find me when they need storm damage repairs. Already paid for itself ten times over.",
                name: "Tom Buchanan",
                role: "Owner, Buchanan Roofing"
              }
            ].map((testimonial, index) => (
              <div
                key={index}
                className="bg-white/10 rounded-xl p-8 backdrop-blur-sm border border-white/20"
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

      {/* CTA */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="bg-summit-cream rounded-3xl p-12 text-center border border-summit-light">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 gradient-text">
              Ready to Rank Higher and Win More Jobs?
            </h2>
            <p className="text-summit-dark text-lg mb-8 max-w-2xl mx-auto">
              Let's get your business in front of the homeowners who are actively searching for what you do.
            </p>
            <a href="#contact">
              <Button className="bg-summit-forest hover:bg-summit-forest/90 text-white py-6 px-8 text-lg">
                Get Your Free SEO Audit
              </Button>
            </a>
          </div>
        </div>
      </section>

      <ContactSection />
      <Footer />
    </div>
  );
};

export default LocalSEO;
