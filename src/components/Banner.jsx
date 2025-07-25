import "../css/banner.css";
import { motion } from "framer-motion";
import logo from "../assets/profile-pic.jpg";

function Banner() {
  return (
    <div id="about" className="banner-container">
      <motion.div
        className="content"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {/* Left Section: Image */}
        <div className="image-section">
          <motion.img
            src={logo}
            alt="Surrya Thangamuthu"
            className="image"
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            whileHover={{ scale: 1.1, transition: { duration: 0.3 } }}
          />
        </div>

        {/* Right Section: Text */}
        <div className="text-section">
          <motion.h1
            className="title"
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            Hi, I&apos;m <span className="highlight">Surrya</span> 👋
          </motion.h1>
          <motion.p
            className="description"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            I&apos;m a <span className="highlight">Machine Learning Engineer</span> specializing in <span className="highlight">NLP</span>, <span className="highlight">Generative AI</span>, and <span className="highlight">LLM-powered applications</span>. I&apos;ve built everything from <span className="highlight">RAG pipelines</span> and document understanding tools to scalable APIs that bring models to life.

            My stack includes <span className="highlight">PyTorch</span>, <span className="highlight">scikit-learn</span>, <span className="highlight">Hugging Face</span>, <span className="highlight">LangChain</span>, <span className="highlight">FastAPI</span>, and <span className="highlight">Docker</span>. I’m all about taking ideas from prototype to production-fast.

            I recently completed my <span className="highlight">Master’s in Computer Science</span> and thrive in fast-paced teams where AI meets engineering. If you&apos;re building in this space, let&apos;s connect.
          </motion.p>

          <motion.div
            className="cta-section"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <motion.a
              href="#contact"
              className="cta-button"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Let&apos;s Build Something Amazing 🚀
            </motion.a>

            <motion.a
              href="https://drive.google.com/file/d/19BencJiRUzitktgl114zT-IlKMxNjj-E/view?usp=drive_link"
              className="cta-button resume-button"
              download
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              style={{ marginLeft: '12px' }}
            >
              📄 Download Resume
            </motion.a>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}

export default Banner;
