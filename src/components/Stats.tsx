import { Card } from "@/components/ui/card";
import { useEffect, useState } from "react";
import { Projects } from "./Projects";

const Stats = () => {
  const [isVisible, setIsVisible] = useState(false);
  const projectsCount = Projects().length;

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          // Reset counter when element leaves viewport
          if (!entry.isIntersecting) {
            setIsVisible(false);
          } else {
            setIsVisible(true);
          }
        });
      },
      { 
        threshold: 0.1,
        rootMargin: '0px' // Adjust this value to trigger animation earlier/later
      }
    );

    const element = document.getElementById("stats");
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const stats = [
    { value: projectsCount, label: "Major Projects", suffix: "" },
    { value: 2, label: "Internships", suffix: "" },
    { value: 6, label: "Certifications", suffix: "+" },
    { value: 9.1, label: "CGPA", suffix: "" },
  ];

  const CountUp = ({ end, duration = 1500 }: { end: number; duration?: number }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
      // Reset count when not visible
      if (!isVisible) {
        setCount(0);
        return;
      }
      
      let startTime: number;
      const step = (timestamp: number) => {
        if (!startTime) startTime = timestamp;
        const progress = timestamp - startTime;
        const percentage = Math.min(progress / duration, 1);
        
        // Easing function for smoother animation
        const eased = 1 - Math.pow(1 - percentage, 3);
        setCount(end * eased);
        
        if (percentage < 1) {
          requestAnimationFrame(step);
        }
      };
      
      requestAnimationFrame(step);
    }, [isVisible, end, duration]);

    return <>{count.toFixed(1)}</>;
  };

  return (
    <section id="stats" className="py-20 px-6 bg-gradient-dark">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <Card
              key={index}
              className="p-8 bg-gradient-card backdrop-blur-sm border-border text-center opacity-0 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s`, animationFillMode: "forwards" }}
            >
              <div className="relative z-10">
                <div className="text-5xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-2">
                  <CountUp end={stat.value} />
                  <span>{stat.suffix}</span>
                </div>
                <div className="text-muted-foreground uppercase tracking-wider text-sm">
                  {stat.label}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
