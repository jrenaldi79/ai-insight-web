
import { useEffect, useRef } from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const statsRef = useRef<HTMLDivElement>(null);
  const heroContentRef = useRef<HTMLDivElement>(null);
  const heroImageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("revealed");
          }
        });
      },
      { threshold: 0.1 }
    );

    if (statsRef.current) observer.observe(statsRef.current);
    if (heroContentRef.current) observer.observe(heroContentRef.current);
    if (heroImageRef.current) observer.observe(heroImageRef.current);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-violet-500/10 via-pink-500/10 to-orange-400/10 pt-16 pb-24">
      <div className="container-content">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div ref={heroContentRef} className="space-y-6 max-w-xl scroll-reveal">
            <h1 className="animate-fade-in">
              AI Solutions <span className="gradient-text">For Your Business</span>
            </h1>
            <p className="text-xl text-muted-foreground animate-fade-in" style={{ animationDelay: "0.1s" }}>
              Expert consulting to help you implement, optimize, and leverage AI technologies for real business growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4 animate-fade-in" style={{ animationDelay: "0.2s" }}>
              <Button size="lg" variant="gradient" className="group">
                Schedule a Consultation
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button size="lg" variant="outline">
                View Services
              </Button>
            </div>
          </div>
          <div ref={heroImageRef} className="hidden md:block relative h-[400px] animate-fade-in scroll-reveal" style={{ animationDelay: "0.3s" }}>
            <div className="absolute inset-0 bg-gradient-to-r from-violet-500/20 to-pink-500/20 rounded-2xl"></div>
            <div className="absolute inset-y-8 inset-x-8 bg-gradient-to-br from-violet-600 to-pink-600 rounded-xl shadow-xl"></div>
            <div className="absolute inset-y-16 inset-x-16 bg-white/90 rounded-lg shadow-lg flex items-center justify-center">
              <div className="text-center p-6">
                <h3 className="text-2xl font-bold mb-2">AI-Powered Insights</h3>
                <p className="text-muted-foreground">Transform data into actionable business intelligence</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Stats Section */}
        <div ref={statsRef} className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 animate-fade-in scroll-reveal" style={{ animationDelay: "0.4s" }}>
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
