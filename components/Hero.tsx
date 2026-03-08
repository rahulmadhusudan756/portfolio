'use client';

import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Download, ChevronDown } from 'lucide-react';
import { personalInfo } from '@/data/portfolio-data';

export default function Hero() {
  const handleScrollToProjects = () => {
    const projectsSection = document.querySelector('#projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const socialLinks = [
    { icon: Github, href: personalInfo.social.github, label: 'GitHub' },
    { icon: Linkedin, href: personalInfo.social.linkedin, label: 'LinkedIn' },
    { icon: Mail, href: `mailto:${personalInfo.email}`, label: 'Email' },
  ];

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-slate-50">
      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-slate-900 mb-6 tracking-tight"
          >
            {personalInfo.name}
          </motion.h1>

          {/* Title */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-xl sm:text-2xl md:text-3xl font-medium text-slate-600 mb-8"
          >
            {personalInfo.title}
          </motion.h2>

          {/* Bio */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="max-w-2xl mx-auto mb-12"
          >
            <p className="text-slate-600 text-lg leading-relaxed">
              {personalInfo.bio[0]}
            </p>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
          >
            <motion.button
              onClick={handleScrollToProjects}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="px-8 py-4 bg-slate-100 text-slate-900 rounded-2xl font-medium transition-all shadow-[8px_8px_16px_#cbd5e1,-8px_-8px_16px_#ffffff] hover:shadow-[4px_4px_8px_#cbd5e1,-4px_-4px_8px_#ffffff]"
            >
              View Projects
            </motion.button>
            <motion.a
              href={personalInfo.resumeUrl}
              download
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="px-8 py-4 bg-slate-100 text-slate-900 rounded-2xl font-medium transition-all shadow-[8px_8px_16px_#cbd5e1,-8px_-8px_16px_#ffffff] hover:shadow-[4px_4px_8px_#cbd5e1,-4px_-4px_8px_#ffffff] flex items-center gap-2"
            >
              <Download size={20} />
              Resume
            </motion.a>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="flex items-center justify-center gap-4"
          >
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="p-4 bg-slate-100 text-slate-700 hover:text-primary-600 rounded-xl transition-all shadow-[6px_6px_12px_#cbd5e1,-6px_-6px_12px_#ffffff]"
                aria-label={social.label}
              >
                <social.icon size={22} />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, repeat: Infinity, duration: 2 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <ChevronDown size={32} className="text-gray-600 animate-bounce" />
        </motion.div>
      </div>
    </section>
  );
}
