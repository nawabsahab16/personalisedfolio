
import { useRef, useEffect } from 'react';
import AnimatedText from '../ui/AnimatedText';
import { 
  Code, 
  Database, 
  Layers, 
  Terminal,
  LayoutPanelLeft, 
  Settings 
} from 'lucide-react';

const skillCategories = [
  {
    title: 'Frontend',
    icon: <LayoutPanelLeft className="w-8 h-8 mb-4 text-primary" />,
    skills: [
      'React / Next.js',
      'TypeScript / JavaScript',
      'HTML5 & CSS3',
      'Tailwind CSS',
      'Responsive Design',
      'UI/UX Principles'
    ]
  },
  {
    title: 'Backend',
    icon: <Database className="w-8 h-8 mb-4 text-primary" />,
    skills: [
      'Node.js / Express',
      'MongoDB / PostgreSQL',
      'REST API Design',
      'GraphQL',
      'Authentication',
      'Server Management'
    ]
  },
  {
    title: 'Development',
    icon: <Code className="w-8 h-8 mb-4 text-primary" />,
    skills: [
      'Git / GitHub',
      'Testing (Jest, Cypress)',
      'CI/CD Pipelines',
      'Docker',
      'Performance Optimization',
      'Security Best Practices'
    ]
  },
  {
    title: 'Tools',
    icon: <Settings className="w-8 h-8 mb-4 text-primary" />,
    skills: [
      'VS Code',
      'Figma',
      'Chrome DevTools',
      'Postman',
      'npm / yarn',
      'Webpack / Vite'
    ]
  },
  {
    title: 'Architecture',
    icon: <Layers className="w-8 h-8 mb-4 text-primary" />,
    skills: [
      'Component Design',
      'State Management',
      'Microservices',
      'JAMstack',
      'Serverless Functions',
      'Progressive Web Apps'
    ]
  },
  {
    title: 'Additional',
    icon: <Terminal className="w-8 h-8 mb-4 text-primary" />,
    skills: [
      'SEO Principles',
      'Web Accessibility',
      'Analytics',
      'Agile Methodologies',
      'Technical Writing',
      'Problem Solving'
    ]
  }
];

const Skills = () => {
  const headingRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observerHeading = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
            observerHeading.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.2
      }
    );

    const observerCards = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
            observerCards.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1
      }
    );

    if (headingRef.current) {
      observerHeading.observe(headingRef.current);
    }

    if (cardsRef.current) {
      observerCards.observe(cardsRef.current);
    }

    return () => {
      if (headingRef.current) observerHeading.unobserve(headingRef.current);
      if (cardsRef.current) observerCards.unobserve(cardsRef.current);
    };
  }, []);

  return (
    <section id="skills" className="bg-secondary/30 py-24 md:py-32">
      <div className="container mx-auto px-4">
        <div ref={headingRef} className="text-center max-w-2xl mx-auto mb-16 md:mb-24 reveal">
          <span className="inline-block px-3 py-1 text-sm bg-primary/10 text-primary rounded-full mb-4">
            My Expertise
          </span>
          
          <AnimatedText
            text="Skills & Technologies"
            className="heading-lg mb-6"
            animation="fade-up"
          />
          
          <AnimatedText
            text="Here are the technologies and skills I've mastered over the years, allowing me to deliver high-quality solutions."
            className="body-md text-muted-foreground"
            animation="fade-up"
            delay={100}
          />
        </div>
        
        <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 reveal">
          {skillCategories.map((category, categoryIndex) => (
            <div 
              key={category.title}
              className="glass-card rounded-xl p-6 transition-all duration-500"
              style={{ 
                transitionDelay: `${categoryIndex * 100}ms` 
              }}
            >
              <div className="text-center mb-6">
                {category.icon}
                <h3 className="heading-sm mb-2">{category.title}</h3>
              </div>
              
              <ul className="space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <li 
                    key={skill} 
                    className="flex items-center"
                    style={{ 
                      opacity: 0, 
                      transform: 'translateY(10px)',
                      animation: 'fadeInUp 0.5s forwards',
                      animationDelay: `${categoryIndex * 100 + skillIndex * 50 + 200}ms`
                    }}
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mr-3"></div>
                    <span className="text-muted-foreground">{skill}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
