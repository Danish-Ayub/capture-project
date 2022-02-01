import React from "react";
import styled from "styled-components";
import { About } from '../styles';
import Toggle from './Toggle';
import { AnimateSharedLayout } from "framer-motion";

const FaqSection = () => {
    return (
        <Faq>
            <h2>Any Questions <span>FAQ</span></h2>
            <AnimateSharedLayout>
                <Toggle title="How do i start?">
                    <div className="answer">
                        <p>Lorem ipsum dolor sit amet.</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. In magni doloremque nostrum quibusdam, nihil commodi ipsa explicabo odio nemo odit.</p>
                    </div>
                </Toggle>
                <Toggle title="How do jamo lappo?">
                    <div className="answer">
                        <p>Lorem ipsum dolor sit amet.</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. In magni doloremque nostrum quibusdam, nihil commodi ipsa explicabo odio nemo odit.</p>
                    </div>
                </Toggle>
                <Toggle title="What is jamo lappo?">
                    <div className="answer">
                        <p>Lorem ipsum dolor sit amet.</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. In magni doloremque nostrum quibusdam, nihil commodi ipsa explicabo odio nemo odit.</p>
                    </div>
                </Toggle>
                <Toggle title="Where to go now?">
                    <div className="answer">
                        <p>Lorem ipsum dolor sit amet.</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. In magni doloremque nostrum quibusdam, nihil commodi ipsa explicabo odio nemo odit.</p>
                    </div>
                </Toggle>
            </AnimateSharedLayout>
        </Faq>
    );
}

const Faq = styled(About)`
    display: block;
    span {
        display: block;
    }
    h2 {
        padding-bottom: 2rem;
        font-weight: lighter;
    }
    .faq-line {
        background: #ccc;
        height: 0.2rem;
        width: 100%;
    }
    .question {
        h4 {
            font-size: 2rem;
            padding-bottom: 2rem;
        }
        padding: 3rem 0;
        cursor: pointer;
    }
    .answer {
        p {
            padding: 1rem 0rem 2rem;
        }
    }
`;

export default FaqSection;