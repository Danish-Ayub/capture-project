import React from "react";
// Import images
import home1 from '../img/home1.png';
// Styled
import { About, Description, Image, Hide } from '../styles';
// Framer Motion
import { motion } from "framer-motion";

const AboutSection = () => {
    const titleAnimation = {
        hidden: { opacity: 0 },
        show: { opacity: 1, transition: { duration: 1 } }
    }
    const container = {
        hidden: { x: -100 },
        show: { x: 0, transition: { duration: 0.5 } }
    }

    return (
        <About>
            <Description>
                <motion.div className="title" variants={container} initial="hidden" animate="show">
                    <Hide>
                        <motion.h2
                            variants={titleAnimation}>
                            We work to make</motion.h2>
                    </Hide>
                    <Hide>
                        <motion.h2
                            variants={titleAnimation}>
                            your <span>dreams</span></motion.h2>
                    </Hide>
                    <Hide>
                        <motion.h2
                            variants={titleAnimation}>
                            come true.</motion.h2>
                    </Hide>
                </motion.div>
                <p>Contact us for any photography or videography ideas that you have. We have professionals with amazin skills</p>
                <button>Contac Us</button>
            </Description>
            <Image>
                <img src={home1} alt="guy with the camera" />
            </Image>
        </About >
    );
}

// Styled components

export default AboutSection;