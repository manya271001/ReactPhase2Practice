import Greetings from "./PropsDemoGreeting";

function PropsDemo({id}){
    return(
        <>
        <h1>WELCOME</h1>
        <Greetings name="Manyaa"/>
        <h6>Your Emp Id is {id}</h6>
        </>
    )
}
export default PropsDemo;