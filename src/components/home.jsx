import '../styles/home.scss'
import { useState } from 'react';

const Home = () => {
  // let count = 0;

  const [count, setCount] = useState(0)

  const handleIncrement=()=>{
    // count++;  
    setCount(count+1)
  }

  const handleDecrement = ()=>{
    // count--;
    setCount(count -1)
    
  }  
  return (
    <div id='home'>
      <div className="content">
        <h3>Increament / Decreament</h3>
        <div className="actions">
          <button onClick={handleIncrement}>+</button>
          <input type="text" value={count}/>
          <button onClick={handleDecrement}>-</button>
        </div>
      </div>
    </div>
  );
}
export default Home;
