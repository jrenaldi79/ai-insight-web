
import { useEffect, useRef } from "react";
import { 
  Brain, 
  BarChart, 
  LineChart, 
  Bot, 
  PieChart, 
  Code 
} from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Services = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  const services = [
    {
      icon: <Brain className="h-10 w-10 text-primary" />,
      title: "AI Strategy",
      description: "Custom AI roadmaps to align with your business goals and deliver measurable ROI."
    },
    {
      icon: <BarChart className="h-10 w-10 text-primary" />,
      title: "Data Analytics",
      description: "Transform your data into actionable insights with advanced analytics solutions."
    },
    {
      icon: <Bot className="h-10 w-10 text-primary" />,
      title: "Chatbot Development",
      description: "Intelligent conversational AI systems that enhance customer experience."
    },
    {
      icon: <LineChart className="h-10 w-10 text-primary" />,
      title: "Predictive Modeling",
      description: "Forecast trends and make data-driven decisions with predictive analytics."
    },
    {
      icon: <PieChart className="h-10 w-10 text-primary" />,
      title: "Business Intelligence",
      description: "Comprehensive BI solutions that help you visualize and understand your data."
    },
    {
      icon: <Code className="h-10 w-10 text-primary" />,
      title: "Custom AI Solutions",
      description: "Bespoke AI applications tailored to your specific business challenges."
    }
  ];

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

    // Observe section
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    // Observe all cards
    cardRefs.current.forEach((card) => {
      if (card) observer.observe(card);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section id="services" ref={sectionRef} className="section bg-background">
      <div className="container-content">
        <div className="text-center max-w-3xl mx-auto mb-16 scroll-reveal">
          <h2 className="mb-4">AI Consulting <span className="gradient-text">Services</span></h2>
          <p className="text-lg text-muted-foreground">
            Comprehensive AI consulting services to help your business innovate, optimize, and grow with cutting-edge technology.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="card-hover border border-violet-200 scroll-reveal"
              ref={el => cardRefs.current[index] = el}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <CardHeader className="pb-2">
                <div className="mb-4">{service.icon}</div>
                <CardTitle>{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">{service.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
