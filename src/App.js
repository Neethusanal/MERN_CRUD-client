
import './App.css';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'

import Home from './Components/Home';
import Login from './Components/Login';
import Layout from './Layouts/layout';
import EditUser from './Components/EditUser';
import AddUser from './Components/AddUser';

function App() {
  return (
    <>
    <Router>
      <Routes>
      <Route path ='/' element={<Login/>}/>
      <Route element={<Layout/>}>
        <Route path ='/home' element={<Home/>}/>
        <Route path='/edit' element={<EditUser/>}/>
        <Route path='/createuser' element={<AddUser/>}/>
        
        </Route>
      </Routes>
    </Router>

      
    </>
  );
}

export default App;
