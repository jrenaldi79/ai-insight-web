import { Award, Book, Briefcase, GraduationCap, Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const About = () => {
  const experience = [
    {
      title: "Chief AI Consultant",
      company: "TechVision Solutions",
      period: "2022 - Present",
      description: "Leading AI strategy development for Fortune 500 clients across finance, healthcare and retail sectors."
    },
    {
      title: "ML Engineering Lead",
      company: "DataInnovate",
      period: "2019 - 2022",
      description: "Managed a team of 15 ML engineers building enterprise-grade AI solutions for business intelligence."
    },
    {
      title: "Data Scientist",
      company: "AI Institute",
      period: "2016 - 2019",
      description: "Developed predictive models and conducted research on natural language processing applications."
    }
  ];

  const education = [
    {
      degree: "Ph.D. in Computer Science",
      institution: "Stanford University",
      year: "2016",
      focus: "Machine Learning"
    },
    {
      degree: "M.S. in Artificial Intelligence",
      institution: "MIT",
      year: "2012",
      focus: "Deep Learning"
    },
    {
      degree: "B.S. in Computer Science",
      institution: "UC Berkeley",
      year: "2010",
      focus: "Data Structures"
    }
  ];

  const skills = [
    "Machine Learning", "Deep Learning", "Natural Language Processing",
    "Computer Vision", "Data Analytics", "Business Strategy",
    "Project Management", "MLOps", "Cloud Computing",
    "Python", "TensorFlow", "PyTorch"
  ];

  return (
    <section id="about" className="section bg-gradient-to-br from-violet-500/10 via-pink-500/10 to-orange-400/10">
      <div className="container-content">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="mb-4">About <span className="gradient-text">Me</span></h2>
          <p className="text-lg text-muted-foreground">
            Experienced AI consultant with a passion for transforming businesses through artificial intelligence.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-10">
          <div className="md:col-span-1">
            <div className="sticky top-24">
              <div className="aspect-square max-w-[350px] mx-auto bg-gradient-to-br from-violet-600 to-pink-600 rounded-full overflow-hidden shadow-xl mb-8">
                <img 
                  src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80"
                  alt="Profile"
                  className="w-full h-full object-cover mix-blend-overlay opacity-50"
                />
              </div>

              <h3 className="text-2xl font-bold mb-4">Skills & Expertise</h3>
              <div className="flex flex-wrap gap-2 mb-8">
                {skills.map((skill, index) => (
                  <span key={index} className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">
                    {skill}
                  </span>
                ))}
              </div>
              
              <h3 className="text-2xl font-bold mb-4">Certifications</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <Award className="h-5 w-5 text-primary mr-2 mt-0.5" />
                  <span>Google Cloud Professional ML Engineer</span>
                </li>
                <li className="flex items-start">
                  <Award className="h-5 w-5 text-primary mr-2 mt-0.5" />
                  <span>AWS Certified Machine Learning Specialty</span>
                </li>
                <li className="flex items-start">
                  <Award className="h-5 w-5 text-primary mr-2 mt-0.5" />
                  <span>Microsoft Certified: Azure AI Engineer</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="md:col-span-2">
            <Card className="mb-10 border border-violet-200">
              <CardContent className="pt-6">
                <h3 className="text-2xl font-bold mb-6 flex items-center">
                  <Briefcase className="h-6 w-6 text-primary mr-2" />
                  Work Experience
                </h3>
                <div className="space-y-8">
                  {experience.map((job, index) => (
                    <div key={index} className="relative pl-6 border-l-2 border-primary/30">
                      <div className="absolute -left-[5px] top-1 h-2 w-2 rounded-full bg-primary"></div>
                      <h4 className="text-xl font-semibold">{job.title}</h4>
                      <div className="flex items-center text-muted-foreground mb-2">
                        <span>{job.company}</span>
                        <span className="mx-2">•</span>
                        <span>{job.period}</span>
                      </div>
                      <p>{job.description}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="mb-10 border border-violet-200">
              <CardContent className="pt-6">
                <h3 className="text-2xl font-bold mb-6 flex items-center">
                  <GraduationCap className="h-6 w-6 text-primary mr-2" />
                  Education
                </h3>
                <div className="space-y-6">
                  {education.map((edu, index) => (
                    <div key={index} className="relative pl-6 border-l-2 border-primary/30">
                      <div className="absolute -left-[5px] top-1 h-2 w-2 rounded-full bg-primary"></div>
                      <h4 className="text-xl font-semibold">{edu.degree}</h4>
                      <div className="flex items-center text-muted-foreground mb-2">
                        <span>{edu.institution}</span>
                        <span className="mx-2">•</span>
                        <span>{edu.year}</span>
                      </div>
                      <p>Focus: {edu.focus}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="border border-violet-200">
              <CardContent className="pt-6">
                <h3 className="text-2xl font-bold mb-6 flex items-center">
                  <Users className="h-6 w-6 text-primary mr-2" />
                  Professional Associations
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <Book className="h-5 w-5 text-primary mr-3 mt-0.5" />
                    <div>
                      <span className="font-semibold">IEEE Computer Society</span>
                      <p className="text-muted-foreground">Active member and contributor to AI ethics standards</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <Book className="h-5 w-5 text-primary mr-3 mt-0.5" />
                    <div>
                      <span className="font-semibold">Association for Computing Machinery (ACM)</span>
                      <p className="text-muted-foreground">Regular speaker at conferences and events</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <Book className="h-5 w-5 text-primary mr-3 mt-0.5" />
                    <div>
                      <span className="font-semibold">AI4ALL</span>
                      <p className="text-muted-foreground">Volunteer mentor for underrepresented students in AI</p>
                    </div>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
