import React from "react";
import { DetailSectionProps } from "../../../types/experience";
import "./DetailSection.scss";

const DetailSection: React.FC<DetailSectionProps> = ({ title, items }) => (
    <div className="detail-section">
        <h3>{title}</h3>
        <ul>
            {items.map((item, index) => (
                <li
                    key={index}
                    dangerouslySetInnerHTML={{ __html: item }}
                />
            ))}
        </ul>
    </div>
);

export default DetailSection;
