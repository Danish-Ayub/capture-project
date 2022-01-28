import React from "react";
// Import images
import home1 from '../img/home1.png';
// Styled
import styled from "styled-components";
import {About, Description, Image, Hide} from '../styles';

const AboutSection = () => {
    return (
        <About>
            <Description>
                <div className="title">
                    <Hide>
                        <h2>We work to make</h2>
                    </Hide>
                    <Hide>
                        <h2>your <span>dreams</span></h2>
                    </Hide>
                    <Hide>
                        <h2>come true.</h2>
                    </Hide>
                </div>
                <p>Contact us for any photography or videography ideas that you have. We have professionals with amazin skills</p>
                <button>Contac Us</button>
            </Description>
            <Image>
                <img src={home1} alt="guy with the camera" />
            </Image>
        </About>
    );
}

// Styled components

export default AboutSection;