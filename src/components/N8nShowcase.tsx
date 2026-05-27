'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight, Clock, Users, TrendingUp, Workflow, Zap, Database, Bot, Mail, FileText, Target, X, ExternalLink, ChevronRight } from 'lucide-react'
import { n8nProjects } from '@/data/portfolio'
import { useState } from 'react'

const NEW_PROJECT_IDS = [11, 12, 13, 14]

type Project = (typeof n8nProjects)[number]

const categoryIcons: Record<string, React.ReactNode> = {
  "Data Analysis": <Bot className="w-4 h-4" />,
  "Education": <FileText className="w-4 h-4" />,
  "Business Process": <Target className="w-4 h-4" />,
  "Lead Generation": <Mail className="w-4 h-4" />,
  "AI Integration": <Bot className="w-4 h-4" />,
}

const categoryColors: Record<string, string> = {
  "Data Analysis": "text-purple-300 bg-purple-400/10 border-purple-400/30",
  "Education": "text-blue-300 bg-blue-400/10 border-blue-400/30",
  "Business Process": "text-emerald-300 bg-emerald-400/10 border-emerald-400/30",
  "Lead Generation": "text-gold-400 bg-gold-400/10 border-gold-400/30",
  "AI Integration": "text-rose-300 bg-rose-400/10 border-rose-400/30",
}

function ProjectCard({ project, onClick }: { project: Project; onClick: () => void }) {
  const catColor = categoryColors[project.category] ?? "text-gold-400 bg-gold-400/10 border-gold-400/30"
  const catIcon = categoryIcons[project.category]

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -4 }}
      onClick={onClick}
      className="group cursor-pointer bg-gray-900/60 border border-white/10 hover:border-gold-400/40 rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-gold-400/5 flex flex-col"
    >
      {/* Image */}
      <div className="relative overflow-hidden h-44 flex-shrink-0">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent" />
        <span className={`absolute top-3 left-3 flex items-center gap-1 text-xs font-medium px-2.5 py-1 rounded-full border backdrop-blur-sm ${catColor}`}>
          {catIcon}
          {project.category}
        </span>
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col flex-1">
        <h3 className="text-base font-bold text-cream-100 mb-2 line-clamp-2 group-hover:text-gold-400 transition-colors duration-200">
          {project.title}
        </h3>
        <p className="text-cream-400 text-sm leading-relaxed line-clamp-3 flex-1">
          {project.description}
        </p>

        {/* Tech pills - first 3 */}
        <div className="flex flex-wrap gap-1.5 mt-4">
          {project.technologies.slice(0, 3).map((t) => (
            <span key={t} className="text-xs px-2 py-0.5 bg-gray-800 border border-white/10 text-cream-300 rounded-full">
              {t}
            </span>
          ))}
          {project.technologies.length > 3 && (
            <span className="text-xs px-2 py-0.5 text-cream-400 rounded-full">
              +{project.technologies.length - 3}
            </span>
          )}
        </div>

        <div className="flex items-center justify-between mt-4 pt-3 border-t border-white/10">
          <span className="text-xs text-cream-400">{project.workflow.integrations} integrations</span>
          <span className="text-xs text-gold-400 font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
            View details <ChevronRight className="w-3 h-3" />
          </span>
        </div>
      </div>
    </motion.div>
  )
}

function ProjectModal({ project, onClose, onImageClick }: { project: Project; onClose: () => void; onImageClick: (src: string) => void }) {
  const catColor = categoryColors[project.category] ?? "text-gold-400 bg-gold-400/10 border-gold-400/30"
  const catIcon = categoryIcons[project.category]

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.9, opacity: 0, y: 20 }}
        transition={{ type: 'spring', stiffness: 280, damping: 28 }}
        className="relative bg-gray-900 border border-white/10 rounded-2xl max-w-3xl w-full max-h-[88vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 bg-gray-800/80 hover:bg-gray-700 rounded-full transition-colors z-10"
        >
          <X className="w-5 h-5 text-cream-200" />
        </button>

        {/* Hero image */}
        <div className="relative h-56 overflow-hidden rounded-t-2xl">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover cursor-zoom-in"
            onClick={() => onImageClick(project.image)}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent" />
          <span className={`absolute top-4 left-4 flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded-full border backdrop-blur-sm ${catColor}`}>
            {catIcon}
            {project.category}
          </span>
        </div>

        <div className="p-6 space-y-6">
          <div>
            <h2 className="text-2xl font-bold text-cream-100 mb-2">{project.title}</h2>
            <p className="text-cream-300 leading-relaxed">{project.description}</p>
          </div>

          {/* Metrics row */}
          <div className="grid grid-cols-3 gap-3">
            <div className="text-center p-3 bg-gray-800/60 border border-white/10 rounded-xl">
              <div className="text-2xl font-bold text-gold-400">{project.workflow.steps.length}</div>
              <div className="text-xs text-cream-400 mt-0.5">Steps</div>
            </div>
            <div className="text-center p-3 bg-gray-800/60 border border-white/10 rounded-xl">
              <div className="text-2xl font-bold text-burgundy-500">{project.workflow.integrations}</div>
              <div className="text-xs text-cream-400 mt-0.5">Integrations</div>
            </div>
            <div className="text-center p-3 bg-gray-800/60 border border-white/10 rounded-xl">
              <Database className="w-5 h-5 text-gold-400 mx-auto mb-0.5" />
              <div className="text-xs text-cream-400">Automated</div>
            </div>
          </div>

          {/* Workflow steps */}
          <div className="bg-gray-800/40 border border-white/10 rounded-xl p-4">
            <h4 className="text-xs font-semibold tracking-widest uppercase text-gold-400 mb-3">
              Trigger: {project.workflow.trigger}
            </h4>
            <div className="flex flex-wrap items-center gap-2">
              {project.workflow.steps.map((step, i) => (
                <div key={i} className="flex items-center gap-2">
                  <div className="flex items-center gap-2 bg-gold-400/10 border border-gold-400/20 rounded-full px-3 py-1.5">
                    <span className="w-4 h-4 bg-gold-400/20 rounded-full text-xs text-gold-400 font-bold flex items-center justify-center flex-shrink-0">{i + 1}</span>
                    <span className="text-cream-200 text-xs">{step}</span>
                  </div>
                  {i < project.workflow.steps.length - 1 && <ChevronRight className="w-4 h-4 text-gray-600 flex-shrink-0" />}
                </div>
              ))}
            </div>
          </div>

          {/* Features */}
          <div>
            <h4 className="text-sm font-semibold text-gold-400 mb-3 flex items-center gap-2">
              <Zap className="w-4 h-4" /> Key Features
            </h4>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {project.features.map((f, i) => (
                <li key={i} className="flex items-start gap-2 text-cream-300 text-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold-400 mt-1.5 flex-shrink-0" />
                  {f}
                </li>
              ))}
            </ul>
          </div>

          {/* Technologies */}
          <div>
            <h4 className="text-sm font-semibold text-gold-400 mb-3">Technologies</h4>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((t) => (
                <span key={t} className="text-xs px-3 py-1.5 bg-gray-800 border border-white/10 text-cream-200 rounded-full">
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Impact */}
          <div className="bg-gradient-to-r from-gold-400/10 to-burgundy-500/10 border border-gold-400/25 rounded-xl p-4">
            <div className="flex items-center gap-2 mb-1.5">
              <TrendingUp className="w-4 h-4 text-gold-400" />
              <span className="text-sm font-semibold text-gold-400">Business Impact</span>
            </div>
            <p className="text-cream-200 text-sm">{project.impact}</p>
          </div>

          {/* Additional images */}
          {'additionalImages' in project && Array.isArray((project as any).additionalImages) && (project as any).additionalImages.length > 0 && (
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              {(project as any).additionalImages.slice(0, 4).map((img: string, i: number) => (
                <img
                  key={i}
                  src={img}
                  alt={`${project.title} view ${i + 2}`}
                  className="w-full h-20 object-cover rounded-lg cursor-zoom-in border border-white/10 hover:border-gold-400/40 transition-colors"
                  onClick={() => onImageClick(img)}
                />
              ))}
            </div>
          )}

          {/* Live demo */}
          {'live' in project && (project as any).live && (
            <a
              href={(project as any).live}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-gold-400 text-gray-900 px-5 py-2.5 rounded-lg text-sm font-semibold hover:bg-gold-500 transition-colors"
            >
              View Live Demo <ExternalLink className="w-4 h-4 ml-2" />
            </a>
          )}
        </div>
      </motion.div>
    </motion.div>
  )
}

const N8nShowcase = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  const orderedProjects = [
    ...n8nProjects.filter((p) => NEW_PROJECT_IDS.includes(p.id)),
    ...n8nProjects.filter((p) => !NEW_PROJECT_IDS.includes(p.id)),
  ]

  const stats = [
    { icon: <Workflow className="w-6 h-6" />, value: "50+", label: "n8n Workflows Built", color: "text-gold-400" },
    { icon: <Clock className="w-6 h-6" />, value: "30+", label: "Different Nodes Used", color: "text-burgundy-500" },
    { icon: <Users className="w-6 h-6" />, value: "25+", label: "Organizations Helped", color: "text-gold-400" },
    { icon: <TrendingUp className="w-6 h-6" />, value: "90%", label: "Process Efficiency", color: "text-burgundy-500" },
  ]

  return (
    <section id="n8n-showcase" className="section-padding bg-transparent">
      <div className="container-custom">

        {/* Full image modal */}
        <AnimatePresence>
          {selectedImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[60] flex items-center justify-center bg-black/95 backdrop-blur-sm p-4"
              onClick={() => setSelectedImage(null)}
            >
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 p-2 bg-gray-800/60 hover:bg-gray-700 rounded-full transition-colors"
              >
                <X className="w-6 h-6 text-cream-100" />
              </button>
              <motion.img
                initial={{ scale: 0.85, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.85, opacity: 0 }}
                src={selectedImage}
                alt="Enlarged view"
                className="max-w-5xl max-h-[90vh] w-full h-auto rounded-xl shadow-2xl object-contain"
                onClick={(e) => e.stopPropagation()}
              />
            </motion.div>
          )}
        </AnimatePresence>

        {/* Project detail modal */}
        <AnimatePresence>
          {selectedProject && (
            <ProjectModal
              project={selectedProject}
              onClose={() => setSelectedProject(null)}
              onImageClick={(src) => setSelectedImage(src)}
            />
          )}
        </AnimatePresence>

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
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="text-center"
            >
              <div className="flex items-center justify-center mb-3">
                <div className="p-3 bg-gradient-to-br from-gold-400/20 to-burgundy-500/20 border border-gold-400/30 rounded-full">
                  <div className="text-gold-400">{stat.icon}</div>
                </div>
              </div>
              <div className={`text-3xl font-bold ${stat.color} mb-1`}>{stat.value}</div>
              <div className="text-sm text-cream-300">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Projects grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {orderedProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onClick={() => setSelectedProject(project)}
            />
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
