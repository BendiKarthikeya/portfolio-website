'use client'

import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Github, Linkedin, ExternalLink } from 'lucide-react'
import { personalInfo, socialLinks } from '@/data/portfolio'

const Contact = () => {

  const contactInfo = [
    {
      icon: <Mail className="w-5 h-5" />,
      label: 'Email',
      value: personalInfo.email,
      href: `mailto:${personalInfo.email}`
    },
    {
      icon: <Phone className="w-5 h-5" />,
      label: 'Phone',
      value: personalInfo.phone,
      href: `tel:${personalInfo.phone}`
    },
    {
      icon: <MapPin className="w-5 h-5" />,
      label: 'Location',
      value: personalInfo.location,
      href: '#'
    }
  ]

  const socialPlatforms = [
    {
      name: 'GitHub',
      icon: <Github className="w-5 h-5" />,
      href: socialLinks.github,
      color: 'hover:text-gray-900 dark:hover:text-white'
    },
    {
      name: 'LinkedIn',
      icon: <Linkedin className="w-5 h-5" />,
      href: socialLinks.linkedin,
      color: 'hover:text-blue-600'
    },
    {
      name: 'Portfolio',
      icon: <ExternalLink className="w-5 h-5" />,
      href: socialLinks.portfolio,
      color: 'hover:text-primary-600'
    }
  ]

  return (
    <section id="contact" className="section-padding bg-gray-800">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <h2 className="text-4xl font-bold mb-4 text-cream-100">Let's Work Together</h2>
          <p className="text-xl text-cream-300 max-w-3xl mx-auto">
            I'm always excited to discuss new automation opportunities and collaborate on interesting projects. 
            Ready to automate your workflows and boost productivity? Let's connect!
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {/* Social Links Grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mb-8"
          >
            <h4 className="text-lg font-semibold mb-4 text-gold-400 text-center">Connect With Me</h4>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
              <motion.a
                href={socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05, y: -2 }}
                className="flex items-center justify-center space-x-3 p-4 bg-gray-800 border border-gray-700 rounded-lg hover:border-gold-400/50 transition-all duration-200 text-center"
              >
                <Github size={20} className="text-cream-300" />
                <span className="text-cream-200 text-sm hidden sm:inline">GitHub</span>
              </motion.a>
              
              <motion.a
                href={socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05, y: -2 }}
                className="flex items-center justify-center space-x-3 p-4 bg-gray-800 border border-gray-700 rounded-lg hover:border-gold-400/50 transition-all duration-200 text-center"
              >
                <Linkedin size={20} className="text-cream-300" />
                <span className="text-cream-200 text-sm hidden sm:inline">LinkedIn</span>
              </motion.a>
              
              <motion.a
                href={socialLinks.blog}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05, y: -2 }}
                className="flex items-center justify-center space-x-3 p-4 bg-gray-800 border border-gray-700 rounded-lg hover:border-gold-400/50 transition-all duration-200 text-center"
              >
                <ExternalLink size={20} className="text-cream-300" />
                <span className="text-cream-200 text-sm hidden sm:inline">Blog</span>
              </motion.a>
              
              <motion.a
                href={socialLinks.leetcode}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05, y: -2 }}
                className="flex items-center justify-center space-x-3 p-4 bg-gray-800 border border-gray-700 rounded-lg hover:border-gold-400/50 transition-all duration-200 text-center"
              >
                <ExternalLink size={20} className="text-cream-300" />
                <span className="text-cream-200 text-sm hidden sm:inline">LeetCode</span>
              </motion.a>
              
              <motion.a
                href={socialLinks.codeforces}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05, y: -2 }}
                className="flex items-center justify-center space-x-3 p-4 bg-gray-800 border border-gray-700 rounded-lg hover:border-gold-400/50 transition-all duration-200 text-center"
              >
                <ExternalLink size={20} className="text-cream-300" />
                <span className="text-cream-200 text-sm hidden sm:inline">Codeforces</span>
              </motion.a>
              
              <motion.a
                href={socialLinks.codechef}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05, y: -2 }}
                className="flex items-center justify-center space-x-3 p-4 bg-gray-800 border border-gray-700 rounded-lg hover:border-gold-400/50 transition-all duration-200 text-center"
              >
                <ExternalLink size={20} className="text-cream-300" />
                <span className="text-cream-200 text-sm hidden sm:inline">CodeChef</span>
              </motion.a>
              
              <motion.a
                href={socialLinks.hackerrank}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05, y: -2 }}
                className="flex items-center justify-center space-x-3 p-4 bg-gray-800 border border-gray-700 rounded-lg hover:border-gold-400/50 transition-all duration-200 text-center"
              >
                <ExternalLink size={20} className="text-cream-300" />
                <span className="text-cream-200 text-sm hidden sm:inline">HackerRank</span>
              </motion.a>
              
              <motion.a
                href={socialLinks.portfolio}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05, y: -2 }}
                className="flex items-center justify-center space-x-3 p-4 bg-gray-800 border border-gray-700 rounded-lg hover:border-gold-400/50 transition-all duration-200 text-center"
              >
                <ExternalLink size={20} className="text-cream-300" />
                <span className="text-cream-200 text-sm hidden sm:inline">Portfolio</span>
              </motion.a>
            </div>
          </motion.div>

          {/* Availability */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="max-w-2xl mx-auto mb-8"
          >
            <div className="bg-gradient-to-r from-gold-400/10 to-burgundy-500/10 border border-gold-400/30 rounded-xl p-6 text-center">
              <div className="flex items-center justify-center mb-3">
                <div className="w-3 h-3 bg-gold-400 rounded-full mr-3 animate-pulse"></div>
                <h4 className="font-semibold text-gold-400">Available for Projects</h4>
              </div>
              <p className="text-cream-200 text-sm">
                Currently accepting new automation projects and development opportunities. 
                Response time: Usually within 24 hours.
              </p>
            </div>
          </motion.div>

          {/* Contact Details */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="grid md:grid-cols-3 gap-6 mb-8"
          >
            {contactInfo.map((info, index) => (
              <motion.div
                key={info.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                className="flex flex-col items-center text-center bg-gray-900 border border-gray-700 rounded-xl p-6 pb-8 hover:border-gold-400/50 transition-all duration-300"
              >
                <div className="p-3 bg-gold-400/20 border border-gold-400/30 text-gold-400 rounded-lg mb-3">
                  {info.icon}
                </div>
                <div className="text-sm text-cream-400 mb-1">{info.label}</div>
                <a
                  href={info.href}
                  
                  className="text-cream-200 font-medium hover:text-gold-400 transition-colors text-sm"
                >
                  {info.value}
                </a>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Quick Contact Options */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-8 text-center"
        >
          <div className="bg-gradient-to-r from-gold-400/10 to-burgundy-500/10 border border-gold-400/30 rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-4 text-gold-400">Prefer a Quick Chat?</h3>
            <p className="text-lg text-cream-200 mb-6">
              For urgent automation needs or quick questions, feel free to reach out directly
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href={`mailto:${personalInfo.email}`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center px-6 py-3 bg-gold-400 text-gray-900 rounded-lg font-semibold hover:bg-gold-500 transition-colors"
              >
                <Mail className="w-5 h-5 mr-2" />
                Email Me Directly
              </motion.a>
              
              <motion.a
                href={socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center px-6 py-3 border-2 border-gold-400 text-gold-400 hover:bg-gold-400 hover:text-gray-900 rounded-lg font-semibold transition-colors"
              >
                <Linkedin className="w-5 h-5 mr-2" />
                Connect on LinkedIn
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact