import React from "react";
// Import images
import home1 from '../img/home1.png';
// Styled
import { About, Description, Image, Hide } from '../styles';
// Animations
import { motion } from "framer-motion";
import { titleAnim, fade, photoAnim } from "../animation";
// Router
import { Link } from "react-router-dom";

const AboutSection = () => {

    return (
        <About>
            <Description>
                <div className="title">
                    <Hide>
                        <motion.h2 variants={titleAnim}>We work to make</motion.h2>
                    </Hide>
                    <Hide>
                        <motion.h2 variants={titleAnim}>your <span>dreams</span></motion.h2>
                    </Hide>
                    <Hide>
                        <motion.h2 variants={titleAnim}>come true.</motion.h2>
                    </Hide>
                </div>
                <motion.p variants={fade}>Contact us for any photography or videography ideas that you have. We have professionals with amazin skills</motion.p>
                <Link to="/contact"><motion.button variants={fade}>Contac Us</motion.button></Link>
            </Description>
            <Image>
                <motion.img variants={photoAnim} src={home1} alt="guy with the camera" />
            </Image>
        </About >
    );
}

// Styled components

export default AboutSection;