import { Card } from "@/components/ui/card";
import { GraduationCap } from "lucide-react";

const Education = () => {
  const education = [
    {
      degree: "B.Tech in Computer Science and Engineering",
      institution: "Centurion University Of Technology And Management",
      period: "2022 – 2026",
      grade: "CGPA: 9.1"
    },
    {
      degree: "Intermediate, MPC",
      institution: "Sri Chaitanya Junior College",
      period: "2020 – 2022",
      grade: "Percentage: 8.3"
    },
    {
      degree: "SSC",
      institution: "Saint Mary's English Medium School",
      period: "2019 – 2020",
      grade: "Percentage: 10"
    }
  ];

  const certifications = [
    {
      title: "Frontend Web Development with React.js",
      issuer: "Udemy",
      type: "Development"
    },
    {
      title: "Mastering Figma For Beginner",
      issuer: "Udemy",
      type: "Design"
    },
    {
      title: "Data Structures Using C",
      issuer: "Codetantra",
      type: "Programming"
    },
    {
      title: "Oracle SQL PL/SQL",
      issuer: "Udemy",
      type: "Database"
    },
    {
      title: "Short Term Course in C Programming",
      issuer: "DIMS Computers",
      type: "Programming",
      grade: "A+"
    },
    {
      title: "Blockchain Workshop",
      issuer: "Avalanche",
      type: "Web3"
    },
    {
      title: "Designing Blockchain Solutions",
      issuer: "Amazon Web Services",
      type: "AWS Blockchain"
    },
    {
      title: "Build with Amazon EC2",
      issuer: "Amazon Web Services",
      type: "Cloud Computing"
    }
  ];

  return (
    <section id="education" className="py-20 px-6 bg-gradient-dark">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-primary bg-clip-text text-transparent">
          Education & Certifications
        </h2>
        
        <div className="max-w-4xl mx-auto">
          <div className="mb-12">
            <h3 className="text-2xl font-semibold text-foreground mb-6">Education</h3>
            <div className="space-y-4">
              {education.map((edu, index) => (
                <Card 
                  key={index}
                  className="p-6 bg-gradient-card backdrop-blur-sm border-border hover:shadow-glow transition-all duration-500 hover:translate-x-2 group animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s`, opacity: 0, animationFillMode: "forwards" }}
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors duration-300">
                      <GraduationCap className="w-6 h-6 text-primary group-hover:scale-110 transition-transform duration-300" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-semibold text-foreground mb-1 group-hover:text-primary transition-colors">{edu.degree}</h4>
                      <p className="text-primary font-medium mb-1">{edu.institution}</p>
                      <div className="flex justify-between items-center text-sm">
                        <span className="text-muted-foreground">{edu.period}</span>
                        <span className="text-foreground font-medium">{edu.grade}</span>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="text-2xl font-semibold text-foreground mb-6">Certifications</h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {certifications.map((cert, index) => (
                <Card key={index} className="p-4 bg-gradient-to-br from-slate-900/90 to-slate-800/90 backdrop-blur-sm border-border/10 hover:shadow-glow transition-all duration-500 animate-fade-in group" style={{ animationDelay: `${0.2 * index}s`, opacity: 0, animationFillMode: "forwards" }}>
                  <div className="flex flex-col gap-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-blue-500/10 rounded-full flex items-center justify-center border border-blue-500/20 group-hover:bg-blue-500/15 transition-colors">
                          <span className="text-blue-400 text-sm font-medium">{index + 1}</span>
                        </div>
                        <span className="px-3 py-1 bg-slate-700/50 text-blue-300 text-xs font-medium tracking-wide rounded-full border border-blue-400/20">
                          {cert.type}
                        </span>
                      </div>
                    </div>
                    <div>
                      <h4 className="text-foreground font-semibold group-hover:text-primary transition-colors mb-1">
                        {cert.title}
                      </h4>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <span>{cert.issuer}</span>
                        {cert.grade && (
                          <>
                            <span>•</span>
                            <span className="text-primary font-medium">Grade: {cert.grade}</span>
                          </>
                        )}
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
