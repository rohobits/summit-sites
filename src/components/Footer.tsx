
import React from "react";
import { Zap } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-summit-cream py-16 border-t border-summit-light">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img src="/lovable-uploads/dffd4ba1-5d64-4c01-ad02-153fb71467c5.png" alt="Summit Sites Logo" className="h-10 w-10" />
              <span className="font-bold text-xl text-summit-forest">Summit Sites</span>
            </div>
            <p className="text-summit-dark mb-6">
              Web design for trade contractors who do great work and deserve a website that wins them more jobs.
            </p>
            <div className="flex gap-4">
              <a href="#" className="bg-summit-light/50 hover:bg-summit-light p-2 rounded-full transition">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-summit-forest">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </a>
              <a href="#" className="bg-summit-light/50 hover:bg-summit-light p-2 rounded-full transition">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-summit-forest">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
                </svg>
              </a>
              <a href="#" className="bg-summit-light/50 hover:bg-summit-light p-2 rounded-full transition">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-summit-forest">
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                </svg>
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4">Services</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-summit-dark hover:text-summit-forest transition">Custom Website Design</a></li>
              <li><a href="#" className="text-summit-dark hover:text-summit-forest transition">Lead Generation & Quote Forms</a></li>
              <li><a href="#" className="text-summit-dark hover:text-summit-forest transition">Local SEO & Google Rankings</a></li>
              <li><a href="#" className="text-summit-dark hover:text-summit-forest transition">Service Area Pages</a></li>
              <li><a href="#" className="text-summit-dark hover:text-summit-forest transition">Website Maintenance</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4">Company</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-summit-dark hover:text-summit-forest transition">About Us</a></li>
              <li><a href="#portfolio" className="text-summit-dark hover:text-summit-forest transition">Our Work</a></li>
              <li><a href="#" className="text-summit-dark hover:text-summit-forest transition">Blog</a></li>
              <li><a href="#testimonials" className="text-summit-dark hover:text-summit-forest transition">Testimonials</a></li>
              <li><a href="#contact" className="text-summit-dark hover:text-summit-forest transition">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4">Newsletter</h3>
            <p className="text-summit-dark mb-4">Subscribe to get tips on growing your trade business online.</p>
            <form className="flex gap-2">
              <input 
                type="email" 
                placeholder="Your email" 
                className="flex-1 px-3 py-2 rounded-lg border border-summit-light focus:outline-none focus:ring-2 focus:ring-summit-forest"
              />
              <button type="submit" className="bg-summit-forest text-white px-4 py-2 rounded-lg hover:bg-summit-forest/90 transition">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m5 12 14 0"></path>
                  <path d="m12 5 7 7-7 7"></path>
                </svg>
              </button>
            </form>
          </div>
        </div>
        
        <div className="pt-8 border-t border-summit-light flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-summit-dark text-sm">© {new Date().getFullYear()} Summit Sites. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="text-sm text-summit-dark hover:text-summit-forest transition">Privacy Policy</a>
            <a href="#" className="text-sm text-summit-dark hover:text-summit-forest transition">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
