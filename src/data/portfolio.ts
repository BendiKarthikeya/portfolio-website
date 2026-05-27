export const personalInfo = {
  name: "Karthikeya Bendi",
  title: "Exploring AI, Building Products | Full Stack Dev & Automation | Founder @ GoAutomate",
  email: "karthikeyabendi05@gmail.com",
  phone: "+91-94913XXXX",
  location: "Bengaluru, India",
  tagline: "Building production-grade applications and intelligent automation workflows",
  bio: "Hi, I'm Karthikeya - an AI & Full Stack Developer and Automation Specialist with expertise in building production-grade applications and intelligent workflows. I integrate LLMs, Voice AI, and WhatsApp APIs into real-world systems, and have deep hands-on knowledge of n8n for end-to-end business automation. I'm currently pursuing a B.Sc. (Hons.) in Computer Science and Artificial Intelligence at IIT Guwahati. Passionate about exploring AI tools daily and understanding where to apply which model or platform for the best outcome.",
  avatar: "/Images/karthikeya_crop.jpg",
  resume: "/Bendi_Karthikeya_Resume.pdf",
  experience: "I'm the Founder & CEO of GoAutomate, helping businesses scale faster by eliminating manual work through intelligent n8n workflows, AI agents, and API integrations, and Co-Founder of XimVerse (Bengaluru). As a Full Stack Generative AI developer at FIT - First Information Technology (Muscat), I build production-grade apps from scratch with React, TypeScript, Node.js, Express and PostgreSQL - integrating Voice AI (VAPI), WhatsApp Business API, and LLM APIs, with RBAC, OAuth-based CRM integrations, and real-time analytics dashboards. Alongside this I've worked as Automation Manager at Cervoa (Noida) and Automation Developer at MyAibo, and as an n8n Specialist for TenderSeal (UK) and Advait - designing end-to-end automation systems, integrating APIs and databases, and optimizing API usage to cut operational cost and manual workload by up to 90%."
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
    title: "Reddit Content Seeding & Community Management",
    description: "Automated Reddit content seeding system for MyAibo with intelligent post scheduling, community engagement, and brand visibility management across multiple subreddits.",
    technologies: ["n8n", "Reddit API", "Google Sheets", "OpenAI API", "Webhook", "Scheduling"],
    features: [
      "Automated content posting across targeted subreddits",
      "AI-powered content generation and optimization",
      "Community engagement tracking and analytics",
      "Smart scheduling to optimize post timing",
      "Subreddit research and targeting automation",
      "Reply monitoring and auto-response system",
      "Brand mention tracking and sentiment analysis",
      "Content performance metrics and reporting",
      "Multi-account management capabilities",
      "Compliance with Reddit's posting guidelines"
    ],
    impact: "Increased brand visibility by 300%, managed 50+ posts weekly with 40% engagement rate",
    image: "/Images/Reddit.png",
    workflow: {
      trigger: "Scheduled/Webhook",
      steps: ["Content Generation", "Subreddit Selection", "Post Scheduling", "Engagement Tracking"],
      integrations: 6
    },
    category: "Lead Generation"
  },
  {
    id: 2,
    title: "Reddit Community Search & Lead Discovery",
    description: "Advanced Reddit community search and lead generation system that identifies relevant subreddits, analyzes engagement patterns, and discovers potential leads for targeted outreach.",
    technologies: ["n8n", "Reddit API", "Google Sheets", "Data Analysis", "Filtering Logic", "Webhook"],
    features: [
      "Automated subreddit discovery based on keywords",
      "Community size and engagement analysis",
      "Lead identification from post comments",
      "Sentiment analysis of discussions",
      "Member activity tracking and scoring",
      "Export qualified leads to Google Sheets",
      "Real-time notification for high-value opportunities",
      "Competitor mention tracking",
      "Trend analysis across communities",
      "Custom filtering based on engagement metrics"
    ],
    impact: "Discovered 1000+ qualified leads monthly, identified 200+ high-potential communities",
    image: "/Images/ReditCommunitySearch.png",
    workflow: {
      trigger: "Scheduled Search",
      steps: ["Keyword Search", "Community Analysis", "Lead Extraction", "Data Export"],
      integrations: 5
    },
    category: "Lead Generation"
  },
  {
    id: 3,
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
    id: 4,
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
    id: 5,
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
    id: 6,
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
    id: 7,
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
    id: 8,
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
    id: 9,
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
    id: 10,
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
    id: 11,
    title: "Brand Intelligence - Multi-Platform Lead Intelligence",
    description: "Multi-platform social listening and lead-intelligence system that monitors Reddit, Quora, X (Twitter) and Threads to surface relevant conversations and qualified leads in real time, with a dedicated web dashboard.",
    technologies: ["n8n", "SerpAPI", "Reddit API", "X (Twitter) API", "Threads API", "Google Sheets", "Webhook"],
    features: [
      "Cross-platform monitoring of Reddit, Quora, X and Threads",
      "Keyword and intent-based lead discovery via SerpAPI",
      "Batch processing with rate-limit handling (Split in Batches + Wait)",
      "Automated logging of leads and mentions to Google Sheets",
      "Webhook-triggered, on-demand intelligence runs",
      "SerpAPI credit monitoring to control API spend",
      "Deduplication and filtering of captured results",
      "Dedicated web dashboard for browsing captured intelligence"
    ],
    impact: "Unified lead discovery across 4+ platforms, automating thousands of social mentions into a single qualified-lead pipeline",
    image: "/Images/Intelligence_reddit.png",
    additionalImages: ["/Images/Intelligence_Quora.png", "/Images/Intelligence_X.png"],
    live: "https://socialintelligence-psi.vercel.app/",
    workflow: {
      trigger: "Webhook / Scheduled",
      steps: ["Multi-Platform Search", "Result Parsing", "Filtering & Dedup", "Sheet Logging"],
      integrations: 7
    },
    category: "Lead Generation"
  },
  {
    id: 12,
    title: "Social Media Management Automation",
    description: "Single-trigger publishing engine that distributes content to Instagram, LinkedIn and YouTube with conditional, per-platform routing.",
    technologies: ["n8n", "Instagram API", "LinkedIn API", "YouTube API", "Webhook", "Switch/If Logic"],
    features: [
      "One-click multi-platform publishing to Instagram, LinkedIn and YouTube",
      "Conditional routing per platform (Switch/If)",
      "Webhook-triggered content intake",
      "Platform-specific formatting and payload handling",
      "Retry and wait handling for API rate limits",
      "Custom Code nodes for content transformation",
      "Centralized control over distributed posting",
      "Scalable 30+ node orchestration"
    ],
    impact: "Cut multi-platform posting to a single trigger, eliminating manual cross-posting across 3 networks",
    image: "/Images/Social Media Management.png",
    workflow: {
      trigger: "Webhook",
      steps: ["Content Intake", "Platform Routing", "Format & Publish", "Status Handling"],
      integrations: 5
    },
    category: "Business Process"
  },
  {
    id: 13,
    title: "Reel Machine - AI Video Factory & Analytics",
    description: "End-to-end short-video pipeline that sources content, edits reels with MediaFX, auto-posts, and tracks performance analytics on a schedule.",
    technologies: ["n8n", "MediaFX", "Google Drive", "Google Sheets", "RSS", "Webhook", "Scheduling"],
    features: [
      "Automated source ingestion via RSS and Google Drive",
      "Programmatic video/reel editing with MediaFX",
      "Scheduled, hands-free reel publishing",
      "Performance analytics tracked back to Google Sheets",
      "Branching logic and data merging across 50+ nodes",
      "Webhook + schedule triggers for flexible runs",
      "Batch processing with rate-limit waits",
      "Respond-to-webhook for external integrations"
    ],
    impact: "Automated the full create-post-measure loop for short-form video, the most complex workflow in the system (50+ nodes)",
    image: "/Images/Reel Machine.png",
    workflow: {
      trigger: "Scheduled / Webhook",
      steps: ["Source Ingestion", "Video Editing (MediaFX)", "Auto-Posting", "Analytics Tracking"],
      integrations: 7
    },
    category: "AI Integration"
  },
  {
    id: 14,
    title: "AI Cold Email Outreach Automation (Instantly)",
    description: "AI-driven cold outreach system that verifies leads, runs Instantly campaigns, and generates AI replies with a human-in-the-loop email approval step.",
    technologies: ["n8n", "Instantly", "OpenAI API", "Google Gemini", "Million Verifier", "Gmail", "Webhook"],
    features: [
      "Email verification via Million Verifier before outreach",
      "Automated Instantly campaign creation and lead push",
      "AI-generated replies using Gemini / OpenAI",
      "Human-in-the-loop email approval before sending",
      "Reply detection and follow-up handling",
      "Structured output parsing for reply drafting",
      "Lead data synced to Google Sheets",
      "Webhook-driven, end-to-end outreach pipeline"
    ],
    impact: "Automated cold outreach end-to-end while keeping a human approval gate, protecting deliverability with pre-send verification",
    image: "/Images/Cold Email Outreach.png",
    workflow: {
      trigger: "Webhook / Scheduled",
      steps: ["Email Verification", "Campaign Push", "AI Reply Generation", "Human Approval & Send"],
      integrations: 7
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
    { name: "C", icon: "🔧" },
    { name: "C++", icon: "⚙️" },
    { name: "Java", icon: "☕" },
    { name: "Python", icon: "🐍" },
    { name: "JavaScript", icon: "🟨" }
  ],
  webDev: [
    { name: "React", icon: "⚛️" },
    { name: "Node.js", icon: "🟩" },
    { name: "Express.js", icon: "🚂" },
    { name: "Django", icon: "🎸" },
    { name: "HTML5", icon: "🌐" },
    { name: "CSS3", icon: "🎨" },
    { name: "Tailwind CSS", icon: "💨" },
    { name: "GSAP", icon: "✨" }
  ],
  dataScience: [
    { name: "PostgreSQL", icon: "🐘" },
    { name: "MySQL", icon: "🗄️" },
    { name: "MongoDB", icon: "🍃" },
    { name: "Neon DB", icon: "💡" },
    { name: "Supabase", icon: "⚡" },
    { name: "Drizzle ORM", icon: "🌧️" },
    { name: "Power BI", icon: "📊" },
    { name: "Excel", icon: "📈" }
  ],
  automation: [
    { name: "OpenRouter API", icon: "🧭" },
    { name: "VAPI (Voice AI)", icon: "🎙️" },
    { name: "WhatsApp Business API", icon: "💬" },
    { name: "RAG Systems", icon: "📚" },
    { name: "LLM Integration", icon: "🧠" }
  ],
  design: [
    { name: "Claude", icon: "🤖" },
    { name: "ChatGPT", icon: "💡" },
    { name: "Gemini", icon: "♊" },
    { name: "Perplexity", icon: "🔍" },
    { name: "Cursor AI", icon: "🖱️" },
    { name: "GitHub Copilot", icon: "🐙" },
    { name: "Clay", icon: "🧱" },
    { name: "Instantly", icon: "📨" }
  ],
  tools: [
    { name: "Git & GitHub", icon: "📝" },
    { name: "REST APIs", icon: "🔗" },
    { name: "JWT Auth", icon: "🔐" },
    { name: "OAuth 2.0", icon: "🛡️" },
    { name: "Brevo SMTP", icon: "📧" },
    { name: "Zapier", icon: "⚡" },
    { name: "SerpAPI", icon: "🔎" }
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
    id: 6,
    title: "InsightPulse - Multi-Channel Survey & Analytics Platform",
    description: "Full-stack survey platform that distributes surveys via Voice AI, WhatsApp, and Web, with LLM-powered analysis generating NPS, EVI, CSAT, and CES scores in real time.",
    technologies: ["React", "Node.js", "VAPI (Voice AI)", "WhatsApp Business API", "LLM Integration", "PostgreSQL"],
    github: "https://github.com/BendiKarthikeya",
    live: "https://skill-pulse.io/",
    image: "/Images/InsightPulse.png",
    features: [
      "Multi-channel survey distribution (Voice AI, WhatsApp, Web)",
      "LLM-powered analysis of open-ended responses",
      "Real-time NPS, EVI, CSAT, and CES scoring",
      "Role-based access control (RBAC)",
      "CRM integration via OAuth",
      "Employee retention analysis module",
      "Executive analytics dashboard"
    ]
  },
  {
    id: 7,
    title: "HRMS - HR Management System",
    description: "End-to-end hiring and onboarding platform covering the full recruitment lifecycle, from requisition to offer and onboarding.",
    technologies: ["React", "Node.js", "Express.js", "PostgreSQL", "AI CV Screening", "E-Signature"],
    github: "https://github.com/BendiKarthikeya",
    live: "https://hcmspro.net/",
    image: "/Images/HRMS.png",
    features: [
      "Hiring pipeline: requisition → multi-step approval → public careers page job posting",
      "Candidate management with AI-powered CV screening",
      "Interview scheduling with calendar invites and online-meeting links",
      "Multi-round tracking and panel evaluation scoring",
      "Offer letter lifecycle with e-signature capture and inline PDF preview",
      "Post-offer onboarding tracking (medical, visa, clearance status)",
      "Automated transactional emails at every pipeline stage",
      "Reports dashboard with KPIs (open vacancies, pipeline funnel, avg hire cycle) and CSV exports"
    ]
  }
]

export const education = [
  {
    degree: "B.Sc Honours in Computer Science and Artificial Intelligence",
    institution: "Indian Institute of Technology Guwahati",
    year: "2023 - Present",
    grade: "CGPA: 8.68/10.0",
    achievements: [
      "Maintaining a CGPA of 8.68/10.0",
      "Strong foundation in programming, AI, and full-stack development"
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
  "JEE Mains 2023: 94.63 percentile - secured admission to IIT Guwahati",
  "Qualified for NSEJS (National Standard Examination in Junior Science) - top 300 nationwide",
  "Solved 275+ problems on LeetCode",
  "Completed two 108-day LinkedIn learning challenges"
]
