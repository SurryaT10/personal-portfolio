import { motion } from "framer-motion";
import "../css/contact.css";

const Contact = () => {
  return (
    <div id="contact" className="contact-container">
      <motion.h1
        className="contact-heading"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Get in Touch
      </motion.h1>
      <motion.p
        className="contact-subheading"
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.2 }}
      >
        Let’s connect on social media!
      </motion.p>
      <div className="contact-links">
        <motion.a
          href="https://github.com/SurryaT10"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="contact-link github"
        >
          GitHub
        </motion.a>
        <motion.a
          href="https://www.linkedin.com/in/surrya-thangamuthu-435aa21b6/"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="contact-link linkedin"
        >
          LinkedIn
        </motion.a>
        <motion.a
          href="https://www.instagram.com/surrya_jay/"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="contact-link instagram"
        >
          Instagram
        </motion.a>
      </div>
    </div>
  );
};

export default Contact;
