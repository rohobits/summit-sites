import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Users, Award, Clock } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-summit-cream to-background">
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <Badge variant="secondary" className="mb-4">
            <MapPin className="w-4 h-4 mr-2" />
            Proudly Serving the Denver Front Range
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            About Summit Sites
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            We're a local web design team passionate about helping Colorado businesses 
            thrive online. Based in Lakewood, we understand the unique needs of Front Range entrepreneurs.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">Our Story</h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Summit Sites was born from a simple observation: too many amazing local businesses 
                were struggling with outdated websites or no web presence at all. We saw talented 
                entrepreneurs pouring their hearts into their work, only to miss out on customers 
                because their online presence didn't reflect their quality.
              </p>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                We decided to change that. Our mission is to make professional, lead-generating 
                websites accessible to every local business—from the ski shop in Breckenridge 
                to the daycare in Arvada.
              </p>
              <div className="flex flex-wrap gap-3">
                <Badge variant="outline">Colorado Locals</Badge>
                <Badge variant="outline">Small Business Focused</Badge>
                <Badge variant="outline">Results Driven</Badge>
              </div>
            </div>
            <Card className="bg-card/50 backdrop-blur-sm shadow-card">
              <CardContent className="p-8">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary mb-3">
                      <Users className="w-6 h-6" />
                    </div>
                    <div className="text-2xl font-bold text-foreground">50+</div>
                    <div className="text-sm text-muted-foreground">Local Businesses Served</div>
                  </div>
                  <div className="text-center">
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary mb-3">
                      <Award className="w-6 h-6" />
                    </div>
                    <div className="text-2xl font-bold text-foreground">5+</div>
                    <div className="text-sm text-muted-foreground">Years Experience</div>
                  </div>
                  <div className="text-center">
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary mb-3">
                      <Clock className="w-6 h-6" />
                    </div>
                    <div className="text-2xl font-bold text-foreground">72hr</div>
                    <div className="text-sm text-muted-foreground">Average Launch Time</div>
                  </div>
                  <div className="text-center">
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary mb-3">
                      <MapPin className="w-6 h-6" />
                    </div>
                    <div className="text-2xl font-bold text-foreground">100%</div>
                    <div className="text-sm text-muted-foreground">Colorado Based</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-foreground mb-12">What Drives Us</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-foreground mb-4">Local First</h3>
              <p className="text-muted-foreground">
                We believe in supporting our Colorado community. Every project helps 
                local businesses grow and strengthens our Front Range economy.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-foreground mb-4">Simplicity</h3>
              <p className="text-muted-foreground">
                Website creation shouldn't be overwhelming. We handle the complex stuff 
                so you can focus on running your business.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-foreground mb-4">Results</h3>
              <p className="text-muted-foreground">
                Pretty websites are nice, but websites that bring in customers are better. 
                Every site we build is designed to grow your business.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;