import { Code, Palette, Coffee, Users } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  const highlights = [
    {
      icon: Code,
      title: "Clean Code",
      description: "Writing maintainable, scalable code that follows best practices.",
      color: "group-hover:text-soft-pink",
      bgGradient: "from-soft-pink/10 to-blush-pink/10"
    },
    {
      icon: Palette,
      title: "Creative Design",
      description: "Blending aesthetics with functionality for exceptional user experiences.",
      color: "group-hover:text-blush-pink",
      bgGradient: "from-blush-pink/10 to-soft-pink/10"
    },
    {
      icon: Coffee,
      title: "Problem Solving",
      description: "Transforming complex challenges into elegant, efficient solutions.",
      color: "group-hover:text-light-gold",
      bgGradient: "from-light-gold/10 to-blush-pink/10"
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "Building strong partnerships and working effectively in team environments.",
      color: "group-hover:text-soft-pink",
      bgGradient: "from-soft-pink/10 to-light-gold/10"
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="py-24 relative bg-cream-white overflow-hidden" ref={sectionRef}>
      {/* Subtle background elements */}
      <div className="absolute top-20 left-20 w-16 h-16 bg-soft-pink/10 rounded-full animate-float"></div>
      <div className="absolute bottom-20 right-20 w-20 h-20 bg-blush-pink/10 rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
      <div className="absolute top-1/2 right-1/3 w-12 h-12 bg-light-gold/10 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-4xl font-light text-soft-pink mb-6 transform hover:scale-105 transition-transform duration-500 animate-slide-in-up text-gradient">
            About Me
          </h2>
          <div className="w-16 h-px bg-soft-pink mx-auto mb-8 animate-smooth-pulse"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className={`space-y-6 transition-all duration-800 ${isVisible ? 'animate-slide-in-left' : 'opacity-0'}`}>
              <p className="text-lg text-blush-pink leading-relaxed transform hover:scale-105 transition-transform duration-300 glass-effect-strong p-6 rounded-lg">
                Final-year B.Tech Information Technology student with a CGPA of 8.1 from Anna University. Finalist and winner in multiple national-level hackathons including Smart India Hackathon and TANSAM. Skilled in Python, AI/ML, and full-stack development. Eager to contribute to challenging roles in software development or data-driven innovation.
              </p>
            </div>
            
            <div className={`pt-6 transition-all duration-800 delay-300 ${isVisible ? 'animate-slide-in-left' : 'opacity-0'}`}>
              <h3 className="text-soft-pink font-medium mb-4">Technologies I work with</h3>
              <div className="flex flex-wrap gap-3">
                {['Python', 'AI/ML', 'Full Stack', 'React', 'Node.js', 'Data Science'].map((tech, index) => (
                  <span 
                    key={tech}
                    className="px-4 py-2 bg-gradient-to-r from-blush-pink/20 to-soft-pink/20 border border-blush-pink/30 rounded-full text-blush-pink text-sm hover:border-soft-pink/30 hover:shadow-lg transform hover:scale-105 transition-all duration-300 cursor-pointer"
                    style={{ 
                      animationDelay: `${index * 0.1}s`,
                      animation: isVisible ? `fadeIn 0.5s ease-out ${index * 0.1}s forwards` : 'none'
                    }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {highlights.map((item, index) => (
              <div 
                key={index}
                className={`glass-effect-strong p-6 hover:shadow-xl transition-all duration-500 group cursor-pointer transform hover:scale-105 relative overflow-hidden ${
                  isVisible ? 'animate-slide-in-right' : 'opacity-0'
                }`}
                style={{ 
                  transitionDelay: `${index * 0.1}s`,
                  animationDelay: `${index * 0.2}s`
                }}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${item.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                
                <div className="relative z-10">
                  <item.icon 
                    className={`text-blush-pink transition-all duration-500 mb-4 ${item.color} ${
                      hoveredCard === index ? 'transform scale-110' : ''
                    }`} 
                    size={24} 
                  />
                  
                  <h3 className="text-soft-pink font-medium mb-3 group-hover:text-blush-pink transition-colors duration-500">{item.title}</h3>
                  <p className="text-blush-pink text-sm leading-relaxed group-hover:text-soft-pink transition-colors duration-500">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
