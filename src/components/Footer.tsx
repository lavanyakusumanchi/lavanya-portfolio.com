import { Github, Linkedin, Mail } from "lucide-react";
import { CONTACT_EMAIL, EMAIL_SUBJECT, EMAIL_BODY } from "@/lib/constants";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8">
      <p className="text-muted-foreground text-center mb-4">© {currentYear} Lavanya Kusumanchi. Crafted with React.js</p>
      <div className="flex justify-center gap-4">
        <a
          href="https://github.com/lavanyakusumanchi"
          target="_blank"
          rel="noopener noreferrer"
          className="text-muted-foreground hover:text-primary transition-colors"
        >
          <Github className="w-6 h-6" />
        </a>
        <a
          href="https://www.linkedin.com/in/kusumanchi-lavanya"
          target="_blank"
          rel="noopener noreferrer"
          className="text-muted-foreground hover:text-primary transition-colors"
        >
          <Linkedin className="w-6 h-6" />
        </a>
        <a
          href={`mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(EMAIL_SUBJECT)}&body=${encodeURIComponent(EMAIL_BODY)}`}
          className="text-muted-foreground hover:text-primary transition-colors"
          aria-label="Email Lavanya"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Mail className="w-6 h-6" />
        </a>
      </div>
      <p className="max-w-2xl mx-auto mt-6 text-center text-foreground/80 leading-relaxed px-4">
        Thank you for visiting my portfolio! I’m always open to learning, collaborating, and working on innovative projects. Let’s connect and explore the possibilities together! Innovation and learning drive me forward. Let’s create impactful solutions together!
      </p>
    </footer>
  );
};

export default Footer;
