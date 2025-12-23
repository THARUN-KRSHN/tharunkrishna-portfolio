import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import SkillsSection from '@/components/SkillsSection';
import ProjectsSection from '@/components/ProjectsSection';
import ExperienceSection from '@/components/ExperienceSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Frontend Developer & Graphic Designer | Portfolio</title>
        <meta
          name="description"
          content="College student passionate about frontend development and graphic design, crafting modern digital experiences with code and creativity."
        />
        <meta name="keywords" content="frontend developer, graphic designer, web design, UI/UX, portfolio, React, JavaScript" />
        <link rel="canonical" href="https://portfolio.dev" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            "name": "Portfolio",
            "jobTitle": "Frontend Developer & Graphic Designer",
            "description": "College student crafting modern digital experiences",
            "url": "https://portfolio.dev",
            "sameAs": [
              "https://github.com/portfolio",
              "https://linkedin.com/in/portfolio",
              "https://instagram.com/portfolio"
            ]
          })}
        </script>
      </Helmet>

      <main className="relative overflow-hidden">
        <Navbar />
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ExperienceSection />
        <ContactSection />
        <Footer />
      </main>
    </>
  );
};

export default Index;
