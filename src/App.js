import './App.css';
import SideMenu from './components/SideMenu';
import { BrowserRouter as Router, Route, Routes, } from 'react-router-dom'
import Courses from './components/Courses'
import Form from './components/Form'
function App() {
  return (
    <Router >
      <div className="App">
        <SideMenu />
        <div className='container'>
          <Routes >
            <Route path='/courses' element={<Courses />} />
            <Route path='/form' element={<Form />} />
          </Routes>
        </div>
      </div>
    </Router >
  );
}

export default App;
