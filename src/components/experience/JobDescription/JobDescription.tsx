import React from "react";
import { JobDescriptionProps } from "../../../types/experience"; // Adjusted path
import './JobDescription.scss'; // New SCSS import

const JobDescription: React.FC<JobDescriptionProps> = ({ description }) => (
    <p className="job-description">
        {description}
    </p>
);

export default JobDescription;
