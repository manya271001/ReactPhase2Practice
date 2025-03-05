import { useRef } from "react";
const UncontrolledDemo3=()=>{
 const inputRefName=useRef(null);
 const inputRefEmail=useRef(null);
    const hndleSubmit=(event)=>{
        event.preventDefault();
         const emailValue = inputRefEmail.current.value;
        if(inputRefName.current.value===""){
            alert(" please enter name!!!!")
        }
        else if(inputRefEmail.current.value===""){
            alert("please enter email!!!")
        }
        else if (!emailValue.includes("@") || !emailValue.includes(".")) {
      alert("Please enter a valid email address that contains both '@' and '.'!");
    }
        else{
        alert(`Hii your name is ${inputRefName.current.value} and your email is  ${inputRefEmail.current.value} `)}
    }
    return(
        <>
         <form onSubmit={hndleSubmit}>
            <label>Enter Name</label>
    <input type="text" placeholder="Name" ref={inputRefName} required></input> <br></br>
    <label>Enter Email</label>
     <input type="email" placeholder="Email" ref={inputRefEmail} required></input> <br></br>
    <button type="submit">Submit</button>

    </form>
        </>
    )
}
export default UncontrolledDemo3