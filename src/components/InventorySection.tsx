
import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, PhoneCall, Search, Star } from "lucide-react";

const LeadGenSection = () => {
  return (
    <section id="lead-gen" className="py-20 bg-gradient-to-b from-white to-summit-light/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-white/50 rounded-full py-1 px-3 mb-6">
            <Search size={16} className="text-summit-forest mr-2" />
            <span className="text-sm font-medium">Local Search & Lead Generation</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">
            Turn Google Searches Into Booked Jobs
          </h2>
          <p className="text-summit-dark max-w-2xl mx-auto text-lg mb-8">
            When a homeowner's pipes burst or their AC dies, they Google it. If your business isn't showing up, your competitor gets that call.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative rounded-2xl overflow-hidden shadow-xl">
            <img
              src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
              alt="Plumber working on pipes"
              className="w-full h-auto object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-summit-forest/80 to-transparent flex items-end p-6">
              <div className="text-white">
                <h3 className="text-xl font-bold mb-2">Be the First Result They See</h3>
                <p>Your competitors are already ranking. Let's get you there too.</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <h3 className="text-2xl font-bold text-summit-forest">
              Your best customers are already searching for you. They just can't find you yet.
            </h3>
            <p className="text-lg text-summit-dark">
              Most trade businesses do excellent work but lose jobs every week because their website is outdated, buried on page 3 of Google, or doesn't exist at all. We fix that with fast, professional sites built around getting you found and getting you called.
            </p>

            <div className="bg-white rounded-xl shadow-md p-6 border border-summit-light">
              <h4 className="font-bold mb-4 text-lg">What Every Site We Build Includes</h4>
              <ul className="space-y-3">
                {[
                  "Service pages optimized for local Google searches",
                  "Click-to-call and quote request forms",
                  "Photo galleries to show off your work",
                  "License, insurance & trust badges",
                  "Google Business Profile integration"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="text-summit-forest font-bold mt-0.5">✓</span>
                    <span className="text-summit-dark">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <a href="#contact">
              <Button className="w-full sm:w-auto bg-summit-forest hover:bg-summit-forest/90 text-white py-6 px-8 text-lg flex items-center gap-2 mt-2">
                Get Your Free Site Plan <ArrowRight size={18} />
              </Button>
            </a>
          </div>
        </div>

        <div className="mt-16 grid md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-xl shadow-md border border-summit-light flex flex-col items-center text-center">
            <div className="h-12 w-12 rounded-full bg-summit-light/50 flex items-center justify-center mb-4">
              <Search size={24} className="text-summit-forest" />
            </div>
            <h3 className="text-xl font-bold mb-2">Found on Google</h3>
            <p className="text-summit-dark">Rank where your customers are searching — "electrician near me," "emergency plumber," and more</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md border border-summit-light flex flex-col items-center text-center">
            <div className="h-12 w-12 rounded-full bg-summit-light/50 flex items-center justify-center mb-4">
              <PhoneCall size={24} className="text-summit-forest" />
            </div>
            <h3 className="text-xl font-bold mb-2">More Calls & Quotes</h3>
            <p className="text-summit-dark">Every page is built to get visitors to call or request a quote — not just browse and leave</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md border border-summit-light flex flex-col items-center text-center">
            <div className="h-12 w-12 rounded-full bg-summit-light/50 flex items-center justify-center mb-4">
              <Star size={24} className="text-summit-forest" />
            </div>
            <h3 className="text-xl font-bold mb-2">Build Your Reputation</h3>
            <p className="text-summit-dark">Showcase your reviews, certifications, and past work to build trust before a customer even calls</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LeadGenSection;
