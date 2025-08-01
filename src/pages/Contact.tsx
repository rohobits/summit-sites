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

const Contact = () => {
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
            Free Consultation & Quote
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
          {/* Contact Form */}
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
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium text-foreground mb-2 block">
                        Full Name *
                      </label>
                      <Input 
                        value={formData.name}
                        onChange={(e) => setFormData(prev => ({...prev, name: e.target.value}))}
                        placeholder="Your full name"
                        required
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium text-foreground mb-2 block">
                        Email Address *
                      </label>
                      <Input 
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData(prev => ({...prev, email: e.target.value}))}
                        placeholder="your@email.com"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium text-foreground mb-2 block">
                        Phone Number
                      </label>
                      <Input 
                        value={formData.phone}
                        onChange={(e) => setFormData(prev => ({...prev, phone: e.target.value}))}
                        placeholder="(720) 555-0123"
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium text-foreground mb-2 block">
                        Business Name *
                      </label>
                      <Input 
                        value={formData.business}
                        onChange={(e) => setFormData(prev => ({...prev, business: e.target.value}))}
                        placeholder="Your business name"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium text-foreground mb-2 block">
                        Industry *
                      </label>
                      <Select onValueChange={(value) => setFormData(prev => ({...prev, industry: value}))}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select your industry" />
                        </SelectTrigger>
                        <SelectContent>
                          {industries.map(industry => (
                            <SelectItem key={industry} value={industry}>{industry}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <label className="text-sm font-medium text-foreground mb-2 block">
                        Location
                      </label>
                      <Input 
                        value={formData.location}
                        onChange={(e) => setFormData(prev => ({...prev, location: e.target.value}))}
                        placeholder="Denver, Golden, Boulder, etc."
                      />
                    </div>
                  </div>

                  {/* Project Details */}
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium text-foreground mb-2 block">
                        Timeline *
                      </label>
                      <Select onValueChange={(value) => setFormData(prev => ({...prev, timeline: value}))}>
                        <SelectTrigger>
                          <SelectValue placeholder="When do you need this?" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="asap">ASAP (Rush - 1 week)</SelectItem>
                          <SelectItem value="2weeks">Within 2 weeks</SelectItem>
                          <SelectItem value="month">Within a month</SelectItem>
                          <SelectItem value="2months">1-2 months</SelectItem>
                          <SelectItem value="flexible">I'm flexible</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <label className="text-sm font-medium text-foreground mb-2 block">
                        Budget Range
                      </label>
                      <Select onValueChange={(value) => setFormData(prev => ({...prev, budget: value}))}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select budget range" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="under2k">Under $2,000</SelectItem>
                          <SelectItem value="2k-5k">$2,000 - $5,000</SelectItem>
                          <SelectItem value="5k-10k">$5,000 - $10,000</SelectItem>
                          <SelectItem value="10k+">$10,000+</SelectItem>
                          <SelectItem value="discuss">Let's discuss</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  {/* Services */}
                  <div>
                    <label className="text-sm font-medium text-foreground mb-3 block">
                      Services Needed (select all that apply)
                    </label>
                    <div className="grid md:grid-cols-2 gap-3">
                      {services.map(service => (
                        <div key={service} className="flex items-center space-x-2">
                          <Checkbox 
                            id={service}
                            onCheckedChange={(checked) => handleServiceChange(service, !!checked)}
                          />
                          <label htmlFor={service} className="text-sm text-foreground">
                            {service}
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">
                      Project Description
                    </label>
                    <Textarea 
                      value={formData.message}
                      onChange={(e) => setFormData(prev => ({...prev, message: e.target.value}))}
                      placeholder="Tell us more about your project, goals, and any specific requirements..."
                      rows={4}
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full shadow-summit">
                    Get My Free Quote
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Info & Process */}
          <div className="space-y-6">
            {/* Contact Card */}
            <Card className="bg-card/50 backdrop-blur-sm shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <MapPin className="w-5 h-5 mr-2 text-primary" />
                  Get In Touch
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Phone className="w-4 h-4 text-primary" />
                  <span className="text-foreground">(720) 555-SITE</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="w-4 h-4 text-primary" />
                  <span className="text-foreground">hello@summitsites.co</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="w-4 h-4 text-primary" />
                  <span className="text-foreground">Lakewood, CO 80228</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Clock className="w-4 h-4 text-primary" />
                  <span className="text-foreground">Mon-Fri 9AM-6PM MT</span>
                </div>
              </CardContent>
            </Card>

            {/* Process Card */}
            <Card className="bg-card/50 backdrop-blur-sm shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Users className="w-5 h-5 mr-2 text-primary" />
                  Our Process
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xs font-bold mt-0.5">
                    1
                  </div>
                  <div>
                    <div className="font-medium text-foreground">Free Consultation</div>
                    <div className="text-sm text-muted-foreground">We discuss your needs and goals</div>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xs font-bold mt-0.5">
                    2
                  </div>
                  <div>
                    <div className="font-medium text-foreground">Custom Proposal</div>
                    <div className="text-sm text-muted-foreground">Detailed quote with timeline</div>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xs font-bold mt-0.5">
                    3
                  </div>
                  <div>
                    <div className="font-medium text-foreground">Design & Build</div>
                    <div className="text-sm text-muted-foreground">We handle everything</div>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xs font-bold mt-0.5">
                    4
                  </div>
                  <div>
                    <div className="font-medium text-foreground">Launch & Support</div>
                    <div className="text-sm text-muted-foreground">Go live with ongoing help</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Guarantee Card */}
            <Card className="bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20">
              <CardContent className="p-6">
                <div className="flex items-center space-x-3 mb-3">
                  <CheckCircle className="w-6 h-6 text-primary" />
                  <div className="font-semibold text-foreground">Our Guarantee</div>
                </div>
                <p className="text-sm text-muted-foreground mb-4">
                  If you're not completely satisfied with your website, 
                  we'll work with you until you love it - or refund your money.
                </p>
                <div className="text-xs text-primary font-medium">
                  ✓ 30-day satisfaction guarantee<br/>
                  ✓ Free revisions during development<br/>
                  ✓ 24-hour response time
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;