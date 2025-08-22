// src/pages/Thanks.tsx
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

const Thanks = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-summit-cream to-background px-4">
      <Card className="max-w-lg w-full bg-card/50 backdrop-blur-sm shadow-card text-center">
        <CardContent className="p-10">
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
              <CheckCircle className="w-10 h-10 text-primary" />
            </div>
          </div>
          <h1 className="text-3xl font-bold text-foreground mb-4">
            Thank You!
          </h1>
          <p className="text-muted-foreground mb-8 leading-relaxed">
            We’ve received your quote request and will be in touch within 24
            hours. We’re excited to learn more about your project!
          </p>
          <Button asChild size="lg" className="shadow-summit">
            <Link to="/">Back to Home</Link>
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default Thanks;
