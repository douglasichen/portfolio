import React from "react";
import "./AboutMe.scss";
import { aboutMeLines } from "../../data/aboutMeData";

const AboutMe: React.FC = () => {
    return (
        <div className="about-me-section">
            {aboutMeLines.map((line, index) => (
                <p key={index} className="about-me-line">
                    {line}
                </p>
            ))}
        </div>
    );
};

export default AboutMe;
