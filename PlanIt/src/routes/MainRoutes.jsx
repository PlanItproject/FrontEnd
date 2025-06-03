import { Route, Routes } from "react-router-dom";
import WelcomeScreen from "../pages/register/WelcomeScreen.jsx";
import SplashPage from "../pages/splash/SplashPage.jsx";
import Register from "../pages/register/Regitser.jsx";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/welcome" element={<WelcomeScreen />} />
      {/* <Route path="/" element={<SplashPage />} /> */}
      {/* <Route path="/register/*" element={<Register />} /> */}
    </Routes>
  );
};

export default MainRoutes;
