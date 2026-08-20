'use client'

import { motion } from 'framer-motion'
import { User, Code, Zap, Heart, Target } from 'lucide-react'
import { personalInfo } from '@/data/portfolio'

const About = () => {
  const features = [
    {
      icon: <Code className="w-6 h-6" />,
      title: "Full-Stack Development",
      description: "Building scalable web applications with modern technologies"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "AI & Automation Expert",
      description: "Specializing in n8n workflows, business automation, and building autonomous agents using Agentic AI"
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: "Passionate Learner",
      description: "Continuously exploring new technologies and automation possibilities"
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Results-Driven",
      description: "Focused on delivering measurable improvements and efficiency gains"
    }
  ]

  return (
    <section id="about" className="section-padding bg-transparent">
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
              <User className="w-6 h-6 text-gold-400" />
            </div>
            <span className="text-sm font-semibold tracking-widest uppercase text-gold-400">Overview</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-white leading-tight">
            About{' '}
            <span className="text-gray-400">Me</span>
          </h2>
          <p className="text-cream-300 mt-3 max-w-2xl mx-auto text-lg">
            Passionate about transforming complex business processes into streamlined, automated workflows
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="max-w-none space-y-6">
              <p className="text-cream-200 leading-relaxed">
                {personalInfo.bio}
              </p>
              
              <p className="text-cream-200 leading-relaxed">
                {personalInfo.experience}
              </p>

         <p className="text-cream-200 leading-relaxed">
                My mission is to transform complex processes into simple, automated systems that are reliable, scalable, and impactful.              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              {['n8n Expert', 'Process Optimizer', 'API Integration', 'Workflow Designer'].map((trait) => (
                <motion.span
                  key={trait}
                  whileHover={{ scale: 1.05 }}
                  className="px-4 py-2 bg-gold-400/20 border border-gold-400/30 text-gold-400 rounded-full text-sm font-medium"
                >
                  {trait}
                </motion.span>
              ))}
            </div>
          </motion.div>

          {/* Features Grid */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-gray-900 border border-white/10 p-6 rounded-xl hover:border-gold-400/50 transition-all duration-300"
              >
                <div className="flex items-center mb-4">
                  <div className="p-3 bg-gold-400/20 border border-gold-400/30 text-gold-400 rounded-lg">
                    {feature.icon}
                  </div>
                </div>
                <h3 className="text-lg font-semibold mb-2 text-cream-100">{feature.title}</h3>
                <p className="text-cream-300 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>


      </div>
    </section>
  )
}

export default About