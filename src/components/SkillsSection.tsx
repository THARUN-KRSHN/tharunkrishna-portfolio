import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Code2, Palette, Layout, Figma, Layers, Sparkles } from 'lucide-react';

const skills = [
  {
    icon: Code2,
    title: 'Frontend Development',
    description: 'Building responsive, animated, user-friendly interfaces.',
    technologies: ['HTML', 'CSS', 'JavaScript', 'React'],
  },
  {
    icon: Palette,
    title: 'Graphic Design',
    description: 'Visual storytelling with modern aesthetics.',
    technologies: ['Branding', 'Posters', 'Social Media', 'Print'],
  },
  {
    icon: Layout,
    title: 'UI/UX Design',
    description: 'Clean layouts focused on usability.',
    technologies: ['Wireframing', 'Prototyping', 'Design Systems'],
  },
];

const SkillsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="skills" className="py-32 relative">
      {/* Background Elements */}
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-accent/5 blur-3xl rounded-full pointer-events-none" />
      
      <div className="container mx-auto px-6">
        <div ref={ref} className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="text-primary text-sm font-medium uppercase tracking-widest mb-4 block"
            >
              What I Do
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-3xl md:text-4xl lg:text-5xl font-bold"
            >
              Skills & <span className="text-gradient">Expertise</span>
            </motion.h2>
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-3 gap-6">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                className="group relative"
              >
                <div className="relative h-full p-8 rounded-2xl bg-card/50 backdrop-blur-sm border border-border hover:border-primary/50 transition-all duration-500 overflow-hidden">
                  {/* Hover Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  {/* Icon */}
                  <motion.div
                    className="relative w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-6 group-hover:shadow-lg group-hover:shadow-primary/25 transition-shadow duration-500"
                    whileHover={{ scale: 1.05, rotate: 5 }}
                  >
                    <skill.icon className="w-7 h-7 text-primary-foreground" />
                  </motion.div>

                  {/* Content */}
                  <h3 className="relative text-xl font-bold mb-3 group-hover:text-gradient transition-all duration-500">
                    {skill.title}
                  </h3>
                  <p className="relative text-muted-foreground mb-6">
                    {skill.description}
                  </p>

                  {/* Technologies */}
                  <div className="relative flex flex-wrap gap-2">
                    {skill.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-xs font-medium rounded-full bg-secondary text-secondary-foreground"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Bottom Decoration */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex justify-center mt-16"
          >
            <div className="flex items-center gap-4 px-6 py-3 rounded-full border border-border bg-card/50 backdrop-blur-sm">
              <Sparkles className="w-5 h-5 text-primary" />
              <span className="text-sm text-muted-foreground">
                Always learning, always growing
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
