import React from "react";
import { TimeFrameProps } from "../../../types/experience"; // Adjusted path
import './TimeFrame.scss'; // New SCSS import

const TimeFrame: React.FC<TimeFrameProps> = ({ timeRange }) => (
    <div className="time-frame">
        <p>{timeRange}</p>
    </div>
);

export default TimeFrame;
