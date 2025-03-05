import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Profile from './Profile';
import UserList from './UserList';



function App() {
  return (
    <div className="App">
    <Router>
     <div className='navbar'>
      <Link to='/' className='links'>Home</Link>
      <Link to='/about' className='links'>About</Link>
      <Link to='/contact' className='links'>Contact</Link>
      <Link to='/user-list' className='links'>User List</Link>
     </div>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/about' element={<About/>} />
      <Route path='/contact' element={<Contact/>} />
       <Route path='/profile/:username' element={<Profile />} />  
        <Route path='/user-list' element={<UserList />} />

    </Routes>
    </Router>
    </div>
  );
}

export default App;
