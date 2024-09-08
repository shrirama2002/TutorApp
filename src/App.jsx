
import './App.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import SignUp from './Components/SignUp/SignUp.jsx';
import SignIn from './Components/SignIn/SignIn.jsx';
import Dashboard from './Components/Dashboard/Dashboard.js';
import HomePage from './Components/HomePage/HomePage.jsx';

function App() {
  return (
        <Router>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/signin" element={<SignIn />} />
                <Route path="/signup" element={<SignUp />} /> 
                <Route path="/dashboard" element={<Dashboard/>} />
            </Routes>
        </Router>
  );
}

export default App;
