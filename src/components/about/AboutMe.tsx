import React from "react";
import "./AboutMe.scss";
import { aboutMeLines } from "../../data/aboutMeData";

const AboutMe: React.FC = () => {
    return (
        <div className="about-me-section">
            {aboutMeLines.map((line, index) => (
                <p
                    key={index}
                    dangerouslySetInnerHTML={{ __html: line }}
                    className="about-me-line"
                >
                </p>
            ))}
        </div>
    );
};

export default AboutMe;
