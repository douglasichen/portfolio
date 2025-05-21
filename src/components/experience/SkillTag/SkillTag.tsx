import React from "react";
import { SkillTagProps } from "../../../types/experience";
import "./SkillTag.scss";

const SkillTag: React.FC<SkillTagProps> = ({ skill }) => (
    <span className="skill-tag">
        {skill}
    </span>
);

export default SkillTag;
