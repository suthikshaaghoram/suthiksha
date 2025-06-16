import { useState, useEffect, useRef } from 'react';
import { Code, Database, Cpu, BrainCog, Users } from 'lucide-react';

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredCategory, setHoveredCategory] = useState<number | null>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  const skillCategories = [
    {
      title: "Programming Languages",
      icon: Code,
      color: "from-pink-500/10 to-rose-500/10",
      iconColor: "text-pink-500",
      skills: [
        { name: "Python", level: 90 },
        { name: "Java", level: 85 },
        { name: "Swift (iOS Development)", level: 82 },
        { name: "JavaScript/TypeScript", level: 88 }
      ]
    },
    {
      title: "Frameworks & Libraries",
      icon: Database,
      color: "from-fuchsia-500/10 to-pink-500/10",
      iconColor: "text-fuchsia-500",
      skills: [
        { name: "TensorFlow", level: 85 },
        { name: "React.js", level: 90 },
        { name: "OpenCV & Mediapipe", level: 88 },
        { name: "Tailwind CSS", level: 92 }
      ]
    },
    {
      title: "Tools & Platforms",
      icon: Cpu,
      color: "from-rose-500/10 to-fuchsia-500/10",
      iconColor: "text-rose-500",
      skills: [
        { name: "Xcode (iOS)", level: 85 },
        { name: "Visual Studio Code", level: 95 },
        { name: "Git & GitHub", level: 92 },
        { name: "Firebase & Jupyter", level: 88 }
      ]
    },
    {
      title: "Concepts & Domains",
      icon: BrainCog,
      color: "from-purple-500/10 to-fuchsia-500/10",
      iconColor: "text-purple-500",
      skills: [
        { name: "Machine Learning & AI", level: 87 },
        { name: "Computer Vision", level: 90 },
        { name: "NLP & Speech Recognition", level: 85 },
        { name: "Game & AR Development", level: 80 }
      ]
    },
    {
      title: "Soft Skills",
      icon: Users,
      color: "from-indigo-500/10 to-purple-500/10",
      iconColor: "text-indigo-500",
      skills: [
        { name: "Agile Team Collaboration", level: 95 },
        { name: "Problem Solving", level: 94 },
        { name: "Project Management", level: 90 },
        { name: "Technical Communication", level: 92 }
      ]
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
    <section id="skills" className="py-24 relative bg-gradient-to-br from-pink-50 to-rose-50 overflow-hidden" ref={sectionRef}>
      {/* Subtle background elements */}
      <div className="absolute top-20 left-20 w-16 h-16 bg-pink-300/10 rounded-full animate-subtle-float"></div>
      <div className="absolute bottom-20 right-20 w-20 h-20 bg-rose-300/10 rounded-full animate-subtle-float" style={{ animationDelay: '1s' }}></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-4xl font-light text-pink-900 mb-6 animate-slide-in-up text-gradient">
            Skills & Expertise
          </h2>
          <div className="w-16 h-px bg-pink-400 mx-auto mb-8"></div>
          <p className="text-pink-700 text-lg max-w-2xl mx-auto leading-relaxed animate-fade-in glass-effect-strong p-6 rounded-lg" style={{ animationDelay: '0.3s' }}>
            A comprehensive toolkit built through years of dedicated learning and professional experience.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div 
              key={categoryIndex}
              className={`glass-effect-strong p-8 hover:shadow-xl transition-all duration-700 transform hover-lift relative overflow-hidden group ${
                isVisible ? 'animate-slide-in-up' : 'opacity-0'
              }`}
              style={{ animationDelay: `${categoryIndex * 0.2}s` }}
              onMouseEnter={() => setHoveredCategory(categoryIndex)}
              onMouseLeave={() => setHoveredCategory(null)}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-100 transition-opacity duration-700`}></div>
              
              <div className="relative z-10">
                <div className="flex items-center justify-center mb-6">
                  <category.icon 
                    className={`${category.iconColor} transition-all duration-500 ${
                      hoveredCategory === categoryIndex ? 'transform scale-110' : ''
                    }`} 
                    size={32} 
                  />
                </div>
                <h3 className="text-xl font-medium text-pink-900 mb-8 text-center transform group-hover:scale-105 transition-transform duration-300">{category.title}</h3>
                <div className="space-y-6">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="transform hover-scale transition-transform duration-300">
                      <div className="flex justify-between items-center mb-3">
                        <span className="text-pink-800 font-medium">{skill.name}</span>
                        <span className="text-pink-600 text-sm animate-fade-in">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-pink-200 h-2 rounded-full overflow-hidden">
                        <div 
                          className="bg-gradient-to-r from-pink-500 to-rose-500 h-2 rounded-full transition-all duration-1500 ease-out"
                          style={{ 
                            width: isVisible ? `${skill.level}%` : '0%',
                            transitionDelay: `${categoryIndex * 300 + skillIndex * 200}ms`
                          }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
