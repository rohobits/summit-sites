// src/components/Hero.tsx
import React, { useMemo, useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import LogoUrlEmitted from "../assets/Summit_Sites_Logo_Optimized.jpg";

const Hero = () => {
  // Detect a true page reload (works across modern browsers, including Safari)
  const isReload = useMemo(() => {
    const nav = performance.getEntriesByType("navigation")[0] as PerformanceNavigationTiming | undefined;
    return nav?.type === "reload";
  }, []);

  // Build initial src: cache-bust only on hard reloads
  const initialSrc = useMemo(
    () => (isReload ? `${LogoUrlEmitted}?v=${Date.now()}` : LogoUrlEmitted),
    [isReload]
  );

  const [src, setSrc] = useState(initialSrc);

  // Optional: if Safari stalled the first fetch, retry once after a tick
  useEffect(() => {
    if (!isReload) return;
    const t = requestAnimationFrame(() => setSrc((s) => s)); // nudge layout on reloads
    return () => cancelAnimationFrame(t);
  }, [isReload]);

  // Last-resort fallback: try public path if emitted URL ever errors
  const handleError = () => {
    const publicFallback = `${import.meta.env.BASE_URL}assets/Summit_Sites_Logo_Optimized.jpg`;
    if (src !== publicFallback) setSrc(publicFallback);
  };

  return (
    <section className="relative bg-gradient-hero text-primary-foreground py-20 px-4 overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white rounded-full -translate-y-32 translate-x-32" />
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-white rounded-full translate-y-24 -translate-x-24" />
      </div>

      {/* Center items on mobile; keep layout on desktop */}
      <div className="max-w-6xl mx-auto relative z-10 grid lg:grid-cols-2 gap-12 items-center justify-items-center lg:justify-items-stretch">
        {/* Right Logo on desktop, first on mobile */}
        <div className="order-1 lg:order-2 lg:justify-self-end flex justify-center">
          <div className="relative w-full max-w-xs sm:max-w-sm md:max-w-md aspect-square rounded-full overflow-hidden mx-auto">
            <img
              src={src}
              alt="Summit Sites Logo"
              className="w-full h-full object-cover"
              loading="eager"
              width={800}
              height={800}
              onError={handleError}
            />
          </div>
        </div>

        {/* Left Text Column on desktop, second on mobile */}
        <div className="order-2 lg:order-1 flex flex-col items-center lg:items-start space-y-8 text-center lg:text-left">
          {/* Location pill */}
          <div className="flex items-center gap-2 text-primary-foreground/90 justify-center lg:justify-start">
            <MapPin className="w-5 h-5" />
            <span>Proudly serving Denver &amp; the Front Range</span>
          </div>

          <div className="space-y-6">
            {/* >>> Main product-focused headline <<< */}
            <h1 className="text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight">
              <span className="text-primary-foreground">Beautiful Websites</span>
              <br className="hidden sm:block" />{" "}
              <span className="text-primary-foreground">
                {"That\u00A0Bring"} In Customers.
              </span>
            </h1>

            {/* Supporting identity subline (smaller) */}
            <p className="text-xl lg:text-2xl text-accent font-semibold">
              Your Local Colorado Web Design Partners
            </p>

            {/* Supporting paragraph */}
            <p className="text-lg lg:text-xl text-primary-foreground/90 max-w-xl mx-auto lg:mx-0">
              Done-for-you websites that look amazing and actually grow your
              business. No stress, no technical headaches—just results.
            </p>
          </div>

          {/* High-contrast CTA */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start w-full">
            <Button
              asChild
              className="mx-auto sm:mx-0 bg-summit-cream text-foreground font-semibold px-6 py-4 rounded-lg shadow-lg hover:bg-summit-cream/90 transition-colors"
            >
              <Link to="/quote" className="group inline-flex items-center">
                Get Your Free Website Quote
                <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>

          {/* Checkmarks row */}
          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-6 text-sm text-primary-foreground/80 w-full">
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
