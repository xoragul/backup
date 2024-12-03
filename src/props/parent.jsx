import Child from "./child";

function Parents(){
    const message="Hello from the parents"
    return(
        <div>
            <Child message={message}/>
        </div>
    );
}
export default Parents;