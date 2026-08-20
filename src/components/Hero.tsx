'use client'

import { motion } from 'framer-motion'
import { Download, Mail, Github, Linkedin, ExternalLink, Sparkles, Zap } from 'lucide-react'
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
    <section className="min-h-screen flex items-center justify-center bg-transparent pt-16 pb-8">
      <div className="container-custom">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center"
        >
          {/* Content */}
          <div className="space-y-8">
            <motion.div variants={itemVariants} className="space-y-4">
              <motion.h1
                className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight"
                variants={itemVariants}
              >
                Hi, I'm{' '}
                <span className="text-cream-50">Karthikeya</span>{' '}
                <span className="text-cream-400">Bendi</span>
              </motion.h1>

              <motion.h2
                variants={itemVariants}
                className="text-xl lg:text-2xl text-gold-400 font-medium"
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
                download="Karthikeya_Bendi_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
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
                className="p-3 bg-gray-800/40 backdrop-blur-md border border-white/10 rounded-full text-cream-200 hover:text-gold-400 hover:border-gold-400/50 transition-colors"
              >
                <Github size={24} />
              </motion.a>
              
              <motion.a
                href={socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, rotate: -5 }}
                className="p-3 bg-gray-800/40 backdrop-blur-md border border-white/10 rounded-full text-cream-200 hover:text-gold-400 hover:border-gold-400/50 transition-colors"
              >
                <Linkedin size={24} />
              </motion.a>
              
              <motion.a
                href={socialLinks.portfolio}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, rotate: 5 }}
                className="p-3 bg-gray-800/40 backdrop-blur-md border border-white/10 rounded-full text-cream-200 hover:text-gold-400 hover:border-gold-400/50 transition-colors"
              >
                <ExternalLink size={24} />
              </motion.a>
            </motion.div>

            {/* Stats */}
            <motion.div 
              variants={itemVariants}
              className="grid grid-cols-3 gap-4 sm:gap-8 pt-8 border-t border-white/10"
            >
              <div className="text-center">
                <motion.div
                  className="text-2xl sm:text-3xl font-bold text-gold-400"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 1, type: "spring" }}
                >
                  50+
                </motion.div>
                <div className="text-xs sm:text-sm text-cream-300">Projects Built</div>
              </div>

              <div className="text-center">
                <motion.div
                  className="text-2xl sm:text-3xl font-bold text-burgundy-500"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 1.2, type: "spring" }}
                >
                  25+
                </motion.div>
                <div className="text-xs sm:text-sm text-cream-300">Clients Served</div>
              </div>

              <div className="text-center">
                <motion.div
                  className="text-2xl sm:text-3xl font-bold text-gold-400"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 1.4, type: "spring" }}
                >
                  90%
                </motion.div>
                <div className="text-xs sm:text-sm text-cream-300">Process Efficiency</div>
              </div>
            </motion.div>
          </div>

          {/* Avatar/Image - hidden on mobile, shown on large screens */}
          <motion.div
            variants={itemVariants}
            className="hidden lg:flex justify-center lg:justify-end"
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
              {/* Glow behind avatar */}
              <div className="absolute inset-0 -z-10 rounded-full bg-gradient-to-br from-cream-100/10 to-cream-600/10 blur-3xl scale-110" />
              <div className="w-48 h-48 sm:w-64 sm:h-64 lg:w-80 lg:h-80 rounded-full bg-gradient-to-br from-cream-100 to-cream-500 p-2 shadow-2xl shadow-cream-400/10">
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
                className="absolute -top-4 -right-4 w-14 h-14 bg-cream-50 rounded-full flex items-center justify-center text-gray-900 shadow-lg"
              >
                <Sparkles className="w-7 h-7 text-gray-900" />
              </motion.div>
              
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                className="absolute -bottom-4 -left-4 w-12 h-12 bg-cream-700 rounded-full flex items-center justify-center text-white shadow-lg"
              >
                <Zap className="w-6 h-6 text-white" />
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero