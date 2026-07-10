// Portfolio content for Yashvardhan Debas
export const PROFILE = {
  name: "Yashvardhan Debas",
  short: "YD",
  location: "Vellore, India",
  email: "yashvardhandebas@gmail.com",
  phone: "+91 96670 17562",
  photo:
    "https://customer-assets.emergentagent.com/job_yv-creative-studio/artifacts/vld4rprx_Face%20image.jpeg",
  resume:
    "https://customer-assets.emergentagent.com/job_yv-creative-studio/artifacts/6uzy61z3_Yashvardhan.pdf",
  socials: {
    linkedin: "https://www.linkedin.com/in/yashvardhandebas",
    github: "https://github.com/yashvardhandebas",
    email: "mailto:yashvardhandebas@gmail.com",
  },
  roles: ["UI/UX Designer", "Front-End Developer", "Machine Learning"],
  bio:
    "I design interfaces that feel obvious and build systems that don't. Currently studying Information Technology at VIT, working across design, front-end and applied machine learning — with a soft spot for tools that make data legible.",
};

export const STATS = [
  { value: "8.27", label: "CGPA", suffix: "/10" },
  { value: "02", label: "Internships" },
  { value: "10+", label: "Projects Shipped" },
  { value: "1000+", label: "Event Participants" },
];

export const SKILLS = [
  {
    group: "Engineering",
    items: [
      "Python", "Java", "JavaScript", "SQL", "HTML", "CSS",
      "React", "Tailwind CSS", "Bootstrap", "FastAPI", "Git", "AWS",
    ],
  },
  {
    group: "Data & ML",
    items: [
      "Pandas", "NumPy", "Scikit-learn", "TensorFlow", "PyTorch", "Keras",
      "XGBoost", "Power BI", "Matplotlib", "EDA", "Hypothesis Testing", "ROC-AUC",
    ],
  },
  {
    group: "AI & LLM Systems",
    items: ["RAG", "Vector Embeddings", "ChromaDB", "Prompt Engineering", "NLP", "LLM Apps"],
  },
  {
    group: "Design",
    items: ["Figma", "UI Design", "UX Research", "Wireframing", "Design Systems", "Prototyping"],
  },
];

export const EXPERIENCE = [
  {
    company: "Infinite Computer Solutions",
    role: "Data Analytics & Software Development Intern",
    period: "Jun 2026 — Jul 2026",
    location: "Remote",
    bullets: [
      "Conducted EDA on confidential UPPCL electricity meter data across 3+ dataset categories.",
      "Delivered 2 Power BI dashboards and client presentations, cutting manual reporting time by 30%.",
      "Debugged and maintained Java modules across 5+ components in production software, supporting SDE workflows including code review.",
    ],
    stack: ["Python", "Power BI", "Java", "SQL"],
  },
  {
    company: "To The New",
    role: "User Interface Designer Intern",
    period: "May 2025 — Jun 2025",
    location: "Remote",
    bullets: [
      "Designed intuitive interfaces that elevated usability by 25% and boosted user engagement by 30%.",
      "Delivered 10+ wireframes and interactive prototypes in Figma, accelerating development cycles by 20%.",
      "Built reusable component systems with developers, reducing UI inconsistencies by 40%.",
      "Implemented WCAG 2.1-compliant accessibility features, extending reach to 15%+ more users.",
    ],
    stack: ["Figma", "Design Systems", "Prototyping", "WCAG"],
  },
];

export const PROJECTS = [
  {
    id: "zomato-analytics",
    title: "Zomato Analytics",
    tag: "Data / ML",
    year: "2025",
    span: 2,
    summary:
      "End-to-end restaurant analytics on 49,011 records — hypothesis testing, engagement modeling and an XGBoost classifier (80.2% acc / 0.89 AUC).",
    description:
      "Built an end-to-end restaurant analytics pipeline on 49,011 Zomato records covering EDA, statistical hypothesis testing, and binary classification. Validated key business claims using Mann–Whitney U and Spearman correlation tests; found online ordering had a negligible effect on ratings (Δ=0.049, p<0.0001) despite being a top predictor for engagement. Trained an XGBoost classifier reaching 80.2% accuracy and ROC-AUC 0.89; identified price tier as the dominant success predictor (importance=0.26).",
    stack: ["Python", "Pandas", "Scikit-learn", "XGBoost", "SciPy"],
    outcomes: [
      "80.2% classification accuracy",
      "0.89 ROC-AUC",
      "Price tier identified as top driver",
    ],
    github: "https://github.com/yashvardhandebas",
    demo: null,
    accent: "#FF4D00",
  },
  {
    id: "portfolio-lstm-erc",
    title: "Robust Portfolio Optimization",
    tag: "Quant / ML",
    year: "2025",
    span: 1,
    summary:
      "LSTM forecasting + ERC risk allocation lifting Sharpe from -0.187 to 0.465.",
    description:
      "Engineered an Equal-Risk-Contribution allocation strategy that enhanced portfolio stability by 40% versus an equal-weight baseline. Developed LSTM forecasting with noise-aware optimization across 10+ financial assets, reducing forecast error by 18% over a 30-day rolling window. Sharpe Ratio elevated from -0.187 to 0.465 — a 149% gain in risk-adjusted returns.",
    stack: ["Python", "TensorFlow", "LSTM", "NumPy"],
    outcomes: ["+149% Sharpe uplift", "18% lower forecast error", "40% more stability"],
    github: "https://github.com/yashvardhandebas",
    demo: null,
    accent: "#FF4D00",
  },
  {
    id: "ai-clm",
    title: "AI Contract Lifecycle Management",
    tag: "AI / LLM",
    year: "2025",
    span: 2,
    summary:
      "6-agent AI system on FastAPI + Gemini processing 75+ page contracts with 92% RAG precision.",
    description:
      "Architected a 6-agent AI system using FastAPI and the Gemini API to process contracts of 75+ pages end-to-end, eliminating manual triage for 100% of ingested documents. Applied RAG with ChromaDB vector embeddings and OCR to enable semantic clause retrieval at 92% precision on legal documents. Boosted clause-level reasoning accuracy by 35% over baseline prompt-only extraction and cut manual review time by 50%.",
    stack: ["FastAPI", "Gemini", "ChromaDB", "RAG", "OCR"],
    outcomes: ["92% retrieval precision", "50% faster review", "+35% reasoning uplift"],
    github: "https://github.com/yashvardhandebas",
    demo: null,
    accent: "#FF4D00",
  },
  {
    id: "depression-nlp",
    title: "Depression Detection using NLP",
    tag: "NLP",
    year: "2024",
    span: 1,
    summary:
      "Text-based mental health signal detection pipeline with fine-tuned transformer classifier.",
    description:
      "A research-oriented NLP pipeline that pre-processes social text corpora, tokenizes with transformer vocab and fine-tunes a lightweight classifier for early depression signal detection. Emphasis on interpretability and evaluation across imbalanced classes.",
    stack: ["Python", "NLP", "Transformers", "Scikit-learn"],
    outcomes: ["Balanced F1 improvements", "Interpretable feature study"],
    github: "https://github.com/yashvardhandebas",
    demo: null,
    accent: "#FF4D00",
  },
  {
    id: "traffic-management",
    title: "Traffic Management System",
    tag: "Systems",
    year: "2024",
    span: 1,
    summary:
      "Signal-timing optimization simulator with priority queues and adaptive logic.",
    description:
      "Simulated an urban intersection controller with adaptive signal timing driven by weighted priority queues and configurable arrival patterns. Includes throughput, average-wait and starvation diagnostics.",
    stack: ["Java", "Data Structures", "Simulation"],
    outcomes: ["Reduced average wait vs. static timing", "Configurable scenario runner"],
    github: "https://github.com/yashvardhandebas",
    demo: null,
    accent: "#FF4D00",
  },
  {
    id: "llm-compare",
    title: "LLM Response Comparison",
    tag: "AI",
    year: "2024",
    span: 1,
    summary:
      "Side-by-side evaluation harness for multiple LLMs across quality, latency and cost.",
    description:
      "A lightweight tool for running the same prompts across multiple LLM providers and comparing responses on quality, latency and cost. Ships with rubric-based scoring and export.",
    stack: ["Python", "LLM APIs", "Prompt Engineering"],
    outcomes: ["Multi-model side-by-side comparison", "Rubric-based scoring exports"],
    github: "https://github.com/yashvardhandebas",
    demo: null,
    accent: "#FF4D00",
  },
];

export const CERTIFICATIONS = [
  {
    title: "Oracle Certified Generative AI Professional",
    issuer: "Oracle University",
    year: "2025",
  },
  {
    title: "Quantitative Research Job Simulation",
    issuer: "JPMorgan Chase & Co. — Forage",
    year: "2025",
  },
  {
    title: "Python for Data Science and Machine Learning Bootcamp",
    issuer: "Udemy",
    year: "2024",
  },
  {
    title: "BCG Data Science Job Simulation",
    issuer: "BCG — Forage",
    year: "2024",
  },
];

export const LEADERSHIP = [
  {
    org: "CodeChef — VIT Chapter",
    role: "Senior Core Committee",
    period: "2024 — Present",
    highlights: [
      "Organized 10+ events across hackathons, workshops and design jams.",
      "Coordinated 1000+ participants across on-campus and hybrid formats.",
      "Led marketing, UI/UX and website development sub-tracks.",
    ],
  },
];

export const NAV_ITEMS = [
  { id: "about", label: "About" },
  { id: "work", label: "Work" },
  { id: "experience", label: "Experience" },
  { id: "skills", label: "Skills" },
  { id: "resume", label: "Resume" },
  { id: "contact", label: "Contact" },
];
