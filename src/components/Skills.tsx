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
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-gold-400/10 to-burgundy-500/10 border border-gold-400/30 rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-4 text-gold-400">n8n Automation Expertise</h3>
            <p className="text-cream-200 leading-relaxed mb-6">
              As an n8n Specialist at Advait, I design and implement custom workflows, API integrations, and process automations 
              to help businesses operate more efficiently and at scale. Working remotely with cross-functional teams, I identify 
              opportunities for automation, optimize existing processes, and ensure solutions are well-documented, maintainable, 
              and aligned with business objectives.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-gold-400 mb-2">50+</div>
                <div className="text-cream-300 font-medium">n8n Workflows Built</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-burgundy-500 mb-2">200+</div>
                <div className="text-cream-300 font-medium">Hours Saved Weekly</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gold-400 mb-2">90%</div>
                <div className="text-cream-300 font-medium">Process Efficiency</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills