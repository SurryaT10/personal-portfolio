import { motion } from "framer-motion";
import "../css/experience.css";

const experienceData = [
  {
    company: "SellWizr",
    role: "AI Engineer Intern",
    duration: "July 2025 – Present",
    responsibilities: [
      "Working on NLP models for speech-to-text, summarization, and sentiment analysis of sales calls.",
      "Planning to fine-tune LLMs (OpenAI, Mistral) for objection handling and personalized email generation.",
      "Prototyping with FastAPI and React to integrate AI features into CRM platforms.",
      "Designing algorithms to extract buyer signals and score leads from conversation data."
    ],
  },
  {
    company: "SUNY New Paltz",
    role: "AI Research Intern",
    duration: "Aug 2023 – May 2025",
    responsibilities: [
      "Developed RAG pipelines using LangChain, Pinecone, and GPT-3.5.",
      "Used LangGraph for structured multi-step LLM workflows.",
      "Mentored students in ML, NLP, and Python development."
    ],
  },
  {
    company: "ZoomRx",
    role: "Machine Learning Engineer",
    duration: "Jan 2022 – Aug 2023",
    responsibilities: [
      "Built document intelligence pipelines using FAISS and OpenAI embeddings, boosting throughput by 70%.",
      "Deployed Whisper-based speech-to-text model for medical calls, reducing turnaround by 60%.",
      "Created contextual search engines and integrated ML APIs in Dockerized microservices."
    ],
  },
];

function Experience() {
  return (
    <div id="experience" className="experience-container">
      <motion.h2
        className="section-title"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Experience
      </motion.h2>

      <div className="experience-cards">
        {experienceData.map((exp, index) => (
          <motion.div
            className="experience-card"
            key={index}
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.3 }}
          >
            <h3 className="role">{exp.role}</h3>
            <div className="meta">
              <span className="company">{exp.company}</span>
              <span className="duration">{exp.duration}</span>
            </div>
            <ul className="responsibilities">
              {exp.responsibilities.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Experience;
