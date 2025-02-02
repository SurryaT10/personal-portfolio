import { motion } from "framer-motion";
import "bootstrap/dist/css/bootstrap.min.css";
import compressly from "../assets/project/compressly.png";
import premierLeaguePrediction from "../assets/project/premierleagueprediction.png";
import mechHugo from "../assets/project/mechhugo.png"
import cakephpJsonAPI from "../assets/project/cakephpjsonapi.png";
import fashionGAN from "../assets/project/fashiongan.png";
import chess180 from "../assets/project/chess180.jpg"
import "../css/projects.css";

const projects = [
  {
    title: "File Compression Tool",
    description:
      <>
        Developed an advanced compression tool achieving a 70% reduction in file size by leveraging <b>optimized algorithms</b>, ensuring minimal structural degradation and high similarity preservation.
      </>,
    image: compressly,
    link: "https://compressly-frontend.onrender.com/",
  },
  {
    title: "Fashion GAN Model",
    description:
      <>
        Implemented a <b>Generative Adversarial Network (GAN)</b> trained on the <b>Fashion-MNIST</b> dataset to generate high-quality, realistic fashion images. Optimized training stability using techniques like <b>gradient penalty</b> and <b>adaptive learning rate</b>.
      </>,
    image: fashionGAN,
    link: "https://github.com/SurryaT10/Fashion_GAN",
  },
  {
    title: "Premier League Match Predictor",
    description:
      <>
        Built a <b>Simple Neural Network</b> model to predict <b>Premier League</b> match outcomes with 60% accuracy. Focused on mitigating <b>overfitting</b> using <b>L2 regularization</b>, <b>dropout layers</b>, and advanced <b>weight initialization</b> techniques.,
      </>,
    image: premierLeaguePrediction,
    link: "https://github.com/SurryaT10/PremierLeague2025Prediction",
  },
  {
    title: "SUNY New Paltz Course Recommendation Chatbot",
    description:
      <>
        Designed and developed a <b>course recommendation chatbot</b> using the <b>OpenAI API</b>. Integrated <b>FastAPI</b> for the backend and designed <b>decision-making algorithms</b> to provide personalized course recommendations based on completed prerequisites and student interests.
      </>,
    image: mechHugo,
    link: "https://github.com/SurryaT10/TA_ChatBot",
  },
  {
    title: "Open Source Contribution: PHP JSON API Upgrade",
    description:
      <>
        Enhanced the <b>josbier JSON API</b> package to support <b>PHP 8</b> and <b>CakePHP 3.4</b>. Refactored legacy code and resolved compatibility issues to improve <b>API performance</b> and maintainability.
      </>,
    image: cakephpJsonAPI,
    link: "https://github.com/SurryaT10/cakephp40-json-api",
  },
  {
    title: "Chess180 - AI-Powered Chess Strategy Trainer",
    description: (
      <>
        <motion.span
          animate={{ opacity: [0, 1, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          style={{ fontWeight: "bold", color: "#ffcc00", marginRight: "8px" }}
        >
          🚧 In Progress...
        </motion.span>
        Developing an <b>AI-driven chess training system</b> that analyzes player moves and suggests optimal strategies.
        Implementing <b>Minimax algorithm</b> with <b>Alpha-Beta pruning</b> for efficient move selection.
      </>
    ),
    image: chess180,
  },
];



const Projects = () => {
  return (
    <div id="projects" className="container py-5">
      <h2 className="text-center mb-4">Projects</h2>
      <p className="text-center text-muted mb-5">
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
                <p className="card-text text-muted">{project.description}</p>
                { project.link ? 
                  <a target="_blank" href={project.link} className="btn btn-primary">
                    View
                  </a> : null
                }
                
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
