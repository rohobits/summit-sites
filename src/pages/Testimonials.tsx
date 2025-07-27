import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, Quote, MapPin, TrendingUp } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Mitchell",
      business: "Little Explorers Daycare",
      location: "Arvada, CO",
      role: "Director",
      content: "Summit Sites transformed our online presence completely. We went from struggling to fill spots to having a waiting list. The website is beautiful and parents love how easy it is to find information and enroll online.",
      rating: 5,
      result: "45% increase in enrollment inquiries",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=80&h=80&fit=crop&crop=face"
    },
    {
      name: "Dr. Michael Chen",
      business: "Peak Performance Physiotherapy",
      location: "Golden, CO",
      role: "Physical Therapist & Owner",
      content: "The team at Summit Sites understood exactly what we needed. Our new website has streamlined our booking process and helped us reach more patients in the Golden area. The ongoing support is exceptional.",
      rating: 5,
      result: "60% more online appointments",
      image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=80&h=80&fit=crop&crop=face"
    },
    {
      name: "Jake Rodriguez",
      business: "Elevation Bike Shop",
      location: "Boulder, CO",
      role: "Owner",
      content: "Working with Summit Sites was a game-changer. They created a site that perfectly captures our shop's vibe and makes it easy for customers to book repairs and browse our inventory. Local expertise really shows.",
      rating: 5,
      result: "35% boost in service bookings",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=face"
    },
    {
      name: "Lisa Thompson",
      business: "Rocky Mountain CPA",
      location: "Denver, CO",
      role: "Certified Public Accountant",
      content: "I was dreading dealing with a website redesign, but Summit Sites made it completely stress-free. They handled everything and created a professional site that brings in new clients consistently.",
      rating: 5,
      result: "50% more client consultations",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=80&h=80&fit=crop&crop=face"
    },
    {
      name: "Amanda Foster",
      business: "Mindful Wellness Studio",
      location: "Lakewood, CO",
      role: "Yoga Instructor & Studio Owner",
      content: "The Summit Sites team truly understood our wellness philosophy and created a website that feels peaceful yet professional. Our online class bookings have skyrocketed since the launch.",
      rating: 5,
      result: "70% increase in class sign-ups",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop&crop=face"
    },
    {
      name: "Tom Wilson",
      business: "Colorado Cleanup Crew",
      location: "Westminster, CO",
      role: "Founder",
      content: "Summit Sites delivered exactly what they promised - a website that generates leads. The online quote system has revolutionized how we do business. Best investment we've made in years.",
      rating: 5,
      result: "40% more service requests",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop&crop=face"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-summit-cream to-background">
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <Badge variant="secondary" className="mb-4">
            <Star className="w-4 h-4 mr-2" />
            5-Star Reviews from Colorado Businesses
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Client Testimonials
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Don't just take our word for it. Here's what Colorado business owners 
            are saying about their Summit Sites experience.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-primary mb-2">5.0</div>
              <div className="text-sm text-muted-foreground">Average Rating</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">50+</div>
              <div className="text-sm text-muted-foreground">Happy Clients</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">100%</div>
              <div className="text-sm text-muted-foreground">Project Completion</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">48hr</div>
              <div className="text-sm text-muted-foreground">Average Response</div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="group hover:shadow-card transition-all duration-300 bg-card/50 backdrop-blur-sm">
                <CardContent className="p-6">
                  {/* Quote Icon */}
                  <div className="flex justify-between items-start mb-4">
                    <Quote className="w-8 h-8 text-primary/20" />
                    <div className="flex">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                      ))}
                    </div>
                  </div>
                  
                  {/* Testimonial Content */}
                  <p className="text-muted-foreground mb-6 leading-relaxed italic">
                    "{testimonial.content}"
                  </p>
                  
                  {/* Results */}
                  <div className="flex items-center mb-4 p-3 bg-primary/5 rounded-lg">
                    <TrendingUp className="w-4 h-4 text-primary mr-2" />
                    <span className="text-sm font-medium text-primary">{testimonial.result}</span>
                  </div>
                  
                  {/* Client Info */}
                  <div className="flex items-center space-x-3">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div className="flex-1">
                      <div className="font-semibold text-foreground">{testimonial.name}</div>
                      <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                      <div className="text-sm font-medium text-primary">{testimonial.business}</div>
                      <div className="flex items-center text-xs text-muted-foreground">
                        <MapPin className="w-3 h-3 mr-1" />
                        {testimonial.location}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-foreground mb-6">
            Ready to Become Our Next Success Story?
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Join these satisfied Colorado business owners and start growing your online presence today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-gradient-to-r from-primary to-primary/90 text-primary-foreground rounded-lg font-medium hover:shadow-summit transition-all duration-300 hover:scale-105">
              Get Your Free Consultation
            </button>
            <button className="px-8 py-4 border border-border text-foreground rounded-lg font-medium hover:bg-muted/50 transition-all duration-300">
              View Our Portfolio
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Testimonials;