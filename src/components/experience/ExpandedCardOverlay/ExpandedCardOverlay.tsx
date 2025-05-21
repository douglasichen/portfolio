import React, { useEffect, useRef, useState } from "react";
import BackButton from "../BackButton";
import SkillTags from "../SkillTags";
import DetailSection from "../DetailSection";
import { ExpandedCardOverlayProps } from "../../../types/experience";
import './ExpandedCardOverlay.scss';

const ExpandedCardOverlay: React.FC<ExpandedCardOverlayProps> = ({
    job,
    rect,
    onClose,
    isAnimating,
    isClosing,
}) => {
    const contentRef = useRef<HTMLDivElement>(null);
    const [style, setStyle] = useState<React.CSSProperties>({
        top: rect.top,
        left: rect.left,
        width: rect.width,
        height: rect.height,
    });

    useEffect(() => {
        if (!isClosing) {
            // First set max height to viewport height to enable scrolling if needed
            document.documentElement.style.setProperty(
                "--viewport-height",
                `${window.innerHeight}px`,
            );

            // may need to wrap this in timer (see past commits) if it fails
            setStyle((prev) => ({
                ...prev,
                top: "0",
                height: "100vh",
            }));
        } else {
            setStyle((prev) => ({
                ...prev,
                top: rect.top,
                height: rect.height,
            }));
        }
    }, [isClosing, rect]);

    const contentOpacityClass = isClosing ? "content-fade-out" : "";

    return (
        <>
            <div
                className={`overlay-background ${isClosing ? "closing" : ""}`}
                onClick={onClose}
            />

            <div style={style} className="expanded-card" ref={contentRef}>
                <div className={`back-button-container ${contentOpacityClass}`}>
                    <BackButton onClick={onClose} />
                </div>

                <div className={`fadeable-content-section ${contentOpacityClass}`}>
                    <h2 className="expanded-title">
                        {job.title} · {job.company}
                    </h2>
                    <p className="expanded-timerange">{job.timeRange}</p>

                    <div className="expanded-main-content">
                        <p>{job.description}</p>
                        <SkillTags skills={job.skills} />
                    </div>
                </div>

                <div
                    className={`expanded-details fadeable-content-section ${contentOpacityClass}`}
                >
                    <DetailSection
                        title="Key Achievements"
                        items={job.details.achievements}
                    />
                    <DetailSection
                        title="Projects"
                        items={job.details.projects}
                    />
                    <DetailSection
                        title="Technologies"
                        items={[job.details.technologies.join(", ")]}
                    />
                </div>
            </div>
        </>
    );
};

export default ExpandedCardOverlay;
