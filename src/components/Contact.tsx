'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { useForm } from 'react-hook-form'
import { Mail, Phone, MapPin, Send, Github, Linkedin, ExternalLink, CheckCircle } from 'lucide-react'
import { personalInfo, socialLinks } from '@/data/portfolio'

interface FormData {
  name: string
  email: string
  subject: string
  message: string
}

const Contact = () => {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const { register, handleSubmit, formState: { errors }, reset } = useForm<FormData>()

  const onSubmit = async (data: FormData) => {
    // Simulate form submission
    console.log('Form submitted:', data)
    setIsSubmitted(true)
    reset()
    
    // Reset success message after 5 seconds
    setTimeout(() => {
      setIsSubmitted(false)
    }, 5000)
  }

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
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 text-cream-100">Let's Work Together</h2>
          <p className="text-xl text-cream-300 max-w-3xl mx-auto">
            Ready to automate your workflows and boost productivity? Let's discuss how I can help transform your business processes.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold mb-6 text-cream-100">Get In Touch</h3>
              <p className="text-cream-300 leading-relaxed mb-8">
                I'm always excited to discuss new automation opportunities, collaborate on interesting projects, 
                or simply chat about the latest in workflow automation and development. Feel free to reach out!
              </p>
            </div>

            {/* Contact Details */}
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={info.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="flex items-center space-x-4"
                >
                  <div className="p-3 bg-gold-400/20 border border-gold-400/30 text-gold-400 rounded-lg">
                    {info.icon}
                  </div>
                  <div>
                    <div className="text-sm text-cream-400">{info.label}</div>
                    <a
                      href={info.href}
                      className="text-cream-200 font-medium hover:text-gold-400 transition-colors"
                    >
                      {info.value}
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Social Links Grid */}
            <div>
              <h4 className="text-lg font-semibold mb-4 text-gold-400">Connect With Me</h4>
              <div className="grid grid-cols-2 gap-4">
                <motion.a
                  href={socialLinks.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05, y: -2 }}
                  className="flex items-center space-x-3 p-3 bg-gray-800 border border-gray-700 rounded-lg hover:border-gold-400/50 transition-all duration-200"
                >
                  <Github size={20} className="text-cream-300" />
                  <span className="text-cream-200 text-sm">GitHub</span>
                </motion.a>
                
                <motion.a
                  href={socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05, y: -2 }}
                  className="flex items-center space-x-3 p-3 bg-gray-800 border border-gray-700 rounded-lg hover:border-gold-400/50 transition-all duration-200"
                >
                  <Linkedin size={20} className="text-cream-300" />
                  <span className="text-cream-200 text-sm">LinkedIn</span>
                </motion.a>
                
                <motion.a
                  href={socialLinks.blog}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05, y: -2 }}
                  className="flex items-center space-x-3 p-3 bg-gray-800 border border-gray-700 rounded-lg hover:border-gold-400/50 transition-all duration-200"
                >
                  <ExternalLink size={20} className="text-cream-300" />
                  <span className="text-cream-200 text-sm">Blog</span>
                </motion.a>
                
                <motion.a
                  href={socialLinks.leetcode}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05, y: -2 }}
                  className="flex items-center space-x-3 p-3 bg-gray-800 border border-gray-700 rounded-lg hover:border-gold-400/50 transition-all duration-200"
                >
                  <ExternalLink size={20} className="text-cream-300" />
                  <span className="text-cream-200 text-sm">LeetCode</span>
                </motion.a>
                
                <motion.a
                  href={socialLinks.codeforces}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05, y: -2 }}
                  className="flex items-center space-x-3 p-3 bg-gray-800 border border-gray-700 rounded-lg hover:border-gold-400/50 transition-all duration-200"
                >
                  <ExternalLink size={20} className="text-cream-300" />
                  <span className="text-cream-200 text-sm">Codeforces</span>
                </motion.a>
                
                <motion.a
                  href={socialLinks.codechef}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05, y: -2 }}
                  className="flex items-center space-x-3 p-3 bg-gray-800 border border-gray-700 rounded-lg hover:border-gold-400/50 transition-all duration-200"
                >
                  <ExternalLink size={20} className="text-cream-300" />
                  <span className="text-cream-200 text-sm">CodeChef</span>
                </motion.a>
                
                <motion.a
                  href={socialLinks.hackerrank}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05, y: -2 }}
                  className="flex items-center space-x-3 p-3 bg-gray-800 border border-gray-700 rounded-lg hover:border-gold-400/50 transition-all duration-200"
                >
                  <ExternalLink size={20} className="text-cream-300" />
                  <span className="text-cream-200 text-sm">HackerRank</span>
                </motion.a>
                
                <motion.a
                  href={socialLinks.portfolio}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05, y: -2 }}
                  className="flex items-center space-x-3 p-3 bg-gray-800 border border-gray-700 rounded-lg hover:border-gold-400/50 transition-all duration-200"
                >
                  <ExternalLink size={20} className="text-cream-300" />
                  <span className="text-cream-200 text-sm">Portfolio</span>
                </motion.a>
              </div>
            </div>

            {/* Availability */}
            <div className="bg-gradient-to-r from-gold-400/10 to-burgundy-500/10 border border-gold-400/30 rounded-xl p-6">
              <div className="flex items-center mb-3">
                <div className="w-3 h-3 bg-gold-400 rounded-full mr-3 animate-pulse"></div>
                <h4 className="font-semibold text-gold-400">Available for Projects</h4>
              </div>
              <p className="text-cream-200 text-sm">
                Currently accepting new automation projects and development opportunities. 
                Response time: Usually within 24 hours.
              </p>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-gray-900 border border-gray-700 rounded-2xl p-8 shadow-lg"
          >
            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-12"
              >
                <CheckCircle className="w-16 h-16 text-gold-400 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-gold-400 mb-2">
                  Message Sent Successfully!
                </h3>
                <p className="text-cream-300">
                  Thank you for reaching out. I'll get back to you within 24 hours.
                </p>
              </motion.div>
            ) : (
              <>
                <h3 className="text-2xl font-bold mb-6 text-cream-100">Send Me a Message</h3>
                
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-cream-200 mb-2">
                        Name *
                      </label>
                      <input
                        {...register('name', { required: 'Name is required' })}
                        type="text"
                        className="w-full px-4 py-3 border border-gray-600 rounded-lg focus:ring-2 focus:ring-gold-400 focus:border-transparent bg-gray-800 text-cream-100 transition-colors"
                        placeholder="Your full name"
                      />
                      {errors.name && (
                        <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
                      )}
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-cream-200 mb-2">
                        Email *
                      </label>
                      <input
                        {...register('email', { 
                          required: 'Email is required',
                          pattern: {
                            value: /^\S+@\S+$/i,
                            message: 'Invalid email address'
                          }
                        })}
                        type="email"
                        className="w-full px-4 py-3 border border-gray-600 rounded-lg focus:ring-2 focus:ring-gold-400 focus:border-transparent bg-gray-800 text-cream-100 transition-colors"
                        placeholder="your.email@example.com"
                      />
                      {errors.email && (
                        <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
                      )}
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-cream-200 mb-2">
                      Subject *
                    </label>
                    <input
                      {...register('subject', { required: 'Subject is required' })}
                      type="text"
                      className="w-full px-4 py-3 border border-gray-600 rounded-lg focus:ring-2 focus:ring-gold-400 focus:border-transparent bg-gray-800 text-cream-100 transition-colors"
                      placeholder="What's this about?"
                    />
                    {errors.subject && (
                      <p className="text-red-500 text-sm mt-1">{errors.subject.message}</p>
                    )}
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-cream-200 mb-2">
                      Message *
                    </label>
                    <textarea
                      {...register('message', { required: 'Message is required' })}
                      rows={6}
                      className="w-full px-4 py-3 border border-gray-600 rounded-lg focus:ring-2 focus:ring-gold-400 focus:border-transparent bg-gray-800 text-cream-100 transition-colors resize-none"
                      placeholder="Tell me about your project or automation needs..."
                    />
                    {errors.message && (
                      <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>
                    )}
                  </div>
                  
                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full flex items-center justify-center px-6 py-3 bg-gold-400 text-gray-900 rounded-lg font-semibold hover:bg-gold-500 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-gold-400 focus:ring-offset-2"
                  >
                    <Send className="w-5 h-5 mr-2" />
                    Send Message
                  </motion.button>
                </form>
              </>
            )}
          </motion.div>
        </div>

        {/* Quick Contact Options */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center"
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