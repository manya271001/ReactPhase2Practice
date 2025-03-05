import PropTypes from "prop-types";
function PropTypesDemo({name,age,isStudent}){
return(
    <>
    <h3>Name: {name}</h3>
    <h3>Age: {age}</h3>
    <h4>Is Student : {isStudent?'Yes':'NO'}</h4>
</>
)
};
PropTypesDemo.propTypes={
    name: PropTypes.string.isRequired,
    age:PropTypes.number.isRequired,
    isStudent: PropTypes.bool
}
PropTypesDemo.defaultProps={
    isStudent:false
}
export default PropTypesDemo;