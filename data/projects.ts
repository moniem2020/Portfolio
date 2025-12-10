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
    title: "AI Support Agent",
    description:
      "Intelligent multi-agent system automating customer support with context-aware responses.",
    challenge:
      "Support teams overwhelmed by repetitive queries, causing slow response times and customer dissatisfaction.",
    solution:
      "Engineered a RAG-powered multi-agent workflow using LangChain, enabling automated ticket routing and intelligent response generation.",
    impact: "65% ticket deflection rate | 6s response time | 1000+ tickets/day",
    techStack: ["Python", "LangChain", "RAG", "Gemini API", "FAISS"],
    demo: undefined,
    github: "https://github.com/moniem2020/ai-support-agent",
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
