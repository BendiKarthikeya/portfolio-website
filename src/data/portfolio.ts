export const personalInfo = {
  name: "Karthikeya Bendi",
  title: "n8n Automation Specialist & Full-Stack Developer",
  email: "karthikeyabendi05@gmail.com",
  phone: "+91-94913XXXX",
  location: "India",
  tagline: "Transforming business processes through intelligent automation",
  bio: "Hi, I'm Karthikeya - an AI and automation enthusiast passionate about building solutions that save time and help businesses scale efficiently. I am currently pursuing a B.Sc. (Hons.) in Artificial Intelligence and Data Science at IIT Guwahati, where I've developed a strong foundation in programming, web development, and data-driven problem solving.",
  avatar: "/Images/karthikeya_crop.jpg",
  resume: "/Resume_Karthikeya.pdf",
  experience: "Over the past year, I have designed and implemented more than 50 custom automations in n8n, collectively saving over 200 hours of manual work every week. My journey includes working as an n8n Specialist Intern at Advait, where I focused on scalable automation solutions, and now collaborating with TenderSeal, Dubai, as a freelance n8n Specialist. At TenderSeal, I build intelligent workflows, seamless API integrations, and optimized processes that streamline operations and support business growth."
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
    title: "AI Voice Agent Automation",
    description: "Intelligent voice-based automation system with LLM integration for interactive communication and task execution.",
    technologies: ["n8n", "OpenAI API", "Webhook", "HTTP Request", "Twilio", "Speech Processing"],
    features: [
      "Voice-triggered workflow execution",
      "Natural language understanding with LLM",
      "Multi-step conversation handling",
      "Real-time voice response generation",
      "Integration with multiple AI models (Basic LLM Chain)",
      "Structured output parsing for actions",
      "Webhook-based event handling",
      "Automated response routing"
    ],
    impact: "Enabled hands-free automation control, reducing manual intervention by 70%",
    image: "/Images/Voice Agent.png",
    workflow: {
      trigger: "Voice Webhook",
      steps: ["Voice Input", "LLM Processing", "Action Execution", "Voice Response"],
      integrations: 5
    },
    category: "AI Integration"
  },
  {
    id: 2,
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
    id: 3,
    title: "Workflow Automation & System Prompt Generator",
    description: "Meta-automation system for creating, duplicating, and optimizing n8n workflows with AI-powered prompt generation.",
    technologies: ["n8n", "n8n API", "OpenAI API", "Webhook", "Code Nodes", "Filtering", "Mapping"],
    features: [
      "Automated workflow duplication via n8n API",
      "Dynamic workflow retrieval and filtering",
      "AI-powered system prompt generation",
      "Custom prompt templates for different use cases",
      "Workflow mapping and object transformation",
      "Bulk workflow creation capabilities",
      "Version control for automation workflows",
      "Template library management"
    ],
    impact: "Reduced workflow creation time by 80%, standardized 50+ automation templates",
    image: "/Images/System Prompt Generation.png",
    additionalImages: ["/Images/Duplicate Workflow.png"],
    workflow: {
      trigger: "Webhook",
      steps: ["Workflow Fetch", "Filtering", "Prompt Generation", "Workflow Creation"],
      integrations: 4
    },
    category: "Business Process"
  },
  {
    id: 4,
    title: "Advanced Mail Management System",
    description: "Comprehensive email monitoring and automation system with intelligent reply detection and multi-step follow-ups.",
    technologies: ["n8n", "Gmail API", "IMAP", "Google Sheets", "Filtering Logic", "Code Nodes"],
    features: [
      "Automated daily mail checking across multiple accounts",
      "Intelligent reply detection and categorization",
      "Multi-threaded conversation tracking",
      "Data filtering and deduplication",
      "Automated status updates in Google Sheets",
      "Scheduled follow-up sequences",
      "Custom code for complex email parsing",
      "Real-time notification system"
    ],
    impact: "Managed 500+ emails daily with 95% accuracy in categorization",
    image: "/Images/Multi Mail.png",
    additionalImages: ["/Images/Mail Check.png"],
    workflow: {
      trigger: "Daily Schedule",
      steps: ["Email Fetch", "Reply Detection", "Data Processing", "Sheet Update"],
      integrations: 7
    },
    category: "Business Process"
  } ,
   {
    id: 5,
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
    id: 6,
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
  },
  {
    id: 7,
    title: "Certificate Generation & Distribution System",
    description: "Automated certificate creation and delivery system with Google Sheets integration and personalized PDF generation.",
    technologies: ["n8n", "Google Sheets", "PDF API", "Loop Over Items", "HTTP Request", "Gmail API"],
    features: [
      "Bulk certificate generation from Google Sheets data",
      "Dynamic PDF creation with custom templates",
      "Personalized content for each recipient",
      "Automated email distribution with attachments",
      "Loop-based processing for multiple recipients",
      "Error handling and retry logic",
      "Delivery status tracking in sheets",
      "Template customization support"
    ],
    impact: "Generated and distributed 1000+ certificates automatically, saving 20+ hours per event",
    image: "/Images/Certificate Workflow.png",

    workflow: {
      trigger: "Manual/Webhook",
      steps: ["Data Fetch", "Certificate Generation", "PDF Creation", "Email Distribution"],
      integrations: 5
    },
    category: "Education"
  },
  

  {
    id: 8,
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
    
    { name: "C++", icon: "⚙️", level: "Intermediate" },
    { name: "Java", icon: "☕", level: "Basic" },
    { name: "Python", icon: "🐍", level: "Basic" },
    { name: "C Programming", icon: "🔧", level: "Basic" }
  ],
  webDev: [
    { name: "HTML", icon: "🌐", level: "Intermediate" },
    { name: "CSS", icon: "🎨", level: "Intermediate" },
    { name: "JavaScript", icon: "🟨", level: "Intermediate" },
    { name: "React.js", icon: "⚛️" },
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
  ],
  design: [
    { name: "UI/UX Design", icon: "🎨", level: "Basic" },
    { name: "Graphic Design", icon: "🖌️", level: "Basic" }
  ],
  tools: [
    { name: "Git", icon: "📝" },
    { name: "AWS", icon: "☁️" },
    { name: "Apify", icon: "🕷️" }
  ]
}

export const projects = [
  {
    id: 1,
    title: "Personal Portfolio Website",
    description: "Modern, responsive portfolio website built with Next.js and Tailwind CSS showcasing my automation expertise and projects.",
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Framer Motion", "Vercel"],
    github: "https://github.com/BendiKarthikeya/portfolio-website",
    live: "https://karthikeyabendi05.vercel.app",
    image: "/Images/Portfolio.png",
    features: [
      "Modern responsive design",
      "Dark/Light theme support",
      "Smooth animations with Framer Motion",
      "SEO optimized",
      "Fast loading performance",
      "Mobile-first approach",
      "Interactive project showcases"
    ]
  },
  {
    id: 2,
    title: "Business Data Analysis & Chatbot Automation",
    description: "Complete data analysis pipeline with AI-powered insights and interactive chatbot for business intelligence.",
    technologies: ["n8n", "AWS", "OpenAI API", "Webhook", "Google Drive"],
    github: "https://github.com/BendiKarthikeya",
    live: "https://karthikeyabendi.vercel.app/n8n-portfolio",
    image: "/Images/Project_bussines_analyst -1.png",
    features: [
      "Dataset upload via website (Webhook)",
      "Data cleaning & storage (AWS)",
      "AI insights & graphs (OpenAI API)",
      "Business improvement suggestions",
      "Reusable cleaned data for analysis",
      "Interactive chatbot for Q&A on uploaded data",
      "Seamless website + n8n integration"
    ]
  },
  {
    id: 3,
    title: "Daily Thought Mail Automation",
    description: "Automated daily email system for educational institutions with personalized content and tracking.",
    technologies: ["n8n", "Google Drive", "Google Sheets", "Gmail API", "Image Processing"],
    github: "https://github.com/BendiKarthikeya",
    live: "https://karthikeyabendi.vercel.app/n8n-portfolio",
    image: "/Images/daily thought.png",
    features: [
      "Daily email to all students (thought/fact of the day)",
      "Auto-fetch image from Google Drive",
      "Update Google Sheet to track used images",
      "Avoid duplicate content",
      "Custom recognition for student suggestions",
      "Personalized greetings",
      "Error handling for missing data"
    ]
  },
  {
    id: 4,
    title: "Business Platform Automation",
    description: "End-to-end business process automation for trading platform with multi-database integration.",
    technologies: ["n8n", "PDF API", "Multiple Databases", "Email API", "Payment Systems"],
    github: "https://github.com/BendiKarthikeya",
    live: "https://karthikeyabendi.vercel.app/n8n-portfolio",
    image: "/Images/work-1.png",
    features: [
      "Traders, buyers, sellers workflows",
      "Auto emails to admins/users",
      "PDF generation with API Templates",
      "Send PDFs in multiple formats",
      "Background process updates",
      "Daily payment reminders",
      "End-to-end process automation"
    ]
  },
  {
    id: 5,
    title: "Restaurant Lead Generation & Mail Automation",
    description: "Comprehensive lead generation and email marketing automation for restaurant industry.",
    technologies: ["n8n", "Apify", "Google Maps API", "Google Sheets", "Gmail/IMAP"],
    github: "https://github.com/BendiKarthikeya",
    live: "https://karthikeyabendi.vercel.app/n8n-portfolio",
    image: "/Images/mail automation.png",
    features: [
      "Restaurant leads scraping via Apify (Google Maps)",
      "Email-based deduplication and smart filtering",
      "Auto-store clean leads into Google Sheets",
      "Personalized email outreach to each lead",
      "Scheduled follow-ups with reply detection",
      "Fully automated multi-step email flow",
      "Gmail/IMAP integration for inbox monitoring"
    ]
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
    name: "Generative AI Primer",
    issuer: "Coursera",
    date: "2024",
    badge: "/Images/coursera.png"
  },
  {
    name: "Infographic in Canva",
    issuer: "Canva",
    date: "2024",
    badge: "/Images/canva.jpg"
  },
  {
    name: "Trustworthy Generative AI",
    issuer: "Coursera",
    date: "2024",
    badge: "/Images/coursera.png"
  },
  {
    name: "Introduction to Generative AI",
    issuer: "Coursera",
    date: "2024",
    badge: "/Images/coursera.png"
  },
  {
    name: "Create a Promotional Video using Canva",
    issuer: "Canva",
    date: "2024",
    badge: "/Images/canva.jpg"
  }
]


export const achievements = [
  "Built 50+ automation workflows saving 200+ hours weekly",
  "Increased client productivity by average 65% through automation",
  "Contributed to open-source n8n community projects",
  "Mentored 20+ developers in workflow automation"
]
