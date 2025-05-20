import React from "react";
import { DetailSectionProps } from "../../../types/experience"; // Adjusted import path
import './DetailSection.scss';

const DetailSection: React.FC<DetailSectionProps> = ({ title, items }) => (
    <div className="detail-section">
        <h3>{title}</h3>
        <ul>
            {items.map((item, index) => <li key={index}>{item}</li>)}
        </ul>
    </div>
);

export default DetailSection;
