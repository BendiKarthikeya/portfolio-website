'use client'

import { motion } from 'framer-motion'
import { GraduationCap, Award, BookOpen, Trophy } from 'lucide-react'
import { education, certifications, achievements } from '@/data/portfolio'

const Education = () => {
  return (
    <section id="education" className="section-padding bg-gray-900">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 text-cream-100">Education & Achievements</h2>
          <p className="text-xl text-cream-300 max-w-3xl mx-auto">
            Academic foundation and professional certifications that support my technical expertise
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Education */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className="flex items-center mb-6">
              <div className="p-3 bg-gold-400/20 border border-gold-400/30 rounded-full mr-4">
                <GraduationCap className="w-6 h-6 text-gold-400" />
              </div>
              <h3 className="text-2xl font-bold text-cream-100">Education</h3>
            </div>

            <div className="space-y-6">
              {education.map((edu, index) => (
                <motion.div
                  key={edu.degree}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`rounded-2xl p-8 ${
                    edu.level === 'undergraduate' 
                      ? 'bg-gradient-to-br from-gold-400/10 to-burgundy-500/10 border border-gold-400/30' 
                      : 'bg-gray-800 border border-gray-700'
                  }`}
                >
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h4 className={`text-xl font-bold ${
                        edu.level === 'undergraduate' ? 'text-gold-400' : 'text-cream-100'
                      }`}>
                        {edu.degree}
                      </h4>
                      <p className={`font-medium ${
                        edu.level === 'undergraduate' ? 'text-cream-200' : 'text-cream-300'
                      }`}>
                        {edu.institution}
                      </p>
                    </div>
                    <div className="text-right">
                      <div className={`font-semibold ${
                        edu.level === 'undergraduate' ? 'text-gold-400' : 'text-cream-200'
                      }`}>
                        {edu.year}
                      </div>
                      {edu.grade && (
                        <div className={`text-sm ${
                          edu.level === 'undergraduate' ? 'text-cream-200' : 'text-cream-300'
                        }`}>
                          Grade: {edu.grade}
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Achievements within each education */}
                  <div className="space-y-3">
                    <h5 className={`font-semibold ${
                      edu.level === 'undergraduate' ? 'text-gold-400' : 'text-cream-100'
                    }`}>
                      Key Achievements:
                    </h5>
                    <div className="space-y-2">
                      {edu.achievements.map((achievement, idx) => (
                        <div
                          key={idx}
                          className={`flex items-start text-sm ${
                            edu.level === 'undergraduate' ? 'text-cream-200' : 'text-cream-300'
                          }`}
                        >
                          <Trophy className={`w-4 h-4 mr-2 flex-shrink-0 mt-0.5 ${
                            edu.level === 'undergraduate' ? 'text-gold-400' : 'text-cream-400'
                          }`} />
                          {achievement}
                        </div>
                      ))}
                    </div>
                  </div>


                </motion.div>
              ))}
            </div>

            {/* Professional Achievements */}
            <div className="bg-gradient-to-r from-gold-400/10 to-burgundy-500/10 border border-gold-400/30 rounded-2xl p-8">
              <div className="flex items-center mb-6">
                <div className="p-3 bg-gold-400/20 border border-gold-400/30 rounded-full mr-4">
                  <Trophy className="w-6 h-6 text-gold-400" />
                </div>
                <h3 className="text-2xl font-bold text-gold-400">Professional Achievements</h3>
              </div>

              <div className="space-y-3">
                {achievements.map((achievement, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="flex items-start"
                  >
                    <div className="w-2 h-2 bg-gold-400 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                    <p className="text-cream-200 leading-relaxed">
                      {achievement}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Certifications */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            <div className="flex items-center mb-6">
              <div className="p-3 bg-gold-400/20 border border-gold-400/30 rounded-full mr-4">
                <Award className="w-6 h-6 text-gold-400" />
              </div>
              <h3 className="text-2xl font-bold text-cream-100">Certifications</h3>
            </div>

            <div className="space-y-6">
              {certifications.map((cert, index) => (
                <motion.div
                  key={cert.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="bg-gray-800 border border-gray-700 rounded-xl p-6 hover:border-gold-400/50 transition-all duration-300"
                >
                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-gold-400/20 to-burgundy-500/20 border border-gold-400/30 rounded-lg flex items-center justify-center">
                      <img
                        src={cert.badge}
                        alt={`${cert.name} badge`}
                        className="w-12 h-12 object-contain"
                      />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-bold text-cream-100 mb-1">
                        {cert.name}
                      </h4>
                      <p className="text-gold-400 font-medium mb-1">
                        {cert.issuer}
                      </p>
                      <p className="text-cream-400 text-sm">
                        Issued: {cert.date}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Learning Progress */}
            <div className="bg-gray-800 border border-gray-700 rounded-2xl p-6">
              <h4 className="text-lg font-bold mb-4 text-center text-cream-100">Continuous Learning</h4>
              <div className="space-y-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-gold-400 mb-1">
                    Currently Pursuing
                  </div>
                  <p className="text-cream-300 text-sm">
                    Advanced n8n Automation Patterns
                  </p>
                </div>
                
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div>
                    <div className="text-lg font-bold text-burgundy-500">
                      Next Goal
                    </div>
                    <p className="text-cream-300 text-sm">
                      AWS Solutions Architect
                    </p>
                  </div>
                  <div>
                    <div className="text-lg font-bold text-gold-400">
                      Learning Focus
                    </div>
                    <p className="text-cream-300 text-sm">
                      AI Integration
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Academic Excellence */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-gold-400/10 to-burgundy-500/10 border border-gold-400/30 rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-4 text-gold-400">Academic Excellence Meets Real-World Impact</h3>
            <p className="text-lg text-cream-200 mb-6 max-w-3xl mx-auto">
              My academic foundation in AI & Data Science at IIT Guwahati, combined with hands-on experience and industry certifications, 
              enables me to bridge theoretical knowledge with practical automation solutions.
            </p>
            <div className="grid md:grid-cols-3 gap-6 max-w-2xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold mb-2 text-gold-400">8.3/10</div>
                <div className="text-sm text-cream-300">Academic GPA</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-2 text-burgundy-500">3+</div>
                <div className="text-sm text-cream-300">Certifications</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-2 text-gold-400">50+</div>
                <div className="text-sm text-cream-300">Projects Completed</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Education