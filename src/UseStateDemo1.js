// import { useState } from "react"

// function UseStateDemo1(){
//     const[count,setCount]=useState(0)
//     return(
//         <>
//           <button onClick={()=>setCount(count+1)}>Increment</button>
//         <button onClick={()=>setCount(count-1)}>Decrement</button>
//           <button onClick={()=>setCount(0)}>Rest</button>
//         </>
//     )

// }
// export default UseStateDemo1

import React, { useState } from 'react';
const Counter = () => {
  // Initialize state
  const [count, setCount] = useState(0);
  const [incrementValue, setIncrementValue] = useState(1);
  const [startingValue, setStartingValue] = useState(0);
  // Function to increment the count
  const incrementCount = () => {
    let newCount = count + incrementValue;
    setCount(newCount);
  };

  // Function to decrement the count
  const decrementCount = () => {
    if(count>0){
         let newCount = count - incrementValue;
    setCount(newCount);
    }
    else{
        setCount(0)
    }
   
  };
  // Function to reset the count
  const resetCount = () => {
    setCount(startingValue);
  };
  // Function to handle change in the increment value
  const handleIncrementChange = (e) => {
    let value = parseInt(e.target.value, 10);
    setIncrementValue(isNaN(value) ? 0 : value);
  };

  // Function to handle change in the starting value
  const handleStartingValueChange = (e) => {
    let value = parseInt(e.target.value, 10);
    setStartingValue(isNaN(value) ? 0 : value);
    setCount(isNaN(value) ? 0 : value);
  };
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={incrementCount}>Increment</button>
      <button onClick={decrementCount}>Decrement</button>
      <button onClick={resetCount}>Reset</button>
      <br />
      <input type="number" value={incrementValue} 
        onChange={handleIncrementChange} 
        placeholder="Increment Value"
      />
      <br />
      <input type="number" value={startingValue} 
        onChange={handleStartingValueChange} 
        placeholder="Starting Value"
      />
    </div>
  );
};
export default Counter;