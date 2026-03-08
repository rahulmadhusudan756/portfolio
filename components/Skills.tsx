'use client';

import Section from './Section';
import { skills } from '@/data/portfolio-data';
import { motion } from 'framer-motion';

export default function Skills() {
  return (
    <Section id="skills" className="py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl font-bold text-slate-900 mb-3">Skills</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">Technologies I work with</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {skills.map((category, categoryIndex) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              className="bg-slate-100 rounded-3xl p-8 shadow-[12px_12px_24px_#cbd5e1,-12px_-12px_24px_#ffffff]"
            >
              <h3 className="text-xl font-semibold text-slate-900 mb-6">{category.category}</h3>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill) => (
                  <span 
                    key={skill.name} 
                    className="px-4 py-2 bg-slate-50 text-slate-700 rounded-xl text-sm font-medium shadow-[4px_4px_8px_#cbd5e1,-4px_-4px_8px_#ffffff]"
                  >
                    {skill.name}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}
