import { useState } from "react";
const ControlledComponentDemo=()=>{
  const[count,setCount]=useState(0);
return(
    <>
        <p>count: {count}</p>
        <button onClick={()=>setCount(count+1)}>Increment</button>
    </>
)
}
export default ControlledComponentDemo;