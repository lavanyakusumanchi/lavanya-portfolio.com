import { Progress } from "@/components/ui/progress";
import { Card } from "@/components/ui/card";
import { useEffect, useState } from "react";

const SkillProgress = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById("skill-progress");
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const skills = [
    { name: "React.js", level: 90, color: "bg-blue-500" },
    { name: "JavaScript", level: 85, color: "bg-yellow-500" },
    { name: "SQL/MySQL", level: 88, color: "bg-primary" },
    { name: "HTML/CSS", level: 95, color: "bg-orange-500" },
    { name: "PHP", level: 75, color: "bg-purple-500" },
    { name: "MongoDB", level: 80, color: "bg-green-500" },
    { name: "Figma", level: 85, color: "bg-pink-500" },
    { name: "Git/GitHub", level: 82, color: "bg-red-500" },
  ];

  return (
    <section id="skill-progress" className="py-20 px-6">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-primary bg-clip-text text-transparent">
          Technical Proficiency
        </h2>

        <Card className="p-8 bg-gradient-card backdrop-blur-sm border-border shadow-glow">
          <div className="space-y-6">
            {skills.map((skill, index) => (
              <div
                key={skill.name}
                className="animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s`, opacity: 0, animationFillMode: "forwards" }}
              >
                <div className="flex justify-between mb-2">
                  <span className="text-foreground font-medium">{skill.name}</span>
                  <span className="text-primary font-semibold">{skill.level}%</span>
                </div>
                <Progress 
                  value={isVisible ? skill.level : 0} 
                  className="h-3 bg-muted"
                />
              </div>
            ))}
          </div>
        </Card>
      </div>
    </section>
  );
};

export default SkillProgress;
