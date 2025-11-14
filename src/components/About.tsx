import { Card } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Code, Lightbulb, Users, Trophy } from "lucide-react";
import profileImage from "@/assets/profile.jpg";

const About = () => {
  const highlights = [
    {
      icon: <Code className="w-6 h-6" />,
      title: "Clean Code",
      description: "Writing maintainable, scalable solutions"
    },
    {
      icon: <Lightbulb className="w-6 h-6" />,
      title: "Problem Solver",
      description: "Turning complex challenges into elegant solutions"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Team Player",
      description: "Collaborative mindset with strong communication"
    },
    {
      icon: <Trophy className="w-6 h-6" />,
      title: "9.1 CGPA",
      description: "Excellence in Computer Science & Engineering"
    }
  ];

  return (
    <section id="about" className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-gradient-dark">
      <div className="container mx-auto">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-8 sm:mb-10 md:mb-12 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
          About Me
        </h2>
        
        <div className="flex justify-center mb-8 sm:mb-10 md:mb-12 animate-fade-in">
          <Avatar className="w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 ring-2 sm:ring-3 md:ring-4 ring-primary/30 hover:ring-primary/60 transition-all duration-500 hover:scale-105 shadow-glow">
            <AvatarImage 
              src={profileImage} 
              alt="Lavanya Kusumanchi" 
              className="object-cover" 
            />
            <AvatarFallback className="text-2xl sm:text-3xl md:text-4xl bg-primary text-primary-foreground">LK</AvatarFallback>
          </Avatar>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <Card className="p-4 sm:p-6 md:p-8 bg-gradient-card backdrop-blur-sm border-border shadow-glow mb-6 sm:mb-8 animate-fade-in">
            <p className="text-base sm:text-lg md:text-lg text-foreground/90 leading-relaxed sm:leading-relaxed mb-3 sm:mb-4">
              I am a passionate <span className="text-primary font-semibold">Full Stack Developer</span> who transforms innovative ideas into scalable web applications through clean code and modern technologies.
            </p>

            <p className="text-base sm:text-lg md:text-lg text-foreground/90 leading-relaxed sm:leading-relaxed mb-3 sm:mb-4">
              My frontend expertise includes <span className="text-primary font-semibold">React.js</span>, <span className="text-primary font-semibold">JavaScript</span>, <span className="text-primary font-semibold">HTML/CSS</span>, <span className="text-primary font-semibold">Bootstrap</span>, and <span className="text-primary font-semibold">Tailwind CSS</span>, while my backend skills focus on <span className="text-primary font-semibold">Node.js</span>, <span className="text-primary font-semibold">Express.js</span>, and building robust <span className="text-primary font-semibold">REST API</span> endpoints for seamless frontend-backend integration.
            </p>

            <p className="text-base sm:text-lg md:text-lg text-foreground/90 leading-relaxed sm:leading-relaxed mb-3 sm:mb-4">
              I work with both relational databases (<span className="text-primary font-semibold">SQL/MySQL</span>) and NoSQL solutions (<span className="text-primary font-semibold">MongoDB</span>), choosing the right technology stack for each project's unique requirements.
            </p>

            <p className="text-base sm:text-lg md:text-lg text-foreground/90 leading-relaxed sm:leading-relaxed mb-3 sm:mb-4">
              Through internships at <span className="text-primary font-semibold">Cognifyz Technologies</span> and <span className="text-primary font-semibold">Internpe</span>, I've gained hands-on experience in optimizing UI responsiveness, improving application performance, and delivering production-ready solutions in collaborative environments.
            </p>

            <p className="text-base sm:text-lg md:text-lg text-foreground/90 leading-relaxed sm:leading-relaxed">
              I'm actively seeking opportunities to build impactful applications and grow as a developer in an innovative, collaborative team.
            </p>
          </Card>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
            {highlights.map((item, index) => (
              <Card
                key={index}
                className="p-4 sm:p-5 md:p-6 bg-gradient-card backdrop-blur-sm border-border hover:shadow-glow transition-all duration-500 hover:-translate-y-2 text-center group animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s`, opacity: 0, animationFillMode: "forwards" }}
              >
                <div className="mx-auto w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center bg-primary/10 rounded-lg mb-3 sm:mb-4 group-hover:bg-primary/20 transition-colors">
                  <div className="text-primary group-hover:scale-110 transition-transform">
                    {item.icon}
                  </div>
                </div>
                <h3 className="text-base sm:text-lg font-semibold text-foreground mb-1 sm:mb-2 group-hover:text-primary transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-muted-foreground leading-snug">{item.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
