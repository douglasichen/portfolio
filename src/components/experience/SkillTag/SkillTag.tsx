import React from "react";
import { SkillTagProps } from "../../../types/experience"; // Adjusted path
import './SkillTag.scss'; // New SCSS import

const SkillTag: React.FC<SkillTagProps> = ({ skill }) => (
    <span className="skill-tag">
        {skill}
    </span>
);

export default SkillTag;
