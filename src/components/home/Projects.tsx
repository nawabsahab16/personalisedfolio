
import { useRef, useEffect } from 'react';
import ProjectCard from '../ui/ProjectCard';
import AnimatedText from '../ui/AnimatedText';

const projects = [
  {
    title: 'Portfolio Website',
    description: 'A modern portfolio website with smooth animations and responsive design',
    technologies: ['React', 'Tailwind CSS', 'Framer Motion'],
    imageUrl: 'https://images.unsplash.com/photo-1592839961631-0351c10a0b47?q=80&w=932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    title: 'E-Commerce Platform',
    description: 'A full-featured online store with product management and payment integration',
    technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    imageUrl: 'https://unsplash.com/photos/macbook-pro-near-white-open-book-FHnnjk1Yj7Y',
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    title: 'Task Management App',
    description: 'A productivity tool for organizing tasks with drag-and-drop functionality',
    technologies: ['React', 'TypeScript', 'Redux', 'Firebase'],
    imageUrl: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?q=80&w=872&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    title: 'Weather Dashboard',
    description: 'A real-time weather application with location-based forecasts',
    technologies: ['JavaScript', 'HTML/CSS', 'Weather API'],
    imageUrl: 'https://unsplash.com/photos/person-using-laptop-computer-Hcfwew744z4',
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    title: 'Social Media Analytics',
    description: 'A dashboard for tracking and analyzing social media performance',
    technologies: ['React', 'D3.js', 'Express', 'Social APIs'],
    imageUrl: 'https://e-10457.adzerk.net/r?e=eyJ2IjoiMS4xMiIsImF2Ijo4MTA3NTIsImF0Ijo1LCJidCI6MCwiY20iOjE1Nzk5OTMsImNoIjo0NTE2MywiY2siOnt9LCJjciI6NjU4ODY0NzQ3LCJkaSI6IjlkNmU5MzAxNzFiZjQ5MzNiMTQ4Y2QxMjZjOWE1NmZjIiwiZGoiOjAsImlpIjoiM2UxMjViODdmNjJiNDdhZGExOWE2NjQzMDFlMjE1MjIiLCJkbSI6MywiZmMiOjgzMzExNTI5MiwiZmwiOjc5Njk0ODAwNiwiaXAiOiI0OS4yMDYuMTQuMjYiLCJudyI6MTA0NTcsInBjIjozLCJvcCI6MywibXAiOjMsImVjIjowLCJnbSI6MCwiZXAiOm51bGwsInByIjoyMjM2NjAsInJ0IjoyLCJycyI6NTAwLCJzYSI6Ijk2Iiwic2IiOiJpLTAzMzAyNDAxOGU3ODk3NjdjIiwic3AiOjM5NTI0MTIsInN0IjoxMTIxOTU0LCJ1ayI6ImRkYTgyMGE4LTdmODktNDNhOS1iN2VmLTZkM2YxYjg5MDkzNCIsInpuIjoyNDEzNDgsInRzIjoxNzQ1MjYxNzQwMzQzLCJwbiI6InNlYXJjaC1pbi1mZWVkIiwiZ3IiOnRydWUsImdjIjp0cnVlLCJnQyI6dHJ1ZSwiZ3MiOiJub25lIiwidHoiOiJBbWVyaWNhL05ld19Zb3JrIiwidXIiOiJodHRwczovL2FkLmRvdWJsZWNsaWNrLm5ldC9kZG0vdHJhY2tjbGsvTjcxODY3OS4zMjg2ODkzVU5TUExBU0gvQjI5MDkwMDA5LjM4ODA5NjE3MztkY190cmtfYWlkPTU3OTI0NTA2NTtkY190cmtfY2lkPTIwNjU2NDM4NjtkY19sYXQ9O2RjX3JkaWQ9O3RhZ19mb3JfY2hpbGRfZGlyZWN0ZWRfdHJlYXRtZW50PTt0ZnVhPTtsdGQ9O2RjX3Rkdj0xIn0&s=IsvIq1ukQP_NReab545Q734Xsf4',
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    title: 'Blog Platform',
    description: 'A content management system for creating and publishing blog posts',
    technologies: ['Next.js', 'Tailwind CSS', 'Sanity.io'],
    imageUrl: 'https://unsplash.com/photos/white-samsung-android-smartphone-on-brown-wooden-table-kLmt1mpGJVg',
    liveUrl: '#',
    githubUrl: '#',
  },
];

const Projects = () => {
  const headingRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.2
      }
    );

    if (headingRef.current) {
      observer.observe(headingRef.current);
    }

    return () => {
      if (headingRef.current) observer.unobserve(headingRef.current);
    };
  }, []);

  return (
    <section id="projects" className="py-24 md:py-32">
      <div className="container mx-auto px-4">
        <div ref={headingRef} className="text-center max-w-2xl mx-auto mb-16 md:mb-24 reveal">
          <span className="inline-block px-3 py-1 text-sm bg-primary/10 text-primary rounded-full mb-4">
            My Work
          </span>
          
          <AnimatedText
            text="Featured Projects"
            className="heading-lg mb-6"
            animation="fade-up"
          />
          
          <AnimatedText
            text="Here's a selection of my recent work. Each project represents a unique challenge and solution."
            className="body-md text-muted-foreground"
            animation="fade-up"
            delay={100}
          />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard 
              key={project.title}
              title={project.title}
              description={project.description}
              technologies={project.technologies}
              imageUrl={project.imageUrl}
              liveUrl={project.liveUrl}
              githubUrl={project.githubUrl}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
