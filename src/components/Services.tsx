
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

  return (
    <section id="services" className="section bg-background">
      <div className="container-content">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="mb-4">AI Consulting <span className="gradient-text">Services</span></h2>
          <p className="text-lg text-muted-foreground">
            Comprehensive AI consulting services to help your business innovate, optimize, and grow with cutting-edge technology.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="card-hover">
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
