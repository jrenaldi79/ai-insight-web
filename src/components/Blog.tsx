
import { Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

const Blog = () => {
  const blogPosts = [
    {
      title: "Implementing Generative AI in Enterprise Systems",
      excerpt: "Learn how Fortune 500 companies are leveraging generative AI to transform their business operations and create new value streams.",
      date: "April 2, 2025",
      category: "AI Strategy",
      imageUrl: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=600&q=80"
    },
    {
      title: "The Future of Machine Learning Operations (MLOps)",
      excerpt: "Explore best practices for deploying and managing machine learning models at scale with reliable infrastructure.",
      date: "March 24, 2025",
      category: "Technical",
      imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=600&q=80"
    },
    {
      title: "Ethical Considerations in AI Implementation",
      excerpt: "Addressing the critical ethical challenges that businesses face when adopting artificial intelligence solutions.",
      date: "March 15, 2025",
      category: "Ethics",
      imageUrl: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=600&q=80"
    }
  ];

  return (
    <section id="blog" className="section bg-accent/30">
      <div className="container-content">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="mb-4">Insights & <span className="gradient-text">Articles</span></h2>
          <p className="text-lg text-muted-foreground">
            Latest thoughts, research, and perspectives on artificial intelligence and its business applications.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <Card key={index} className="card-hover overflow-hidden">
              <div className="h-48 overflow-hidden">
                <img
                  src={post.imageUrl}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <CardHeader>
                <div className="flex items-center text-sm text-muted-foreground mb-2">
                  <span className="bg-primary/10 text-primary px-2 py-1 rounded-full text-xs font-medium">
                    {post.category}
                  </span>
                  <div className="flex items-center ml-4">
                    <Calendar className="h-3 w-3 mr-1" />
                    {post.date}
                  </div>
                </div>
                <CardTitle className="text-xl">{post.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">{post.excerpt}</CardDescription>
              </CardContent>
              <CardFooter>
                <Button variant="ghost" className="p-0 h-auto text-primary hover:text-primary/80">
                  Read More →
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" size="lg">View All Articles</Button>
        </div>
      </div>
    </section>
  );
};

export default Blog;
