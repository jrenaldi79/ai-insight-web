
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-accent/30 pt-16 pb-24">
      <div className="container-content">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 max-w-xl">
            <h1 className="animate-fade-in">
              AI Solutions <span className="gradient-text">For Your Business</span>
            </h1>
            <p className="text-xl text-muted-foreground animate-fade-in" style={{ animationDelay: "0.1s" }}>
              Expert consulting to help you implement, optimize, and leverage AI technologies for real business growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4 animate-fade-in" style={{ animationDelay: "0.2s" }}>
              <Button size="lg" className="group">
                Schedule a Consultation
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button size="lg" variant="outline">
                View Services
              </Button>
            </div>
          </div>
          <div className="hidden md:block relative h-[400px] animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-2xl"></div>
            <div className="absolute inset-y-8 inset-x-8 bg-gradient-to-br from-primary to-secondary/70 rounded-xl shadow-xl"></div>
            <div className="absolute inset-y-16 inset-x-16 bg-white/90 rounded-lg shadow-lg flex items-center justify-center">
              <div className="text-center p-6">
                <h3 className="text-2xl font-bold mb-2">AI-Powered Insights</h3>
                <p className="text-muted-foreground">Transform data into actionable business intelligence</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Stats Section */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 animate-fade-in" style={{ animationDelay: "0.4s" }}>
          <div className="text-center">
            <p className="text-4xl font-bold gradient-text">98%</p>
            <p className="text-muted-foreground mt-2">Client Satisfaction</p>
          </div>
          <div className="text-center">
            <p className="text-4xl font-bold gradient-text">50+</p>
            <p className="text-muted-foreground mt-2">Projects Completed</p>
          </div>
          <div className="text-center">
            <p className="text-4xl font-bold gradient-text">10+</p>
            <p className="text-muted-foreground mt-2">Years Experience</p>
          </div>
          <div className="text-center">
            <p className="text-4xl font-bold gradient-text">25+</p>
            <p className="text-muted-foreground mt-2">Industries Served</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
