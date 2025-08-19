// src/components/LocalEmphasis.tsx
import { MapPin, Coffee, Users, Award } from "lucide-react";

const LocalEmphasis = () => {
  return (
    <section className="py-20 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <MapPin className="w-8 h-8 text-primary" />
                <span className="text-primary font-semibold text-lg">
                  Based in Lakewood, CO
                </span>
              </div>

              <h2 className="text-4xl lg:text-5xl font-bold text-foreground">
                Your Local Colorado
                <span className="block text-primary">Web Design Partners</span>
              </h2>

              <p className="text-xl text-muted-foreground leading-relaxed">
                We're not a faceless agency from across the country. We're your neighbors who 
                understand the Colorado market, the local competition, and what it takes to succeed 
                in the Front Range business community.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center flex-shrink-0">
                  <Coffee className="w-6 h-6 text-accent-foreground" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Meet In Person</h3>
                  <p className="text-muted-foreground text-sm">
                    Prefer face-to-face? Let's grab coffee and discuss your project over lattes.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center flex-shrink-0">
                  <Users className="w-6 h-6 text-accent-foreground" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Real People</h3>
                  <p className="text-muted-foreground text-sm">
                    No call centers or chatbots. You'll always talk to someone who knows your name.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center flex-shrink-0">
                  <Award className="w-6 h-6 text-accent-foreground" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Local Expertise</h3>
                  <p className="text-muted-foreground text-sm">
                    We know the Front Range market and what works for Colorado businesses.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-accent-foreground" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Same Time Zone</h3>
                  <p className="text-muted-foreground text-sm">
                    No 3am calls or delayed responses. We work when you work.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:order-first">
            <div className="relative">
              <div className="bg-gradient-card rounded-2xl p-8 shadow-summit">
                <div className="text-center space-y-6">
                  <div className="w-24 h-24 bg-primary rounded-full flex items-center justify-center mx-auto">
                    <MapPin className="w-12 h-12 text-primary-foreground" />
                  </div>

                  <h3 className="text-2xl font-bold text-foreground">
                    Serving the Front Range
                  </h3>

                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="space-y-2">
                      <p className="font-semibold text-foreground">Denver Metro</p>
                      <ul className="space-y-1 text-muted-foreground">
                        <li>• Denver</li>
                        <li>• Lakewood</li>
                        <li>• Wheat Ridge</li>
                        <li>• Arvada</li>
                        <li>• Westminster</li>
                      </ul>
                    </div>

                    <div className="space-y-2">
                      <p className="font-semibold text-foreground">Surrounding Areas</p>
                      <ul className="space-y-1 text-muted-foreground">
                        <li>• Boulder</li>
                        <li>• Golden</li>
                        <li>• Thornton</li>
                        <li>• Broomfield</li>
                        <li>• + More!</li>
                      </ul>
                    </div>
                  </div>
                  {/* Removed phone CTA — keeps this section purely trust-building */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocalEmphasis;
