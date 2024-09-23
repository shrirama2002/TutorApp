
import './App.css';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import SignUp from './Components/SignUp/SignUp.jsx';
import SignIn from './Components/SignIn/SignIn.jsx';
import Dashboard from './Components/Dashboard/Dashboard.js';
import HomePage from './Components/HomePage/HomePage.jsx';
import MainLayout from './Components/bookopenlayout/MainLayout.jsx'
import { useParams } from 'react-router-dom';
import LandingPage from './Components/LandingPage/LandingPage.jsx';


function App() {
  return (
        <Router>
            <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/signin" element={<SignIn />} />
                <Route path="/signup" element={<SignUp />} /> 
                <Route path="/dashboard" element={<Dashboard/>} />
                <Route path="/homepage" element={<HomePage/>} />
                {/* <Route path="/mainlayout" element={<MainLayout/>}/> */}
                <Route path="/dashboard/:bookId" element={<MainLayoutWrapper />} />
            </Routes>
        </Router>
  );
}


function MainLayoutWrapper() {
  
  const { bookId } = useParams(); // Get bookId from URL parameters
  
  return <MainLayout bookId={bookId} />;
}


export default App;
