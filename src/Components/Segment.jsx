import React from "react";

const Segment = ({value, name}) => {
    return (
        <div className="segment">
            <div className="value">{value}</div>
            <div className="name">{name}</div>
        </div>
    );
};

export default Segment;
