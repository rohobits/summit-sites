// src/pages/Quote.tsx
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Badge } from "@/components/ui/badge";
import { MapPin, Phone, Mail, Clock, CheckCircle, Zap, Users } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Quote = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    business: "",
    industry: "",
    location: "",
    projectType: "",
    timeline: "",
    budget: "",
    message: "",
    services: [] as string[]
  });

  const industries = [
    "Childcare Centers",
    "Ski & Bike Retail", 
    "Professional Services",
    "Health & Wellness",
    "Specialty Retail",
    "Education & Enrichment",
    "Home & Property Services",
    "Event & Party Services",
    "Non-profits & Associations",
    "Other"
  ];

  const services = [
    "New Website Design",
    "Website Redesign", 
    "E-commerce Setup",
    "Booking System",
    "SEO Optimization",
    "Ongoing Maintenance",
    "Content Creation",
    "Photography"
  ];

  const handleServiceChange = (service: string, checked: boolean) => {
    setFormData(prev => ({
      ...prev,
      services: checked 
        ? [...prev.services, service]
        : prev.services.filter(s => s !== service)
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Quote Request Submitted!",
      description: "We'll get back to you within 24 hours with a detailed proposal.",
    });
    // Reset form or handle submission
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-summit-cream to-background pt-20">
      {/* Hero Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <Badge variant="secondary" className="mb-4">
            <Zap className="w-4 h-4 mr-2" />
            Free Website Quote
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Let's Build Your Website
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Get a custom quote for your Colorado business website. 
            No pressure, just honest advice and transparent pricing.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 pb-20">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Quote Form */}
          <div className="lg:col-span-2">
            <Card className="bg-card/50 backdrop-blur-sm shadow-card">
              <CardHeader>
                <CardTitle className="text-2xl">Project Details</CardTitle>
                <p className="text-muted-foreground">
                  Tell us about your business and what you're looking for. 
                  The more details you provide, the more accurate your quote will be.
                </p>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Basic Info */}
                  {/* ... same fields as before ... */}

                  <Button type="submit" size="lg" className="w-full shadow-summit">
                    Get My Free Website Quote
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Info & Process (unchanged) */}
          {/* ... same as before ... */}
        </div>
      </div>
    </div>
  );
};

export default Quote;
