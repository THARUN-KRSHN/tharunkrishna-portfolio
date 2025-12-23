import { motion } from 'framer-motion';
import { Heart, Github, Linkedin, Instagram, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-12 border-t border-border relative">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Left - Branding */}
            <div className="flex flex-col items-center md:items-start gap-2">
              <motion.a
                href="#"
                className="text-xl font-bold text-gradient"
                whileHover={{ scale: 1.05 }}
              >
                Tharun Krishna C U
              </motion.a>
              <p className="text-sm text-muted-foreground text-center md:text-left">
                Crafting digital experiences with passion
              </p>
            </div>

            {/* Center - Social Links */}
            <div className="flex items-center gap-4">
              {[
                { icon: Github, href: 'https://github.com/THARUN-KRSHN', label: 'GitHub' },
                { icon: Linkedin, href: 'www.linkedin.com/in/tharun-krishna-c-u-872a4b325', label: 'LinkedIn' },
                { icon: Instagram, href: 'https://www.instagram.com/tharuneyyh.in?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==', label: 'Instagram' },
              ].map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  className="w-10 h-10 rounded-lg bg-card border border-border flex items-center justify-center hover:border-primary hover:text-primary transition-colors duration-300"
                  whileHover={{ y: -3 }}
                  aria-label={social.label}
                >
                  <social.icon className="w-4 h-4" />
                </motion.a>
              ))}
            </div>

            {/* Right - Back to Top */}
            <motion.button
              onClick={scrollToTop}
              className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors duration-300"
              whileHover={{ y: -2 }}
            >
              Back to top
              <ArrowUp className="w-4 h-4" />
            </motion.button>
          </div>

          {/* Copyright */}
          <div className="mt-8 pt-8 border-t border-border text-center">
            <p className="text-sm text-muted-foreground flex items-center justify-center gap-1">
              © {new Date().getFullYear()}
               All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
