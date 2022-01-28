import React from "react";
import { Link } from 'react-router-dom';
import styled from "styled-components";

const Nav = () => {
    return (
        <StyledNav>
            <h1 className="logo"><Link to="/">Capture</Link></h1>
            <ul>
                <li>
                    <Link to="/">About Us</Link>
                </li>
                <li>
                    <Link to="/work">Our Work</Link>
                </li>
                <li>
                    <Link to="/contact">Contact Us</Link>
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

export default Nav;