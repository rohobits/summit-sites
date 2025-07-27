import { MapPin, Phone, Mail, Clock } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-6">
            <img 
              src="public/assets/Summit_Sites_b&w.png" 
              alt="Summit Sites Black & White Logo" 
              className="w-48 h-auto brightness-0 invert"
            />
            <p className="text-background/80 leading-relaxed">
              Professional websites for Colorado businesses. Based in Lakewood, 
              serving the entire Front Range with personal service and proven results.
            </p>
          </div>
          
          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Contact Info</h4>
            <div className="space-y-3 text-background/80">
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 flex-shrink-0" />
                <span>(720) 555-0123</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 flex-shrink-0" />
                <span>hello@summitsites.co</span>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <span>Lakewood, CO<br />Serving the Front Range</span>
              </div>
            </div>
          </div>
          
          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Services</h4>
            <ul className="space-y-2 text-background/80">
              <li>• Website Design & Development</li>
              <li>• SEO & Local Search</li>
              <li>• Hosting & Maintenance</li>
              <li>• Content Creation</li>
              <li>• Ongoing Support</li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Business Hours</h4>
            <div className="space-y-3 text-background/80">
              <div className="flex items-center gap-3">
                <Clock className="w-5 h-5 flex-shrink-0" />
                <div>
                  <p>Mon - Fri: 8:00 AM - 6:00 PM</p>
                  <p>Sat: 10:00 AM - 2:00 PM</p>
                  <p>Sun: Closed</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-background/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-background/60 text-sm">
              © 2024 Summit Sites. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm text-background/60">
              <a href="#" className="hover:text-background transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-background transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-background transition-colors">Site Map</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
