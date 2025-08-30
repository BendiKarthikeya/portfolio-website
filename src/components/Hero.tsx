'use client'

import { motion } from 'framer-motion'
import { Download, Mail, Github, Linkedin, ExternalLink } from 'lucide-react'
import { personalInfo, socialLinks } from '@/data/portfolio'

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  }

  return (
    <section className="min-h-screen flex items-center justify-center bg-gray-900 pt-16">
      <div className="container-custom">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid lg:grid-cols-2 gap-12 items-center"
        >
          {/* Content */}
          <div className="space-y-8">
            <motion.div variants={itemVariants} className="space-y-4">
              <motion.h1 
                className="text-5xl lg:text-6xl font-bold leading-tight"
                variants={itemVariants}
              >
                Hi, I'm{' '}
                <span className="gradient-text">
                  {personalInfo.name}
                </span>
              </motion.h1>
              
              <motion.h2 
                variants={itemVariants}
                className="text-2xl lg:text-3xl text-gold-400 font-medium"
              >
                {personalInfo.title}
              </motion.h2>
              
              <motion.p 
                variants={itemVariants}
                className="text-lg text-cream-200 max-w-2xl leading-relaxed"
              >
                {personalInfo.tagline}
              </motion.p>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div 
              variants={itemVariants}
              className="flex flex-wrap gap-4"
            >
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary flex items-center gap-2"
              >
                <Mail size={20} />
                Get In Touch
              </motion.a>
              
              <motion.a
                href={personalInfo.resume}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-secondary flex items-center gap-2"
                download
              >
                <Download size={20} />
                Download Resume
              </motion.a>
            </motion.div>

            {/* Social Links */}
            <motion.div 
              variants={itemVariants}
              className="flex gap-6"
            >
              <motion.a
                href={socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, rotate: 5 }}
                className="p-3 bg-gray-100 dark:bg-gray-800 rounded-full text-gray-700 dark:text-gray-300 hover:text-primary-500 transition-colors"
              >
                <Github size={24} />
              </motion.a>
              
              <motion.a
                href={socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, rotate: -5 }}
                className="p-3 bg-gray-100 dark:bg-gray-800 rounded-full text-gray-700 dark:text-gray-300 hover:text-primary-500 transition-colors"
              >
                <Linkedin size={24} />
              </motion.a>
              
              <motion.a
                href={socialLinks.portfolio}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, rotate: 5 }}
                className="p-3 bg-gray-100 dark:bg-gray-800 rounded-full text-gray-700 dark:text-gray-300 hover:text-primary-500 transition-colors"
              >
                <ExternalLink size={24} />
              </motion.a>
            </motion.div>

            {/* Stats */}
            <motion.div 
              variants={itemVariants}
              className="grid grid-cols-3 gap-8 pt-8 border-t border-gray-700"
            >
              <div className="text-center">
                <motion.div 
                  className="text-3xl font-bold text-gold-400"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 1, type: "spring" }}
                >
                  50+
                </motion.div>
                <div className="text-sm text-cream-300">n8n Workflows</div>
              </div>
              
              <div className="text-center">
                <motion.div 
                  className="text-3xl font-bold text-burgundy-500"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 1.2, type: "spring" }}
                >
                  200+
                </motion.div>
                <div className="text-sm text-cream-300">Hours Saved Weekly</div>
              </div>
              
              <div className="text-center">
                <motion.div 
                  className="text-3xl font-bold text-gold-400"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 1.4, type: "spring" }}
                >
                  90%
                </motion.div>
                <div className="text-sm text-cream-300">Process Efficiency</div>
              </div>
            </motion.div>
          </div>

          {/* Avatar/Image */}
          <motion.div
            variants={itemVariants}
            className="flex justify-center lg:justify-end"
          >
            <motion.div
              animate={{ 
                y: [0, -10, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="relative"
            >
              <div className="w-80 h-80 rounded-full bg-gradient-to-br from-gold-400 to-burgundy-500 p-2">
                <img
                  src={personalInfo.avatar}
                  alt={personalInfo.name}
                  className="w-full h-full rounded-full object-cover"
                />
              </div>
              
              {/* Floating Elements */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute -top-4 -right-4 w-16 h-16 bg-gold-400 rounded-full flex items-center justify-center text-gray-900 text-2xl"
              >
                🔄
              </motion.div>
              
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                className="absolute -bottom-4 -left-4 w-12 h-12 bg-burgundy-500 rounded-full flex items-center justify-center text-white text-xl"
              >
                ⚡
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero