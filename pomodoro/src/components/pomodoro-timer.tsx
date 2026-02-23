import React, { useEffect } from "react";
import { useInterval } from "../hooks/use-interval";
import { Button } from "./button";
import { Timer } from "./timer";
import { secondsToTime } from "../utils/seconds-to-time";
const bellStart = require('../sounds/bell-start.mp3');
const bellFinish = require('../sounds/bell-finish.mp3');

const audioStartWorking = new Audio(bellStart);
const audioStopWorking = new Audio(bellFinish);

interface Props {
    pomodoroTime: number;
    pomodoroShortRestTime: number;
    pomodoroLongRestTime: number;
    cycles: number;
}

export function PomodoroTimer(props: Props){
    const [mainTime, setMainTime] = React.useState(props.pomodoroTime);
    const [timeCounting, setTimeCounting] = React.useState(false);
    const [working, setWorking] = React.useState(false); 
    const [resting, setResting] = React.useState(false);
    const [cyclesQtdManager, setCyclesQtdManager] = React.useState(new Array(props.cycles - 1).fill(true));

    const [completedCycles, setCompletedCycles] = React.useState(0);
    const [fullWorkingTime, setfullWorkingTime] = React.useState(0);
    const [numberOfPomodoros, setnumberOfPomodoros] = React.useState(0);

    

    useInterval(() => {
        setMainTime(mainTime-1);
    },
     timeCounting ? 1000: null,
    );

    const configureRest = (Long: boolean) =>{
        setTimeCounting(true);
        setWorking(false);
        setResting(true);
        setMainTime(props.pomodoroTime);

        if(Long){
            setMainTime(props.pomodoroLongRestTime);
        }
        else setMainTime(props.pomodoroShortRestTime);

        audioStopWorking.play();
    }

    const configureWork = () =>{
        setTimeCounting(true);
        setWorking(true);
        setResting(false);
        audioStartWorking.play();
    }

    useEffect(() => {
        if(working) document.body.classList.add('working');
        if(resting) document.body.classList.remove('working');

        if(mainTime > 0) return;
        if(working && cyclesQtdManager.length > 0){
            configureRest(false);
            cyclesQtdManager.pop();
        } else if(working && cyclesQtdManager.length <= 0){
            configureRest(true);
            setCyclesQtdManager(new Array(props.cycles - 1).fill(true));
            setCompletedCycles(completedCycles + 1);
        }

        if(working) setnumberOfPomodoros(numberOfPomodoros + 1);
        if(resting) configureWork();

    }, [working, resting, mainTime, configureRest, setCyclesQtdManager, configureWork, cyclesQtdManager, numberOfPomodoros, props.cycles, completedCycles, setCompletedCycles]);

    return(
        <div className="pomodoro">
            <h2>You are: working</h2>
            <Timer mainTime={mainTime}></Timer>

            <div className="controls">
                <Button text="Work" onClick={() => configureWork()}></Button>
                <Button text="Rest" onClick={() => configureRest(false)}></Button>
                <Button className={!working && !resting ? 'hidden' : ''} text={timeCounting ? "Pause" : "Play"} onClick={() => setTimeCounting(!timeCounting)}></Button>
            </div>

            <div className="details">
                <p>Ciclos concluidos: {completedCycles}</p>
                <p>Horas trabalhadas: {secondsToTime(fullWorkingTime)}</p>
                <p>Numero de pomodoros: {numberOfPomodoros}</p>
            </div>

        </div>
    )
}