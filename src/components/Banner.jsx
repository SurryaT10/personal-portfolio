
import "../css/banner.css";
import { motion } from "framer-motion";
import logo from '../assets/profile-pic.jpg';

function Banner() {
  return (
    <div id="about" className="banner-container">
      <div className="content">
        <div className="text-section">
          <h1 className="title">
            Hi, I&apos;m <span className="highlight">Surrya</span> 👋
          </h1>
          <p className="description">
            A passionate <span className="highlight">Fullstack Developer</span>, 
            <span className="highlight"> Machine Learning</span>, and 
            <span className="highlight"> AI Engineer</span>. 
            I love building scalable applications, training smarter algorithms, and innovating 
            at the intersection of <span className="highlight">technology</span> and <span className="highlight">creativity</span>.
          </p>
          <motion.ul
            className="interests-list"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <motion.li
              className="interest-item"
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              🔍 Machine Learning
            </motion.li>
            <motion.li
              className="interest-item"
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              📘 Deep Learning
            </motion.li>
            <motion.li
              className="interest-item"
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.5 }}
            >
              🤖 Generative AI
            </motion.li>
            <motion.li
              className="interest-item"
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.5 }}
            >
              🧩 Problem Solving
            </motion.li>
          </motion.ul>
        </div>

        {/* Right Section: Image */}
        <div className="image-section">
          <motion.img
            src={logo}
            alt="Surrya Thangamuthu"
            className="image"
            initial={{ scale: 0.8, opacity: 0.8 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1 }}
            whileHover={{ scale: 1.1, transition: { duration: 0.3 } }}
            whileTap={{ scale: 0.95, transition: { duration: 0.2 } }}
          />
        </div>
      </div>

      {/* Animated Background Elements */}
      <div className="animation-container">
        
      </div>
    </div>
  );
};

// Add animations using keyframes in CSS
const globalStyles = document.createElement("style");
globalStyles.innerHTML = `
  @keyframes moveCircle {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-20px); }
  }
  @keyframes moveTriangle {
    0%, 100% { transform: rotate(0deg); }
    50% { transform: rotate(15deg); }
  }
`;
document.head.appendChild(globalStyles);

export default Banner;