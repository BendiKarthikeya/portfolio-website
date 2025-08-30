'use client'

import { motion } from 'framer-motion'
import { Code, Zap, Heart, Target } from 'lucide-react'
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
      title: "Automation Expert",
      description: "Specializing in n8n workflows and business process automation"
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
    <section id="about" className="section-padding bg-gray-800">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 text-cream-100">About Me</h2>
          <p className="text-xl text-cream-300 max-w-3xl mx-auto">
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
                My expertise lies in creating intelligent automation solutions using n8n, where I've built 50+ workflows 
                that have collectively saved over 200 hours of manual work weekly. I combine technical proficiency with 
                business understanding to deliver automation that truly makes a difference.
              </p>
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
                className="bg-gray-900 border border-gray-700 p-6 rounded-xl hover:border-gold-400/50 transition-all duration-300"
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

        {/* Personal Touch */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-gold-400/10 to-burgundy-500/10 border border-gold-400/30 rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-4 text-gold-400">Let's Build Something Amazing Together</h3>
            <p className="text-lg text-cream-200 mb-6">
              Ready to automate your business processes and boost productivity? Let's discuss how n8n automation can transform your workflow.
            </p>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block bg-gold-400 text-gray-900 px-8 py-3 rounded-lg font-semibold hover:bg-gold-500 transition-colors"
            >
              Start a Conversation
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About