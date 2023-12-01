
import './App.css';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Home from './Components/Home';
import Login from './Components/Login';
function App() {
  return (
    <>
    <Router>
      <Routes>
      <Route path ='/login' element={<Login/>}/>
        <Route path ='/' element={<Home/>}/>
      </Routes>
    </Router>

      
    </>
  );
}

export default App;
