'use client';

import Section from './Section';
import { personalInfo } from '@/data/portfolio-data';
import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, Send } from 'lucide-react';
import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Add your form submission logic here (e.g., EmailJS, API endpoint)
    setStatus('success');
    setTimeout(() => setStatus('idle'), 3000);
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactMethods = [
    {
      icon: Mail,
      label: 'Email',
      value: personalInfo.email,
      href: `mailto:${personalInfo.email}`,
    },
    {
      icon: Github,
      label: 'GitHub',
      value: 'GitHub Profile',
      href: personalInfo.social.github,
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'LinkedIn Profile',
      href: personalInfo.social.linkedin,
    },
  ];

  return (
    <Section id="contact" className="py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl font-bold text-slate-900 mb-3">Get In Touch</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Open to collaborations and opportunities
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            {contactMethods.map((method, index) => (
              <motion.a
                key={method.label}
                href={method.href}
                target={method.label !== 'Email' ? '_blank' : undefined}
                rel={method.label !== 'Email' ? 'noopener noreferrer' : undefined}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ y: -2 }}
                className="flex items-center gap-4 p-6 bg-slate-100 rounded-2xl shadow-[8px_8px_16px_#cbd5e1,-8px_-8px_16px_#ffffff] hover:shadow-[4px_4px_8px_#cbd5e1,-4px_-4px_8px_#ffffff] transition-all"
              >
                <div className="p-3 bg-slate-50 rounded-xl shadow-[4px_4px_8px_#cbd5e1,-4px_-4px_8px_#ffffff]">
                  <method.icon className="text-primary-600" size={22} />
                </div>
                <div>
                  <p className="text-xs text-slate-500 font-medium">{method.label}</p>
                  <p className="text-slate-900 font-medium">{method.value}</p>
                </div>
              </motion.a>
            ))}
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-slate-100 rounded-3xl p-8 shadow-[12px_12px_24px_#cbd5e1,-12px_-12px_24px_#ffffff]"
          >
            <h3 className="text-2xl font-bold text-slate-900 mb-6">Send a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-slate-50 rounded-xl text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all shadow-inner"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-slate-50 rounded-xl text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all shadow-inner"
                  placeholder="you@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-slate-50 rounded-xl text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all resize-none shadow-inner"
                  placeholder="What's on your mind?"
                />
              </div>

              <motion.button
                type="submit"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="w-full px-6 py-4 bg-slate-100 text-slate-900 rounded-2xl font-medium transition-all flex items-center justify-center gap-2 shadow-[8px_8px_16px_#cbd5e1,-8px_-8px_16px_#ffffff] hover:shadow-[4px_4px_8px_#cbd5e1,-4px_-4px_8px_#ffffff]"
              >
                <Send size={20} />
                Send Message
              </motion.button>

              {status === 'success' && (
                <motion.p
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-primary-600 text-center font-medium"
                >
                  Thanks! I'll get back to you soon.
                </motion.p>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </Section>
  );
}
