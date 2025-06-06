import React, { useEffect, useRef, useState } from "react";
import BackButton from "../BackButton";
import SkillTags from "../SkillTags";
import DetailSection from "../DetailSection";
import MediaComponent from "../MediaComponent";
import { ExpandedCardOverlayProps } from "../../../types/experience";
import useBodyScrollLock from "../../../hooks/useBodyScrollLock"; // Import the custom hook
import "./ExpandedCardOverlay.scss";

const ExpandedCardOverlay: React.FC<ExpandedCardOverlayProps> = ({
    job,
    rect,
    onClose,
    isAnimating: _isAnimating,
    isClosing,
}) => {
    const contentRef = useRef<HTMLDivElement>(null);
    const [style, setStyle] = useState<React.CSSProperties>({
        top: rect.top,
        left: rect.left,
        width: rect.width,
        height: rect.height,
    });

    // Use the custom hook to manage body scroll lock
    // Lock scroll when the card is not closing (i.e., it's opening or open)
    useBodyScrollLock(!isClosing);

    // Add global scroll event listener to redirect scroll to expanded card
    useEffect(() => {
        if (isClosing) return;

        const handleGlobalScroll = (event: WheelEvent) => {
            event.preventDefault();

            if (contentRef.current) {
                const scrollAmount = event.deltaY;
                contentRef.current.scrollTop += scrollAmount;
            }
        };

        // Add event listener to capture all wheel events
        document.addEventListener("wheel", handleGlobalScroll, {
            passive: false,
        });

        return () => {
            document.removeEventListener("wheel", handleGlobalScroll);
        };
    }, [isClosing]);

    useEffect(() => {
        // This useEffect now only handles the card's animation and sizing
        if (!isClosing) {
            // First set max height to viewport height to enable scrolling if needed
            document.documentElement.style.setProperty(
                "--viewport-height",
                `${window.innerHeight}px`,
            );

            // Animate card to full screen
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

                <div
                    className={`fadeable-content-section ${contentOpacityClass}`}
                >
                    <h2 className="expanded-title">
                        {job.title}
                        {job.company ? ` · ${job.company}` : ""}
                    </h2>
                    <p className="expanded-timerange">{job.timeRange}</p>

                    <div className="expanded-main-content">
                        <p>{job.description}</p>
                        <SkillTags skills={job.skills} />
                    </div>
                </div>
                {job.details.media && job.details.media.length > 0 && (
                    <MediaComponent media={job.details.media} />
                )}

                <div
                    className={`expanded-details fadeable-content-section ${contentOpacityClass}`}
                >
                    {job.details.details.map((section, index) => (
                        <DetailSection
                            key={index}
                            title={section.title}
                            items={section.points}
                        />
                    ))}
                </div>
            </div>
        </>
    );
};

export default ExpandedCardOverlay;
