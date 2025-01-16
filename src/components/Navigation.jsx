import { useState } from 'react'
import { Container, Nav, Navbar  } from 'react-bootstrap'
import { motion } from "framer-motion";
import hiLogo from '../assets/hi.png'
import expertiseLogo from '../assets/expertise.png'
import '../css/navbar.css'

function Navigation() {
  const [activeKey, setActiveKey] = useState('#about');

  const setActive = (name) => {
    setActiveKey(name);
  }

  const getLogo = () => {
    if (activeKey === "#about") return hiLogo;
    if (activeKey === "#expertise") return expertiseLogo;
    return hiLogo;
  };

  return (
    <Navbar expand="lg" fixed="top" color="#86C232">
        <Container style={{ width: '100%' }}>
          <Navbar.Brand 
            onClick={() => setActive("#about")} 
            href="#about">
              <motion.img
                className="logo"
                src={getLogo()}
                alt="Logo"
                animate={{
                  rotate: [0, 15, -15, 0], // Keyframes for rotation
                }}
                transition={{
                  duration: 3, // Duration for one complete cycle
                  repeat: Infinity, // Loop animation infinitely
                }}
              />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse className="justify-content-end" id="responsive-navbar-nav">
            <Nav className="justify-content-end" activeKey={activeKey}>
              <Nav.Link onClick={() => setActive("#about")} href="#about">About</Nav.Link>
              <Nav.Link onClick={() => setActive("#expertise")} href="#expertise">Expertise</Nav.Link>
              <Nav.Link onClick={() => setActive("#projects")} href="#projects">Projects</Nav.Link>
              <Nav.Link onClick={() => setActive("#contact")} href="#contact">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
  )
}

export default Navigation