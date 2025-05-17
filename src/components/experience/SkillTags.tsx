import React from "react";
import SkillTag from "./SkillTag";
import { SkillTagsProps } from "../../types/experience";

const SkillTags: React.FC<SkillTagsProps> = ({ skills }) => (
    <div className="skill-tags">
        {skills.map((skill, index) => <SkillTag key={index} skill={skill} />)}
    </div>
);

export default SkillTags;
