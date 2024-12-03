import { useEffect, useState } from "react"


function Title(){
    const [count,setCount] = useState(0)

    useEffect(()=>{
        document.title = `Effect ${count}`
        console.log("useffect");
        
    },)

    return(
        <div className="main">
            <p>Count {count}</p>
            <button onClick={()=>{setCount(count+1)}}>Click</button>

        </div>
    )
}
export default Title;