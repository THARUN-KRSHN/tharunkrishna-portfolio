import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Briefcase, GraduationCap, Award, Users } from 'lucide-react';

const experiences = [
  {
    icon: Briefcase,
    title: 'Frontend Intern',
    company: 'TechStart Studio',
    period: '2024 - Present',
    description: 'Built responsive web components and improved UI performance. Collaborated with design team to implement pixel-perfect interfaces.',
  },
  {
    icon: Users,
    title: 'Design Team Member',
    company: 'Creative Arts Club',
    period: '2023 - Present',
    description: 'Created posters, event creatives, and digital assets for university events and campaigns.',
  },
];

const achievements = [
  { icon: Award, text: 'Participated in national hackathons' },
  { icon: GraduationCap, text: 'Active in tech & design communities' },
  { icon: Users, text: 'Led collaborative design projects' },
  { icon: Briefcase, text: 'Freelance design work' },
];

const ExperienceSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="experience" className="py-32 relative">
      {/* Background */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 blur-3xl rounded-full pointer-events-none" />

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
              Journey
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-3xl md:text-4xl lg:text-5xl font-bold"
            >
              Experience & <span className="text-gradient">Achievements</span>
            </motion.h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Experience Timeline */}
            <div>
              <motion.h3
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-xl font-bold mb-8 flex items-center gap-3"
              >
                <Briefcase className="w-5 h-5 text-primary" />
                Experience
              </motion.h3>

              <div className="relative space-y-8">
                {/* Timeline Line */}
                <div className="absolute left-[19px] top-2 bottom-2 w-[2px] bg-gradient-to-b from-primary via-accent to-transparent" />

                {experiences.map((exp, index) => (
                  <motion.div
                    key={exp.title}
                    initial={{ opacity: 0, x: -30 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.3 + index * 0.15 }}
                    className="relative pl-12"
                  >
                    {/* Timeline Dot */}
                    <div className="absolute left-0 w-10 h-10 rounded-full bg-card border-2 border-primary flex items-center justify-center">
                      <exp.icon className="w-5 h-5 text-primary" />
                    </div>

                    <div className="p-6 rounded-xl bg-card/50 border border-border hover:border-primary/50 transition-colors duration-300">
                      <div className="flex flex-wrap items-center gap-3 mb-2">
                        <h4 className="text-lg font-bold">{exp.title}</h4>
                        <span className="px-2 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary">
                          {exp.period}
                        </span>
                      </div>
                      <p className="text-primary text-sm mb-3">{exp.company}</p>
                      <p className="text-muted-foreground text-sm">{exp.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Achievements */}
            <div>
              <motion.h3
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-xl font-bold mb-8 flex items-center gap-3"
              >
                <Award className="w-5 h-5 text-primary" />
                Activities & Achievements
              </motion.h3>

              <div className="grid gap-4">
                {achievements.map((achievement, index) => (
                  <motion.div
                    key={achievement.text}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                    className="group p-5 rounded-xl bg-card/50 border border-border hover:border-primary/50 transition-all duration-300 flex items-center gap-4"
                  >
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center group-hover:from-primary/30 group-hover:to-accent/30 transition-colors duration-300">
                      <achievement.icon className="w-5 h-5 text-primary" />
                    </div>
                    <span className="font-medium">{achievement.text}</span>
                  </motion.div>
                ))}
              </div>

              {/* Stats */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="mt-8 p-6 rounded-xl border-gradient"
              >
                <div className="grid grid-cols-3 gap-6 text-center">
                  <div>
                    <div className="text-3xl font-bold text-gradient">15+</div>
                    <div className="text-sm text-muted-foreground">Projects</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-gradient">2+</div>
                    <div className="text-sm text-muted-foreground">Years</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-gradient">10+</div>
                    <div className="text-sm text-muted-foreground">Clients</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
