import './App.css';
import ControlledComponentDemo from './ControlledComponentDemo';
import ControlledComponentDemo2 from './ControlledComponentDemo2';
import UncontrolledComponentDemo from './UncontrolledComponentDemo';

function App() {
  return (
   <>
   <div className='App'>
    <ControlledComponentDemo/>  
    <ControlledComponentDemo2/>
    <UncontrolledComponentDemo/>
   </div>
   
   </>
  );
}

export default App;
