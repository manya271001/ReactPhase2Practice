import { useState } from "react"

const ControlledComponentDemo2=()=>{
    const [inputValue,setInputValue]=useState("")
    function handleInput(event){
        setInputValue(event.target.value);
    }
return(
    <>
    <p>Current Value:{inputValue}</p>
    <input type="text" value={inputValue} onChange={handleInput}></input>
    </>
)
}
export default ControlledComponentDemo2