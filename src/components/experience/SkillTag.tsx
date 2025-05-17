import React from "react";
import { SkillTagProps } from "../../types/experience";

const SkillTag: React.FC<SkillTagProps> = ({ skill }) => (
    <span className="skill-tag">
        {skill}
    </span>
);

export default SkillTag;
