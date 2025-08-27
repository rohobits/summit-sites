// src/components/Hero.tsx
import { Button } from "@/components/ui/button";
import { ArrowRight, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
// ✅ Import the image so Vite fingerprints and emits the correct URL
import LogoUrl from "@/assets/Summit_Sites_Logo_Optimized.jpg";

const Hero = () => {
  return (
    <section className="relative bg-gradient-hero text-primary-foreground py-20 px-4 overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white rounded-full -translate-y-32 translate-x-32" />
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-white rounded-full translate-y-24 -translate-x-24" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10 grid lg:grid-cols-2 gap-12 items-center">
        {/* Right Logo on desktop, first on mobile */}
        <div className="order-1 lg:order-2 lg:justify-self-end flex justify-center">
          <div className="relative w-full max-w-xs sm:max-w-sm md:max-w-md aspect-square rounded-full overflow-hidden mx-auto">
            <img
              src={LogoUrl}
              alt="Summit Sites Logo"
              className="w-full h-full object-cover"
              loading="eager"
              fetchPriority="high"
              decoding="async"
              // Optional: add intrinsic size if you know it to reduce CLS
              // width={800}
              // height={800}
            />
          </div>
        </div>

        {/* Left Text Column on desktop, second on mobile */}
        <div className="order-2 lg:order-1 space-y-8">
          {/* Location pill */}
          <div className="flex items-center gap-2 text-primary-foreground/90">
            <MapPin className="w-5 h-5" />
            <span>Proudly serving Denver &amp; the Front Range</span>
          </div>

          <div className="space-y-6">
            {/* >>> Main product-focused headline <<< */}
            <h1 className="text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight">
              <span className="text-primary-foreground">Beautiful Websites</span>
              <br className="hidden sm:block" />
              <span className="text-primary-foreground">
                {"That\u00A0Bring"} In Customers.
              </span>
            </h1>

            {/* Supporting identity subline (smaller) */}
            <p className="text-xl lg:text-2xl text-accent font-semibold">
              Your Local Colorado Web Design Partners
            </p>

            {/* Supporting paragraph */}
            <p className="text-lg lg:text-xl text-primary-foreground/90 max-w-xl">
              Done-for-you websites that look amazing and actually grow your
              business. No stress, no technical headaches—just results.
            </p>
          </div>

          {/* High-contrast CTA */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              asChild
              className="bg-summit-cream text-foreground font-semibold px-6 py-4 rounded-lg shadow-lg hover:bg-summit-cream/90 transition-colors"
            >
              <Link to="/quote" className="group inline-flex items-center">
                Get Your Free Website Quote
                <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>

          <div className="flex items-center gap-6 text-sm text-primary-foreground/80">
            <div className="flex items-center gap-2">
              ✓ <span>Local Denver Business</span>
            </div>
            <div className="flex items-center gap-2">
              ✓ <span>Done in 2 Weeks</span>
            </div>
            <div className="flex items-center gap-2">
              ✓ <span>All-Inclusive Service</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
