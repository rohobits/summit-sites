
import React from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "Summit Electrical Services",
    category: "Lead Generation Website",
    image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description: "A complete online presence with service area pages, work photo galleries, and quote request forms for a 3-person electrical contractor.",
    results: "68% increase in inbound quote requests"
  },
  {
    title: "Peak Plumbing & Drain",
    category: "Local SEO Website",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description: "A local SEO-focused site with emergency contact CTAs and service pages targeting multiple cities and zip codes.",
    results: "First page Google rankings in 6 weeks"
  }
];

const PortfolioSection = () => {
  return (
    <section id="portfolio" className="py-20 bg-gradient-to-b from-summit-light/30 to-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center mb-16">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">Our Work</h2>
            <p className="text-summit-dark max-w-xl text-lg">
              See how we've helped trade contractors get found online and win more jobs.
            </p>
          </div>
          <Button className="mt-6 md:mt-0 bg-summit-forest hover:bg-summit-forest/90">
            View All Projects
          </Button>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12">
          {projects.map((project, index) => (
            <div key={index} className="group relative overflow-hidden rounded-2xl">
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-[400px] object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex flex-col justify-end p-6">
                <span className="text-white/80 text-sm font-medium mb-2">{project.category}</span>
                <h3 className="text-white text-2xl font-bold mb-2">{project.title}</h3>
                <p className="text-white/90 mb-3 max-w-md">{project.description}</p>
                <div className="bg-white/20 backdrop-blur-sm rounded-lg py-2 px-3 text-white inline-block mb-4">
                  <span className="font-medium">Result: </span>{project.results}
                </div>
                <Button 
                  variant="ghost" 
                  className="text-white hover:bg-white/20 w-fit p-0 group-hover:underline flex items-center gap-2"
                >
                  View Case Study <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
