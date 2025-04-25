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

import Community from "./pages/community/Community.jsx";
import PostDetail from "./pages/community/Post/PostDetail.jsx";
import AuthRoutes from "./routes/AuthRoutes.jsx";
import Register from "./pages/register/Regitser.jsx";
import InquiryRoutes from "./routes/InquiryRoutes.jsx";
import SplashPage from "./pages/splash/SplashPage.jsx";

// document.cookie = "language=KOREAN; path=/; domain=54.252.52.26";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/splash" element={<SplashPage />}/>
          <Route path="/community/post/:postId" element={<PostDetail />} />
          <Route path="/community/*" element={<Community />} />

          <Route path="/*" element={<AuthRoutes />} />
          <Route path="/register/*" element={<Register />} />
          <Route path="/inquiry/*" element={<InquiryRoutes />} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
