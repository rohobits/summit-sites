// src/pages/About.tsx
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Palette, Clock, Rocket } from "lucide-react";

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
            We’re a local web design team based in Lakewood, Colorado—focused on helping
            small businesses build a strong, professional online presence. We understand
            the unique needs of Front Range entrepreneurs and create sites that are simple,
            effective, and built to grow with your business.
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
                Summit Sites started with a simple idea: every small business deserves a
                website that actually works for them. Too many local entrepreneurs either
                don’t have a site, or are stuck with outdated platforms that don’t reflect
                the quality of their work.
              </p>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                We decided to change that. Our mission is to make modern, lead‑generating
                websites accessible to Colorado businesses—whether you’re a yoga studio in
                Denver or a ski shop in Breckenridge. We’re just getting started, and we’re
                committed to building long‑term relationships with the businesses that shape
                our communities.
              </p>
              <div className="flex flex-wrap gap-3">
                <Badge variant="outline">Local &amp; Independent</Badge>
                <Badge variant="outline">Custom Designs</Badge>
                <Badge variant="outline">Quick Turnaround</Badge>
                <Badge variant="outline">Built to Grow</Badge>
              </div>
            </div>

            {/* Highlights (replaces stats) */}
            <Card className="bg-card/50 backdrop-blur-sm shadow-card">
              <CardContent className="p-8">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary mb-3">
                      <MapPin className="w-6 h-6" />
                    </div>
                    <div className="text-lg font-semibold text-foreground">
                      Local &amp; Independent
                    </div>
                    <div className="text-sm text-muted-foreground">
                      Based in Lakewood, serving Colorado small businesses.
                    </div>
                  </div>

                  <div className="text-center">
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary mb-3">
                      <Palette className="w-6 h-6" />
                    </div>
                    <div className="text-lg font-semibold text-foreground">
                      Custom Designs
                    </div>
                    <div className="text-sm text-muted-foreground">
                      Tailored to your brand—no cookie cutters.
                    </div>
                  </div>

                  <div className="text-center">
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary mb-3">
                      <Clock className="w-6 h-6" />
                    </div>
                    <div className="text-lg font-semibold text-foreground">
                      Quick Turnaround
                    </div>
                    <div className="text-sm text-muted-foreground">
                      Launch in days, not months.
                    </div>
                  </div>

                  <div className="text-center">
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary mb-3">
                      <Rocket className="w-6 h-6" />
                    </div>
                    <div className="text-lg font-semibold text-foreground">
                      Built to Grow
                    </div>
                    <div className="text-sm text-muted-foreground">
                      Scales with your business from day one.
                    </div>
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
                We believe in supporting our Colorado community. Every project helps local
                businesses grow and strengthens our Front Range economy.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-foreground mb-4">Simplicity</h3>
              <p className="text-muted-foreground">
                Website creation shouldn’t be overwhelming. We handle the complex stuff so
                you can focus on running your business.
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
