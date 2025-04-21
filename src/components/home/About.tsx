import { useEffect, useRef } from 'react';
import AnimatedText from '../ui/AnimatedText';

const About = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observerSection = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
            observerSection.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.2
      }
    );

    const observerImage = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('scale-100', 'opacity-100');
            observerImage.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.2
      }
    );

    if (sectionRef.current) {
      observerSection.observe(sectionRef.current);
    }

    if (imageRef.current) {
      observerImage.observe(imageRef.current);
    }

    return () => {
      if (sectionRef.current) observerSection.unobserve(sectionRef.current);
      if (imageRef.current) observerImage.unobserve(imageRef.current);
    };
  }, []);

  return (
    <section id="about" className="bg-secondary/30 py-24 md:py-32">
      <div ref={sectionRef} className="container mx-auto px-4 reveal">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <span className="inline-block px-3 py-1 text-sm bg-primary/10 text-primary rounded-full mb-4">
              About Me
            </span>
            
            <AnimatedText
              text="Passionate creator designing elegant solutions"
              className="heading-lg mb-6"
              animation="fade-up"
            />
            
            <div className="space-y-4 text-muted-foreground">
              <AnimatedText
                text="I'm a full-stack developer with a passion for creating beautiful, functional, and user-friendly web applications. With experience in both front-end and back-end technologies, I bring ideas to life through clean code and thoughtful design."
                className="body-md"
                animation="fade-up"
                delay={100}
              />
              
              <AnimatedText
                text="My journey in technology began with a curiosity about how things work. That curiosity evolved into a career focused on building digital experiences that solve real problems and delight users."
                className="body-md"
                animation="fade-up"
                delay={200}
              />
              
              <AnimatedText
                text="When I'm not coding, you'll find me exploring new technologies, contributing to open-source projects, or enjoying the outdoors. I believe in continuous learning and staying on the cutting edge of web development."
                className="body-md"
                animation="fade-up"
                delay={300}
              />
            </div>
            
            <div className="mt-8">
              <AnimatedText
                text="Let's build something amazing together."
                className="font-medium"
                animation="fade-up"
                delay={400}
              />
            </div>
          </div>
          
          <div 
            ref={imageRef} 
            className="order-1 md:order-2 scale-95 opacity-0 transition-all duration-700 ease-out"
          >
            <div className="relative aspect-square overflow-hidden rounded-2xl">
              <div className="absolute inset-0 bg-noise opacity-50 mix-blend-overlay"></div>
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent mix-blend-overlay"></div>
              <img 
                src="https://images.unsplash.com/photo-1545665277-5937489579f2?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                alt="Portrait" 
                className="w-full h-full object-cover"
              />
              
              <div className="absolute -bottom-1 -left-1 -right-1 h-24 bg-gradient-to-t from-secondary/30 to-transparent"></div>
              
              <div className="absolute bottom-4 left-4 right-4 glass-dark rounded-lg p-4 backdrop-blur-md">
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="font-medium text-sm">Experience</h3>
                    <p className="text-xs text-muted-foreground">5+ Years</p>
                  </div>
                  <div>
                    <h3 className="font-medium text-sm">Projects</h3>
                    <p className="text-xs text-muted-foreground">50+ Completed</p>
                  </div>
                  <div>
                    <h3 className="font-medium text-sm">Clients</h3>
                    <p className="text-xs text-muted-foreground">20+ Satisfied</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
