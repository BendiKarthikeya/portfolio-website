export const personalInfo = {
  name: "Karthikeya Bendi",
  title: "n8n Automation Specialist & Full-Stack Developer",
  email: "karthikeyabendi05@gmail.com",
  phone: "+91-94913XXXX",
  location: "India",
  tagline: "Transforming business processes through intelligent automation",
  bio: "I'm currently pursuing a B.Sc. (Hons.) in Artificial Intelligence and Data Science at IIT Guwahati, with a solid foundation in programming, web development, and data-driven problem-solving. I specialize in automation using n8n, with experience designing and maintaining 50+ custom workflows that have saved over 200 hours of manual work per week. At Advait, I work as an n8n Specialist, creating API integrations and automations that streamline business operations across CRM, document systems, reporting, and compliance. I collaborate with cross-functional teams to identify automation opportunities and build scalable, maintainable solutions that align with business goals. ",
  avatar: "/Images/karthikeya_crop.jpg",
  resume: "/resume.pdf",
  experience: "n8n Specialist at Advait - I design and implement custom workflows, API integrations, and process automations to help businesses operate more efficiently and at scale. Working remotely with cross-functional teams, I identify opportunities for automation, optimize existing processes, and ensure that solutions are well-documented, maintainable, and aligned with business objectives."
}

export const socialLinks = {
  github: "https://github.com/BendiKarthikeya",
  linkedin: "https://www.linkedin.com/in/karthikeyabendi/",
  leetcode: "https://leetcode.com/u/karthikeyabendi05/",
  portfolio: "https://karthikeyabendi.vercel.app",
  blog: "https://karthikeya07.hashnode.dev",
  codeforces: "https://codeforces.com/profile/B.karthikeya",
  codechef: "https://www.codechef.com/users/karthikeya070",
  hackerrank: "https://www.hackerrank.com/profile/Karthikeya07"
}

export const n8nProjects = [
  {
    id: 1,
    title: "Business Data Analysis & Chatbot Automation",
    description: "Complete data analysis pipeline with AI-powered insights and interactive chatbot for business intelligence.",
    technologies: ["n8n", "AWS", "OpenAI API", "Webhook", "Google Drive"],
    features: [
      "Dataset upload via website (Webhook)",
      "Data cleaning & storage (AWS)",
      "Insights & graphs (OpenAI API)",
      "Business improvement suggestions",
      "Reusable cleaned data for analysis",
      "Chatbot for Q&A on uploaded data",
      "Website + n8n integration"
    ],
    impact: "Automated entire data analysis workflow, reducing analysis time by 85%",
    image: "/Images/Project_bussines_analyst -1.png",
    workflow: {
      trigger: "Website Webhook",
      steps: ["Data Upload", "AWS Processing", "AI Analysis", "Chatbot Integration"],
      integrations: 6
    },
    category: "Data Analysis"
  },
  {
    id: 2,
    title: "Daily Thought Mail Automation",
    description: "Automated daily email system for educational institutions with personalized content and tracking.",
    technologies: ["n8n", "Google Drive", "Google Sheets", "Gmail API", "Image Processing"],
    features: [
      "Daily email to all students (thought/fact of the day)",
      "Auto-fetch image from Google Drive",
      "Update Google Sheet to track used images",
      "Avoid duplicate content",
      "Custom email: recognize students who suggested thoughts/facts",
      "Personalized greetings",
      "Error handling for missing data",
      "n8n integration in college"
    ],
    impact: "Automated daily communication to 500+ students, saving 2 hours daily",
    image: "/Images/daily thought.png",
    workflow: {
      trigger: "Daily Schedule",
      steps: ["Content Selection", "Image Fetch", "Email Generation", "Tracking Update"],
      integrations: 4
    },
    category: "Education"
  },
  {
    id: 3,
    title: "Business Platform Automation (n8n)",
    description: "End-to-end business process automation for trading platform with multi-database integration.",
    technologies: ["n8n", "PDF API", "Multiple Databases", "Email API", "Payment Systems"],
    features: [
      "Traders, buyers, sellers workflows",
      "Auto emails to admins/users",
      "PDF generation (API Template)",
      "Send PDFs in different formats",
      "Background updates",
      "Daily payment reminders",
      "End-to-end process automation",
      "Working with multiple databases",
      "Website + n8n integration"
    ],
    impact: "Streamlined entire business operations, reducing manual work by 90%",
    image: "/Images/work-1.png",
    additionalImages: ["/Images/work-2.png", "/Images/work-3.png", "/Images/work-4.png", "/Images/work-5.png"],
    workflow: {
      trigger: "Business Events",
      steps: ["Workflow Processing", "PDF Generation", "Email Automation", "Payment Tracking"],
      integrations: 8
    },
    category: "Business Process"
  },
  {
    id: 4,
    title: "Restaurant Lead Generation & Mail Automation",
    description: "Comprehensive lead generation and email marketing automation for restaurant industry.",
    technologies: ["n8n", "Apify", "Google Maps API", "Google Sheets", "Gmail/IMAP"],
    features: [
      "Restaurant leads scraping via Apify (Google Maps API)",
      "Email-based deduplication and smart filtering",
      "Auto-store clean leads into Google Sheets",
      "Personalized email outreach to each lead",
      "Scheduled follow-ups with reply detection logic",
      "Fully automated, adjustable multi-step email flow",
      "Gmail/IMAP integration for inbox monitoring",
      "Workflow logs and lead tracking in sheets"
    ],
    impact: "Generated 1000+ qualified leads monthly with 25% response rate",
    image: "/Images/mail automation.png",
    additionalImages: ["/Images/mail automation-2.png"],
    workflow: {
      trigger: "Scheduled Scraping",
      steps: ["Lead Scraping", "Data Cleaning", "Email Outreach", "Response Tracking"],
      integrations: 6
    },
    category: "Lead Generation"
  }
]

export const skills = {
  n8nSpecialist: [
    { name: "n8n Workflow Design", icon: "🔄" },
    { name: "API Integrations", icon: "🔗" },
    { name: "Database Automation", icon: "🗄️" },
    { name: "Email Automation", icon: "📧" },
    { name: "Webhook Management", icon: "🎣" },
    { name: "Error Handling", icon: "🛠️" },
    { name: "Process Optimization", icon: "⚡" },
    { name: "Custom Functions", icon: "⚙️" }
  ],
  programming: [
    { name: "HTML", icon: "🌐", level: "Intermediate" },
    { name: "CSS", icon: "🎨", level: "Intermediate" },
    { name: "C++", icon: "⚙️", level: "Intermediate" },
    { name: "Java", icon: "☕", level: "Basic" },
    { name: "JavaScript", icon: "🟨", level: "Basic" },
    { name: "Python", icon: "🐍", level: "Basic" },
    { name: "C Programming", icon: "🔧", level: "Basic" }
  ],
  webDev: [
    { name: "React.js", icon: "⚛️" },
    { name: "Next.js", icon: "▲" },
    { name: "Express.js", icon: "🚀" },
    { name: "Tailwind CSS", icon: "🎨" }
  ],
  dataScience: [
    { name: "SQL", icon: "🗄️", level: "Basic" },
    { name: "Power BI", icon: "📊", level: "Basic" },
    { name: "Data Analysis in Excel", icon: "📈", level: "Basic" },
    { name: "Pandas", icon: "🐼", level: "Basic" }
  ],
  automation: [
    { name: "Zapier", icon: "⚡" },
    { name: "Make (Integromat)", icon: "🔧" },
    { name: "Microsoft Power Automate", icon: "🔋" },
    { name: "IFTTT", icon: "🔀" }
  ],
  design: [
    { name: "UI/UX Design", icon: "🎨", level: "Basic" },
    { name: "Graphic Design", icon: "🖌️", level: "Basic" }
  ],
  tools: [
    { name: "Git", icon: "📝" },
    { name: "AWS", icon: "☁️" },
    { name: "Postman", icon: "📮" },
    { name: "Apify", icon: "🕷️" }
  ]
}

export const projects = [
  {
    id: 1,
    title: "AI-Powered Task Management System",
    description: "Full-stack application with AI-driven task prioritization and automated workflow management.",
    technologies: ["React", "Node.js", "MongoDB", "OpenAI API", "n8n"],
    github: "https://github.com/karthikeyabendi/ai-task-manager",
    live: "https://ai-task-manager.vercel.app",
    image: "/api/placeholder/600/400",
    features: ["AI task prioritization", "Automated notifications", "Team collaboration", "Analytics dashboard"]
  },
  {
    id: 2,
    title: "E-commerce Analytics Dashboard",
    description: "Real-time analytics dashboard for e-commerce businesses with automated reporting.",
    technologies: ["Next.js", "TypeScript", "PostgreSQL", "Chart.js", "n8n"],
    github: "https://github.com/karthikeyabendi/ecommerce-analytics",
    live: "https://ecommerce-analytics.vercel.app",
    image: "/api/placeholder/600/400",
    features: ["Real-time metrics", "Automated reports", "Custom dashboards", "API integrations"]
  },
  {
    id: 3,
    title: "Automated Content Management System",
    description: "CMS with automated content generation, SEO optimization, and multi-platform publishing.",
    technologies: ["React", "Express.js", "MongoDB", "OpenAI API", "n8n"],
    github: "https://github.com/karthikeyabendi/auto-cms",
    live: "https://auto-cms.vercel.app",
    image: "/api/placeholder/600/400",
    features: ["AI content generation", "SEO optimization", "Multi-platform publishing", "Workflow automation"]
  }
]

export const education = [
  {
    degree: "B.Sc Honours in AI and DS",
    institution: "Indian Institute of Technology Guwahati",
    year: "2023 - Present",
    achievements: [
      "Achieved a GPA of 8.31 in the second trimester",
      "Secured a GPA of 8.23 in the third trimester"
    ],
    level: "undergraduate"
  },
  {
    degree: "Board of Intermediate Education",
    institution: "Sri Venkateswara Classes",
    year: "2021 - 2023",
    grade: "91.6%",
    achievements: [
      "Scored 91.6% in Board Exams",
      "Secured a 94.63 percentile in the Joint Entrance Examination (JEE Mains)"
    ],
    level: "intermediate"
  },
  {
    degree: "Board of Secondary Education",
    institution: "J Y High School",
    year: "2021",
    grade: "98.67%",
    achievements: [
      "Achieved 98.67% in Board Exams",
      "Achieved qualification for the National Standard Examination in Junior Science (NSEJS), a highly competitive exam with only 300 students selected from across India",
      "Advanced to the INJSO (Indian National Junior Science Olympiad) stage"
    ],
    level: "secondary"
  }
]

export const certifications = [
  {
    name: "n8n Certified Automation Specialist",
    issuer: "n8n",
    date: "2024",
    badge: "/api/placeholder/100/100"
  },
  {
    name: "AWS Cloud Practitioner",
    issuer: "Amazon Web Services",
    date: "2024",
    badge: "/api/placeholder/100/100"
  },
  {
    name: "Google Analytics Certified",
    issuer: "Google",
    date: "2023",
    badge: "/api/placeholder/100/100"
  }
]

export const achievements = [
  "Built 50+ automation workflows saving 200+ hours weekly",
  "Increased client productivity by average 65% through automation",
  "Contributed to open-source n8n community projects",
  "Mentored 20+ developers in workflow automation"
]
