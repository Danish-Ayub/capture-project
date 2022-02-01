import React from "react";
import { Link, useLocation } from 'react-router-dom';
import styled from "styled-components";
import { motion } from "framer-motion";

const Nav = () => {
    const location = useLocation();
    const activePath = location.pathname;

    return (
        <StyledNav>
            <h1 className="logo"><Link to="/">Capture</Link></h1>
            <ul>
                <li>
                    <Link to="/">About Us</Link>
                    <Line
                        transition={{ duration: 0.5 }}
                        initial={{ width: "0%" }}
                        animate={{ width: activePath === "/" ? "50%" : "0%" }}>
                    </Line>
                </li>
                <li>
                    <Link to="/work">Our Work</Link>
                    <Line
                        transition={{ duration: 0.5 }}
                        initial={{ width: "0%" }}
                        animate={{ width: activePath === "/work" ? "50%" : "0%" }}>
                    </Line>
                </li>
                <li>
                    <Link to="/contact">Contact Us</Link>
                    <Line
                        transition={{ duration: 0.5 }}
                        initial={{ width: "0%" }}
                        animate={{ width: activePath === "/contact" ? "50%" : "0%" }}>
                    </Line>
                </li>
            </ul>
        </StyledNav>
    );
}

const StyledNav = styled.nav`
    min-height: 10vh;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: auto;
    padding: 1rem 10rem;
    background-color: #282828;
    .logo a {
        font-size: 1.5rem;
        font-weight: lighter;
    }
    a {
        color: white;
        text-decoration: none;
    }
    ul {
        display: flex;
        list-style: none;
    }
    li {
        padding: 0 1rem;
        position: relative;
    }
`;

const Line = styled(motion.div)`
    height: 3px;
    background-color: #23d997;
    width: 0;
    position: absolute;
    bottom: -50%;
    left: 17px;
`;

export default Nav;