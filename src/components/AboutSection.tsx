import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { GraduationCap, Palette, Code, Sparkles, Download, User } from 'lucide-react';
import { Button } from '@/components/ui/button';

const interests = [
  { icon: Code, label: 'Frontend' },
  { icon: Palette, label: 'UI/UX' },
  { icon: Sparkles, label: 'Branding' },
  { icon: GraduationCap, label: 'Motion' },
];

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" className="py-32 relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/5 blur-3xl rounded-full pointer-events-none" />
      
      <div className="container mx-auto px-6">
        <div ref={ref} className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="text-primary text-sm font-medium uppercase tracking-widest mb-4 block"
            >
              About Me
            </motion.span>
            
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6"
            >
              Bridging{' '}
              <span className="text-gradient">technology</span>
              {' '}and{' '}
              <span className="text-gradient">design</span>
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-muted-foreground text-lg mb-6 leading-relaxed"
            >
              I'm a college student exploring the intersection of technology and design. 
              I enjoy building interactive frontend experiences and creating visual identities 
              that feel modern, intuitive, and meaningful.
            </motion.p>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-muted-foreground mb-8 leading-relaxed"
            >
              Currently pursuing my degree at <span className="text-foreground font-medium">Creative Arts University</span>, 
              I believe that great design should not only look beautiful but also solve real problems 
              and create delightful user experiences.
            </motion.p>

            {/* Interests */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap gap-3 mb-8"
            >
              {interests.map((interest, index) => (
                <motion.div
                  key={interest.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                  className="flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-card/50 backdrop-blur-sm hover:border-primary/50 transition-colors duration-300"
                >
                  <interest.icon className="w-4 h-4 text-primary" />
                  <span className="text-sm font-medium">{interest.label}</span>
                </motion.div>
              ))}
            </motion.div>

            {/* Resume Download Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-opacity group"
              >
                <a href="/resume.pdf" download="Resume.pdf">
                  <Download className="w-4 h-4 mr-2 group-hover:animate-bounce" />
                  Download Resume
                </a>
              </Button>
            </motion.div>
          </motion.div>

          {/* Photo Placeholder */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative aspect-[4/5] max-w-md mx-auto">
              {/* Decorative Frame */}
              <motion.div
                className="absolute inset-0 border-gradient rounded-3xl"
                animate={{
                  rotate: [0, 2, 0, -2, 0],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              />
              <motion.div
                className="absolute inset-2 bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl"
                animate={{
                  scale: [1, 1.01, 1],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              />
              
              {/* Photo Container */}
              <div className="absolute inset-4 bg-card rounded-2xl overflow-hidden">
                <img src="/photo.jpeg" alt="Profile" className="w-full h-full object-cover" />
                {/* <img src="/your-photo.jpg" alt="Profile" className="w-full h-full object-cover" /> */}
                <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-muted/50 to-muted">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={isInView ? { scale: 1 } : {}}
                    transition={{ duration: 0.6, delay: 0.6, type: 'spring' }}
                    className="w-32 h-32 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mb-4"
                  >
                    <User className="w-16 h-16 text-primary/60" />
                  </motion.div>
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : {}}
                    transition={{ duration: 0.6, delay: 0.8 }}
                    className="text-muted-foreground text-sm"
                  >
                    Your photo here
                  </motion.p>
                </div>
              </div>

              {/* Floating Elements */}
              <motion.div
                className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center glow-primary shadow-lg"
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                <Code className="w-7 h-7 text-primary-foreground" />
              </motion.div>
              <motion.div
                className="absolute -bottom-4 -left-4 w-14 h-14 bg-card border border-border rounded-xl flex items-center justify-center shadow-lg"
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
              >
                <Palette className="w-6 h-6 text-primary" />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
