
import React from "react";
import { ArrowRight, PhoneCall, FileText, LayoutList, Bell, BarChart2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactSection from "@/components/ContactSection";

const features = [
  {
    title: "Online Quote Request Forms",
    description: "Capture leads 24/7 with easy-to-fill forms that go straight to your inbox — even while you're on the job site",
    icon: <FileText className="h-10 w-10 text-summit-forest" />
  },
  {
    title: "Click-to-Call Buttons",
    description: "Make it effortless for mobile users to call you with one tap — the #1 way trade customers convert on a website",
    icon: <PhoneCall className="h-10 w-10 text-summit-forest" />
  },
  {
    title: "Service-Specific Landing Pages",
    description: "Dedicated pages for each service you offer, each built to capture leads from that specific type of search",
    icon: <LayoutList className="h-10 w-10 text-summit-forest" />
  },
  {
    title: "Instant Lead Notifications",
    description: "Every form submission triggers an immediate email alert with the customer's details so you can follow up fast",
    icon: <Bell className="h-10 w-10 text-summit-forest" />
  },
  {
    title: "Lead Source Tracking",
    description: "Know exactly which pages and forms are bringing in work so you can double down on what's performing",
    icon: <BarChart2 className="h-10 w-10 text-summit-forest" />
  }
];

const LeadGeneration = () => {
  return (
    <div className="min-h-screen bg-summit-cream">
      <Navbar />

      {/* Hero */}
      <section className="py-20 bg-gradient-to-b from-white to-summit-light/30">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="flex-1">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
                Turn Your Website Into a Lead Machine
              </h1>
              <p className="text-summit-dark text-lg mb-8 max-w-2xl">
                We build quote forms, click-to-call buttons, and service pages that convert homeowners into paying customers — even while you're on the job site.
              </p>
              <a href="#contact" className="w-full sm:w-auto">
                <Button className="w-full sm:w-auto bg-summit-forest hover:bg-summit-forest/90 text-white py-6 px-8 text-lg flex items-center justify-center gap-2">
                  Get a Free Consultation <ArrowRight size={18} />
                </Button>
              </a>
            </div>
            <div className="flex-1 relative">
              <img
                src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80"
                alt="Contractor receiving a lead notification on phone"
                className="rounded-2xl shadow-xl w-full h-[400px] object-cover"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-lg border border-summit-light">
                <p className="font-bold text-summit-forest text-2xl">+68%</p>
                <p className="text-sm text-summit-dark">More quote requests</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">
              Every Tool You Need to Capture More Jobs
            </h2>
            <p className="text-summit-dark max-w-2xl mx-auto text-lg">
              Most trade websites look fine but do nothing to actually generate leads. We fix that with purpose-built conversion tools on every page.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-summit-cream rounded-xl p-8 border border-summit-light hover:shadow-lg transition-all duration-300"
              >
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-summit-dark">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-summit-light/30">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">
              How We Set It Up
            </h2>
            <p className="text-summit-dark max-w-2xl mx-auto text-lg">
              A straightforward process so leads start flowing in quickly.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-12 lg:gap-24 items-center">
            <div>
              <ol className="relative border-l border-summit-forest">
                {[
                  {
                    step: "Audit Your Current Site",
                    description: "We review your existing site (or start from scratch) and map out exactly where potential leads are falling through the cracks."
                  },
                  {
                    step: "Build Your Forms & CTAs",
                    description: "We design clean, conversion-focused quote forms and call-to-action buttons that feel natural and easy for customers to use."
                  },
                  {
                    step: "Set Up Lead Notifications",
                    description: "Every form submission sends an instant email with the customer's name, number, and job details so you can follow up immediately."
                  },
                  {
                    step: "Track & Improve",
                    description: "We monitor which pages and forms are converting best and make ongoing adjustments to keep improving your results."
                  }
                ].map((item, i) => (
                  <li key={i} className="mb-12 ml-6">
                    <span className="absolute flex items-center justify-center w-8 h-8 bg-summit-forest rounded-full -left-4 ring-4 ring-summit-cream text-white font-bold text-sm">
                      {i + 1}
                    </span>
                    <h3 className="text-xl font-semibold mb-2">{item.step}</h3>
                    <p className="text-summit-dark">{item.description}</p>
                  </li>
                ))}
              </ol>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-lg border border-summit-light">
              <img
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=800&q=80"
                alt="Contractor on phone following up with a lead"
                className="rounded-xl w-full h-96 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="bg-summit-cream rounded-3xl p-12 text-center border border-summit-light">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 gradient-text">
              Ready to Start Getting More Leads?
            </h2>
            <p className="text-summit-dark text-lg mb-8 max-w-2xl mx-auto">
              Let's build a lead generation system that fills your schedule with qualified jobs — and keeps it that way.
            </p>
            <a href="#contact">
              <Button className="bg-summit-forest hover:bg-summit-forest/90 text-white py-6 px-8 text-lg">
                Get Your Free Consultation
              </Button>
            </a>
          </div>
        </div>
      </section>

      <ContactSection />
      <Footer />
    </div>
  );
};

export default LeadGeneration;
