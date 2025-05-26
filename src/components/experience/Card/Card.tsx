import React, { useRef } from "react";
import TimeFrame from "../TimeFrame";
import JobTitle from "../JobTitle";
import JobDescription from "../JobDescription";
import SkillTags from "../SkillTags";
import { CardProps } from "../../../types/experience";
import "./Card.scss";

const Card: React.FC<CardProps> = ({
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

    const shouldDim = (hoveredId !== null && hoveredId !== id) ||
        (expandedId !== null);

    return (
        <div
            ref={cardRef}
            className={`card ${shouldDim ? "dimmed" : ""}`}
            onMouseEnter={() => expandedId === null && onMouseEnter(id)}
            onMouseLeave={() => expandedId === null && onMouseLeave()}
            onClick={() => {
                if (expandedId === null && cardRef.current) {
                    const rect = cardRef.current.getBoundingClientRect();
                    onClick(id, rect);
                }
            }}
        >
            <div className="card-content">
                <TimeFrame timeRange={timeRange} />
                <div className="card-details">
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

export default Card;
