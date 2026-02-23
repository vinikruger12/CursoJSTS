import React from "react";
import { secondsToTime } from "../utils/seconds-to-time";

interface Props{
    mainTime: number;
}

export function Timer(props:Props){
    return(
        <div className="timer">{secondsToTime(props.mainTime)}</div>
    )
}