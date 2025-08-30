'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Workflow, Clock, Users, TrendingUp, Zap, Bot, Mail, FileText, Target } from 'lucide-react'
import Link from 'next/link'

const N8nPreview = () => {
  const stats = [
    { icon: <Workflow className="w-6 h-6" />, value: "50+", label: "n8n Workflows Built", color: "text-gold-400" },
    { icon: <Clock className="w-6 h-6" />, value: "200+", label: "Hours Saved Weekly", color: "text-burgundy-500" },
    { icon: <Users className="w-6 h-6" />, value: "25+", label: "Organizations Helped", color: "text-gold-400" },
    { icon: <TrendingUp className="w-6 h-6" />, value: "90%", label: "Process Efficiency", color: "text-burgundy-500" }
  ]

  const projectCategories = [
    {
      icon: <Bot className="w-8 h-8" />,
      title: "Data Analysis & AI",
      description: "Business intelligence with chatbot automation",
      color: "from-blue-500/20 to-purple-500/20",
      borderColor: "border-blue-400/30"
    },
    {
      icon: <FileText className="w-8 h-8" />,
      title: "Educational Automation",
      description: "Daily communication and content management",
      color: "from-green-500/20 to-teal-500/20",
      borderColor: "border-green-400/30"
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Business Process",
      description: "End-to-end trading platform automation",
      color: "from-orange-500/20 to-red-500/20",
      borderColor: "border-orange-400/30"
    },
    {
      icon: <Mail className="w-8 h-8" />,
      title: "Lead Generation",
      description: "Restaurant industry marketing automation",
      color: "from-purple-500/20 to-pink-500/20",
      borderColor: "border-purple-400/30"
    }
  ]

  return (
    <section id="n8n-preview" className="section-padding bg-gray-900">
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
            <h2 className="text-4xl font-bold text-cream-100">n8n Automation Expertise</h2>
          </div>
          <p className="text-xl text-cream-300 max-w-3xl mx-auto">
            Transforming business operations through intelligent workflow automation
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

        {/* Project Categories Preview */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold text-center mb-8 text-cream-100">Automation Project Categories</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {projectCategories.map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className={`bg-gradient-to-br ${category.color} border ${category.borderColor} rounded-xl p-6 text-center hover:border-gold-400/50 transition-all duration-300`}
              >
                <div className="text-gold-400 mb-4 flex justify-center">
                  {category.icon}
                </div>
                <h4 className="text-lg font-bold text-cream-100 mb-2">{category.title}</h4>
                <p className="text-cream-300 text-sm">{category.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Key Capabilities */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="bg-gradient-to-r from-gold-400/10 to-burgundy-500/10 border border-gold-400/30 rounded-2xl p-8 mb-12"
        >
          <h3 className="text-2xl font-bold text-center mb-8 text-gold-400">Core n8n Capabilities</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "API Integrations & Webhooks",
              "Database Automation & Sync",
              "Email Marketing Workflows",
              "Data Processing & Analysis",
              "Multi-platform Integrations",
              "Custom Business Logic"
            ].map((capability, index) => (
              <motion.div
                key={capability}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex items-center space-x-3"
              >
                <Zap className="w-5 h-5 text-gold-400 flex-shrink-0" />
                <span className="text-cream-200">{capability}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA to Full Portfolio */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-gold-400/10 to-burgundy-500/10 border border-gold-400/30 rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-4 text-gold-400">Explore My Complete n8n Portfolio</h3>
            <p className="text-lg text-cream-200 mb-6 max-w-2xl mx-auto">
              Dive deep into detailed case studies, workflow diagrams, and real project implementations 
              that showcase the full scope of my n8n automation expertise.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  href="/n8n-portfolio"
                  className="inline-flex items-center bg-gold-400 text-gray-900 px-8 py-4 rounded-lg font-semibold hover:bg-gold-500 transition-colors text-lg"
                >
                  View Full n8n Portfolio
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </motion.div>
              
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center border-2 border-gold-400 text-gold-400 hover:bg-gold-400 hover:text-gray-900 px-8 py-4 rounded-lg font-semibold transition-colors text-lg"
              >
                Discuss Your Project
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default N8nPreview