import React, { useEffect, useRef, useState } from "react";
import BackButton from "./BackButton";
import SkillTags from "./SkillTags";
import DetailSection from "./DetailSection";
import { ExpandedCardOverlayProps } from "../../types/experience";

const ExpandedCardOverlay: React.FC<ExpandedCardOverlayProps> = ({
    job,
    rect,
    mainContainerRect,
    onClose,
    isAnimating,
    isClosing,
}) => {
    const contentRef = useRef<HTMLDivElement>(null);
    const [style, setStyle] = useState<React.CSSProperties>({
        position: "fixed",
        top: `${rect.top}px`,
        left: `${rect.left}px`,
        width: `${mainContainerRect.width - 48}px`, // Accounting for container padding
        height: `${rect.height}px`,
        zIndex: 50,
        borderRadius: "0.75rem",
        padding: "2rem",
        backgroundColor: "#111827", // bg-gray-900
        transition: "all 250ms ease-out",
        overflow: "hidden",
        overflowY: "auto", // Always allow scrolling
    });

    // Animation sequence
    useEffect(() => {
        // Only run expansion if not closing
        if (!isClosing) {
            // First set max height to viewport height to enable scrolling if needed
            document.documentElement.style.setProperty(
                "--viewport-height",
                `${window.innerHeight}px`,
            );

            // Start with the card at its original position
            const timer1 = setTimeout(() => {
                // Expand only vertically, keeping horizontal position and width the same
                setStyle((prev) => ({
                    ...prev,
                    top: "5vh",
                    height: "90vh",
                    boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
                }));
            }, 25);

            return () => {
                clearTimeout(timer1);
            };
        } else {
            // If closing, shrink back to original size
            setStyle((prev) => ({
                ...prev,
                top: `${rect.top}px`,
                height: `${rect.height}px`,
                boxShadow: "none",
            }));
        }
    }, [isClosing, rect]);

    // Make sure back button opacity is managed correctly
    const backButtonOpacity = isAnimating || isClosing
        ? "opacity-0"
        : "opacity-100";

    return (
        <>
            {/* Semi-transparent background overlay */}
            <div
                className={`overlay-background ${isClosing ? "closing" : ""}`}
                onClick={onClose}
            />

            {/* Expanded card */}
            <div style={style} className="expanded-card" ref={contentRef}>
                {/* Back button with its own opacity transition */}
                <div className={`back-button-container ${backButtonOpacity}`}>
                    <BackButton onClick={onClose} />
                </div>

                {/* Main content - always visible */}
                <div>
                    <h2 className="expanded-title">
                        {job.title} · {job.company}
                    </h2>
                    <p className="expanded-timerange">{job.timeRange}</p>

                    <div className="expanded-main-content">
                        <p>{job.description}</p>
                        <SkillTags skills={job.skills} />
                    </div>
                </div>

                {/* Details section - always rendered, only hidden when closing */}
                <div
                    className={`expanded-details ${isClosing ? "hidden" : ""}`}
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
