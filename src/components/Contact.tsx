import { Mail, Phone, MapPin, Github, Linkedin, Twitter, Send, Heart, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useState } from 'react';

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    subject: '',
    message: ''
  });

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "suthikshaaghoram@gmail.com",
      href: "mailto:suthikshaaghoram@gmail.com",
      color: "hover:text-soft-pink"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 9363228465",
      href: "tel:+919363228465",
      color: "hover:text-blush-pink"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Mayiladuthurai, TamilNadu",
      href: "#",
      color: "hover:text-light-gold"
    }
  ];

  const socialLinks = [
    { icon: Github, href: "https://github.com/suthikshaaghoram", label: "GitHub", color: "hover:bg-soft-pink" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/suthiksha-aghoram", label: "LinkedIn", color: "hover:bg-blush-pink" },
    { icon: Twitter, href: "https://twitter.com", label: "Twitter", color: "hover:bg-light-gold" }
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    console.log('Form submitted:', formData);
    setIsSubmitting(false);
    
    // Reset form
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section id="contact" className="py-24 relative bg-cream-white overflow-hidden">
      {/* Pink themed background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-soft-pink/30 to-blush-pink/30 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2 animate-float-slow"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-light-gold/30 to-soft-pink/30 rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2 animate-heartbeat-slow"></div>
      
      {/* Floating elements */}
      <div className="absolute top-20 left-20 animate-magic-dust-slow">
        <Heart className="text-soft-pink/30" size={20} />
      </div>
      <div className="absolute bottom-40 right-40 animate-sparkle-slow" style={{ animationDelay: '1s' }}>
        <Sparkles className="text-blush-pink/30" size={24} />
      </div>
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-4xl font-light text-soft-pink mb-6 transform hover:scale-105 transition-transform duration-300 text-animated-gradient">
            Let's Create Magic Together
          </h2>
          <div className="w-16 h-px bg-blush-pink mx-auto mb-8 animate-pink-pulse-slow"></div>
          <p className="text-blush-pink text-lg max-w-2xl mx-auto leading-relaxed glass-effect p-6 rounded-lg">
            I'm always excited about new collaborations and creative projects. Let's discuss how we can bring your dreams to life! 💖
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div className="glass-effect p-8 hover:shadow-lg transition-all duration-300 transform hover:scale-[1.01] hover-pink-glow-subtle">
            <h3 className="text-2xl font-light text-soft-pink mb-8 flex items-center">
              <Send className="mr-3 text-blush-pink animate-float-subtle" size={24} />
              Send a Magical Message
            </h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="group">
                  <label className="block text-blush-pink mb-2 text-sm font-medium group-focus-within:text-soft-pink transition-colors duration-200">First Name</label>
                  <Input 
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    className="border-blush-pink/20 focus:border-soft-pink/40 focus:ring-soft-pink/40 transition-all duration-300 hover:border-soft-pink/30 glass-effect-input"
                    placeholder="John"
                    required
                  />
                </div>
                <div className="group">
                  <label className="block text-blush-pink mb-2 text-sm font-medium group-focus-within:text-soft-pink transition-colors duration-200">Last Name</label>
                  <Input 
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    className="border-blush-pink/20 focus:border-soft-pink/40 focus:ring-soft-pink/40 transition-all duration-300 hover:border-soft-pink/30 glass-effect-input"
                    placeholder="Doe"
                    required
                  />
                </div>
              </div>
              <div className="group">
                <label className="block text-blush-pink mb-2 text-sm font-medium group-focus-within:text-soft-pink transition-colors duration-200">Email</label>
                <Input 
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="border-blush-pink/20 focus:border-soft-pink/40 focus:ring-soft-pink/40 transition-all duration-300 hover:border-soft-pink/30 glass-effect-input"
                  placeholder="john@example.com"
                  required
                />
              </div>
              <div className="group">
                <label className="block text-blush-pink mb-2 text-sm font-medium group-focus-within:text-soft-pink transition-colors duration-200">Subject</label>
                <Input 
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  className="border-blush-pink/20 focus:border-soft-pink/40 focus:ring-soft-pink/40 transition-all duration-300 hover:border-soft-pink/30 glass-effect-input"
                  placeholder="Let's create something magical!"
                  required
                />
              </div>
              <div className="group">
                <label className="block text-blush-pink mb-2 text-sm font-medium group-focus-within:text-soft-pink transition-colors duration-200">Message</label>
                <Textarea 
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  className="border-blush-pink/20 focus:border-soft-pink/40 focus:ring-soft-pink/40 min-h-[120px] transition-all duration-300 hover:border-soft-pink/30 glass-effect-input"
                  placeholder="Tell me about your dream project..."
                  required
                />
              </div>
              <Button 
                type="submit"
                disabled={isSubmitting}
                className={`w-full bg-gradient-to-r from-soft-pink to-blush-pink hover:from-soft-pink/90 hover:to-blush-pink/90 text-white py-3 font-medium transition-all duration-300 transform hover:scale-105 hover:shadow-lg animate-pink-pulse-subtle ${
                  isSubmitting ? 'opacity-75 cursor-not-allowed' : ''
                }`}
              >
                {isSubmitting ? (
                  <div className="flex items-center justify-center">
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                    Sending Magic...
                  </div>
                ) : (
                  <div className="flex items-center justify-center">
                    <Heart className="mr-2 animate-heartbeat-subtle" size={16} />
                    Send Message
                  </div>
                )}
              </Button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-light text-soft-pink mb-8">Get in Touch</h3>
              <div className="space-y-6">
                {contactInfo.map((item, index) => (
                  <a
                    key={index}
                    href={item.href}
                    className="flex items-center space-x-4 p-4 glass-effect hover:shadow-lg transition-all duration-300 group transform hover:scale-105 hover-pink-glow-subtle"
                  >
                    <item.icon className={`text-blush-pink transition-all duration-300 ${item.color} transform group-hover:scale-110 animate-float-subtle`} size={20} />
                    <div>
                      <p className="text-blush-pink text-sm group-hover:text-soft-pink transition-colors duration-200">{item.label}</p>
                      <p className="text-soft-pink font-medium group-hover:text-blush-pink transition-colors duration-200">{item.value}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-lg font-medium text-soft-pink mb-4">Connect & Follow</h3>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className={`w-12 h-12 glass-effect flex items-center justify-center text-blush-pink hover:text-white transition-all duration-300 hover:shadow-lg transform hover:scale-110 animate-float-subtle hover-pink-glow-subtle ${social.color}`}
                    aria-label={social.label}
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <social.icon size={18} />
                  </a>
                ))}
              </div>
            </div>

            <div className="glass-effect p-6 hover:shadow-lg transition-all duration-300 transform hover:scale-105 hover-pink-glow-subtle">
              <h4 className="text-lg font-medium text-soft-pink mb-3 flex items-center">
                <div className="w-3 h-3 bg-blush-pink rounded-full mr-3 animate-pink-pulse-subtle"></div>
                Availability
              </h4>
              <p className="text-blush-pink text-sm leading-relaxed">
                Currently accepting new creative projects and magical collaborations! 
                I typically respond to inquiries within 24 hours and am available 
                for both enchanting short-term projects and long-term creative partnerships. ✨
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-20 pt-8 border-t border-blush-pink/20">
        <div className="text-center">
          <p className="text-blush-pink text-sm flex items-center justify-center">
            © 2024 Suthiksha Aghoram. Designed and developed with 
            <Heart className="mx-2 text-soft-pink animate-heartbeat-subtle" size={16} /> 
            and a touch of magic.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
