import Register from './pages/regitser.jsx'
import Login from './pages/login.jsx';
import AccountRecovery from './pages/accountRecovery.jsx';
import PasswordRecovery from './pages/PasswordRecovery.jsx';
import PostRoutes from './routes/post.jsx';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import WelcomeScreen from "./components/register/WelcomeScreen.jsx";
import "./styles/App.css";
import './global.css';
import "./styles/variables.css";
import SplashPage from "./pages/SplashPage.jsx";
import Inquiry from "./components/splash/inquiry/Inquiry.jsx"
import Findpwd from "./components/splash/findpwd/Findpwd.jsx";
import Style_example from "./style_example.jsx";

function App() {

  return (
    <Router>
        <Routes>
            <Route path="/" element={<SplashPage/>}/>
            <Route path='/login' element={<Login />} />
            <Route path='/findAccount' element={<AccountRecovery />} />
            <Route path='/findPW' element={<PasswordRecovery />} />
            <Route path='/inquiry' element={<Inquiry/>} />
            <Route path='/password' element={<Findpwd/>} />
            <Route path="/welcome" element={<WelcomeScreen/>} />
            <Route path="/" element={<Register/>} />
            <Route path='/post/*' element={<PostRoutes />}/>
            {/* <Route path="/" element={<Style_example/>}/> */}
        </Routes>
    </Router>
  )
}

export default App;
