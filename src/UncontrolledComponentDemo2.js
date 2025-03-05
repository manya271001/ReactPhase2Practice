import React, { Component } from "react";
class UncontrolledComponentDemo2 extends Component{
    constructor(props){
        this.inputRef=React.createRef();
    }
    HandleSubmit=()=>{
        console.log(this.inputRef.current.value)
    }
    render(){
        return(
            <>
            <input type="text" ref={this.inputRef}
            ></input>
            <button onClick={this.HandleSubmit}>Show</button>
            </>
        )
    }
}
export default UncontrolledComponentDemo2