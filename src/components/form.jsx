import { useRef, useState } from "react";
import "../styles/form.scss"


function Form (){
    const name = useRef("")
    const username = useRef("")
    const email = useRef("")
    const password = useRef("")


    const handleSubmit = ()=>{
        // console.log(name.current.value);  
        // console.log(username.current.value);
        // console.log(email.current.value);
        // console.log(password.current.value);


        const data = {
            "name":name.current.value,
            "username":username.current.value,
            "email":email.current.value,
            "password":password.current.value
        }
        console.log(data);

        


    // const name=useRef("")

    // const validation=(data)=>{
    //     console.log(data);

    //     const pattern =new RegExp(/\d+/g)
    //     console.log(pattern.test(data));        
    // }

    // const handleSubmit=(e)=>{
    //     e.preventDefault()
    //     validation(name.current.value)
    //     validation(username.current.value)
    //     validation(email.current.value)
    //     validation(password.current.value)
        

    }
    

    return(
        <div className="form">           
            {/* <form onsubmit={handleSubmit}/> */}
             <span>Name:</span><input type="text" ref={name}/>
             <span>Username:</span><input type="text" ref={username} />
             <span>Email</span><input type="email" ref={email}/>
             <span>Paaword</span><input type="password" ref={password}/>
             <button onClick={handleSubmit}>Click</button>
        </div>
    )
}

export default Form;



