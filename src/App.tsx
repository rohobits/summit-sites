// src/App.tsx
import { HashRouter, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { TooltipProvider } from "./components/ui/tooltip";
import { Toaster } from "./components/ui/toaster";
import { Toaster as Sonner } from "./components/ui/sonner";

import Navigation from "./components/Navigation";
import ScrollToTop from "./components/ScrollToTop";     // ✅ you already have this
import SameRouteScroll from "./components/SameRouteScroll"; // ✅ new

import Index from "./pages/Index";
import About from "./pages/About";
import Quote from "./pages/Quote";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <HashRouter>
          <Navigation />
          {/* Scroll on real route changes and when clicking the same route */}
          <ScrollToTop />
          <SameRouteScroll behavior="smooth" />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/about" element={<About />} />
            <Route path="/quote" element={<Quote />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Toaster />
          <Sonner />
        </HashRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
