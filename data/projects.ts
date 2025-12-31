export interface Project {
  title: string;
  description: string;
  challenge?: string;
  solution?: string;
  impact: string;
  techStack: string[];
  demo?: string;
  github?: string;
}

export const projects: Project[] = [
  {
    title: "ITL Logistics Egypt - Freight Forwarding Website",
    description:
      "Modern, professional website for ITL Logistics Egypt - a leading freight forwarding company with global logistics solutions.",
    challenge:
      "The company needed a modern digital presence to showcase their services and provide easy quote requests for potential clients.",
    solution:
      "Built a 6-page Next.js 14 website with responsive design, email backend for contact forms and quote requests using Nodemailer, and premium UI with smooth animations.",
    impact: "Live production website with mobile-friendly navigation and integrated email functionality",
    techStack: ["Next.js 14", "React 18", "Nodemailer", "CSS"],
    demo: "https://itlogistic.net",
    github: undefined,
  },
  {
    title: "AutoBella - Mobile Car Washing Service",
    description:
      "A modern mobile car services platform bringing professional washing and detailing to customers' doorsteps.",
    challenge:
      "Local car wash businesses needed a digital presence to compete with on-demand services and manage B2B client memberships.",
    solution:
      "Built a full-stack Next.js application with service booking, membership management for both individual and business clients, and a responsive mobile-first design.",
    impact: "Live production website serving customers with streamlined booking flow",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "shadcn/ui"],
    demo: "https://autobella-eg.com",
    github: undefined,
  },
  {
    title: "MRI Tumor Detection Model",
    description:
      "AI-powered brain tumor classification system for automated medical imaging analysis.",
    challenge:
      "Manual MRI analysis is time-consuming and prone to human error, requiring specialized radiologist expertise.",
    solution:
      "Developed a DenseNet-based deep learning model with a Flask REST API for real-time tumor classification from brain MRI scans.",
    impact: "Graduation project advancing healthcare AI with automated diagnostic support",
    techStack: ["Python", "TensorFlow", "DenseNet", "Flask", "OpenCV"],
    demo: undefined,
    github: "https://github.com/moniem2020/mri-tumor-detection",
  },
  {
    title: "AI Support Agent for SaaS",
    description:
      "Startup-grade AI-powered customer support agent with RAG (Retrieval-Augmented Generation), semantic caching, and multi-agent orchestration using LangGraph.",
    challenge:
      "Support teams need efficient automation while maintaining quality and security standards.",
    solution:
      "Engineered a multi-agent workflow using LangGraph with hybrid RAG, semantic caching, PII detection, and automated escalation.",
    impact: "Production-ready architecture with security and observability",
    techStack: ["Python", "LangGraph", "RAG", "Gemini API", "FAISS", "Semantic Caching"],
    demo: undefined,
    github: "https://github.com/moniem2020/AI-Support-Agent-for-Saas",
  },
  {
    title: "Plant Disease Prediction & Recognition",
    description:
      "Deep learning solution for agricultural disease detection with minimal training data.",
    challenge:
      "Farmers lack quick diagnostic tools; traditional ML requires large labeled datasets unavailable in agricultural contexts.",
    solution:
      "Implemented Few-Shot Learning with Siamese Networks and CNNs to achieve accurate disease classification from limited samples.",
    impact: "Accurate classification enabling early intervention with minimal training data",
    techStack: ["Python", "TensorFlow", "CNN", "Siamese Networks", "OpenCV"],
    demo: undefined,
    github: "https://github.com/moniem2020/Plant-Disease-Recognition",
  },
  {
    title: "Song Popularity Prediction",
    description:
      "Machine learning model predicting song success using audio features and metadata.",
    challenge:
      "Music industry needs data-driven insights to predict which songs will resonate with audiences.",
    solution:
      "Built ensemble models using Random Forest and Gradient Boosting with GridSearchCV hyperparameter optimization.",
    impact: "Actionable insights for music analytics with optimized ensemble methods",
    techStack: ["Python", "Scikit-learn", "Random Forest", "Gradient Boosting", "Pandas"],
    demo: undefined,
    github: "https://github.com/moniem2020/song-popularity-prediction",
  },
  {
    title: "ECM Automation Suite",
    description:
      "Enterprise document automation system streamlining content management workflows.",
    challenge:
      "Manual document processing in enterprise environments is slow, error-prone, and resource-intensive.",
    solution:
      "Developed intelligent document generation and retrieval pipelines using LangGraph agents with Gemini API integration.",
    impact: "40% reduction in document processing time | Streamlined enterprise workflows",
    techStack: ["Python", "LangGraph", "Gemini API", "ARIS BPM", "Azure AI"],
    demo: undefined,
    github: undefined,
  },
];
