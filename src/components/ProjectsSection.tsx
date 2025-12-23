import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { ExternalLink, Github, ArrowUpRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const projects = [
  {
    id: 1,
    title: 'Modern Landing Page',
    description: 'A sleek, animated landing page with scroll-based animations and micro-interactions.',
    tags: ['Design', 'Frontend', 'Animation'],
    color: 'from-violet-500/20 to-purple-500/20',
  },
  {
    id: 2,
    title: 'Creative Brand Identity',
    description: 'Complete branding package including logo design, color palette, and visual guidelines.',
    tags: ['Branding', 'Design', 'Identity'],
    color: 'from-blue-500/20 to-cyan-500/20',
  },
  {
    id: 3,
    title: 'Web Application UI',
    description: 'Dashboard interface with modern components, data visualization, and responsive layout.',
    tags: ['UI/UX', 'Frontend', 'React'],
    color: 'from-emerald-500/20 to-teal-500/20',
  },
];

const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  return (
    <section id="projects" className="py-32 relative">
      {/* Background */}
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-primary/5 blur-3xl rounded-full pointer-events-none -translate-y-1/2" />

      <div className="container mx-auto px-6">
        <div ref={ref} className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
            <div>
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6 }}
                className="text-primary text-sm font-medium uppercase tracking-widest mb-4 block"
              >
                Selected Works
              </motion.span>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-3xl md:text-4xl lg:text-5xl font-bold"
              >
                Featured <span className="text-gradient">Projects</span>
              </motion.h2>
            </div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Button variant="heroOutline" asChild>
                <a href="#contact">
                  View All Works
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </Button>
            </motion.div>
          </div>

          {/* Projects Grid */}
          <div className="space-y-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.15 }}
                onMouseEnter={() => setHoveredProject(project.id)}
                onMouseLeave={() => setHoveredProject(null)}
                className="group relative"
              >
                <div className={`relative overflow-hidden rounded-2xl bg-gradient-to-br ${project.color} p-[1px]`}>
                  <div className="relative bg-card rounded-2xl p-8 md:p-12 overflow-hidden">
                    {/* Hover Background Effect */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-primary/5 via-accent/5 to-primary/5"
                      initial={{ x: '-100%' }}
                      animate={{ x: hoveredProject === project.id ? '100%' : '-100%' }}
                      transition={{ duration: 0.8 }}
                    />

                    <div className="relative flex flex-col md:flex-row md:items-center justify-between gap-6">
                      {/* Project Info */}
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-4">
                          <span className="text-muted-foreground text-sm font-mono">
                            {String(index + 1).padStart(2, '0')}
                          </span>
                          <div className="w-8 h-[1px] bg-border" />
                        </div>
                        <h3 className="text-2xl md:text-3xl font-bold mb-3 group-hover:text-gradient transition-all duration-500">
                          {project.title}
                        </h3>
                        <p className="text-muted-foreground max-w-xl mb-6">
                          {project.description}
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {project.tags.map((tag) => (
                            <span
                              key={tag}
                              className="px-3 py-1 text-xs font-medium rounded-full border border-border bg-secondary/50"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Action Button */}
                      <motion.div
                        className="flex items-center gap-4"
                        initial={{ opacity: 0.5 }}
                        whileHover={{ opacity: 1 }}
                      >
                        <motion.div
                          className="w-14 h-14 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center cursor-pointer glow-primary"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <ArrowUpRight className="w-6 h-6 text-primary-foreground" />
                        </motion.div>
                      </motion.div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
