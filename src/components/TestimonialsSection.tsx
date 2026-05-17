
import React from "react";
import { Card, CardContent, CardHeader, CardFooter } from "@/components/ui/card";

const testimonials = [
  {
    quote: "I've been a licensed electrician for 12 years but my website looked like it was built in 2005. Summit Sites had me something professional in two weeks. The phone hasn't stopped ringing since.",
    author: "Dave Kowalski",
    position: "Owner, Kowalski Electric"
  },
  {
    quote: "We were getting crushed by the big HVAC chains on Google. Summit Sites got us ranking locally and now we're booking jobs months out. Best investment we've made in the business.",
    author: "Lisa Reyes",
    position: "Founder, Mountain Air HVAC"
  },
  {
    quote: "My roofing business had no website at all. Summit Sites built one fast and now homeowners actually find me when they need storm damage repairs. Already paid for itself ten times over.",
    author: "Tom Buchanan",
    position: "Owner, Buchanan Roofing"
  }
];

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="py-20 bg-summit-forest text-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">What Our Clients Say</h2>
          <p className="text-white/80 max-w-2xl mx-auto text-lg">
            Hear from trade contractors who went from invisible online to booked solid.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
              <CardHeader>
                <div className="flex justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="text-white/30">
                    <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z"></path>
                    <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z"></path>
                  </svg>
                </div>
              </CardHeader>
              <CardContent className="text-center">
                <p className="mb-6 italic">{testimonial.quote}</p>
              </CardContent>
              <CardFooter className="flex-col text-center">
                <p className="font-bold">{testimonial.author}</p>
                <p className="text-sm text-white/70">{testimonial.position}</p>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
