// import"../styles/timer.scss"
// import { useEffect } from "react"
// import { useState } from "react"

// function Timer(){
//     const[seconds,setSeconds]= useState(0)

//     useEffect(()=>{
//         const interval=setInterval(()=>{
//             setSeconds((prevseconds)=>prevseconds+1);
//         },1000)
//         return ()=>{
//             clearInterval(interval);
//         };
//     },[])
//     return(
//         <div>
//            <h2>Timer{seconds}</h2>
//         </div>
//     )
// } 
// export default Timer



// import '../styles/timer.scss'
// import { useState } from 'react'


// function Timer(){
//     const [timer,setTimer] = useState(0)
//     const handleStart = () => {
//         setTimer(timer+1)
//     }
//     const handleStop =()=>{
//         setTimer(timer-1);
//     }
//     const handleRestart=()=>{
//         setTimer(0)
//     }


// return(
//     <div className="main">
//         <div className="timer">
//             <h1> Countdown Timer </h1>
//             <h2> {timer}</h2>
//             <button onClick={handleStart}   >start</button>
//             <button onClick={handleStop}>stop</button>
//             <button onClick={handleRestart}>restart</button>
//         </div>
//     </div>

// );
// }
// export default Timer;



import React, { useState, useRef } from 'react';

const Timer = () => {
  const [time, setTime] = useState(0);
  const intervalRef = useRef(null);

  const startTimer = () => {
    if (intervalRef.current) return; // Prevent multiple intervals

    intervalRef.current = setInterval(() => {
      setTime(prevTime => prevTime + 1);
    }, 1000);
  };

  const stopTimer = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = null; // Reset reference
  };

  const resetTimer = () => {
    stopTimer();
    setTime(0);
    
  };

  return (
    <div>
      <h1>Timer: {time} seconds</h1>
      <button onClick={startTimer}>Start</button>
      <button onClick={stopTimer}>Stop</button>
      <button onClick={resetTimer}>Reset</button>
    </div>
  );
};
export default Timer;




