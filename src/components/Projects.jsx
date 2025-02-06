import { motion } from "framer-motion";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import compressly from "../assets/project/compressly.png";
import premierLeaguePrediction from "../assets/project/premierleagueprediction.png";
import mechHugo from "../assets/project/mechhugo.png"
import cakephpJsonAPI from "../assets/project/cakephpjsonapi.png";
import fashionGAN from "../assets/project/fashiongan.png";
import chess180 from "../assets/project/chess180.jpg"
import "../css/projects.css";
import Modal from "./Model";

const projects = [
  {
    title: "Compressly",
    description:
      <>
        Developed an advanced compression tool achieving a <span className="highlight">70% reduction</span> in file size by leveraging <span className="highlight">optimized algorithms</span>, ensuring minimal structural degradation and high similarity preservation.
      </>,
    image: compressly,
    link: "https://compressly-frontend.onrender.com/",
  },
  {
    title: "Fashion GAN Model",
    description:
      <>
        Implemented a <span className="highlight">Generative Adversarial Network (GAN)</span> trained on the <span className="highlight">Fashion-MNIST</span> dataset to generate high-quality, realistic fashion images. Optimized training stability using techniques like <span className="highlight">gradient penalty</span> and <span className="highlight">adaptive learning rate</span>.
      </>,
    image: fashionGAN,
    link: "https://github.com/SurryaT10/Fashion_GAN",
  },
  {
    title: "Premier League Match Predictor",
    description:
      <>
        Built a <span className="highlight">Simple Neural Network</span> model to predict <span className="highlight">Premier League</span> match outcomes with 60% accuracy. Focused on mitigating <span className="highlight">overfitting</span> using <span className="highlight">L2 regularization</span>, <span className="highlight">dropout layers</span>, and advanced <span className="highlight">weight initialization</span> techniques.,
      </>,
    image: premierLeaguePrediction,
    link: "https://github.com/SurryaT10/PremierLeague2025Prediction",
  },
  {
    title: "SUNY New Paltz Course Recommendation Chatbot",
    description:
      <>
        Designed and developed a <span className="highlight">course recommendation chatbot</span> using the <span className="highlight">OpenAI API</span>. Integrated <span className="highlight">FastAPI</span> for the backend and designed <span className="highlight">decision-making algorithms</span> to provide personalized course recommendations based on completed prerequisites and student interests.
      </>,
    image: mechHugo,
    link: "https://github.com/SurryaT10/TA_ChatBot",
  },
  {
    title: "Open Source Contribution: PHP JSON API Upgrade",
    description:
      <>
        Enhanced the <span className="highlight">josbier JSON API</span> package to support <span className="highlight">PHP 8</span> and <span className="highlight">CakePHP 3.4</span>. Refactored legacy code and resolved compatibility issues to improve <span className="highlight">API performance</span> and maintainability.
      </>,
    image: cakephpJsonAPI,
    link: "https://github.com/SurryaT10/cakephp40-json-api",
  },
  {
    title: "Chess180 - AI-Powered Chess Strategy Trainer",
    shortDescription: (
      <>
        Chess180 is a unique chess variant where key rules and mechanics differ significantly from traditional chess...
      </>
    ),
    description: (
      <ul className="project-description">
        <li>Chess180 is a unique chess variant where key rules and mechanics differ significantly from traditional chess.</li>
        <li>Unlike regular chess, Chess180 introduces unconventional piece movements and alternative win conditions that challenge players to rethink their strategies.</li>
        <li>Implementing <span className="highlight">Minimax algorithm</span> with <span className="highlight">Alpha-Beta pruning</span> for efficient move selection.</li>
        <li>The <span className="highlight">AI Reinforcement Learning system</span> is designed to understand and adapt to these distinctive rules and strategies specific to Chess180.</li>
      </ul>
    ),
    image: chess180,
    expand: true
    
  },
];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const handleClick = (project) => {
    if (!project.expand) return;

    setSelectedProject(project);
  }

  return (
    <div id="projects" className="container py-5">
      <h2 className="text-center mb-4">Projects</h2>
      <p className="text text-center text-muted mb-5">
        Explore some of the projects I’ve worked on, including case studies and innovative solutions.
      </p>
      <div className="row">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="col-md-4 mb-4"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.3 }}
          >
            <div className="card shadow-sm border-0">
              <img
                src={project.image}
                alt={project.title}
                className="card-img-top"
                style={{ height: "200px", objectFit: "cover" }}
              />
              <div className="card-body text-center">
                <h5 className="card-title">{project.title}</h5>
                <p className="card-text text-muted project-description">
                  { project.expand ? 
                  <motion.span
                    animate={{ opacity: [0, 1, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                    style={{ fontWeight: "bold", color: "#ffcc00", marginRight: "8px" }}
                  >
                    🚧 In Progress...
                  </motion.span> : null }
                  { project.expand ? project.shortDescription : project.description }
                </p>
                <a target="_blank" onClick={() => handleClick(project)} href={project.link} className="btn btn-primary">
                  { project.expand ? "Read More" : "View" }
                </a>
                
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Modal */}
      <Modal
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
        title={selectedProject?.title}
        description={selectedProject?.description}
      />
    </div>
  );
};

export default Projects;
