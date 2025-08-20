// src/components/Footer.tsx
import { MapPin, Mail } from "lucide-react";

const Footer = () => {
  // resolves to "/" in dev or "/summit-sites/" in production
  const bwLogoSrc = `${import.meta.env.BASE_URL}assets/Summit_Sites_bw.png`;

  return (
    <footer className="bg-foreground text-background py-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* 3-column grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {/* Logo only */}
          <div className="flex justify-center lg:justify-start">
            <div className="w-48 h-48 rounded-full overflow-hidden">
              <img
                src={bwLogoSrc}
                alt="Summit Sites Logo"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Contact Info</h4>
            <div className="space-y-3 text-background/80">
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 flex-shrink-0" />
                <span>support@summitsites.co</span>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <span>
                  Lakewood, CO
                  <br />
                  Serving the Front Range
                </span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Services</h4>
            <ul className="space-y-2 text-background/80 list-none">
              <li>• Website Design & Development</li>
              <li>• SEO & Local Search</li>
              <li>• Hosting & Maintenance</li>
              <li>• Content Creation</li>
              <li>• Ongoing Support</li>
              <li>• Done-for-you Newsletters</li>
            </ul>
          </div>
        </div>

        {/* Bottom Links */}
        <div className="border-t border-background/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-background/60 text-sm">
              © 2025 Summit Sites. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm text-background/60">
              <a href="#" className="hover:text-background transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-background transition-colors">
                Terms of Service
              </a>
              <a href="#" className="hover:text-background transition-colors">
                Site Map
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
