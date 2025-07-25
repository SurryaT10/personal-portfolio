import { useState } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { motion, AnimatePresence } from "framer-motion";
import hiLogo from "../assets/logo/hi.png";
import expertiseLogo from "../assets/logo/expertise.png";
import workLogo from "../assets/logo/work.png";
import greetingLogo from "../assets/logo/greeting.png";
import experienceLogo from "../assets/logo/experience.png";
import "../css/navbar.css";

function Navigation() {
  const [activeKey, setActiveKey] = useState("#about");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const setActive = (name) => {
    setActiveKey(name);
    setIsMobileMenuOpen(false); // Close mobile menu on selection
  };

  const getLogo = () => {
    if (activeKey === "#about") return hiLogo;
    if (activeKey === "#expertise") return expertiseLogo;
    if (activeKey === "#projects") return workLogo;
    if (activeKey === "#contact") return greetingLogo;
    if (activeKey === "#experience") return experienceLogo;
    return hiLogo;
  };

  return (
    <>
      <Navbar expand="lg" fixed="top" className="navbar-custom">
        <Container style={{ width: "100%" }}>
          <Navbar.Brand onClick={() => setActive("#about")} href="#about">
            <motion.img
              className="logo"
              src={getLogo()}
              alt="Logo"
              animate={{ rotate: [0, 15, -15, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
            />
          </Navbar.Brand>
          {/* Mobile Hamburger Icon (visible on mobile only) */}
          <div
            className="mobile-menu-toggle d-lg-none"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <span className="hamburger-icon"></span>
            <span className="hamburger-icon"></span>
            <span className="hamburger-icon"></span>
          </div>
          {/* Desktop Navigation */}
          <Navbar.Collapse className="justify-content-end d-none d-lg-block" id="responsive-navbar-nav">
            <Nav activeKey={activeKey}>
              <Nav.Link onClick={() => setActive("#about")} href="#about">
                About
              </Nav.Link>
              <Nav.Link onClick={() => setActive("#experience")} href="#experience">
                Experience
              </Nav.Link>
              <Nav.Link onClick={() => setActive("#expertise")} href="#expertise">
                Expertise
              </Nav.Link>
              <Nav.Link onClick={() => setActive("#projects")} href="#projects">
                Projects
              </Nav.Link>
              <Nav.Link onClick={() => setActive("#contact")} href="#contact">
                Contact
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="mobile-menu-overlay d-lg-none"
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{ duration: 0.3 }}
          >
            {/* Close Button */}
            <button
              className="mobile-menu-close"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              &times;
            </button>
            <Nav className="flex-column text-center">
              <Nav.Link onClick={() => setActive("#about")} href="#about">
                About
              </Nav.Link>
              <Nav.Link onClick={() => setActive("#expertise")} href="#expertise">
                Expertise
              </Nav.Link>
              <Nav.Link onClick={() => setActive("#projects")} href="#projects">
                Projects
              </Nav.Link>
              <Nav.Link onClick={() => setActive("#contact")} href="#contact">
                Contact
              </Nav.Link>
            </Nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default Navigation;
