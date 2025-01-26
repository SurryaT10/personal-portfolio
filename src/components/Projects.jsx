import { motion } from "framer-motion";
import "bootstrap/dist/css/bootstrap.min.css";
import compressly from "../assets/project/compressly.png";
import premierLeaguePrediction from "../assets/project/premierleagueprediction.png";
import mechHugo from "../assets/project/mechhugo.png"
import cakephpJsonAPI from "../assets/project/cakephpjsonapi.png";
import fashionGAN from "../assets/project/fashiongan.png";
import "../css/projects.css";

const projects = [
  {
    title: "File Compression Tool",
    description:
      "Developed an advanced compression tool achieving a 70% reduction in file size by leveraging optimized algorithms, ensuring minimal structural degradation and high similarity preservation.",
    image: compressly,
    link: "https://compressly-frontend.onrender.com/",
  },
  {
    title: "Fashion GAN Model",
    description:
      "Implemented a Generative Adversarial Network (GAN) trained on the Fashion-MNIST dataset to generate high-quality, realistic fashion images. Optimized training stability using techniques like gradient penalty and adaptive learning rate.",
    image: fashionGAN,
    link: "https://github.com/SurryaT10/Fashion_GAN",
  },
  {
    title: "Premier League Match Predictor",
    description:
      "Built a Simple Neural Network model to predict Premier League match outcomes with 60% accuracy. Focused on mitigating overfitting using L2 regularization, dropout layers, and advanced weight initialization techniques.",
    image: premierLeaguePrediction,
    link: "https://github.com/SurryaT10/PremierLeague2025Prediction",
  },
  {
    title: "SUNY New Paltz Course Recommendation Chatbot",
    description:
      "Designed and developed a course recommendation chatbot using the OpenAI API. Integrated FastAPI for the backend and designed decision-making algorithms to provide personalized course recommendations based on completed prerequisites and student interests.",
    image: mechHugo,
    link: "https://github.com/SurryaT10/TA_ChatBot",
  },
  {
    title: "Open Source Contribution: PHP JSON API Upgrade",
    description:
      "Enhanced the josbier JSON API package to support PHP 8 and CakePHP 3.4. Refactored legacy code and resolved compatibility issues to improve API performance and maintainability.",
    image: cakephpJsonAPI,
    link: "https://github.com/SurryaT10/cakephp40-json-api",
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
                <a target="_blank" href={project.link} className="btn btn-primary">
                  View
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
