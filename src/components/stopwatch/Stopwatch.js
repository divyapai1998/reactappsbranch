import { Button, Grid } from "@material-ui/core";
import React, { useRef, useState } from "react";
import { makeStyles } from "@material-ui/core";

const usestyles = makeStyles({
    outerDivStyle: {
        color: "black",
        backgroundImage: "linear-gradient(to right,#ddd6f3, #faaca8)",
        padding: "2em 4em",
        borderRadius: "2em"
    },
    InnerDivStyle: {
    
        padding: "3em 8em",
        backgroundColor: "whitesmoke",
        color: "black",
    },
    btngroup: {
        marginTop: "4%",
        justifyContent: "center"
    }

})

let counter = 0;
let minutesCount =0;
const Stopwatch = (props) => {
    let intervalRef = useRef(null)
    const [seconds, setSeconds] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [startorStop, setStartorStop] = useState(false)


    const startTimer = (val) => {
        if (val === false) {
            setStartorStop(true);
            intervalRef.current = setInterval(() => {
                counter = counter + 1;
                if(counter === 60){
                    minutesCount = minutesCount+1;
                    setMinutes(minutesCount);
                    counter =0;
                    setSeconds(counter)
                }
                setSeconds(counter)
            }, 1000);
        }
    }
    const stopTimer = (val) => {
        if (val === true) {
            setStartorStop(false); clearInterval(intervalRef.current);
        }
    }
    const resetTimer = () => {
        counter = 0;
        minutesCount = 0;
        setSeconds(counter); setMinutes(minutesCount); setStartorStop(false); clearInterval(intervalRef.current)
    }

    const classes = usestyles(props)
    return (
        <div className={classes.outerDivStyle}>
            <h1>STOPWATCH APP</h1>
            <div className={classes.InnerDivStyle}>
                <div><h2>{minutes<10?'0'+minutes:minutesCount}:{seconds<10?'0'+seconds:seconds}</h2></div>
            </div>
            <Grid className={classes.btngroup} container  >
                <Grid item xs={3}><Button onClick={() => stopTimer(startorStop)} variant='contained'><span className="material-icons">pause_circle</span></Button></Grid>
                <Grid item xs={3}><Button onClick={() => startTimer(startorStop)} variant='contained'><span className="material-icons">play_arrow</span></Button></Grid>
                <Grid item xs={3}><Button onClick={resetTimer} variant='contained'><span className="material-icons">restart_alt</span></Button></Grid>
            </Grid>
        </div>
    )
}
export default Stopwatch