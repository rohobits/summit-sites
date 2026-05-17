
import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-summit-cream/95 shadow-md py-2" : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
        <a href="/">
          <img src="/logo.png" alt="Summit Sites" className="h-[74px] w-auto" />
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8 items-center">
          <a href="/#services" className="text-summit-forest hover:text-summit-dark font-medium transition">Services</a>
          <a href="/#testimonials" className="text-summit-forest hover:text-summit-dark font-medium transition">Testimonials</a>
          <a href="/#contact">
            <Button className="bg-summit-forest hover:bg-summit-forest/90">Contact Us</Button>
          </a>
        </nav>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-summit-forest"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-summit-cream shadow-lg">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <a
              href="/#services"
              className="text-summit-forest hover:text-summit-dark font-medium transition py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Services
            </a>
            <a
              href="/#testimonials"
              className="text-summit-forest hover:text-summit-dark font-medium transition py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Testimonials
            </a>
            <a
              href="/#contact"
              onClick={() => setMobileMenuOpen(false)}
            >
              <Button className="bg-summit-forest hover:bg-summit-forest/90 w-full">Contact Us</Button>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
