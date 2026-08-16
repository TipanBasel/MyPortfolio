/**
 * Tipan Basel Portfolio Central Data Store
 * All facts strictly adhere to Tipan's authentic engineering profile.
 */

export const personalInfo = {
  name: "Tipan Basel",
  status: "AVAILABLE FOR OPPORTUNITIES",
  role: "Computer Engineer",
  subtitle: "Machine Learning • Deep Learning • RAG • Software Development",
  shortBio: "Computer Engineering Graduate passionate about building practical AI systems that solve real-world problems.",
  fullBio: "I am a Computer Engineering graduate from Advanced College of Engineering and Management (ACEM) in Kathmandu, with a strong interest in Artificial Intelligence, Machine Learning, and software engineering. My focus is on creating AI systems that are practical, reliable, and genuinely useful.",
  location: "Kathmandu, Nepal",
  email: "tipannbasel@gmail.com",
  github: "https://github.com/TipanBasel",
  linkedin: "https://linkedin.com/in/tipan-basel",
  resumeUrl: "#resume",
};

export const featuredProjects = [
  {
    id: "govsathi",
    title: "GovSathi",
    subtitle: "Nepali AI Assistant for Government Services",
    timeline: "Apr 2025 – Feb 2026",
    category: "RAG & Voice AI",
    isHero: true,
    tagline: "An AI-powered voice assistant that simplifies access to government services and information in Nepal.",
    problem: "Accessing government information and official services in Nepal can be challenging for citizens who face fragmented online portals, complex bureaucratic language, or literacy and digital accessibility barriers.",
    solution: "GovSathi bridges this accessibility gap by integrating speech recognition (Whisper) with Retrieval-Augmented Generation (RAG) and text-to-speech (GTSS). Users can speak queries naturally in Nepali to receive accurate, context-grounded government guidance both visually and through voice synthesis.",
    technologies: ["React", "RAG", "Whisper", "GTSS", "MySQL", "Python", "FastAPI"],
    architectureSteps: [
      {
        step: 1,
        title: "Voice Input",
        desc: "Citizen speaks a query in Nepali via microphone audio stream.",
        icon: "Mic",
        highlight: "Multimodal capture"
      },
      {
        step: 2,
        title: "Speech Recognition",
        desc: "OpenAI Whisper transcribes spoken Nepali audio into accurate Nepali text.",
        icon: "Cpu",
        highlight: "Acoustic modeling"
      },
      {
        step: 3,
        title: "RAG Retrieval",
        desc: "Query embeddings perform semantic vector search across municipal & ministry docs.",
        icon: "Search",
        highlight: "Vector search"
      },
      {
        step: 4,
        title: "Knowledge Base",
        desc: "Grounds facts against curated government services, requirements, and regulations.",
        icon: "Database",
        highlight: "Verified factual source"
      },
      {
        step: 5,
        title: "AI Response Synthesis",
        desc: "LLM contextualizes retrieved facts into concise, citizen-friendly explanations.",
        icon: "Sparkles",
        highlight: "Hallucination-free synthesis"
      },
      {
        step: 6,
        title: "Voice & UI Output",
        desc: "GTSS converts text to natural voice speech while React UI renders procedural steps.",
        icon: "Volume2",
        highlight: "Dual voice/visual interface"
      }
    ],
    highlights: [
      "Voice-first interface tailored for accessibility in Nepali",
      "Retrieval-Augmented Generation (RAG) ensuring grounded, accurate public information",
      "End-to-end integration across speech transcription, vector retrieval, and speech synthesis",
      "Relational MySQL integration for structured service catalog data"
    ],
    github: "https://github.com/TipanBasel/Gov-sathi",
    demo: "#govsathi-architecture",
  },
  {
    id: "diabetic-retinopathy",
    title: "Diabetic Retinopathy Detection System",
    subtitle: "Deep Learning Retinal Image Classifier",
    timeline: "Nov 2024 – Feb 2025",
    category: "Computer Vision & Deep Learning",
    isHero: false,
    tagline: "A deep learning-based system designed to classify retinal images and assist in the early detection of diabetic eye disease.",
    problem: "Diabetic retinopathy is a major cause of preventable blindness worldwide. Early identification through retinal fundus images is vital, yet manual screening is time-intensive and requires scarce ophthalmological expertise.",
    solution: "Developed an automated medical image classification pipeline that leverages OpenCV image preprocessing and a ResNet101 deep residual neural network architecture to detect pathological retinal lesions.",
    technologies: ["TensorFlow", "ResNet101", "Python", "OpenCV", "NumPy"],
    pipelineSteps: [
      {
        step: 1,
        title: "Retinal Image Input",
        desc: "Digital high-resolution fundus photograph input.",
        icon: "Eye"
      },
      {
        step: 2,
        title: "OpenCV Preprocessing",
        desc: "CLAHE contrast enhancement, circular mask cropping, and color normalization.",
        icon: "Sliders"
      },
      {
        step: 3,
        title: "Deep Feature Extraction",
        desc: "ResNet101 101-layer residual network extracting microaneurysm and exudate patterns.",
        icon: "Network"
      },
      {
        step: 4,
        title: "Classification & Output",
        desc: "Softmax output stage yielding disease presence and triage indication.",
        icon: "Activity"
      }
    ],
    highlights: [
      "Implemented 101-layer deep residual neural network (ResNet101) with skip connections",
      "OpenCV preprocessing pipeline with CLAHE to amplify subtle retinal microvascular patterns",
      "Structured data augmentation to improve model generalization across varied fundus captures"
    ],
    github: "https://github.com/TipanBasel/Diabetic-Retinopathy-Detection-System",
    demo: "#retinopathy-pipeline",
  }
];

export const otherProjects = [
  {
    id: "movie-recommender",
    title: "Movie Recommender System",
    category: "Machine Learning",
    timeline: "2024",
    tagline: "A movie recommendation system that suggests movies based on user preferences and ratings.",
    description: "Built a recommendation engine applying statistical similarity metrics (Cosine Similarity) and feature engineering over tabular movie datasets to calculate personalized recommendations.",
    technologies: ["Python", "Pandas", "NumPy", "Scikit-learn", "Jupyter Notebook", "CSV Dataset"],
    details: {
      approach: "Content-based filtering using TF-IDF feature vectors and vector space cosine similarity to find closest cinematic matches.",
      learningOutcomes: "Exploratory data analysis, dimensionality management, matrix operations in NumPy, and scikit-learn pipeline design."
    },
    github: "https://github.com/TipanBasel/Movie-Recommender-System",
  },
  {
    id: "library-management",
    title: "Library Management System",
    category: "Software Development",
    timeline: "2024",
    tagline: "A system for managing books, members, and borrowing/return records efficiently.",
    description: "Architected a full-stack relational database management system streamlining member cataloging, book issuance workflows, late-return tracking, and inventory control.",
    technologies: ["HTML", "CSS", "JavaScript", "PHP", "MySQL", "XAMPP"],
    details: {
      approach: "Structured relational schema in MySQL with transactional integrity, coupled with PHP server-side validation and a responsive JavaScript UI.",
      learningOutcomes: "Relational database normalization, CRUD architectures, session authentication, and SQL query optimization."
    },
    github: "https://github.com/TipanBasel/Library-Management-System",
  }
];

export const skillCategories = [
  {
    id: "ai-ml",
    name: "AI & Machine Learning",
    description: "Core algorithms, neural networks, and semantic retrieval systems",
    skills: [
      { name: "Machine Learning", level: "Core", tag: "Supervised / Unsupervised" },
      { name: "Deep Learning", level: "Core", tag: "CNNs / ResNet / Neural Nets" },
      { name: "RAG Systems", level: "Specialized", tag: "Vector Embeddings & Retrieval" },
      { name: "Computer Vision", level: "Specialized", tag: "OpenCV / Image Classification" },
      { name: "Voice AI & STT", level: "Specialized", tag: "Whisper / Speech Processing" },
      { name: "AI App Development", level: "Specialized", tag: "End-to-end AI Integrations" }
    ]
  },
  {
    id: "programming",
    name: "Programming Languages",
    description: "Foundational and modern languages for systems and AI",
    skills: [
      { name: "Python", level: "Primary", tag: "AI / ML / Scripting" },
      { name: "C", level: "Foundational", tag: "Systems Programming" },
      { name: "C++", level: "Foundational", tag: "Algorithms & Data Structures" },
      { name: "JavaScript", level: "Primary", tag: "Full-Stack Development" },
      { name: "PHP", level: "Practical", tag: "Web Applications" }
    ]
  },
  {
    id: "frameworks",
    name: "Frameworks & Libraries",
    description: "Libraries for machine learning models and web interfaces",
    skills: [
      { name: "TensorFlow", level: "ML", tag: "Deep Learning & Model Training" },
      { name: "React", level: "Frontend", tag: "Component Architecture" },
      { name: "Next.js", level: "Full-stack", tag: "Modern Web Apps" },
      { name: "FastAPI", level: "Backend", tag: "High-Performance AI APIs" },
      { name: "MATLAB", level: "Scientific", tag: "Numerical Computing" },
      { name: "LaTeX", level: "Documentation", tag: "Technical Publishing" }
    ]
  },
  {
    id: "databases-tools",
    name: "Databases & Tools",
    description: "Data storage, version control, and development environments",
    skills: [
      { name: "MySQL", level: "Database", tag: "Relational Schemas" },
      { name: "MongoDB", level: "Database", tag: "Document Store" },
      { name: "GitHub / Git", level: "Tool", tag: "Version Control & CI" },
      { name: "OpenCV", level: "Tool", tag: "Image Processing" },
      { name: "Jupyter Notebook", level: "Tool", tag: "Data Analysis & Experiments" },
      { name: "XAMPP", level: "Tool", tag: "Local Web Server" }
    ]
  },
  {
    id: "soft-skills",
    name: "Engineering Practices",
    description: "Workplace approach and technical problem-solving capabilities",
    skills: [
      { name: "Problem Solving", level: "Core", tag: "Systematic Root-Cause Analysis" },
      { name: "Critical Thinking", level: "Core", tag: "Algorithmic & Architecture Evaluation" },
      { name: "Adaptability", level: "Core", tag: "Rapid Adoption of New AI Tools" },
      { name: "Time Management", level: "Core", tag: "Structured Project Delivery" }
    ]
  }
];

export const capabilitiesTree = [
  {
    id: "ai-applications",
    title: "AI Applications",
    desc: "End-to-end software combining multimodal inputs, foundation models, and intuitive UI.",
    projectsLinked: ["GovSathi"],
    children: [
      {
        id: "rag",
        title: "RAG Systems",
        desc: "Information retrieval pipelines that connect knowledge bases to generative models with zero hallucination.",
        tech: ["Vector Embeddings", "Semantic Search", "FastAPI"]
      },
      {
        id: "voice-ai",
        title: "Voice AI",
        desc: "Speech-to-text and text-to-speech pipelines tailored for vernacular languages.",
        tech: ["Whisper", "GTSS", "Audio Processing"]
      },
      {
        id: "computer-vision",
        title: "Computer Vision",
        desc: "Image preprocessing, feature extraction, and convolutional classification systems.",
        tech: ["OpenCV", "CLAHE", "Medical Imaging"]
      },
      {
        id: "deep-learning",
        title: "Deep Learning",
        desc: "Deep neural network architectures (ResNet101, CNNs) for complex pattern recognition.",
        tech: ["TensorFlow", "Residual Networks", "Transfer Learning"]
      },
      {
        id: "machine-learning",
        title: "Machine Learning",
        desc: "Statistical learning models, recommendation algorithms, and tabular analysis.",
        tech: ["Scikit-Learn", "Pandas", "NumPy"]
      },
      {
        id: "software-dev",
        title: "Software Engineering",
        desc: "Full-stack web applications, database schema design, and modular UI architectures.",
        tech: ["React", "Next.js", "MySQL", "PHP"]
      }
    ]
  }
];

export const education = {
  degree: "Bachelor in Computer Engineering",
  institution: "Advanced College of Engineering and Management",
  location: "Kathmandu, Nepal",
  description: "Rigorous curriculum spanning computer engineering fundamentals, artificial intelligence, algorithms, systems design, and software engineering.",
  focusAreas: [
    "Artificial Intelligence & Machine Learning",
    "Data Structures & Algorithms",
    "Database Management Systems",
    "Computer Architecture & Operating Systems",
    "Software Engineering Methodologies"
  ]
};

export const journeyMilestones = [
  {
    period: "Nov 2024 – Feb 2025",
    title: "Diabetic Retinopathy Detection System",
    focus: "Deep Learning & Computer Vision",
    description: "Engineered a medical vision classifier utilizing ResNet101 and OpenCV CLAHE contrast enhancement for fundus photograph evaluation.",
    keySkills: ["TensorFlow", "ResNet101", "OpenCV", "Transfer Learning"]
  },
  {
    period: "Apr 2025 – Feb 2026",
    title: "GovSathi — Nepali AI Government Assistant",
    focus: "RAG Systems & Voice AI",
    description: "Built an end-to-end voice-enabled assistant leveraging Whisper for Nepali speech recognition and RAG retrieval for accurate public service guidance.",
    keySkills: ["RAG", "Whisper", "GTSS", "React", "MySQL"]
  },
  {
    period: "2026 & Beyond",
    title: "AI Engineering & Production Systems",
    focus: "Scalable AI Systems & Agentic Workflows",
    description: "Deepening practical AI engineering expertise across efficient inference, production RAG pipelines, and intelligent software applications.",
    keySkills: ["Production AI", "FastAPI", "Vector DBs", "Full-Stack AI"]
  }
];

export const currentlyExploring = [
  {
    title: "Production RAG Architectures",
    desc: "Hybrid retrieval (dense vector + sparse BM25), reranking models, and contextual chunking for zero-hallucination domain knowledge retrieval.",
    icon: "Layers"
  },
  {
    title: "Multimodal Voice & Vision Agents",
    desc: "Low-latency streaming speech pipelines and multimodal visual reasoning models for assistive real-time interfaces.",
    icon: "Cpu"
  },
  {
    title: "Deep Learning Model Optimization",
    desc: "Model quantization, fine-tuning strategies, and efficient deployment of neural architectures on constrained hardware.",
    icon: "Zap"
  },
  {
    title: "High-Performance ML Backends",
    desc: "Asynchronous task orchestration, FastAPI inference servers, and scalable relational / vector database integrations.",
    icon: "Server"
  }
];

export const aiKnowledgeBase = [
  {
    id: "greetings",
    keywords: ["hello", "hi", "hey", "greetings", "good morning", "good evening", "namaste", "sup", "yo"],
    question: "Hello!",
    answer: "Namaste! I am Tipan Basel's Portfolio AI Assistant. I can tell you all about Tipan's engineering projects (like GovSathi and Diabetic Retinopathy Detection), technical skillset, research interests, or academic background. What would you like to explore?",
    targetSection: "about"
  },
  {
    id: "bio",
    keywords: ["who", "tipan", "about", "profile", "intro", "bio", "student", "engineer", "person"],
    question: "Who is Tipan Basel?",
    answer: "Tipan Basel is a **Computer Engineering student** at Advanced College of Engineering and Management (ACEM) in Kathmandu, Nepal. He specializes in **Artificial Intelligence, Machine Learning, Deep Learning, and RAG systems**, focusing on building practical, dependable AI applications that solve real-world problems.",
    targetSection: "about"
  },
  {
    id: "govsathi",
    keywords: ["govsathi", "nepali", "assistant", "government", "voice", "rag", "whisper", "gtss"],
    question: "Tell me about GovSathi.",
    answer: "GovSathi is Tipan's **flagship AI project** (Apr 2025 – Feb 2026). It is an AI-powered voice assistant created to make government services in Nepal accessible to every citizen.\n\n**Key Technical Architecture:**\n1. **Speech Recognition**: OpenAI Whisper transcribes conversational Nepali audio.\n2. **RAG Retrieval**: Vector search queries indexed public service documents and municipal guidelines.\n3. **Knowledge Base**: MySQL & structured regulatory catalog.\n4. **Voice Output**: Google Text-to-Speech (GTSS) paired with an interactive React interface.",
    targetSection: "projects"
  },
  {
    id: "retinopathy",
    keywords: ["retinopathy", "diabetic", "eye", "vision", "resnet", "opencv", "medical", "cnn", "image"],
    question: "What is the Diabetic Retinopathy Detection project?",
    answer: "The **Diabetic Retinopathy Detection System** (Nov 2024 – Feb 2025) is a deep learning computer vision project for early ocular disease screening.\n\n**Pipeline Highlights:**\n- **OpenCV CLAHE**: Enhances contrast on retinal fundus images to isolate subtle microvascular lesions.\n- **ResNet101 Residual Backbone**: 101-layer deep CNN extracting hierarchical features without vanishing gradients.\n- **Classification Stage**: Softmax classifier indicating presence of diabetic eye disease for medical triage.",
    targetSection: "retinopathy-section"
  },
  {
    id: "projects",
    keywords: ["projects", "work", "built", "portfolio", "showcase", "systems", "apps"],
    question: "What projects has Tipan built?",
    answer: "Tipan has engineered multiple high-impact systems:\n\n1. **GovSathi**: Nepali AI voice assistant with RAG & Whisper (React, RAG, Whisper, GTSS, MySQL).\n2. **Diabetic Retinopathy Detection**: Deep learning retinal classifier (TensorFlow, ResNet101, OpenCV).\n3. **Movie Recommender System**: Content-based recommendation engine (Python, Scikit-learn, Pandas).\n4. **Library Management System**: Relational database management application (PHP, MySQL, JavaScript).",
    targetSection: "projects"
  },
  {
    id: "tech_stack",
    keywords: ["tech", "skills", "stack", "technologies", "tools", "languages", "python", "react", "fastapi"],
    question: "What technologies does Tipan use?",
    answer: "Tipan's technical toolbelt spans:\n\n- **AI & ML**: Machine Learning, Deep Learning, RAG Systems, Computer Vision, OpenAI Whisper, TensorFlow, OpenCV, Scikit-learn\n- **Programming**: Python, C, C++, JavaScript, PHP\n- **Frameworks**: React, Next.js, FastAPI, MATLAB, LaTeX\n- **Databases & Tools**: MySQL, MongoDB, GitHub, XAMPP, Jupyter Notebook",
    targetSection: "skills"
  },
  {
    id: "education",
    keywords: ["education", "college", "university", "degree", "acem", "study", "engineering", "bachelor"],
    question: "Where does Tipan study?",
    answer: "Tipan is pursuing a **Bachelor in Computer Engineering** at the **Advanced College of Engineering and Management (ACEM)** in Kathmandu, Nepal. His academic foundation covers AI, Data Structures & Algorithms, Database Systems, Computer Architecture, and Software Engineering.",
    targetSection: "education"
  },
  {
    id: "hire_internship",
    keywords: ["hire", "internship", "job", "career", "available", "opportunity", "status", "goals", "future"],
    question: "Is Tipan available for internships or roles?",
    answer: "Yes! Tipan is **actively AVAILABLE FOR OPPORTUNITIES** in AI Engineering, Machine Learning, and Software Development. He is driven to build production AI systems, collaborate with engineering teams, and solve challenging technical problems.",
    targetSection: "contact"
  },
  {
    id: "resume",
    keywords: ["resume", "cv", "curriculum", "download", "pdf"],
    question: "Can I view or download Tipan's resume?",
    answer: "Certainly! You can view Tipan's complete technical resume directly on the portfolio or download the PDF version in the **Resume Section**.",
    targetSection: "resume"
  },
  {
    id: "contact",
    keywords: ["contact", "email", "reach", "connect", "linkedin", "github", "message", "touch"],
    question: "How can I contact Tipan?",
    answer: "You can connect directly with Tipan through:\n- **Email**: tipannbasel@gmail.com\n- **LinkedIn**: linkedin.com/in/tipan-basel\n- **GitHub**: github.com/tipanbasel\n- Or submit a message via the interactive contact form on this page!",
    targetSection: "contact"
  }
];
