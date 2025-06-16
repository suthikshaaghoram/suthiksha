import { ArrowDown, Github, Linkedin, Mail, Heart, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useState, useEffect } from 'react';

const Hero = () => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const titles = ['Creative Developer', 'Digital Artist', 'Problem Solver', 'Design Enthusiast'];
  const [titleIndex, setTitleIndex] = useState(0);

  useEffect(() => {
    const currentTitle = titles[titleIndex];
    
    if (currentIndex < currentTitle.length) {
      const timeout = setTimeout(() => {
        setDisplayText(currentTitle.slice(0, currentIndex + 1));
        setCurrentIndex(currentIndex + 1);
      }, 100);
      return () => clearTimeout(timeout);
    } else {
      const timeout = setTimeout(() => {
        setCurrentIndex(0);
        setDisplayText('');
        setTitleIndex((titleIndex + 1) % titles.length);
      }, 2000);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, titleIndex, titles]);

  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-cream-white">
      {/* Refined gradient background with smoother transitions */}
      <div className="absolute inset-0 bg-gradient-to-br from-soft-pink/20 via-cream-white/20 to-soft-pink/20 transition-all duration-700 animate-gradient-shift"></div>
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5 transition-opacity duration-700"></div>
      
      {/* Smoother floating elements */}
      <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-blush-pink/10 rounded-full blur-3xl animate-float transition-all duration-700"></div>
      <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-soft-pink/10 rounded-full blur-3xl animate-float transition-all duration-700" style={{ animationDelay: '1s' }}></div>
      <div className="absolute top-1/2 left-1/2 w-24 h-24 bg-blush-pink/10 rounded-full blur-3xl animate-float transition-all duration-700" style={{ animationDelay: '2s' }}></div>
      
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

      {/* Smoother gradient orbs */}
      <div className="absolute top-0 left-0 w-full h-full">
        {[...Array(3)].map((_, i) => (
          <div
            key={i}
            className="absolute w-64 h-64 rounded-full bg-gradient-to-r from-blush-pink/10 to-soft-pink/10 blur-3xl animate-float transition-all duration-700"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${i * 2}s`,
              animationDuration: '25s'
            }}
          />
        ))}
      </div>
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="space-y-8">
          <div className="space-y-4">
            <div className="transform hover:scale-105 transition-all duration-500">
              <span className="block text-2xl md:text-3xl text-soft-pink font-normal mb-4 animate-slide-in-left transition-all duration-500" style={{ animationDelay: '0.2s' }}>
                Hello, I'm
              </span>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-light text-soft-pink leading-tight animate-slide-in-up transition-all duration-500 relative group" style={{ animationDelay: '0.4s' }}>
                <span className="text-gradient-animated transition-all duration-500 relative inline-block">
                  Suthiksha Aghoram
                  <div className="absolute -inset-1 bg-gradient-to-r from-blush-pink/30 to-soft-pink/30 rounded-lg blur opacity-20 group-hover:opacity-40 transition-all duration-500"></div>
                </span>
              </h1>
            </div>
            <div className="h-px w-24 bg-gradient-to-r from-transparent via-soft-pink to-transparent mx-auto animate-slide-in-up transition-all duration-500" style={{ animationDelay: '0.6s' }}></div>
          </div>
          
          <div className="space-y-6">
            <div className="h-16 flex items-center justify-center">
              <p className="text-xl md:text-2xl text-soft-pink font-light animate-slide-in-right transition-all duration-500 relative group" style={{ animationDelay: '0.8s' }}>
                <span className="text-gradient animate-typewriter inline-block relative transition-all duration-500">
                  {displayText}
                  <div className="absolute -inset-1 bg-gradient-to-r from-blush-pink/30 to-soft-pink/30 rounded-lg blur opacity-0 group-hover:opacity-10 transition-all duration-500"></div>
                </span>
                <span className="animate-smooth-pulse ml-1 text-soft-pink transition-all duration-500">|</span>
              </p>
            </div>
            <p className="text-lg text-soft-pink max-w-2xl mx-auto leading-relaxed animate-fade-in glass-effect-strong p-6 rounded-lg hover:shadow-lg group transition-all duration-500 relative" style={{ animationDelay: '1s' }}>
              <span className="relative z-10 transition-all duration-500">Creating elegant digital experiences with thoughtful design and clean code</span>
              <div className="absolute inset-0 bg-gradient-to-r from-blush-pink/10 to-soft-pink/10 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
            </p>
          </div>
          
          <div className="flex justify-center space-x-6">
            <a 
              href="#about"
              className="inline-flex items-center justify-center bg-gradient-to-r from-soft-pink to-blush-pink hover:from-soft-pink/90 hover:to-blush-pink/90 text-white px-8 py-3 rounded-full font-medium transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl group min-w-[180px]"
            >
              <div className="relative flex items-center justify-center transition-all duration-300">
                <span className="absolute inset-0 bg-gradient-to-r from-blush-pink/30 to-soft-pink/30 rounded-full opacity-0 group-hover:opacity-10 transition-all duration-300 rounded-full"></span>
                View My Work
              </div>
            </a>
            <a
              href="/Suthiksha_Aghoram_CV.pdf"
              download="Suthiksha_Aghoram_CV.pdf"
              className="inline-flex items-center justify-center bg-gradient-to-r from-soft-pink to-blush-pink hover:from-soft-pink/90 hover:to-blush-pink/90 text-white px-8 py-3 rounded-full font-medium transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl group min-w-[180px]"
            >
              <div className="relative flex items-center justify-center transition-all duration-300">
                <span className="absolute inset-0 bg-gradient-to-r from-blush-pink/30 to-soft-pink/30 rounded-full opacity-0 group-hover:opacity-10 transition-all duration-300 rounded-full"></span>
                <Download className="mr-2 group-hover:animate-bounce" size={20} />
                Download CV
              </div>
            </a>
          </div>

          <div className="flex justify-center space-x-8 pt-12 animate-fade-in transition-all duration-500" style={{ animationDelay: '1.4s' }}>
            {[
              { icon: Github, href: "https://github.com/suthikshaaghoram", label: "GitHub" },
              { icon: Linkedin, href: "https://www.linkedin.com/in/suthiksha-aghoram", label: "LinkedIn" },
              { icon: Mail, href: "mailto:suthikshaaghoram@gmail.com", label: "Email" }
            ].map((social, index) => (
              <a
                key={social.label}
                href={social.href}
                className="text-soft-pink hover:text-blush-pink transition-all duration-500 group"
                aria-label={social.label}
              >
                <div className="relative transition-all duration-500">
                  <div className="absolute -inset-2 bg-gradient-to-r from-blush-pink/30 to-soft-pink/30 rounded-full blur opacity-0 group-hover:opacity-30 transition-all duration-500"></div>
                  <social.icon size={20} className="relative transition-all duration-500" />
                </div>
              </a>
            ))}
          </div>

          <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 animate-float transition-all duration-500" style={{ animationDelay: '1.6s' }}>
            <a onClick={scrollToAbout} className="text-soft-pink hover:text-blush-pink transition-all duration-500 hover:scale-105 group cursor-pointer">
              <div className="relative transition-all duration-500">
                <div className="absolute -inset-2 bg-gradient-to-r from-blush-pink/30 to-soft-pink/30 rounded-full blur opacity-0 group-hover:opacity-30 transition-all duration-500"></div>
                <ArrowDown size={20} className="relative transition-all duration-500" />
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
