import { motion } from "framer-motion";
import "../css/experience.css";

const experienceData = [
  {
    company: "SellWizr",
    role: "AI Engineer",
    duration: "July 2025 – Present",
    responsibilities: [
      "Fine-tuned Gemma-3n-E4B with Unsloth/PEFT LoRA adapters on CRM-specific JSONL data; applied custom chat templates for structured I/O, enabling accurate domain-adapted Text-to-SQL generation across CRM queries.","Designed and implemented a Text-to-SQL evaluation pipeline for the Spider2 benchmark: loaded fine-tuned LoRA adapters with AutoPeftModelForCausalLM, dynamically injected database schemas into prompts, and enforced SQL-only outputs, enabling large-scale benchmark evaluation.",
      "Integrated MemoRAG into the Text-to-SQL pipeline by embedding CRM schemas with BGE-M3 and leveraging memory beacons for schema retrieval; improved query-time schema selection and reduced irrelevant context, boosting valid SQL generation accuracy."
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
