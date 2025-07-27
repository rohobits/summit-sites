import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, MapPin, Users, TrendingUp } from "lucide-react";

const Portfolio = () => {
  const projects = [
    {
      title: "Little Explorers Daycare",
      category: "Childcare",
      location: "Arvada, CO",
      description: "A warm, welcoming site for parents seeking quality childcare. Features online enrollment, staff bios, and virtual tour.",
      results: "45% increase in enrollment inquiries",
      image: "https://images.unsplash.com/photo-1587654780291-39c9404d746b?w=500&h=300&fit=crop",
      tags: ["Childcare", "Enrollment Forms", "Local SEO"]
    },
    {
      title: "Peak Performance Physiotherapy",
      category: "Healthcare",
      location: "Golden, CO",
      description: "Professional healthcare site with online booking, service descriptions, and patient resources.",
      results: "60% more online appointments",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=500&h=300&fit=crop",
      tags: ["Healthcare", "Booking System", "Patient Portal"]
    },
    {
      title: "Elevation Bike Shop",
      category: "Retail",
      location: "Boulder, CO",
      description: "Dynamic retail site showcasing bikes, gear, and services. Integrated with inventory and repair booking.",
      results: "35% boost in service bookings",
      image: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=500&h=300&fit=crop",
      tags: ["Retail", "E-commerce", "Service Booking"]
    },
    {
      title: "Rocky Mountain CPA",
      category: "Professional Services",
      location: "Denver, CO",
      description: "Clean, trustworthy site for tax and accounting services. Features client portal and appointment scheduling.",
      results: "50% more client consultations",
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=500&h=300&fit=crop",
      tags: ["Professional", "Client Portal", "Scheduling"]
    },
    {
      title: "Mindful Wellness Studio",
      category: "Health & Wellness",
      location: "Lakewood, CO",
      description: "Zen-inspired design for yoga and wellness services. Online class booking and membership management.",
      results: "70% increase in class sign-ups",
      image: "https://images.unsplash.com/photo-1506126613408-eca07ce68e71?w=500&h=300&fit=crop",
      tags: ["Wellness", "Class Booking", "Memberships"]
    },
    {
      title: "Colorado Cleanup Crew",
      category: "Home Services",
      location: "Westminster, CO",
      description: "Service-focused site for residential and commercial cleaning. Online quotes and scheduling system.",
      results: "40% more service requests",
      image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=500&h=300&fit=crop",
      tags: ["Home Services", "Online Quotes", "Scheduling"]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-summit-cream to-background">
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <Badge variant="secondary" className="mb-4">
            <Users className="w-4 h-4 mr-2" />
            Real Results for Real Businesses
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Our Portfolio
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            See how we've helped Colorado businesses grow with beautiful, 
            lead-generating websites that deliver real results.
          </p>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="group hover:shadow-card transition-all duration-300 bg-card/50 backdrop-blur-sm">
                <div className="relative overflow-hidden rounded-t-lg">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge variant="secondary">{project.category}</Badge>
                  </div>
                </div>
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-xl font-semibold text-foreground">{project.title}</h3>
                    <Button size="sm" variant="ghost" className="p-2">
                      <ExternalLink className="w-4 h-4" />
                    </Button>
                  </div>
                  
                  <div className="flex items-center text-muted-foreground mb-3">
                    <MapPin className="w-4 h-4 mr-1" />
                    <span className="text-sm">{project.location}</span>
                  </div>
                  
                  <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex items-center mb-4 p-3 bg-primary/5 rounded-lg">
                    <TrendingUp className="w-4 h-4 text-primary mr-2" />
                    <span className="text-sm font-medium text-primary">{project.results}</span>
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <Badge key={tagIndex} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-foreground mb-6">
            Ready to Join Our Success Stories?
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Let's create a website that grows your Colorado business just like these.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="shadow-summit">
              Start Your Project
            </Button>
            <Button size="lg" variant="outline">
              View More Examples
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;