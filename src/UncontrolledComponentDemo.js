import { useRef } from "react";

function UncontrolledComponentDemo(){
    const inputRef=useRef(null);
    const hndleSubmit=(event)=>{
        event.preventDefault();
        alert(`input value: ${inputRef.current.value}`)
    }
return(
    <>
    <form onSubmit={hndleSubmit}>
    <input type="text"  ref={inputRef}></input>
    <button type="submit">Submit</button>

    </form>
    </>
)
}
export default UncontrolledComponentDemo;