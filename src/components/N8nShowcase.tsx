'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Clock, Users, TrendingUp, Workflow, Zap, Database, Bot, Mail, FileText, Target } from 'lucide-react'
import { n8nProjects } from '@/data/portfolio'

const N8nShowcase = () => {
  const stats = [
    { icon: <Workflow className="w-6 h-6" />, value: "50+", label: "n8n Workflows Built", color: "text-gold-400" },
    { icon: <Clock className="w-6 h-6" />, value: "200+", label: "Hours Saved Weekly", color: "text-burgundy-500" },
    { icon: <Users className="w-6 h-6" />, value: "25+", label: "Organizations Helped", color: "text-gold-400" },
    { icon: <TrendingUp className="w-6 h-6" />, value: "90%", label: "Process Efficiency", color: "text-burgundy-500" }
  ]

  const categoryIcons = {
    "Data Analysis": <Bot className="w-5 h-5" />,
    "Education": <FileText className="w-5 h-5" />,
    "Business Process": <Target className="w-5 h-5" />,
    "Lead Generation": <Mail className="w-5 h-5" />
  }

  return (
    <section id="n8n-showcase" className="section-padding bg-gray-900">
      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center mb-4">
            <div className="p-3 bg-gradient-to-br from-gold-400/20 to-burgundy-500/20 border border-gold-400/30 rounded-full mr-4">
              <Workflow className="w-8 h-8 text-gold-400" />
            </div>
            <h2 className="text-4xl font-bold text-cream-100">n8n Automation Portfolio</h2>
          </div>
          <p className="text-xl text-cream-300 max-w-3xl mx-auto">
            Comprehensive automation solutions that transform business operations and streamline complex workflows
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-16"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="flex items-center justify-center mb-3">
                <div className="p-3 bg-gradient-to-br from-gold-400/20 to-burgundy-500/20 border border-gold-400/30 rounded-full">
                  <div className="text-gold-400">
                    {stat.icon}
                  </div>
                </div>
              </div>
              <div className={`text-3xl font-bold ${stat.color} mb-1`}>
                {stat.value}
              </div>
              <div className="text-sm text-cream-300">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Projects */}
        <div className="space-y-12">
          {n8nProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="n8n-card"
            >
              <div className="grid lg:grid-cols-2 gap-8 items-start">
                {/* Content */}
                <div className="space-y-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="p-2 bg-gold-400/20 border border-gold-400/30 rounded-lg">
                      <div className="text-gold-400">
                        {categoryIcons[project.category as keyof typeof categoryIcons]}
                      </div>
                    </div>
                    <span className="text-sm text-gold-400 font-medium">{project.category}</span>
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold mb-3 text-cream-100">{project.title}</h3>
                    <p className="text-cream-300 leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  {/* Features */}
                  <div className="space-y-3">
                    <h4 className="font-semibold text-lg text-gold-400">Key Features:</h4>
                    <ul className="space-y-2">
                      {project.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start text-cream-300">
                          <Zap className="w-4 h-4 text-gold-400 mr-3 flex-shrink-0 mt-0.5" />
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies */}
                  <div>
                    <h4 className="font-semibold text-lg mb-3 text-gold-400">Technologies Used:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-gray-700 border border-gray-600 text-cream-200 rounded-full text-sm hover:border-gold-400/50 transition-colors"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Impact */}
                  <div className="bg-gradient-to-r from-gold-400/10 to-burgundy-500/10 border border-gold-400/30 p-6 rounded-xl">
                    <div className="flex items-center mb-2">
                      <TrendingUp className="w-5 h-5 text-gold-400 mr-2" />
                      <h4 className="font-semibold text-gold-400">Business Impact</h4>
                    </div>
                    <p className="text-cream-200">{project.impact}</p>
                  </div>
                </div>

                {/* Workflow Visual */}
                <div className="space-y-6">
                  {/* Workflow Info Cards */}
                  <div className="grid grid-cols-3 gap-4">
                    <div className="text-center p-4 bg-gray-800 border border-gray-700 rounded-lg">
                      <div className="text-2xl font-bold text-gold-400 mb-1">
                        {project.workflow.steps.length}
                      </div>
                      <div className="text-xs text-cream-300">Workflow Steps</div>
                    </div>
                    <div className="text-center p-4 bg-gray-800 border border-gray-700 rounded-lg">
                      <div className="text-2xl font-bold text-burgundy-500 mb-1">
                        {project.workflow.integrations}
                      </div>
                      <div className="text-xs text-cream-300">Integrations</div>
                    </div>
                    <div className="text-center p-4 bg-gray-800 border border-gray-700 rounded-lg">
                      <Database className="w-6 h-6 text-gold-400 mx-auto mb-1" />
                      <div className="text-xs text-cream-300">Automated</div>
                    </div>
                  </div>

                  {/* Workflow Steps */}
                  <div className="bg-gray-800 border border-gray-700 rounded-xl p-6">
                    <h5 className="font-semibold text-sm text-gold-400 mb-4">
                      Workflow: {project.workflow.trigger}
                    </h5>
                    <div className="space-y-3">
                      {project.workflow.steps.map((step, idx) => (
                        <div key={idx} className="flex items-center">
                          <div className="w-8 h-8 bg-gold-400/20 border border-gold-400/30 rounded-full flex items-center justify-center text-xs text-gold-400 font-bold mr-3">
                            {idx + 1}
                          </div>
                          <span className="text-cream-200 text-sm">{step}</span>
                          {idx < project.workflow.steps.length - 1 && (
                            <ArrowRight className="w-4 h-4 text-gray-500 ml-auto" />
                          )}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Project Image */}
                  <div className="bg-gray-800 border border-gray-700 rounded-xl p-4 hover:border-gold-400/50 transition-colors">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-48 object-cover rounded-lg mb-4"
                    />
                    
                    {/* Additional Images for Business Platform */}
                    {project.additionalImages && project.additionalImages.length > 0 && (
                      <div className="grid grid-cols-2 gap-2">
                        {project.additionalImages.slice(0, 4).map((img, idx) => (
                          <img
                            key={idx}
                            src={img}
                            alt={`${project.title} - View ${idx + 2}`}
                            className="w-full h-20 object-cover rounded border border-gray-600 hover:border-gold-400/50 transition-colors"
                          />
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-gold-400/10 to-burgundy-500/10 border border-gold-400/30 rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-4 text-gold-400">Ready to Transform Your Business Processes?</h3>
            <p className="text-lg text-cream-200 mb-6 max-w-2xl mx-auto">
              Let's discuss how custom n8n automation workflows can streamline your operations, reduce manual work, 
              and boost your team's productivity by up to 90%.
            </p>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center bg-gold-400 text-gray-900 px-8 py-3 rounded-lg font-semibold hover:bg-gold-500 transition-colors"
            >
              Start Your Automation Journey
              <ArrowRight className="w-5 h-5 ml-2" />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default N8nShowcase