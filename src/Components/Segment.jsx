import React, { useContext } from "react";
import { time } from "../context/timeContext";

const Segment = ({value, name, onChange}) => {
    const {isRunning} = useContext(time);
    return (
        <div className="segment">
            <input type="number" readOnly={isRunning} className="value"  value={value} onChange={onChange}/>
            <div className="name">{name}</div>
        </div>
    );
};

export default Segment;
