import React from "react";
import "./Footer.scss";

const Footer: React.FC = () => {
    return (
        <div className="footer-section">
            <p>
                Design inspired by{" "}
                <a
                    href="https://brittanychiang.com"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    brittanychiang.com
                </a>
            </p>
        </div>
    );
};

export default Footer;
