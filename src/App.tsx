// src/App.tsx
import { HashRouter, Routes, Route, Navigate } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { TooltipProvider } from "./components/ui/tooltip";
import { Toaster } from "./components/ui/toaster";
import { Toaster as Sonner } from "./components/ui/sonner";
import Navigation from "./components/Navigation";
import Index from "./pages/Index";
import About from "./pages/About";
// import Portfolio from "./pages/Portfolio";      // keep file, not imported -> not bundled
// import Testimonials from "./pages/Testimonials"; // keep file, not imported -> not bundled
import Quote from "./pages/Quote";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />

      <HashRouter>
        <Navigation />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />

          {/* Primary CTA route */}
          <Route path="/quote" element={<Quote />} />

          {/* Legacy redirect */}
          <Route path="/contact" element={<Navigate to="/quote" replace />} />

          {/* Draft pages disabled: redirect to home (not live) */}
          <Route path="/portfolio" element={<Navigate to="/" replace />} />
          <Route path="/testimonials" element={<Navigate to="/" replace />} />

          {/* 404 */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </HashRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
