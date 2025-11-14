import { Card } from "@/components/ui/card";
import { Briefcase, Calendar } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      role: "Web Development Intern",
      company: "Cognifyz Technologies",
      period: "July 2024 – Aug 2024",
      description: "Implemented a calculator and a mobile-responsive web application with navigation menu, gallery, carousel, and structured landing page using HTML, CSS, and JavaScript."
    },
    {
      role: "Web Development Intern",
      company: "Internpe",
      period: "May 2024 – June 2024",
      description: "Created an online shopping platform and a Connect-4 game, implementing interactive UI components and dynamic functionality using HTML, CSS, and JavaScript."
    }
  ];

  return (
    <section id="experience" className="py-20 px-6 bg-gradient-dark">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-primary bg-clip-text text-transparent">
          Experience
        </h2>
        
        <div className="max-w-3xl mx-auto space-y-6">
          {experiences.map((exp, index) => (
            <Card 
              key={index}
              className="p-6 bg-gradient-card backdrop-blur-sm border-border hover:shadow-glow transition-all duration-500 hover:translate-x-2 group animate-fade-in"
              style={{ animationDelay: `${index * 0.2}s`, opacity: 0, animationFillMode: "forwards" }}
            >
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors duration-300">
                  <Briefcase className="w-6 h-6 text-primary group-hover:scale-110 transition-transform duration-300" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-foreground mb-1 group-hover:text-primary transition-colors">{exp.role}</h3>
                  <p className="text-primary font-medium mb-2">{exp.company}</p>
                  <div className="flex items-center gap-2 text-muted-foreground mb-3">
                    <Calendar className="w-4 h-4" />
                    <span className="text-sm">{exp.period}</span>
                  </div>
                  <p className="text-foreground/80">{exp.description}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
