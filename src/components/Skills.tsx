import React from "react";
import { Card } from "@/components/ui/card";
import { Code, Database, Palette, GitBranch } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      icon: <Code className="w-8 h-8" />,
      title: "Programming Languages",
      skills: ["C", "JavaScript", "PHP"],
      featured: false
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: "Web Technologies",
      skills: ["HTML", "CSS", "React.js", "Bootstrap", "SQL", "MySQL", "MongoDB", "C", "REST API"],
      featured: false
    },
    {
      icon: <GitBranch className="w-8 h-8" />,
      title: "Design & Tools",
      skills: ["Figma (UI/UX)", "Prototyping", "Wireframing", "Git", "GitHub", "VS Code"],
      featured: false
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: "Soft Skills",
      skills: ["Leadership", "Problem-Solving", "Teamwork", "Time Management"],
      featured: false
    }
  ];

  return (
    <section id="skills" className="py-20 px-6">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-primary bg-clip-text text-transparent">
          Skills & Expertise
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => (
            <Card 
              key={index}
              className={`p-6 bg-gradient-card backdrop-blur-sm border-border transition-all duration-500 animate-fade-in group flex flex-col items-center text-center ${
                category.featured ? 'ring-2 ring-primary/50 animate-glow-pulse' : ''
              }`}
              style={{ animationDelay: `${index * 0.1}s`, opacity: 0, animationFillMode: "forwards" }}
            >
              <div className={`mb-4 transition-all duration-300 group-hover:scale-110 p-3 rounded-xl bg-gradient-to-br from-primary/10 to-primary/5 shadow-sm ${
                category.featured ? 'text-primary animate-float' : 'text-primary'
              }`}>
                {React.cloneElement(category.icon, { className: 'w-10 h-10' })}
              </div>
              <h3 className="text-xl font-semibold mb-3 text-foreground group-hover:text-primary transition-colors">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2 justify-center">
                {category.skills.map((skill, i) => (
                  <span 
                    key={i}
                    className={`px-3 py-1 rounded-full text-sm border transition-all duration-300 ${
                      category.featured && i === 0
                        ? 'bg-primary/20 text-primary border-primary font-semibold'
                        : 'bg-primary/10 text-primary border-primary/20 hover:bg-primary/20'
                    }`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
