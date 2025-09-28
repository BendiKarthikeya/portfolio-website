'use client'

import { motion } from 'framer-motion'
import { skills } from '@/data/portfolio'

const Skills = () => {
  const skillCategories = [
    { title: 'n8n Specialist', skills: skills.n8nSpecialist, color: 'border-gold-400', bgColor: 'bg-gradient-to-br from-gold-400/10 to-burgundy-500/10' },
    { title: 'Programming Languages', skills: skills.programming, color: 'border-gray-600', bgColor: 'bg-gray-800' },
    { title: 'Web Development', skills: skills.webDev, color: 'border-gray-600', bgColor: 'bg-gray-800' },
    { title: 'Data Science', skills: skills.dataScience, color: 'border-gray-600', bgColor: 'bg-gray-800' },
    { title: 'Automation Tools', skills: skills.automation, color: 'border-gray-600', bgColor: 'bg-gray-800' },
    { title: 'Design', skills: skills.design, color: 'border-gray-600', bgColor: 'bg-gray-800' },
    { title: 'Tools & Technologies', skills: skills.tools, color: 'border-gray-600', bgColor: 'bg-gray-800' }
  ]

  return (
    <section id="skills" className="section-padding bg-gray-900">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 text-cream-100">Technical Skills</h2>
          <p className="text-xl text-cream-300 max-w-3xl mx-auto">
            Comprehensive expertise in automation, development, and integration technologies
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              className={`${category.bgColor} border ${category.color} rounded-2xl p-6 hover:border-gold-400 transition-all duration-300 ${
                category.title === 'n8n Specialist' ? 'lg:col-span-3' : ''
              }`}
            >
              <h3 className={`text-xl font-bold mb-6 text-center ${
                category.title === 'n8n Specialist' ? 'text-gold-400 text-2xl' : 'text-cream-100'
              }`}>
                {category.title}
              </h3>
              
              <div className={`grid gap-4 ${
                category.title === 'n8n Specialist' ? 'grid-cols-2 md:grid-cols-4' : 'grid-cols-2'
              }`}>
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: (categoryIndex * 0.1) + (skillIndex * 0.05) }}
                    whileHover={{ scale: 1.05, y: -2 }}
                    className={`skill-card text-center ${
                      category.title === 'n8n Specialist' ? 'border-gold-400/30 hover:border-gold-400' : ''
                    }`}
                  >
                    <div className="text-3xl mb-2">{skill.icon}</div>
                    <div className={`text-sm font-medium ${
                      category.title === 'n8n Specialist' ? 'text-gold-400' : 'text-cream-200'
                    }`}>
                      {skill.name}
                    </div>
                    {/* {skill.level && (
                      <div className="text-xs text-cream-400 mt-1">
                        {skill.level}
                      </div>
                    )} */}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* n8n Expertise Highlight */}
        
      </div>
    </section>
  )
}

export default Skills