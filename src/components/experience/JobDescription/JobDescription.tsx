import React from "react";
import { JobDescriptionProps } from "../../../types/experience";
import "./JobDescription.scss";

const JobDescription: React.FC<JobDescriptionProps> = ({ description }) => (
    <p className="job-description">
        {description}
    </p>
);

export default JobDescription;
