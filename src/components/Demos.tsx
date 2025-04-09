
import { ExternalLink, PlayCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

const Demos = () => {
  const demos = [
    {
      title: "Sentiment Analysis Dashboard",
      description: "Interactive demo of our sentiment analysis tool that processes customer feedback in real-time.",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=600&q=80",
      tags: ["NLP", "Dashboard", "Analytics"]
    },
    {
      title: "Predictive Maintenance Simulator",
      description: "See how our predictive maintenance AI can detect equipment failures before they happen.",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=600&q=80",
      tags: ["IoT", "Prediction", "Manufacturing"]
    },
    {
      title: "Customer Segmentation Tool",
      description: "Explore how AI can segment your customer base for targeted marketing campaigns.",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&w=600&q=80",
      tags: ["Marketing", "Clustering", "Visualization"]
    },
  ];

  return (
    <section id="demos" className="section bg-background">
      <div className="container-content">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="mb-4">Interactive <span className="gradient-text">Demos</span></h2>
          <p className="text-lg text-muted-foreground">
            Experience our AI solutions firsthand with these interactive demonstrations.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {demos.map((demo, index) => (
            <Card key={index} className="card-hover">
              <div className="relative h-48 overflow-hidden">
                <img
                  src={demo.image}
                  alt={demo.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                  <Button variant="ghost" size="icon" className="rounded-full bg-white/20 hover:bg-white/30">
                    <PlayCircle className="h-12 w-12 text-white" />
                  </Button>
                </div>
              </div>
              <CardHeader>
                <CardTitle>{demo.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">{demo.description}</CardDescription>
                <div className="flex flex-wrap gap-2 mt-4">
                  {demo.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="bg-secondary/10 text-secondary px-2 py-1 rounded-full text-xs font-medium">
                      {tag}
                    </span>
                  ))}
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full">
                  Launch Demo
                  <ExternalLink className="ml-2 h-4 w-4" />
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Demos;
