import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./store/store.js"

import './styles/App.css';
import './global.css';

import SplashPage from "./pages/splash/SplashPage.jsx";
import Community from "./pages/community/Community.jsx";
import PostDetail from "./pages/community/Post/PostDetail.jsx";
import AuthRoutes from "./routes/AuthRoutes.jsx";
import Register from "./pages/register/Regitser.jsx";
import InquiryRoutes from "./routes/InquiryRoutes.jsx";
import { AuthProvider } from "./contexts/authContext.jsx";
import WelcomeScreen from "./pages/register/WelcomeScreen.jsx";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <AuthProvider>
          <Routes>
            <Route path="/splash" element={<SplashPage />} />
            <Route path="/*" element={<AuthRoutes />} />
            <Route path="welcome" element={<WelcomeScreen/>} />
            <Route path="/register/*" element={<Register />}/>
            <Route path="/inquiry/*" element={<InquiryRoutes />} />

            <Route path="/" element={<Navigate to="/community/post" />} />
            <Route path="/community/*" element={<Community />} />
            <Route path="/community/post/:postId" element={<PostDetail />} />
          </Routes>
        </AuthProvider>
      </Router>
    </Provider>
  );
}

export default App;
