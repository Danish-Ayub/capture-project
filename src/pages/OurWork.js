import React from "react";
import styled from "styled-components";
import { Link } from 'react-router-dom';
// Images
import athlete from '../img/athlete-small.png';
import theracer from '../img/theracer-small.png';
import goodtimes from '../img/goodtimes-small.png';
// Animations
import { motion } from 'framer-motion';
import { pageAnimation } from '../animation';

const OurWork = () => {
    return (
        <motion.div variants={pageAnimation} initial="hidden" animate="show" exit="exit">
            <Work>
                <Movie>
                    <h2>The Athelete</h2>
                    <div className="line"></div>
                    <Link to="/work/the-athlete">
                        <img src={athlete} alt="athlete" />
                    </Link>
                </Movie>
                <Movie>
                    <h2>The Racer</h2>
                    <div className="line"></div>
                    <Link to="/work/the-racer">
                        <img src={theracer} alt="theracer" />
                    </Link>
                </Movie>
                <Movie>
                    <h2>Good Times</h2>
                    <div className="line"></div>
                    <Link to="/work/good-times">
                        <img src={goodtimes} alt="goodtimes" />
                    </Link>
                </Movie>
            </Work>
        </motion.div>
    );
}

const Work = styled.div`
    min-height: 90vh;
    overflow: hidden;
    padding: 5rem 10rem;
    h2 {
        padding: 1rem 0rem;
    }
`;
const Movie = styled.div`
    padding-bottom: 10rem;
    .line {
        height: 0.5rem;
        background-color: #ccc;
        margin-bottom: 3rem;
    }
    img {
        width: 100%;
        height: 70vh;
        object-fit: cover;
    }
`;

export default OurWork;