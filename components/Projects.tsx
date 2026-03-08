'use client';

import Section from './Section';
import { projects } from '@/data/portfolio-data';
import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';

export default function Projects() {
  return (
    <Section id="projects" className="py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl font-bold text-slate-900 mb-3">Projects</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Recent work and side projects
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-slate-100 rounded-3xl overflow-hidden shadow-[12px_12px_24px_#cbd5e1,-12px_-12px_24px_#ffffff] hover:shadow-[8px_8px_16px_#cbd5e1,-8px_-8px_16px_#ffffff] transition-all"
            >
              {/* Project Content */}
              <div className="p-8 space-y-4">
                <div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">
                    {project.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Key Features */}
                {project.keyFeatures && project.keyFeatures.length > 0 && (
                  <div className="space-y-2">
                    <h4 className="text-sm font-semibold text-primary-600">Key Features:</h4>
                    <ul className="space-y-1">
                      {project.keyFeatures.map((feature, idx) => (
                        <li key={idx} className="text-sm text-slate-600 flex items-start gap-2">
                          <span className="text-primary-500 mt-0.5">•</span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-slate-50 text-slate-700 rounded-full text-xs font-medium shadow-[2px_2px_4px_#cbd5e1,-2px_-2px_4px_#ffffff]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                {project.github && (
                  <div className="flex items-center gap-4 pt-4">
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ y: -2 }}
                      whileTap={{ scale: 0.98 }}
                      className="flex items-center gap-2 text-slate-700 hover:text-primary-600 transition-colors"
                    >
                      <Github size={20} />
                      <span className="text-sm font-medium">View Code</span>
                    </motion.a>
                    {project.demo && (
                      <motion.a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ y: -2 }}
                        whileTap={{ scale: 0.98 }}
                        className="flex items-center gap-2 text-slate-700 hover:text-primary-600 transition-colors"
                      >
                        <ExternalLink size={20} />
                        <span className="text-sm font-medium">Live Demo</span>
                      </motion.a>
                    )}
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}
