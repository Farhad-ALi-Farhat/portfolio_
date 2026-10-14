export const profile = {
  name: "Farhad Ali Farhat",
  title: "AI/ML Engineer",
  tagline:
    "AI/ML engineer building production LLM systems: agents, webhooks, cloud deployment.",
  location: "Lahore, Pakistan",
  links: {
    github: "https://github.com/Farhad-ALi-Farhat",
    linkedin: "https://linkedin.com/in/farhad-ali-farhat",
  },
  summary:
    "AI/ML engineer with internship experience in LLM applications, agentic AI, deep learning and computer vision. I build and deploy AI systems using Python, FastAPI, LangChain, LangGraph, TensorFlow, PyTorch and n8n, with REST APIs, webhooks, Azure and CI/CD.",
  experience: [
    {
      role: "AI/ML Intern",
      company: "Ebryx",
      location: "Lahore, Pakistan",
      period: "Jul 2026 – Present",
      points: [
        "Completed ML, deep learning (CNN, RNN, LSTM) and NLP tracks, including transformer fine-tuning (DistilBERT); building LLM prototypes with LangChain, LangGraph and Hugging Face.",
        "Built and shipped an LLM-powered CV screening pipeline (LangGraph, Groq, Gemini) automating JD-to-candidate requirement matching with weighted scoring and three-tier shortlisting.",
      ],
    },
    {
      role: "ML Intern",
      company: "Punjab Information Technology Board (PITB)",
      location: "Lahore, Pakistan",
      period: "Jun 2024 – Aug 2024",
      points: [
        "Developed and evaluated deep learning models with TensorFlow and Keras.",
        "Implemented and optimized CNN and RNN architectures for computer vision tasks.",
        "Performed data preprocessing and augmentation for model training and evaluation.",
        "Collaborated with engineers to improve model performance, accuracy and training efficiency.",
      ],
    },
  ],
  education: [
    {
      school: "University of Management and Technology",
      degree: "BS Computer Science",
      period: "Oct 2021 – Aug 2025",
    },
  ],
  skills: [
    { group: "LLMs & Agentic AI", items: ["LangChain", "LangGraph", "CrewAI", "AI Agents", "Tool Calling", "LLM Orchestration", "Prompt Engineering", "RAG", "Groq API", "Gemini API", "Human-in-the-Loop"] },
    { group: "AI & Machine Learning", items: ["TensorFlow", "PyTorch", "Keras", "Scikit-learn", "Hugging Face Transformers", "OpenCV", "YOLO", "NLP", "Computer Vision", "CNN", "LSTM", "Explainable AI (LIME)", "Pandas", "NumPy"] },
    { group: "Backend & APIs", items: ["FastAPI", "REST APIs", "Webhooks (HMAC)", "n8n", "Streamlit"] },
    { group: "Cloud, DevOps & Databases", items: ["Azure App Service", "CI/CD", "GitHub Actions", "Git", "PostgreSQL", "MySQL", "Supabase"] },
    { group: "Languages & Web", items: ["Python", "SQL", "JavaScript", "React", "Laravel", "HTML", "CSS"] },
  ],
  otherProjects: [
    {
      title: "CV Screening Pipeline",
      summary:
        "LLM-powered CV screening with LangGraph: JD parsing into weighted requirements, evidence-backed candidate scoring and three-tier shortlisting with human review.",
      stack: ["Python", "LangGraph", "Groq", "Gemini", "Pydantic", "Streamlit"],
    },
    {
      title: "Deepfake Detection and Awareness Platform",
      summary:
        "Image and video deepfake detection using CNN-LSTM and transfer learning, with LIME explanations and a FastAPI inference backend integrated with Laravel and React.",
      stack: ["Python", "TensorFlow", "FastAPI", "React", "Laravel", "LIME"],
    },
  ],
};