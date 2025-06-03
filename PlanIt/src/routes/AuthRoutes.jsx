import { Route, Routes } from "react-router-dom";
import Login from "../pages/auth/Login.jsx";
import AccountRecovery from "../pages/auth/accountRecovery.jsx";
import PasswordRecovery from "../pages/auth/PasswordRecovery.jsx";

const AuthRoutes = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/findAccount" element={<AccountRecovery />} />
      <Route path="/findPW" element={<PasswordRecovery />} />
    </Routes>
  );
};

export default AuthRoutes;
