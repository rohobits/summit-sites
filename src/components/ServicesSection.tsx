
import React from "react";
import { Link } from "react-router-dom";
import { Wrench, PhoneCall, MapPin } from "lucide-react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: <Wrench className="h-10 w-10 text-summit-forest" />,
    title: "Custom Website Design",
    description: "A professional site that showcases your work, builds trust with homeowners, and turns visitors into paying customers.",
    feature: "Built for local search and lead generation",
    link: "/website-design"
  },
  {
    icon: <PhoneCall className="h-10 w-10 text-summit-forest" />,
    title: "Lead Generation & Quote Forms",
    description: "Capture more jobs with online quote request forms, click-to-call buttons, and service pages that convert.",
    feature: "More calls. More booked jobs.",
    link: "/lead-generation"
  },
  {
    icon: <MapPin className="h-10 w-10 text-summit-forest" />,
    title: "Local SEO & Google Rankings",
    description: "Get your business to the top of Google when homeowners in your area search for your trade. We handle the technical work.",
    feature: "Rank for 'best electrician in [your city]'",
    link: "/local-seo"
  }
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">Our Services</h2>
          <p className="text-summit-dark max-w-2xl mx-auto text-lg">
            We help trade contractors win more business online with professional websites built specifically for the way customers find and hire tradespeople.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="border border-summit-light hover:shadow-lg transition duration-300 h-full flex flex-col">
              <CardHeader>
                <div className="mb-4">{service.icon}</div>
                <CardTitle className="text-xl md:text-2xl">{service.title}</CardTitle>
                <CardDescription className="text-summit-dark">{service.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <div className="bg-summit-light/30 rounded-lg p-3 inline-block text-sm font-medium">
                  ✓ {service.feature}
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full border-summit-forest text-summit-forest hover:bg-summit-forest hover:text-white" asChild>
                  <Link to={service.link}>Learn More</Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
