import "./ResumeButton.scss";

export const ResumeButton = () => {
    const handleResumeClick = () => {
        // Open the resume PDF in a new tab
        window.open("/public/resume.pdf", "_blank");
    };

    return (
        <button className="resume-button" onClick={handleResumeClick}>
            View Resume
        </button>
    );
};
