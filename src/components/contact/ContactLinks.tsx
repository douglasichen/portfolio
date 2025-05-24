import React from "react";
import "./ContactLinks.scss";
// @ts-ignore
import { siGithub, siLinkedin } from "https://esm.sh/simple-icons@13/icons";
import { contactInfo } from "../../data/contactData";

interface ContactLinkProps {
    href: string;
    svgPath: string;
    title: string;
    fillColor?: string;
}

const ContactLink: React.FC<ContactLinkProps> = (
    { href, svgPath, title, fillColor },
) => (
    <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={title}
        className="contact-link"
    >
        <svg
            role="img"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            fill={fillColor || "currentColor"}
        >
            <title>{title}</title>
            <path d={svgPath} />
        </svg>
    </a>
);

const ContactLinks: React.FC = () => {
    const githubPath = siGithub.path;
    const linkedinPath = siLinkedin.path;

    return (
        <div className="contact-links-container">
            <ContactLink
                href={contactInfo.githubUrl}
                svgPath={githubPath}
                title={siGithub.title}
                fillColor={`var(--color-white)`}
            />
            <ContactLink
                href={contactInfo.linkedinUrl}
                svgPath={linkedinPath}
                title={siLinkedin.title}
                fillColor={`var(--color-white)`}
            />
        </div>
    );
};

export default ContactLinks;
