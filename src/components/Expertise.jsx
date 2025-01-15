import "../css/expertise.css";
import { motion } from "framer-motion";
import { FaCode, FaRobot, FaLightbulb, FaChartLine } from "react-icons/fa";

function Expertise() {
  const expertiseData = [
    {
      icon: <FaCode />,
      title: "Full Stack Development",
      description:
        "Building responsive, user-friendly web applications and scalable backends using modern frameworks like React, Django, and FastAPI.",
    },
    {
      icon: <FaRobot />,
      title: "Machine Learning & AI",
      description:
        "Training smarter models and solving real-world problems using TensorFlow, PyTorch, and cutting-edge AI algorithms.",
    },
    {
      icon: <FaLightbulb />,
      title: "Generative AI",
      description:
        "Exploring the creative world of AI, from text generation to image synthesis, leveraging models like GANs and Diffusion models.",
    },
    {
      icon: <FaChartLine />,
      title: "Problem Solving",
      description:
        "Strong foundation in data structures and algorithms, solving complex challenges efficiently.",
    },
  ];

  return (
    <div className="expertise-container" id="expertise">
      <motion.h2
        className="expertise-heading"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        My <span className="highlight">Expertise</span>
      </motion.h2>
      <div className="expertise-cards">
        {expertiseData.map((item, index) => (
          <motion.div
            className="expertise-card"
            key={index}
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.1, delay: index * 0.2 }}
            whileHover={{
              scale: 1.05,
              boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.2)",
            }}
          >
            <div className="icon">{item.icon}</div>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Expertise;
