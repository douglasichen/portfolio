import React from "react";
import { JobTitleProps } from "../../../types/experience";
import "./JobTitle.scss";

const JobTitle: React.FC<JobTitleProps> = ({ title, company, isHovered }) => (
    <div className="job-title">
        <h2 className={isHovered ? "hovered" : ""}>
            {title} · {company}
        </h2>
    </div>
);

export default JobTitle;
