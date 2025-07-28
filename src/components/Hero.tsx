// src/components/Hero.tsx
import { Button } from "@/components/ui/button";
import { ArrowRight, MapPin, Phone } from "lucide-react";

const Hero = () => {
  // relative to the <base> we just set above
  const logoSrc = `${import.meta.env.BASE_URL}assets/Summit_Sites_Logo_Optimized.jpg`;

  return (
    <section className="relative bg-gradient-hero text-primary-foreground py-20 px-4 overflow-hidden">
      {/* …other markup… */}
      <div className="relative w-[24rem] h-[24rem] rounded-full overflow-hidden">
        <img
          src={logoSrc}
          alt="Summit Sites Logo"
          className="w-full h-full object-cover"
        />
      </div>
      {/* …other markup… */}
    </section>
  );
};

export default Hero;
