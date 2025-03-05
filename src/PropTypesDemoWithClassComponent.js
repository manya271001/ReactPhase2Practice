import PropTypes from "prop-types";
import React, { Component } from "react";

class PropTypesDemoWithClassComponent extends Component{
    render(){
        const{name,age,isStudent} =this.props

        return(
                <div>
                  <h3>Name: {name}</h3>
                 <h3>Age: {age}</h3>
                <h4>Is Student : {isStudent?'Yes':'NO'}</h4>

                </div>
        )
    }
}
PropTypesDemoWithClassComponent.propTypes={
    name: PropTypes.string.isRequired,
    age:PropTypes.number.isRequired,
    isStudent: PropTypes.bool
}
PropTypesDemoWithClassComponent.defaultProps={
    isStudent:false
}
export default PropTypesDemoWithClassComponent;