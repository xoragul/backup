import { useEffect, useState } from "react"

function Effect(){
    const [secont,setsecont]=useState(0)
    const [isRunning,setRunning]=useState(false)

    useEffect(()=>{
    //     const interval=setInterval(()=>{
    //         setsecont((prevSecond)=>prevSecond+1)
    //     })

    // },1000)
        let intervel;
        if(isRunning){
            intervel = setInterval(()=>{
                setsecont((preveSecond)=>preveSecond+1)
            },1000)
        } 
        return()=> clearInterval(intervel);
    },[isRunning])

    const startButton=() =>{
        setRunning(true)
    }
    const stopButton=()=>{
        setRunning(false)
    }

    return(
          <div className="main">
            <div className="timer">
            <h1>Timer </h1>
            <h2>{secont} </h2>
            <button onClick={startButton}>Start</button>
            <button onClick={stopButton} >stop</button>   
            </div>
          </div>
    )
}
export default Effect;