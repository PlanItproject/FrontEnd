import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./store/store.js"

import './styles/App.css';

import Community from "./pages/community/Community.jsx";
import PostDetail from "./pages/community/Post/PostDetail.jsx";
import AuthRoutes from "./routes/AuthRoutes.jsx";
import InquiryRoutes from "./routes/InquiryRoutes.jsx";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<Navigate to="/community/post" />} />
          <Route path="/community/*" element={<Community />} />
          <Route path="/community/post/:postId" element={<PostDetail />} />

          <Route path="/*" element={<AuthRoutes />} />
          <Route path="/inquiry/*" element={<InquiryRoutes />} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
