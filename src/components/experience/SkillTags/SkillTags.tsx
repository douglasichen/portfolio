import React from "react";
import SkillTag from "../SkillTag"; // Adjusted path
import { SkillTagsProps } from "../../../types/experience"; // Adjusted path
import './SkillTags.scss'; // New SCSS import

const SkillTags: React.FC<SkillTagsProps> = ({ skills }) => (
    <div className="skill-tags">
        {skills.map((skill, index) => <SkillTag key={index} skill={skill} />)}
    </div>
);

export default SkillTags;
