
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-summit-cream py-16 border-t border-summit-light">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div>
            <div className="mb-4">
              <img src="/logo.png" alt="Summit Sites" className="h-12 w-auto" />
            </div>
            <p className="text-summit-dark">
              Web design for trade contractors who do great work and deserve a website that wins them more jobs.
            </p>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Services</h3>
            <ul className="space-y-3">
              <li><a href="/website-design" className="text-summit-dark hover:text-summit-forest transition">Custom Website Design</a></li>
              <li><a href="/lead-generation" className="text-summit-dark hover:text-summit-forest transition">Lead Generation & Quote Forms</a></li>
              <li><a href="/local-seo" className="text-summit-dark hover:text-summit-forest transition">Local SEO & Google Rankings</a></li>
              <li><a href="/local-seo" className="text-summit-dark hover:text-summit-forest transition">Service Area Pages</a></li>
              <li><a href="#contact" className="text-summit-dark hover:text-summit-forest transition">Website Maintenance</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Company</h3>
            <ul className="space-y-3">
              <li><a href="#testimonials" className="text-summit-dark hover:text-summit-forest transition">Testimonials</a></li>
              <li><a href="#contact" className="text-summit-dark hover:text-summit-forest transition">Contact</a></li>
            </ul>
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
