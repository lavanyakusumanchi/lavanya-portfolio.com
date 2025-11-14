import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, Code2, Database, Shield, Brain } from "lucide-react";
import ScreensCarousel from "@/components/ScreensCarousel";
import ss135823 from "@/assets/Screenshot 2025-11-06 135823.png";
import ss142458 from "@/assets/Screenshot 2025-11-06 142458.png";
import ss142508 from "@/assets/Screenshot 2025-11-06 142508.png";
import ss142605 from "@/assets/Screenshot 2025-11-06 142605.png";
import ss142727 from "@/assets/Screenshot 2025-11-06 142727.png";
import ss151947 from "@/assets/Screenshot 2025-11-06 151947.png";
import ss142800 from "@/assets/Screenshot 2025-11-06 142800.png";
import ss144846 from "@/assets/Screenshot 2025-11-06 144846.png";
import ss144935 from "@/assets/Screenshot 2025-11-06 144935.png";
import ss144940 from "@/assets/Screenshot 2025-11-06 144940.png";
import ss144950 from "@/assets/Screenshot 2025-11-06 144950.png";
import ss145007 from "@/assets/Screenshot 2025-11-06 145007.png";
import ss145033 from "@/assets/Screenshot 2025-11-06 145033.png";
import ss145056 from "@/assets/Screenshot 2025-11-06 145056.png";
import ss145108 from "@/assets/Screenshot 2025-11-06 145108.png";

// numbered gallery images (user-uploaded)
import img1 from "@/assets/1.jpg";
import img2 from "@/assets/2.jpg";
import img3 from "@/assets/3.jpg";
import img4 from "@/assets/4.jpg";
import img5 from "@/assets/5.jpg";
import img6 from "@/assets/6.jpg";
import img7 from "@/assets/7.jpg";
import img8 from "@/assets/8.jpg";

const cafeScreens = [
  ss135823,
  ss142458,
  ss142508,
  ss142605,
  ss142727,
  ss151947,
  ss142800,
  ss144846,
  ss144935,
  ss144940,
  ss144950,
  ss145007,
  ss145033,
  ss145056,
  ss145108,
];

// Gallery Hall images in requested custom order: 1,2,3,4,8,6,5,7
const galleryScreens = [img1, img2, img3, img4, img8, img6, img5, img7];

// Pet Management screenshots (user uploaded) - order requested:
// 133243, 133254, 133304, 133339, 133413, 133425
import pet133243 from "@/assets/Screenshot 2025-11-07 133243.png";
import pet133254 from "@/assets/Screenshot 2025-11-07 133254.png";
import pet133304 from "@/assets/Screenshot 2025-11-07 133304.png";
import pet133339 from "@/assets/Screenshot 2025-11-07 133339.png";
import pet133413 from "@/assets/Screenshot 2025-11-07 133413.png";
import pet133425 from "@/assets/Screenshot 2025-11-07 133425.png";

// Jules AI Resume Enhancer screenshots (user uploaded) - order requested:
// 111327, 111332, 111340, 111602, 111631, 111651, 111707
import jules111327 from "@/assets/Screenshot 2025-11-14 111327.png";
import jules111332 from "@/assets/Screenshot 2025-11-14 111332.png";
import jules111340 from "@/assets/Screenshot 2025-11-14 111340.png";
import jules111602 from "@/assets/Screenshot 2025-11-14 111602.png";
import jules111631 from "@/assets/Screenshot 2025-11-14 111631.png";
import jules111651 from "@/assets/Screenshot 2025-11-14 111651.png";
import jules111707 from "@/assets/Screenshot 2025-11-14 111707.png";

// Decentralized File Storage screenshots
import pic1 from "@/assets/Picture1.jpg";
import pic2 from "@/assets/Picture2.jpg";
import pic3 from "@/assets/Picture3.jpg";
import pic4 from "@/assets/Picture4.jpg";

const decentralizedScreens = [pic1, pic2, pic3, pic4];

const petScreens = [
  pet133243,
  pet133254,
  pet133304,
  pet133339,
  pet133413,
  pet133425,
];

const julesScreens = [
  jules111327,
  jules111332,
  jules111340,
  jules111602,
  jules111631,
  jules111651,
  jules111707,
];

const Projects = () => {
  const projects = [
    {
      title: "Cafe Management System",
      description: "Full-stack cafe management solution with real-time order processing, inventory tracking, and table reservation system. Features include dynamic menu management, automated inventory alerts, sales analytics dashboard, and integrated payment processing. Built with JavaScript for the frontend and PHP backend with MySQL for robust data management.",
      tech: ["JavaScript", "PHP", "MySQL", "HTML", "CSS"],
      github: "https://github.com/lavanyakusumanchi/Cafe-management-system",
      icon: <Code2 className="w-6 h-6" />,
      highlight: "Full Stack"
    },
    {
      title: "Hall Booking System",
      description: "Modern event space booking platform with real-time availability checking, secure user authentication, and automated billing. Features include interactive calendar views, customizable event packages, admin dashboard with analytics, and integrated payment gateway. Built using React, Node.js, REST API endpoints for seamless frontend-backend communication, and real-time SQL synchronization.",
      tech: ["React", "Node.js", "MySQL", "JavaScript", "JWT Auth", "REST API"],
      github: "https://github.com/lavanyakusumanchi/hall-booking-system",
      icon: <Database className="w-6 h-6" />,
      highlight: "Real-time SQL"
    },
    {
      title: "Pet Management System",
      description: "The Pet Management System allows users to store and manage pet information such as health details, vaccination dates, and owner records. Built using MySQL with SQL queries to enable smooth data insertion, updating, and retrieval, ensuring accurate and well-organized data management.",
      tech: ["MySQL", "SQL"],
      github: "https://github.com/lavanyakusumanchi/pet-management-system",
      icon: <Database className="w-6 h-6" />,
      highlight: "MySQL & SQL"
    },
    {
      title: "Decentralized File Storage",
      description: "Blockchain-based distributed storage platform using IPFS and Ethereum smart contracts for secure, tamper-proof file management. Features cryptographic access control for file sharing and versioning, decentralized user authentication with MetaMask integration, and smart contract-based automated payment system for storage space allocation.",
      tech: ["Blockchain", "IPFS", "Ethereum", "Smart Contracts"],
      github: "https://github.com/lavanyakusumanchi/Decentralized_file_storage",
      icon: <Shield className="w-6 h-6" />,
      highlight: "Web3 Tech"
    },
    {
      title: "Jules AI Resume Enhancer",
      description: "Full-stack web application that uses Google Jules API to enhance resumes, making them more professional, ATS-friendly, and job-ready. Features include PDF resume upload and parsing, AI-powered content enhancement, client-side PDF generation for download, history management with local storage, and modern responsive UI. Built with React.js frontend, Node.js/Express backend with REST API endpoints, Multer for file uploads, and integrated with Google Jules API (with OpenAI fallback).",
      tech: ["React.js", "Node.js", "Express.js", "REST API", "MongoDB", "Multer", "Google Jules API", "OpenAI API", "jsPDF"],
      github: "https://github.com/lavanyakusumanchi/Ai-Resume-Enhancer",
      icon: <Brain className="w-6 h-6" />,
      highlight: "AI-Powered"
    }
  ];

  return projects;
};

const ProjectsSection = () => {
  const projects = Projects();

  return (
    <section id="projects" className="py-20 px-6">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-primary bg-clip-text text-transparent">
          Featured Projects
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <Card 
              key={index}
              className="p-6 bg-gradient-to-br from-slate-900/90 to-slate-800/90 backdrop-blur-sm border-border/10 hover:shadow-glow transition-all duration-500 hover:-translate-y-3 flex flex-col group overflow-hidden relative animate-fade-in"
              style={{ animationDelay: `${index * 0.15}s`, opacity: 0, animationFillMode: "forwards" }}
            >
              {/* Subtle gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-violet-500/5 opacity-50" />
              
              <div className="relative z-10">
                <div className="flex items-center justify-between py-2 mb-4">
                  {/* Left badge with code icon */}
                  <div className="flex items-center px-3 py-2 bg-blue-500/10 rounded-full backdrop-blur-sm shadow-sm border border-blue-500/20 group-hover:bg-blue-500/15 group-hover:border-blue-500/30 transition-all duration-300">
                    <div className="text-blue-400 group-hover:text-blue-300 transition-colors">
                      {project.icon}
                    </div>
                  </div>
                  
                  {/* Right "Full Stack" badge */}
                  <span className="px-4 py-1.5 bg-slate-700/50 text-blue-300 text-xs font-medium tracking-wide rounded-full border border-blue-400/20 shadow-sm backdrop-blur-sm">
                    {project.highlight}
                  </span>
                </div>
                
                {/* Full-width project thumbnail / carousel area */}
                {project.title === "Cafe Management System" || 
                 project.title === "Hall Booking System" || 
                 project.title === "Pet Management System" ||
                 project.title === "Decentralized File Storage" ||
                 project.title === "Jules AI Resume Enhancer" ? (
                  <>
                    <div
                      style={{
                        position: 'relative',
                        left: '50%',
                        marginLeft: '-50vw',
                        width: '100vw',
                        paddingLeft: '1.5rem',
                        paddingRight: '1.5rem',
                        marginBottom: '1rem',
                      }}
                    >
                      <ScreensCarousel images={
                        project.title === "Cafe Management System"
                          ? cafeScreens
                          : project.title === "Hall Booking System"
                          ? galleryScreens
                          : project.title === "Pet Management System"
                          ? petScreens
                          : project.title === "Decentralized File Storage"
                          ? decentralizedScreens
                          : project.title === "Jules AI Resume Enhancer"
                          ? julesScreens
                          : []
                      } />
                    </div>
                    {/* Project title below carousel */}
                    <h3 className="text-2xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors text-center">
                      {project.title}
                    </h3>
                  </>
                ) : (
                  /* Project title for other projects */
                  <h3 className="text-2xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                )}

                <p className="text-foreground/80 mb-4 flex-1 leading-relaxed">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, i) => (
                    <span 
                      key={i}
                      className="px-3 py-1 bg-primary/10 rounded-full text-xs text-primary border border-primary/20 hover:bg-primary/20 hover:scale-105 transition-all duration-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <Button 
                  variant="outline" 
                  size="lg"
                  className="w-full border-primary text-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-300 group-hover:shadow-glow"
                  onClick={() => window.open(project.github, '_blank')}
                >
                  <Github className="w-4 h-4 mr-2" />
                  View on GitHub
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

// keep a named export for the raw projects array/function (used by Stats)
export { Projects };

// default export is the ProjectsSection (page renders Projects separately)
export default ProjectsSection;
