'use client';

import Section from './Section';
import { education } from '@/data/portfolio-data';
import { motion } from 'framer-motion';
import { GraduationCap } from 'lucide-react';

export default function Experience() {
  const formatDate = (dateString: string) => {
    if (dateString === 'Present') return 'Present';
    const [year, month] = dateString.split('-');
    const date = new Date(parseInt(year), parseInt(month) - 1);
    return date.toLocaleDateString('en-US', { month: 'short', year: 'numeric' });
  };

  return (
    <Section id="experience" className="py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl font-bold text-slate-900 mb-3">Education</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">My academic journey</p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-6">
            {education.map((edu, index) => (
              <motion.div
                key={edu.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-slate-100 rounded-3xl p-8 shadow-[12px_12px_24px_#cbd5e1,-12px_-12px_24px_#ffffff]"
              >
                <div className="mb-4">
                  <h4 className="text-xl font-bold text-slate-900 mb-1">{edu.degree}</h4>
                  <p className="text-primary-600 font-medium mb-2">{edu.institution}</p>
                  <div className="flex flex-wrap gap-2 text-sm text-slate-600">
                    <span>{edu.field}</span>
                    <span>•</span>
                    <span>{formatDate(edu.startDate)} - {formatDate(edu.endDate)}</span>
                    {edu.gpa && (
                      <>
                        <span>•</span>
                        <span className="text-primary-600 font-medium">CGPA: {edu.gpa}</span>
                      </>
                    )}
                  </div>
                </div>

                {edu.description && (
                  <ul className="space-y-2">
                    {edu.description.map((item, i) => (
                      <li key={i} className="text-slate-600 flex items-start gap-2">
                        <span className="text-primary-500 mt-1">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
