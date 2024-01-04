import React from "react";
import Segment from "./Segment";

const Timer = () => {
    return (
        <div className="timer">
            <Segment value={38} name="Days" />
            <span className="colon">:</span>
            
            <Segment value={38} name="Hours" />
            <span className="colon">:</span>

            <Segment value={38} name="Minutes" />
            <span className="colon">:</span>

            <Segment value={38} name="Seconds" />
        </div>
    );
};

export default Timer;
