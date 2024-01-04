import { useContext, useEffect, useState } from "react";
import "./App.css";
import Timer from "./Components/Timer";
import { time } from "./context/timeContext";

function App() {
    const {
        pause,
        reset,
        getInitialTime,
        curTime,
        setDays,
        setHours,
        setMin,
        setSec,
        setCurTime,
        setIsRunning,
        isRunning,
    } = useContext(time);

    useEffect(() => {
        let timer;

        const getTime = () => {
            const t = curTime - 1;

            if (t === 0) {
                setIsRunning(false);
            }

            setDays(Math.floor(t / (60 * 60 * 24)));
            setHours(Math.floor(t / (60 * 60)) % 24);
            setMin(Math.floor(t / 60) % 60);
            setSec(Math.floor(t) % 60);
            setCurTime(t);
        };

        if (curTime) {
            if (isRunning) {
                timer = setInterval(getTime, 1000);
            }
        } else {
            setIsRunning(false);
        }

        return () => clearInterval(timer);
    }, [isRunning, curTime]);

    const start = () => {
        getInitialTime();
        setIsRunning((prev) => !prev);
    };

    return (
        <div className="App">
            <h1>Countdown Timer</h1>
            <h3>By Piyush Bhagwat</h3>

            <div className="timer-container">
                <Timer />

                <div className="controls">
                    <button className="btn start" onClick={start}>
                        {isRunning ? "Pause" : "Start"}
                    </button>
                    <button className="btn reset" onClick={reset}>
                        Reset
                    </button>
                </div>
            </div>
        </div>
    );
}

export default App;
