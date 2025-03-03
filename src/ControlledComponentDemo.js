import { useState } from "react";
const ControlledComponentDemo=()=>{
  const[count,setCount]=useState(0);
return(
    <>
        <p>count: {count}</p>
        <button onClick={()=>setCount(count+1)}>Increment</button>
         <button onClick={() => count > 0 && setCount(count - 1)}>Decrement</button>
    </>
)
}
export default ControlledComponentDemo;