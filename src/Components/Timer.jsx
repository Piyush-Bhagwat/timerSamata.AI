import React, { useContext, useEffect, useState } from "react";
import Segment from "./Segment";
import { time } from "../context/timeContext";

const Timer = () => {
    const {days, setDays, hours,setHours, sec, setSec, min, setMin} = useContext(time);


    return (
        <div className="timer">

            <Segment value={days} name="Days" onChange={(e)=>setDays(parseInt(e.target.value))}/>
            <span className="colon">:</span>

            <Segment value={hours} name="Hours" onChange={(e)=>setHours(parseInt(e.target.value))} />
            <span className="colon">:</span>

            <Segment value={min} name="Minutes" onChange={(e)=>setMin(parseInt(e.target.value))} />
            <span className="colon">:</span>

            <Segment value={sec} name="Seconds" onChange={(e)=>setSec(parseInt(e.target.value))}/>
        </div>
    );
};

export default Timer;
