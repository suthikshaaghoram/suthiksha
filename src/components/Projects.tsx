import { ExternalLink, Github, Trophy, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useState, useEffect, useRef } from 'react';

const Projects = () => {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const projects = [
    {
      title: "Women's Safety Surveillance",
      subtitle: "Real-time Threat Detection Web App",
      description: "Real-time safety application that detects suspicious activities using webcam video analysis with TensorFlow models, designed to work without cloud dependency.",
      image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=600&h=400&fit=crop",
      tech: ["Python", "OpenCV", "TensorFlow", "Web"],
      github: "#",
      live: "https://womensafetysolution.netlify.app",
      color: "from-soft-pink/10 to-blush-pink/10",
      achievement: "🏅 3rd Prize – Horizon TANSAM Hackathon",
      achievementIcon: Award
    },
    {
      title: "Quantum Positioning System",
      subtitle: "GNSS-Free Navigation Simulator",
      description: "Simulation for GNSS-independent navigation using quantum technology concepts, featuring inertial drift correction with Kalman filtering and visual UI modules.",
      image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=600&h=400&fit=crop",
      tech: ["Python", "React", "Tailwind CSS", "Kalman Filter"],
      github: "#",
      live: "#",
      color: "from-blush-pink/10 to-light-gold/10",
      achievement: "🎓 Finalist – TEKATHON by SASTRA University",
      achievementIcon: Trophy
    },
    {
      title: "iOS App Development",
      subtitle: "Course Projects & App Store Preparation",
      description: "Comprehensive iOS development projects using Xcode and Swift, building apps with login flows, animations, list management, and SwiftUI views for App Store readiness.",
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&h=400&fit=crop",
      tech: ["Xcode", "Swift", "SwiftUI"],
      github: "#",
      live: "#",
      color: "from-cream-white/10 to-blush-pink/10",
      achievement: "📱 App Store-Ready Projects",
      achievementIcon: Award
    },
    {
      title: "Virtual Zoo Development",
      subtitle: "Immersive Wildlife Experience",
      description: "Created a virtual zoo environment to educate and engage users with interactive 3D wildlife content, featuring realistic animal behaviors and immersive audio simulation.",
      image: "https://images.unsplash.com/photo-1547036967-23d11aacaee0?w=600&h=400&fit=crop",
      tech: ["Unity", "3D Modeling", "Interactive Design"],
      github: "#",
      live: "#",
      color: "from-soft-pink/10 to-light-gold/10",
      achievement: "🏆 Finalist – Smart India Hackathon 2023",
      achievementIcon: Trophy
    },
    {
      title: "WaterWise Warriors",
      subtitle: "Groundwater Conservation Game",
      description: "Educational game teaching children about water-saving practices through interactive scenarios including drought, pollution, and recharge techniques with progressive levels and leaderboards.",
      image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=600&h=400&fit=crop",
      tech: ["GDevelop", "Firebase", "Visual Studio Code"],
      github: "#",
      live: "#",
      color: "from-blush-pink/10 to-soft-pink/10",
      achievement: "🏆 Finalist – Smart India Hackathon 2024",
      achievementIcon: Trophy
    },
    {
      title: "Multilingual Speech Recognition",
      subtitle: "Voice AI for Diverse Languages",
      description: "Prototype designed to recognize and process speech in multiple Indian languages, implementing language detection and transcription for inclusive voice-driven applications.",
      image: "https://images.unsplash.com/photo-1589254065878-42c9da997008?w=600&h=400&fit=crop",
      tech: ["Python", "SpeechRecognition", "NLP"],
      github: "#",
      live: "#",
      color: "from-light-gold/10 to-blush-pink/10",
      achievement: "🏅 Finalist – GUVI Nan Mudhalvan Hackathon",
      achievementIcon: Award
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="projects" className="py-24 relative overflow-hidden bg-cream-white" ref={sectionRef}>
      {/* Refined background elements with smoother transitions */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5 transition-opacity duration-700"></div>
      <div className="absolute inset-0 bg-gradient-to-br from-soft-pink/20 to-blush-pink/20 animate-gradient-shift transition-all duration-700"></div>
      
      {/* Smoother floating elements */}
      <div className="absolute top-20 left-20 w-24 h-24 bg-blush-pink/10 rounded-full blur-3xl animate-float transition-all duration-700"></div>
      <div className="absolute bottom-20 right-20 w-32 h-32 bg-soft-pink/10 rounded-full blur-3xl animate-float transition-all duration-700" style={{ animationDelay: '1s' }}></div>
      <div className="absolute top-1/2 left-1/2 w-16 h-16 bg-blush-pink/10 rounded-full blur-3xl animate-float transition-all duration-700" style={{ animationDelay: '2s' }}></div>

      {/* Smoother gradient orbs */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(4)].map((_, i) => (
          <div
            key={i}
            className="absolute w-96 h-96 rounded-full bg-gradient-to-r from-blush-pink/10 to-soft-pink/10 blur-3xl animate-float transition-all duration-700"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${i * 3}s`,
              animationDuration: '30s'
            }}
          />
        ))}
      </div>

      {/* Smoother particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-blush-pink/20 rounded-full animate-sparkle transition-all duration-700"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${10 + Math.random() * 10}s`
            }}
          >
            <div className="absolute inset-0 bg-blush-pink/10 rounded-full animate-gentle-glow"></div>
          </div>
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-4xl font-light text-soft-pink mb-6 transform hover:scale-105 transition-all duration-500 animate-slide-in-up text-gradient-animated relative group">
            Featured Projects
            <div className="absolute -inset-1 bg-gradient-to-r from-blush-pink/30 to-soft-pink/30 rounded-lg blur opacity-20 group-hover:opacity-40 transition-all duration-500"></div>
          </h2>
          <div className="w-16 h-px bg-soft-pink mx-auto mb-8 animate-smooth-pulse transition-all duration-500"></div>
          <p className="text-blush-pink text-lg max-w-2xl mx-auto leading-relaxed animate-fade-in glass-effect-strong p-6 rounded-lg group hover:shadow-lg transition-all duration-500 relative">
            <span className="relative z-10 transition-all duration-500">Award-winning projects from hackathons and competitions, showcasing innovation in AI, game development, and emerging technologies.</span>
            <div className="absolute inset-0 bg-gradient-to-r from-blush-pink/10 to-soft-pink/10 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              className={`group relative glass-effect hover:shadow-xl transition-all duration-500 overflow-hidden transform hover:scale-105 ${
                isVisible ? 'animate-slide-in-up' : 'opacity-0'
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
              onMouseEnter={() => setHoveredProject(index)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <div className="absolute inset-0 bg-gradient-to-r ${project.color} opacity-0 group-hover:opacity-100 transition-all duration-500 z-10"></div>
              <div className="absolute inset-0 bg-gradient-to-br from-blush-pink/10 to-soft-pink/10 opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
              
              <div className="relative overflow-hidden h-48">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className={`w-full h-full object-cover transition-all duration-500 ${
                    hoveredProject === index ? 'scale-105' : 'scale-100'
                  }`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-soft-pink/60 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                
                <div className={`absolute inset-0 flex items-center justify-center transition-all duration-500 ${
                  hoveredProject === index ? 'opacity-100' : 'opacity-0'
                }`}>
                  <div className="grid grid-cols-2 gap-2 z-20">
                    {project.tech.slice(0, 4).map((tech, techIndex) => (
                      <span 
                        key={tech}
                        className="px-2 py-1 glass-effect text-cream-white text-xs border border-blush-pink/30 rounded-full transform hover:scale-105 transition-all duration-500 group"
                        style={{ 
                          animationDelay: `${techIndex * 0.1}s`,
                          animation: hoveredProject === index ? `slideInUp 0.5s ease-out ${techIndex * 0.1}s forwards` : 'none'
                        }}
                      >
                        <div className="relative transition-all duration-500">
                          <div className="absolute inset-0 bg-gradient-to-r from-blush-pink/30 to-soft-pink/30 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                          <span className="relative z-10 transition-all duration-500">{tech}</span>
                        </div>
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="p-6 relative z-20">
                <div className="mb-3">
                  <h3 className="text-lg font-medium text-soft-pink mb-1 group-hover:text-blush-pink transition-all duration-500">{project.title}</h3>
                  <p className="text-blush-pink text-sm font-light transition-all duration-500">{project.subtitle}</p>
                </div>
                
                <p className="text-blush-pink mb-4 leading-relaxed text-sm group-hover:text-soft-pink transition-all duration-500">{project.description}</p>
                
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.tech.map((tech, techIndex) => (
                    <span 
                      key={tech}
                      className="px-2 py-1 bg-blush-pink/20 text-soft-pink text-xs border border-blush-pink/30 rounded-full hover:bg-blush-pink/40 hover:border-soft-pink/30 transition-all duration-500 transform hover:scale-105 group"
                      style={{
                        animationDelay: `${techIndex * 0.1}s`,
                        animation: isVisible ? `fadeIn 0.5s ease-out ${techIndex * 0.1}s forwards` : 'none'
                      }}
                    >
                      <div className="relative transition-all duration-500">
                        <div className="absolute inset-0 bg-gradient-to-r from-blush-pink/20 to-soft-pink/20 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                        <span className="relative z-10 transition-all duration-500">{tech}</span>
                      </div>
                    </span>
                  ))}
                </div>

                <div className="mb-4 flex items-center gap-2">
                  <project.achievementIcon size={14} className="text-blush-pink transition-all duration-500" />
                  <span className="text-blush-pink text-sm font-medium transition-all duration-500">{project.achievement}</span>
                </div>

                {project.title === "Women's Safety Surveillance" ? (
                <div className="flex gap-3">
                  <a 
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-4 py-2 bg-gradient-to-r from-soft-pink to-blush-pink hover:from-soft-pink/90 hover:to-blush-pink/90 text-white rounded-full font-medium text-xs transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl group min-w-[90px]"
                  >
                    <div className="relative flex items-center justify-center transition-all duration-300">
                      <span className="absolute inset-0 bg-gradient-to-r from-blush-pink/30 to-soft-pink/30 opacity-0 group-hover:opacity-10 transition-all duration-300 rounded-full"></span>
                      <Github size={12} className="mr-1 relative z-10 transition-all duration-500" />
                      <span className="relative z-10 transition-all duration-500">Code</span>
                    </div>
                  </a>
                  <a
                    href="https://womensafetysolution.netlify.app"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-4 py-2 bg-gradient-to-r from-soft-pink to-blush-pink hover:from-soft-pink/90 hover:to-blush-pink/90 text-white rounded-full font-medium text-xs transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl group min-w-[90px]"
                  >
                    <div className="relative flex items-center justify-center transition-all duration-300">
                      <span className="absolute inset-0 bg-gradient-to-r from-blush-pink/30 to-soft-pink/30 opacity-0 group-hover:opacity-10 transition-all duration-300 rounded-full"></span>
                      <ExternalLink size={12} className="mr-1 relative z-10 transition-all duration-500" />
                      <span className="relative z-10 transition-all duration-500">Live</span>
                    </div>
                  </a>
                </div>
                ) : (
                <div className="flex gap-3">
                  <a 
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-4 py-2 bg-gradient-to-r from-soft-pink to-blush-pink hover:from-soft-pink/90 hover:to-blush-pink/90 text-white rounded-full font-medium text-xs transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl group min-w-[90px]"
                  >
                    <div className="relative flex items-center justify-center transition-all duration-300">
                      <span className="absolute inset-0 bg-gradient-to-r from-blush-pink/30 to-soft-pink/30 opacity-0 group-hover:opacity-10 transition-all duration-300 rounded-full"></span>
                      <Github size={12} className="mr-1 relative z-10 transition-all duration-500" />
                      <span className="relative z-10 transition-all duration-500">Code</span>
                    </div>
                  </a>
                  <a
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-4 py-2 bg-gradient-to-r from-soft-pink to-blush-pink hover:from-soft-pink/90 hover:to-blush-pink/90 text-white rounded-full font-medium text-xs transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl group min-w-[90px]"
                  >
                    <div className="relative flex items-center justify-center transition-all duration-300">
                      <span className="absolute inset-0 bg-gradient-to-r from-blush-pink/30 to-soft-pink/30 opacity-0 group-hover:opacity-10 transition-all duration-300 rounded-full"></span>
                      <ExternalLink size={12} className="mr-1 relative z-10 transition-all duration-500" />
                      <span className="relative z-10 transition-all duration-500">Live</span>
                    </div>
                  </a>
                </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
