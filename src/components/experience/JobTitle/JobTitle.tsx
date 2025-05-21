import React from "react";
// import { ArrowUpRight } from "lucide-react";
import { JobTitleProps } from "../../../types/experience"; // Adjusted path
import './JobTitle.scss'; // New SCSS import

const JobTitle: React.FC<JobTitleProps> = ({ title, company, isHovered }) => (
    <div className="job-title">
        <h2 className={isHovered ? "hovered" : ""}>
            {title} · {company}
        </h2>
        {/* <ArrowUpRight className={isHovered ? "hovered" : ""} size={20} /> */}
    </div>
);

export default JobTitle;
