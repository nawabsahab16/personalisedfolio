
import { useState, useEffect } from 'react';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
import AnimatedText from '../ui/AnimatedText';

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [typedText, setTypedText] = useState('');
  const fullText = "developer • designer • creator";
  const typingSpeed = 100;

  useEffect(() => {
    setIsLoaded(true);
    
    // Typing effect
    let currentIndex = 0;
    const intervalId = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setTypedText(fullText.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(intervalId);
      }
    }, typingSpeed);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <section 
      id="home" 
      className="relative h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-background to-background/80"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 -left-10 w-72 h-72 bg-primary/10 rounded-full filter blur-3xl animate-pulse opacity-30"></div>
        <div className="absolute bottom-1/4 -right-10 w-72 h-72 bg-secondary/10 rounded-full filter blur-3xl animate-pulse opacity-30"></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-primary/5 rounded-full filter blur-2xl animate-[spin_20s_linear_infinite] opacity-20"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <div className={`mb-4 transition-all duration-700 ease-in-out ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <span className="inline-block px-3 py-1 text-sm bg-secondary/20 text-secondary-foreground rounded-full mb-4 font-mono">
                Hello, I'm a
              </span>
            </div>
            
            <h1 className={`text-4xl md:text-6xl lg:text-7xl font-bold mb-6 transition-all duration-700 ease-in-out ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: '200ms' }}>
              <span className="inline-block relative">
                <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Crafting digital</span>
              </span>
              <br />
              <span className="inline-block relative">
                experiences with
              </span>
              <br />
              <span className="inline-block relative">
                <span className="bg-gradient-to-r from-secondary to-primary bg-clip-text text-transparent">purpose & precision</span>
              </span>
            </h1>
            
            <div className={`text-lg md:text-xl font-mono text-muted-foreground mb-8 transition-all duration-700 ease-in-out ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: '400ms' }}>
              <span className="inline-block">&lt; {typedText} <span className="animate-pulse">|</span> &gt;</span>
            </div>
            
            <div className={`flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4 mb-12 transition-all duration-700 ease-in-out ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: '600ms' }}>
              <a 
                href="#contact" 
                className="px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors relative overflow-hidden group"
              >
                <span className="relative z-10">Get in Touch</span>
                <span className="absolute inset-0 bg-gradient-to-r from-primary via-secondary to-primary bg-[length:200%] bg-left hover:bg-right transition-all duration-500 opacity-0 group-hover:opacity-100"></span>
              </a>
              <a 
                href="#projects" 
                className="px-6 py-3 border border-primary/20 hover:border-primary/40 text-foreground rounded-lg font-medium hover:bg-primary/5 transition-all"
              >
                View Projects
              </a>
            </div>
            
            <div className={`flex justify-center md:justify-start space-x-6 transition-all duration-700 ease-in-out ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: '800ms' }}>
              <a 
                href="https://github.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-background hover:bg-secondary/10 transition-colors"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-background hover:bg-secondary/10 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a 
                href="mailto:contact@example.com" 
                className="p-2 rounded-full bg-background hover:bg-secondary/10 transition-colors"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
      
      <a 
        href="#about" 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 p-2 rounded-full bg-background hover:bg-secondary/10 transition-colors animate-float"
        aria-label="Scroll down"
      >
        <ArrowDown className="w-5 h-5" />
      </a>

      {/* Code-like decoration element */}
      <div className="absolute bottom-20 right-10 hidden lg:block opacity-30 font-mono text-xs text-muted-foreground">
        <div>const developer = {`{`}</div>
        <div className="ml-4">name: "Your Name",</div>
        <div className="ml-4">skills: ["React", "TypeScript", "UI/UX"],</div>
        <div className="ml-4">loves: ["Clean Code", "Innovation", "Coffee"]</div>
        <div>{`}`};</div>
      </div>
    </section>
  );
};

export default Hero;
