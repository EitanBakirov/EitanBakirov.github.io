export const bio = [
  "Hello, I'm Eitan Bakirov!",
  "Aspiring <strong>Data Scientist</strong> at the beginning of my journey, passionate about solving real-world problems with data.",
  "I have completed several hands-on projects in machine learning, deep learning, and data analysis.",
  "Eager to keep learning, building, and growing in the world of AI and data science.",
];

export const skills = [
  {
    category: "Programming & Data Tools",
    items: ["Python", "SQL", "Pandas", "NumPy", "Matplotlib", "Seaborn"],
  },
  {
    category: "Machine Learning & AI",
    items: [
      "Scikit-learn",
      "PyTorch",
      "TensorFlow",
      "Hugging Face Transformers",
      "Machine Learning",
      "Deep Learning",
      "Model Evaluation",
      "Experimentation",
    ],
  },
  {
    category: "Web & App Development",
    items: ["FastAPI", "Streamlit", "Docker", "Git"],
  },
  {
    category: "Data Science & Analysis",
    items: ["Data Analysis", "Data Visualization", "Problem Solving", "Research"],
  },
];


export const experience = [
  {
    title: "Checkmarx",
    duration: "2024",
    subtitle: "AI Engineer Intern",
    details: [
      "Developed an innovative LLM-powered web application to detect and verify code originality (Vue + FastAPI).",
      "Integrated LLM embeddings, a searchable vector database (Qdrant), and Dockerized the system for scalability.",
      "Designed a benchmarking pipeline with synthetic datasets and tailored metrics to evaluate LLM performance in code similarity detection.",
    ],
    tags: [
      "Python",
      "FastAPI",
      "Vue.js",
      "Docker",
      "OpenAI",
      "Qdrant",
      "LLMs",
      "Benchmarking"
    ],
    icon: "shield-alt",
  },
  {
    title: "Israeli Defense Forces (IDF) – Shahar Unit, J6 & Cyber Defense Directorate",
    duration: "2018 - 2021",
    subtitle: "SAP System Analyst and Instructor",
    details: [
      "Implemented HR subsystems in SAP ERP, created database tables and workflows, and collaborated with teams for deployment.",
      "Led system enhancements, including interface design, debugging, and writing detailed characterization documents.",
      "Instructed the SAP System Analyst Course, designing training materials and guiding soldiers through system development practices.",
    ],
    tags: ["SAP", "SQL", "System Analysis", "Training", "Team Collaboration"],
    icon: "user-shield",
  },
];

export const education = [
  {
    title: "B.Sc. in Digital Sciences for High-Tech and Economics",
    duration: "2021 - 2024",
    subtitle: "Tel Aviv University",
    details: [
      "Strong academic emphasis on Big Data and computer-related subjects, statistics, machine learning, deep learning and data science, databases and SQL, data structures, algorithms, data analysis, as well as programming in C, R and Python.",
      "Strong grasp of economic theories, principles, and concepts",
      "Applied knowledge learnt through studies in various Machine Learning and Data Analysis projects"
    ],
    tags: [
      "Statistics",
      "Machine Learning",
      "Data Science",
      "Databases",
      "Data Structures & Algorithms",
      "Image Processing",
      "Python",
      "SQL",
      "Cloud Computing (AWS, Azure)"
    ],
    icon: "graduation-cap",
  },
  {
    title: "Software Engineering Technician Certification",
    duration: "2017 - 2018",
    subtitle: "Hakfar Hayarok College",
    details: [],
    tags: [
      "C#",
      "OOP Design",
      "Game Development",
      "Software Engineering Fundamentals"
    ],
    icon: "laptop-code",
  },
  {
    title: "Technological Matriculation",
    duration: "2014 - 2017",
    subtitle: "Efrayim Katsir High School, Holon",
    details: [],
    tags: ["Computer Science", "Physics", "Mathematics", "English"],
    icon: "book",
  },
];

export const footer = [
  {
    label: "Links",
    data: [
      {
        text: "Linkedin",
        link: "https://www.linkedin.com/in/eitan-bakirov/",
      },
      {
        text: "Github",
        link: "https://github.com/EitanBakirov/EitanBakirov.github.io",
      },
    ],
  },
  {
    label: "copyright-text",
    data: ["Made with ♥ by Eitan Bakirov"],
  }
];

export const featuredProjects = [
  {
    title: "LLM-Powered Code Similarity Detection",
    shortDescription: "LLM-powered code similarity detection web application.",
    description: `A comprehensive system for detecting code similarity and potential code clones using Large Language Models (LLMs). The project consists of two main components:

<br><br>
1. Benchmark System:
<br>
- Evaluates various LLMs (CodeBERT, GraphCodeBERT, CodeT5, Qwen) for code similarity detection
- Implements two evaluation methods: Direct Clone Comparison and Global Clone Search
- Features multiprocessing, comprehensive logging, and detailed performance metrics
- Generates embeddings and evaluates model accuracy using Top-5 and Top-1 hit rates

<br><br>
2. Web Application:
<br>
- Vue.js frontend for code input and similar code display
- FastAPI backend for handling requests and LLM processing
- Qdrant vector database for efficient similarity search
- Docker containerization for easy deployment
- Comprehensive logging and monitoring system

<br><br>
The system achieves high accuracy in detecting similar code across different programming languages and clone types, making it valuable for code duplication detection and license compliance checking.`,
    repoName: "code-match",
    tags: [
      "Python",
      "FastAPI",
      "Vue.js",
      "Docker",
      "LLMs",
      "HuggingFace",
      "Qdrant",
      "Benchmarking",
      "Code Analysis"
    ],
    github: "https://github.com/codematch-llm",
    demo: "https://demo-link.com/project1"
  },
  {
    title: "National Insurance Form Parser",
    shortDescription: "ML-based insurance form data extraction tool.",
    description: "A microservice-based Streamlit application for extracting structured JSON data from scanned Israeli National Insurance (ביטוח לאומי) forms. The system leverages Azure Document Intelligence for OCR and Azure OpenAI (GPT-4) for field extraction, supporting both Hebrew and English documents. Features include automatic language detection, structured JSON output, comprehensive logging, and performance monitoring. Built with Python, Streamlit, and Docker for scalable deployment.",
    repoName: "national-insurance-form-parser",
    tags: ["Python", "Azure", "OpenAI", "Docker", "Streamlit", "OCR"],
    github: "https://github.com/EitanBakirov/insurance-form-parser",
    demo: "https://demo-link.com/project1",
  },
  {
    title: "Health Maintenance Organization Chatbot System",
    shortDescription: "AI chatbot for healthcare service navigation.",
    description: "A microservice-based chatbot system for Israeli HMO (Health Fund) service inquiries, leveraging RAG (Retrieval Augmented Generation) and Azure OpenAI for providing accurate, personalized responses. The system features bilingual support (Hebrew/English), two-phase interaction for user details and service inquiries, RAG-powered answers from HMO documents, and real-time performance monitoring. Built with FastAPI backend, Streamlit frontend, and containerized with Docker for scalable deployment. Includes comprehensive logging, language-aware response formatting, and vector-based document retrieval for enhanced accuracy.",
    repoName: "hmo-chatbot",
    tags: [
      "Python",
      "FastAPI",
      "Azure",
      "OpenAI",
      "Docker",
      "Streamlit",
      "NLP",
      "RAG"
    ],
    github: "https://github.com/EitanBakirov/hmo-chatbot",
    demo: ""
  },
  {
    title: "Malicious File Classification",
    shortDescription: "Machine learning system for detecting malicious files.",
    description: "A comprehensive machine learning application for classifying files as malicious or benign using static analysis features. The project combines a robust data science pipeline (including EDA, preprocessing, model training with Random Forest and KNN) with an interactive Streamlit interface. Features include real-time file analysis, adjustable detection thresholds, model performance metrics, and extensive data preprocessing (handling missing values, categorical features, and dimensionality reduction). Achieved high AUC scores through cross-validation and hyperparameter tuning.",
    repoName: "malicious-file-classification-app",
    tags: [
      "Python",
      "Machine Learning",
      "Random Forest",
      "Streamlit",
      "Data Analysis",
      "Statistical Analysis",
      "Data Preprocessing",
      "Model Evaluation"
    ],
    github: "https://github.com/EitanBakirov/malicious-file-classification-app",
    demo: "",
  },
  {
    title: "Boston Airbnb Analysis",
    shortDescription: "Data analysis of Boston Airbnb market trends.",
    description: "A comprehensive analysis of Boston's Airbnb market using data science techniques. This project includes price prediction modeling, neighborhood analysis, and seasonal trends investigation using Python's data science stack.",
    repoName: "boston-airbnb-analysis",
    tags: ["Python", "Pandas", "Scikit-learn", "Data Visualization", "Statistical Analysis"],
    github: "https://github.com/EitanBakirov/boston-airbnb-analysis",
    demo: ""
  },
  {
    title: "Music Recommendation System",
    shortDescription: "AI-powered music recommendation engine using Spotify data.",
    description: "A personalized music recommendation engine that uses collaborative filtering and content-based approaches. The system analyzes user listening histories, song features, and musical patterns to suggest relevant tracks. Built with Python and integrated with the Spotify API for real-world music data.",
    repoName: "music-recommendation-system",
    tags: ["Python", "Collaborative Filtering", "Machine Learning", "Feature Engineering"],
    github: "https://github.com/EitanBakirov/music-recommendation-system",
    demo: ""
  },
  {
    title: "Bike Rental Demand Prediction",
    shortDescription: "ML system predicting bike rental demand patterns.",
    description: "A machine learning solution for predicting bicycle rental demand based on weather conditions, time of day, and seasonal factors. This project implements various regression models and time series analysis techniques to help bike-sharing services optimize their fleet management.",
    repoName: "bike-rental-demand-prediction",
    tags: ["Python", "Time Series Analysis", "Regression", "Feature Engineering", "Data Visualization"],
    github: "https://github.com/EitanBakirov/bicycle-rental-demand-prediction",
    demo: ""
  },
  {
    title: "TV Show Dialog Classification",
    shortDescription: "NLP analysis of TV show character dialogues.",
    description: "An NLP project that analyzes and classifies TV show dialogues using deep learning techniques. The system identifies speaker emotions, conversation topics, and character relationships. Features include sentiment analysis and topic modeling across different TV show genres.",
    repoName: "tv-show-dialog-classification",
    tags: ["NLP", "Deep Learning", "Sentiment Analysis", "Text Classification"],
    github: "https://github.com/EitanBakirov/tv-show-dialogue-classification",
    demo: ""
  },
  {
    title: "World Happiness Report Analysis",
    shortDescription: "Global happiness factors data analysis project.",
    description: "A data-driven exploration of global happiness metrics using the World Happiness Report dataset. This analysis investigates factors contributing to national happiness scores, including economic indicators, social support, and healthcare quality. Interactive visualizations highlight global patterns and trends.",
    repoName: "world-happiness-analysis",
    tags: ["Python", "Data Analysis", "Statistical Modeling", "Geospatial Visualization", "Dashboard Development"],
    github: "https://github.com/EitanBakirov/world-happiness-analysis",
    demo: ""
  },
  {
    title: "Slug Wars",
    shortDescription: "Turn-based artillery game with destructible environments.",
    description: "A 2D turn-based artillery strategy game developed with Monogame and XNA framework. Players control teams of armed slugs in destructible environments, using various weapons to eliminate opponents. This project demonstrates OOP principles and game development concepts learned during Software Engineering studies at Hakfar Hayarok College.",
    repoName: "slug-wars",
    tags: ["Python", "Pygame", "OOP", "Game Development", "Software Design"],
    github: "https://github.com/EitanBakirov/slug-wars",
    demo: ""
  },
  // Add more projects as needed
];
