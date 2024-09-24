
import './App.css';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import SignUp from './Components/SignUp/SignUp.jsx';
import SignIn from './Components/SignIn/SignIn.jsx';
import Dashboard from './Components/Dashboard/Dashboard.js';
import HomePage from './Components/HomePage/HomePage.jsx';
import MainLayout from './Components/bookopenlayout/MainLayout.jsx'
import { useParams } from 'react-router-dom';
import LandingPage from './Components/LandingPage/LandingPage.jsx';
import AddBook from './Components/Dashboard/createbook/addBook.jsx';
import EditBook from './Components/Dashboard/createbook/editBook.jsx';
import DashboardMainLayout from './Components/Dashboard/openbookdashboard/dashboardMainLayout.jsx';
import AdminLogin from './Components/Dashboard/AdminLogin/AdminLogin.jsx';
import AddChapter from './Components/Dashboard/createbook/addChapter.jsx';
import EditChapter from './Components/Dashboard/createbook/editChapter.jsx';


function App() {
  return (
        <Router>
            <Routes>

                <Route path="/" element={<LandingPage />} />
                <Route path="/signin" element={<SignIn />} />
                <Route path="/signup" element={<SignUp />} />
                <Route path="/adminlogin" element={<AdminLogin />} />
                {/* <Route path="/dashboard/:isAdmin" element={<DashboardSecure/>} /> */}
                <Route path="/dashboard/" element={<Dashboard/>} />
                <Route path="/homepage" element={<HomePage/>} />
                <Route path="/homepage/:bookId" element={<MainLayoutWrapper />} />
                {/* <Route path="/mainlayout" element={<MainLayout/>}/> */}
                <Route path="/dashboard/:bookId" element={<MainLayoutWrapper2 />} />
                <Route path="/EditBook/:bookId" element={<EditBook/>}/>
                <Route path="/dashboard/addbook" element={<AddBook />} />
                <Route path="/books/:bookId/addchapter" element={<AddChapter />} />
                <Route path="/books/:bookId/chapters/:chapterId" element={<EditChapter />} />
            </Routes>
        </Router>
  );
}

// loading chapters from the homepage
function MainLayoutWrapper() {
  
  const { bookId } = useParams(); // Get bookId from URL parameters
  
  return <MainLayout bookId={bookId} />;
}

//loading chapters from the dashboard
function MainLayoutWrapper2(){

  const { bookId,isDashboard } = useParams(); // Get bookId from URL parameters
  
  return <DashboardMainLayout bookId={bookId} isDashboard={isDashboard} />;
}

// //secure dashboard
// function DashboardSecure(){
//   const { isAdmin } = useParams();
//   return <Dashboard isAdmin={isAdmin} />
// }

export default App;
