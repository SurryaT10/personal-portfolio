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
            I&apos;m passionate about building <span className="highlight">AI-powered backend systems</span>, 
            crafting <span className="highlight">Machine Learning</span> applications, and delivering scalable, 
            efficient <span className="highlight">Fullstack solutions</span>. With a focus on creating impactful and reliable tools, 
            I thrive at the intersection of data, technology, and innovation.
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
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}

export default Banner;
