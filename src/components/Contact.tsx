'use client'

import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Github, Linkedin, ExternalLink } from 'lucide-react'
import { personalInfo, socialLinks } from '@/data/portfolio'
import BorderGlow from '@/components/BorderGlow'

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
    { name: 'GitHub', icon: <Github className="w-5 h-5" />, href: socialLinks.github },
    { name: 'LinkedIn', icon: <Linkedin className="w-5 h-5" />, href: socialLinks.linkedin },
    { name: 'Blog', icon: <ExternalLink className="w-5 h-5" />, href: socialLinks.blog },
    { name: 'LeetCode', icon: <ExternalLink className="w-5 h-5" />, href: socialLinks.leetcode },
    { name: 'Codeforces', icon: <ExternalLink className="w-5 h-5" />, href: socialLinks.codeforces },
    { name: 'CodeChef', icon: <ExternalLink className="w-5 h-5" />, href: socialLinks.codechef },
    { name: 'HackerRank', icon: <ExternalLink className="w-5 h-5" />, href: socialLinks.hackerrank },
    { name: 'Portfolio', icon: <ExternalLink className="w-5 h-5" />, href: socialLinks.portfolio },
  ]

  return (
    <section id="contact" className="section-padding bg-transparent">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center justify-center gap-3 mb-3">
            <div className="p-2.5 bg-gold-400/15 border border-gold-400/30 rounded-xl">
              <Mail className="w-6 h-6 text-gold-400" />
            </div>
            <span className="text-sm font-semibold tracking-widest uppercase text-gold-400">Get In Touch</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-white leading-tight">
            Let's Work{' '}
            <span className="text-gray-400">Together</span>
          </h2>
          <p className="text-cream-300 mt-3 max-w-2xl mx-auto text-lg">
            I'm always excited to discuss new automation opportunities and collaborate on interesting projects. Let's connect!
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
              {socialPlatforms.map((platform) => (
                <BorderGlow key={platform.name} backgroundColor="transparent" borderRadius={8} glowRadius={24}>
                  <motion.a
                    href={platform.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05, y: -2 }}
                    className="flex h-full items-center justify-center space-x-3 p-4 bg-gray-800/40 backdrop-blur-md border border-white/10 rounded-lg hover:border-gold-400/50 transition-all duration-200 text-center"
                  >
                    <span className="text-cream-300">{platform.icon}</span>
                    <span className="text-cream-200 text-sm hidden sm:inline">{platform.name}</span>
                  </motion.a>
                </BorderGlow>
              ))}
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
                className="h-full"
              >
                <BorderGlow className="h-full" backgroundColor="transparent" borderRadius={12}>
                  <div className="flex h-full flex-col items-center text-center bg-gray-900 border border-white/10 rounded-xl p-6 pb-8 hover:border-gold-400/50 transition-all duration-300">
                  <div className="p-3 bg-gold-400/20 border border-gold-400/30 text-gold-400 rounded-lg mb-3">
                  {info.icon}
                  </div>
                  <div className="text-sm text-cream-400 mb-1">{info.label}</div>
                  <a href={info.href} className="text-cream-200 font-medium hover:text-gold-400 transition-colors text-sm">
                    {info.value}
                  </a>
                  </div>
                </BorderGlow>
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
          <BorderGlow backgroundColor="transparent" borderRadius={16}>
          <div className="bg-gradient-to-r from-cream-100/10 to-cream-600/10 border border-cream-400/30 rounded-2xl p-8">
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
          </BorderGlow>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact
