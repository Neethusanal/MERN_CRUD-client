
import './App.css';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'

import Home from './Components/Home';
import Login from './Components/Login';
import Layout from './Layouts/layout';
import EditUser from './Components/EditUser';
function App() {
  return (
    <>
    <Router>
      <Routes>
      <Route path ='/login' element={<Login/>}/>
      <Route element={<Layout/>}>
        <Route path ='/' element={<Home/>}/>
        <Route path='/edit' element={<EditUser/>}/>
        </Route>
      </Routes>
    </Router>

      
    </>
  );
}

export default App;
