import React from "react";
import { TimeFrameProps } from "../../types/experience";

const TimeFrame: React.FC<TimeFrameProps> = ({ timeRange }) => (
    <div className="time-frame">
        <p>{timeRange}</p>
    </div>
);

export default TimeFrame;
