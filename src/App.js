import MyForm from './FormikDemo';
import './App.css';
import ControlledComponentDemo from './ControlledComponentDemo';
import ControlledComponentDemo2 from './ControlledComponentDemo2';
import PropTypesDemo from './PropTypesDemo';
import PropTypesDemoWithClassComponent from './PropTypesDemoWithClassComponent';
import PropsDemo from './PropsDemo';
import UncontrolledComponentDemo from './UncontrolledComponentDemo';
import UncontrolledComponentDemo2 from './UncontrolledComponentDemo2';
import UncontrolledDemo3 from './UncontrolledDemo3';
import UseStateDemo1 from './UseStateDemo1';
import Counter from './UseStateDemo1';

function App() {
  console.log("NODE_ENV:", process.env.NODE_ENV);

  return (
   <>
   <div className='App'>
    {/* <ControlledComponentDemo/>  
    <ControlledComponentDemo2/>
    <UncontrolledComponentDemo/>
    <UncontrolledComponentDemo2/> */}
    {/* <UncontrolledDemo3/> */}

    {/* <PropsDemo id='90'/> */}
    {/* <PropTypesDemo  /> */}
    {/* <MyForm/> */}
   {/* <UseStateDemo1/> */}
    <Counter/>

   {/* <PropTypesDemoWithClassComponent name='Hrishabh'  isStudent='true'/> */}
   </div>
   
   </>
  );
}

export default App;
