import React, { useEffect, useRef, useState } from "react";
import JobCard from "../JobCard"; // Adjusted path
import ExpandedCardOverlay from "../ExpandedCardOverlay"; // Adjusted path
import jobExperiences from "../../../data/jobExperiences"; // Adjusted path
import './ExperienceList.scss'; // New SCSS import

const ExperienceList = () => {
    const [hoveredId, setHoveredId] = useState<number | null>(null);
    const [expandedId, setExpandedId] = useState<number | null>(null);
    const [expandedRect, setExpandedRect] = useState<DOMRect | null>(null);
    const [mainContainerRect, setMainContainerRect] = useState<DOMRect | null>(
        null,
    );
    const [isAnimating, setIsAnimating] = useState(false);
    const [isClosing, setIsClosing] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);

    // Measure container dimensions on mount
    useEffect(() => {
        const element = containerRef.current;
        if (element) {
            setMainContainerRect(element.getBoundingClientRect());
        }
    }, []);

    const handleMouseEnter = (id: number) => {
        if (expandedId === null) {
            setHoveredId(id);
        }
    };

    const handleMouseLeave = () => {
        if (expandedId === null) {
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

        // Update animation state after expansion completes
        setTimeout(() => {
            setIsAnimating(false);
        }, 250);
    };

    const handleCloseExpanded = () => {
        // Start closing animation sequence
        setIsClosing(true);

        // After animation completes, remove card
        setTimeout(() => {
            setExpandedId(null);
            setExpandedRect(null);
            setIsAnimating(false);
            setIsClosing(false);
        }, 250);
    };

    // Get expanded job data
    const expandedJob = expandedId
        ? jobExperiences.find((job) => job.id === expandedId)
        : null;

    return (
        <div ref={containerRef} className="experience-list-container">
            <style>
                {`
        body {
          overflow: ${expandedId ? "hidden" : "auto"};
        }
        
        :root {
          --viewport-height: 100vh;
        }
      `}
            </style>

            <h1 className="section-title">
                Work Experience
            </h1>

            {jobExperiences.map((job) => (
                <JobCard
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
