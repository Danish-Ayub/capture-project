import React from 'react';
//Page Components
import AboutSection from '../components/AboutSection';
import ServicesSection from '../components/ServicesSection';
import FaqSection from '../components/FaqSection';

const AboutUs = () => {
    return(
        <div>
            <AboutSection />
            <ServicesSection />
            <FaqSection />
        </div>
    );
}

export default AboutUs;