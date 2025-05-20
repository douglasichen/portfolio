import React, { useRef } from "react";
import TimeFrame from "../TimeFrame"; // Adjusted path
import JobTitle from "../JobTitle"; // Adjusted path
import JobDescription from "../JobDescription"; // Adjusted path
import SkillTags from "../SkillTags"; // Adjusted path
import { JobCardProps } from "../../../types/experience"; // Adjusted path
import './JobCard.scss'; // New SCSS import

const JobCard: React.FC<JobCardProps> = ({
    timeRange,
    title,
    company,
    description,
    skills,
    isHovered,
    onMouseEnter,
    onMouseLeave,
    onClick,
    id,
    hoveredId,
    expandedId,
}) => {
    const cardRef = useRef<HTMLDivElement>(null);

    // Calculate opacity based on hover and expanded states
    const shouldDim = (hoveredId !== null && hoveredId !== id) ||
        (expandedId !== null);

    return (
        <div
            ref={cardRef}
            className={`job-card ${shouldDim ? "dimmed" : ""}`}
            onMouseEnter={() => expandedId === null && onMouseEnter(id)}
            onMouseLeave={() => expandedId === null && onMouseLeave()}
            onClick={() => {
                if (expandedId === null && cardRef.current) {
                    const rect = cardRef.current.getBoundingClientRect();
                    onClick(id, rect);
                }
            }}
        >
            <div className="job-card-content">
                <TimeFrame timeRange={timeRange} />
                <div className="job-details">
                    <JobTitle
                        title={title}
                        company={company}
                        isHovered={isHovered}
                    />
                    <JobDescription description={description} />
                    <SkillTags skills={skills} />
                </div>
            </div>
        </div>
    );
};

export default JobCard;
