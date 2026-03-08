'use client';

import Section from './Section';
import { personalInfo, skills } from '@/data/portfolio-data';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <Section id="about" className="py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl font-bold text-slate-900 mb-3">About</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">A bit about me</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 items-start">
          {/* Left: Bio */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-slate-100 rounded-3xl p-8 shadow-[12px_12px_24px_#cbd5e1,-12px_-12px_24px_#ffffff]"
          >
            <div className="space-y-4">
              {personalInfo.bio.map((paragraph, index) => (
                <p key={index} className="text-slate-600 leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>
          </motion.div>

          {/* Right: Quick Facts & Tech Stack */}
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-slate-100 rounded-3xl p-8 shadow-[12px_12px_24px_#cbd5e1,-12px_-12px_24px_#ffffff]"
            >
              <h3 className="text-xl font-semibold text-slate-900 mb-4">Info</h3>
              <div className="space-y-2">
                {personalInfo.location && (
                  <div className="flex items-center space-x-2">
                    <span className="text-primary-600">•</span>
                    <span className="text-slate-600 text-sm">{personalInfo.location}</span>
                  </div>
                )}
                <div className="flex items-center space-x-2">
                  <span className="text-primary-600">•</span>
                  <span className="text-slate-600 text-sm">{personalInfo.email}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-primary-600">•</span>
                  <span className="text-slate-600 text-sm">Open to opportunities</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-slate-100 rounded-3xl p-8 shadow-[12px_12px_24px_#cbd5e1,-12px_-12px_24px_#ffffff]"
            >
              <h3 className="text-xl font-semibold text-slate-900 mb-4">Tech Stack</h3>
              <div className="space-y-4">
                {skills.slice(0, 2).map((category) => (
                  <div key={category.category}>
                    <p className="text-primary-600 font-medium text-sm mb-2">{category.category}</p>
                    <div className="flex flex-wrap gap-2">
                      {category.skills.slice(0, 5).map((skill) => (
                        <span
                          key={skill.name}
                          className="px-3 py-1 bg-slate-50 text-slate-700 rounded-xl text-xs font-medium shadow-[2px_2px_4px_#cbd5e1,-2px_-2px_4px_#ffffff]"
                        >
                          {skill.name}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </Section>
  );
}
