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
    details: [],
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
    title: "CodeMatch - LLM-Powered Code Similarity Detection",
    description: "CodeMatch is an innovative web application that leverages the power of Large Language Models (LLMs) to detect and verify code originality. It utilizes embeddings and a searchable vector database (Qdrant) to provide accurate results.",
    repoName: "code-match",
    tags: ["Python", "FastAPI", "Machine Learning"],
    github: "https://github.com/codematch-llm",
    demo: "https://demo-link.com/project1", // Optional
  },
  {
    title: "National Insurance Form Parser",
    description: "Description of project 1. This can be multiple paragraphs explaining the project details, technologies used, and key features.",
    repoName: "national-insurance-form-parser",
    tags: ["Python", "FastAPI", "Machine Learning"],
    github: "https://github.com/EitanBakirov/insurance-form-parser",
    demo: "https://demo-link.com/project1", // Optional
  },
  {
    title: "Health Maintenance Organization Chatbot System",
    description: "Description of project 2. Add more details about this specific project here.",
    repoName: "hmo-chatbot",
    tags: ["TensorFlow", "Deep Learning", "NLP"],
    github: "https://github.com/EitanBakirov/hmo-chatbot",
    demo: "", // No demo link for this one
  },
  {
    title: "Malicious File Classification",
    description: "A machine learning application designed to analyze and classify files as malicious or benign using static analysis features. This project combines robust data science techniques with a user-friendly web interface built using Streamlit.",
    repoName: "malicious-file-classification-app",
    tags: ["TensorFlow", "Deep Learning", "NLP"],
    github: "https://github.com/EitanBakirov/malicious-file-classification-app",
    demo: "", // No demo link for this one
  },
  {
    title: "Boston Airbnb Analysis",
    description: "A comprehensive analysis of Boston\'s Airbnb market using data science techniques. This project includes price prediction modeling, neighborhood analysis, and seasonal trends investigation using Python's data science stack.",
    repoName: "boston-airbnb-analysis",
    tags: ["Python", "Pandas", "Scikit-learn", "Data Visualization", "Statistical Analysis"],
    github: "https://github.com/EitanBakirov/boston-airbnb-analysis",
    demo: ""
  },
  {
    title: "Music Recommendation System",
    description: "A personalized music recommendation engine that uses collaborative filtering and content-based approaches. The system analyzes user listening histories, song features, and musical patterns to suggest relevant tracks. Built with Python and integrated with the Spotify API for real-world music data.",
    repoName: "music-recommendation-system",
    tags: ["Python", "Collaborative Filtering", "Machine Learning", "Spotify API", "Feature Engineering"],
    github: "https://github.com/EitanBakirov/music-recommendation-system",
    demo: ""
  },
  {
    title: "Bike Rental Demand Prediction",
    description: "A machine learning solution for predicting bicycle rental demand based on weather conditions, time of day, and seasonal factors. This project implements various regression models and time series analysis techniques to help bike-sharing services optimize their fleet management.",
    repoName: "bike-rental-demand-prediction",
    tags: ["Python", "Time Series Analysis", "Regression", "Feature Engineering", "Data Visualization"],
    github: "https://github.com/EitanBakirov/bicycle-rental-demand-prediction",
    demo: ""
  },
  {
    title: "TV Show Dialog Classification",
    description: "An NLP project that analyzes and classifies TV show dialogues using deep learning techniques. The system identifies speaker emotions, conversation topics, and character relationships. Features include sentiment analysis and topic modeling across different TV show genres.",
    repoName: "tv-show-dialogue-classification",
    tags: ["NLP", "Deep Learning", "BERT", "Sentiment Analysis", "Text Classification"],
    github: "https://github.com/EitanBakirov/tv-show-dialogue-classification",
    demo: ""
  },
  {
    title: "World Happiness Report Analysis",
    description: "A data-driven exploration of global happiness metrics using the World Happiness Report dataset. This analysis investigates factors contributing to national happiness scores, including economic indicators, social support, and healthcare quality. Interactive visualizations highlight global patterns and trends.",
    repoName: "world-happiness-analysis",
    tags: ["Python", "Data Analysis", "Statistical Modeling", "Geospatial Visualization", "Dashboard Development"],
    github: "https://github.com/EitanBakirov/world-happiness-analysis",
    demo: ""
  },
  {
    title: "Slug Wars",
    description: "An interactive game developed using Python and Pygame that demonstrates object-oriented programming principles. Features include dynamic enemy AI, power-up systems, and score tracking. The project showcases game development concepts while maintaining clean code architecture.",
    repoName: "slug-wars",
    tags: ["Python", "Pygame", "OOP", "Game Development", "Software Design"],
    github: "https://github.com/EitanBakirov/slug-wars",
    demo: ""
  },
  // Add more projects as needed
];
