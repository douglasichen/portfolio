import React, { useEffect, useRef, useState } from "react";
import Card from "../Card";
import ExpandedCardOverlay from "../ExpandedCardOverlay";
import jobExperiences from "../../../data/jobExperiences";
import "./ExperienceList.scss";

interface ExperienceListProps {
    onExpandedChange?: (isExpanded: boolean) => void;
}

const ExperienceList: React.FC<ExperienceListProps> = (
    { onExpandedChange },
) => {
    const [hoveredId, setHoveredId] = useState<number | null>(null);
    const [expandedId, setExpandedId] = useState<number | null>(null);
    const [expandedRect, setExpandedRect] = useState<DOMRect | null>(null);
    const [mainContainerRect, setMainContainerRect] = useState<DOMRect | null>(
        null,
    );
    const [isAnimating, setIsAnimating] = useState(false);
    const [isClosing, setIsClosing] = useState(false);
    const [supportsHover, setSupportsHover] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);

    // Detect hover support and measure container dimensions on mount
    useEffect(() => {
        // Check if device supports hover
        setSupportsHover(window.matchMedia('(hover: hover)').matches);
        
        const element = containerRef.current;
        if (element) {
            setMainContainerRect(element.getBoundingClientRect());
        }
    }, []);

    const handleMouseEnter = (id: number) => {
        if (supportsHover && expandedId === null) {
            setHoveredId(id);
        }
    };

    const handleMouseLeave = () => {
        if (supportsHover && expandedId === null) {
            setHoveredId(null);
        }
    };

    const handleCardClick = (id: number, rect: DOMRect) => {
        // Update container rect in case of window resize
        const element = containerRef.current;
        if (element) {
            setMainContainerRect(element.getBoundingClientRect());
        }

        setExpandedId(id);
        setExpandedRect(rect);
        setIsAnimating(true);
        setIsClosing(false);

        // Notify parent that card is expanded
        onExpandedChange?.(true);

        // Update animation state after expansion completes
        setTimeout(() => {
            setIsAnimating(false);
        }, 250);
    };

    const handleCloseExpanded = () => {
        // Start closing animation sequence
        setIsClosing(true);

        // Notify parent that card is no longer expanded
        onExpandedChange?.(false);

        // After animation completes, remove card
        setTimeout(() => {
            setExpandedId(null);
            setExpandedRect(null);
            setIsAnimating(false);
            setIsClosing(false);
        }, 250);
    };

    // Separate experiences from projects
    const experiences = jobExperiences.filter(job => job.timeRange !== "PROJECT");
    const projects = jobExperiences.filter(job => job.timeRange === "PROJECT");

    // Get expanded job data
    const expandedJob = expandedId
        ? jobExperiences.find((job) => job.id === expandedId)
        : null;

    return (
        <div ref={containerRef} className="experience-list-container">
            {/* Experiences */}
            {experiences.map((job) => (
                <Card
                    key={job.id}
                    id={job.id}
                    timeRange={job.timeRange}
                    title={job.title}
                    company={job.company}
                    description={job.description}
                    skills={job.skills}
                    isHovered={hoveredId === job.id}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                    onClick={handleCardClick}
                    hoveredId={hoveredId}
                    expandedId={expandedId}
                />
            ))}

            {/* Separator between experiences and projects */}
            {projects.length > 0 && (
                <div className="section-separator"></div>
            )}

            {/* Projects */}
            {projects.map((job) => (
                <Card
                    key={job.id}
                    id={job.id}
                    timeRange={job.timeRange}
                    title={job.title}
                    company={job.company}
                    description={job.description}
                    skills={job.skills}
                    isHovered={hoveredId === job.id}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                    onClick={handleCardClick}
                    hoveredId={hoveredId}
                    expandedId={expandedId}
                />
            ))}

            {/* Expanded card overlay */}
            {expandedId && expandedRect && mainContainerRect && expandedJob && (
                <ExpandedCardOverlay
                    job={expandedJob}
                    rect={expandedRect}
                    mainContainerRect={mainContainerRect}
                    onClose={handleCloseExpanded}
                    isAnimating={isAnimating}
                    isClosing={isClosing}
                />
            )}
        </div>
    );
};

export default ExperienceList;
