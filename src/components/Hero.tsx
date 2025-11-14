import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-28 pb-20">
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.15
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900/98 via-slate-900/95 to-slate-950/98 z-0" />
      
      <div className="container mx-auto px-6 z-10 text-center">
        <div className="animate-fade-in-up space-y-6">
          <h1 className="text-5xl md:text-7xl font-bold bg-gradient-primary bg-clip-text text-transparent animate-scale-in">
            Lavanya Kusumanchi
          </h1>
          <p className="text-xl md:text-2xl text-blue-200/90 font-medium tracking-wide mb-2 animate-fade-in" style={{ animationDelay: "0.15s", opacity: 0, animationFillMode: "forwards" }}>
            Full Stack Developer | React.js • javascript • SQL • MongoDB
          </p>
          <p className="text-lg md:text-xl text-foreground/90 max-w-2xl mx-auto mb-4 animate-fade-in leading-relaxed" style={{ animationDelay: "0.3s", opacity: 0, animationFillMode: "forwards" }}>
            I create beautiful, responsive, and user-friendly web applications with modern frontend technologies
          </p>
          <p className="text-lg text-blue-300/90 max-w-2xl mx-auto mb-10 animate-fade-in font-medium" style={{ animationDelay: "0.4s", opacity: 0, animationFillMode: "forwards" }}>
            🚀 Experienced in developing real-world applications with clean UI, structured databases, and efficient API integrations
          </p>
          
          <div className="flex gap-4 justify-center mb-12 animate-fade-in" style={{ animationDelay: "0.6s", opacity: 0, animationFillMode: "forwards" }}>
            <Button 
              variant="default" 
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-glow hover:shadow-glow-lg hover:scale-105 transition-all duration-300"
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            >
              View Projects
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-primary text-foreground hover:bg-primary/10 hover:scale-105 transition-all duration-300"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Contact Me
            </Button>
          </div>
          
          <div className="flex items-center justify-center gap-6 animate-fade-in" style={{ animationDelay: "0.8s", opacity: 0, animationFillMode: "forwards" }}>
            <a
              href="https://github.com/lavanyakusumanchi"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary hover:scale-110 transition-all duration-300"
              aria-label="Visit GitHub Profile"
            >
              <Github className="w-[24px] h-[24px]" />
            </a>
            <a
              href="https://www.linkedin.com/in/kusumanchi-lavanya"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary hover:scale-110 transition-all duration-300"
              aria-label="Visit LinkedIn Profile"
            >
              <Linkedin className="w-[24px] h-[24px]" />
            </a>
            <a
              href="mailto:Lavanyakusumanchi1012@gmail.com"
              className="text-muted-foreground hover:text-primary hover:scale-110 transition-all duration-300"
              aria-label="Send Email"
            >
              <Mail className="w-[24px] h-[24px]" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
