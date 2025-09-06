import React, { useEffect, useRef, useState } from "react";
import Card from "../Card";
import ExpandedCardOverlay from "../ExpandedCardOverlay";
import { jobExperiences, projects, allExperiences } from "../../../data/jobExperiences";
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

    // Handle URL hash changes on mount and when hash changes
    useEffect(() => {
        const handleHashChange = () => {
            const hash = window.location.hash.slice(1); // Remove the # symbol
            if (hash) {
                // Find the experience with matching slug
                const experience = allExperiences.find(exp => exp.slug === hash);
                if (experience) {
                    // Find the card element to get its position
                    const cardElement = document.querySelector(`[data-experience-id="${experience.id}"]`);
                    if (cardElement) {
                        const rect = cardElement.getBoundingClientRect();
                        handleCardClick(experience.id, rect);
                    }
                }
            }
        };

        // Handle initial hash on mount
        handleHashChange();

        // Listen for hash changes
        window.addEventListener('hashchange', handleHashChange);
        
        return () => {
            window.removeEventListener('hashchange', handleHashChange);
        };
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

        // Update URL hash
        const experience = allExperiences.find(exp => exp.id === id);
        if (experience) {
            window.location.hash = experience.slug;
        }

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

        // Clear URL hash
        if (window.location.hash) {
            window.history.pushState("", document.title, window.location.pathname);
        }

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

    // Get expanded job data from all experiences
    const expandedJob = expandedId
        ? allExperiences.find((job) => job.id === expandedId)
        : null;

    return (
        <div ref={containerRef} className="experience-list-container">
            {/* Experiences */}
            {jobExperiences.map((job) => (
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
