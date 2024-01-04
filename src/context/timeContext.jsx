import React, { createContext, useEffect, useState } from "react";

export const time = createContext(null);

const TimeContextProvider = (props) => {
    const [curTime, setCurTime] = useState(0);
    const [days, setDays] = useState(0);
    const [hours, setHours] = useState(0);
    const [sec, setSec] = useState(0);
    const [min, setMin] = useState(0);

    const [isRunning, setIsRunning] = useState(false);

    const getInitialTime = () => {
        const t = sec + 60 * min + 60 * 60 * hours + 60 * 60 * 24 * days;
        if(t === 0) {
            alert("Set time please")
        }
        if(t){
            setCurTime(t);
        }
    };

    const reset = () => {
        setIsRunning(false);

        setDays(0);
        setHours(0);
        setMin(0);
        setSec(1);
    };

    const value = {
        days,
        hours,
        sec,
        min,
        curTime,
        isRunning,
        getInitialTime,
        setIsRunning,
        getInitialTime,
        setCurTime,
        reset,
        setDays,
        setHours,
        setMin,
        setSec,
    };

    return <time.Provider value={value}>{props.children}</time.Provider>;
};

export default TimeContextProvider;
