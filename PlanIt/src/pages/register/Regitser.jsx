import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Routes, Route, useNavigate, useLocation } from "react-router-dom";
import Register_body from "./body/BasicInform.jsx";
import EmailVerification from "./body/EmailVerification.jsx";
import ProfileSetting from "./body/ProfileSetting.jsx";
import Tabs from "../../components/commons/Tabs/Tabs.jsx";
import { setTab } from "../../pages/community/storage/slice/CommunitySlice.jsx";
const register = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();
  const currentTab = useSelector((state) => state.community.currentTab);

  const steps = [
    { label: "기본 정보 입력", path: "registerBody" },
    { label: "이메일 인증", path: "emailVerification" },
    { label: "프로필 설정", path: "profileSetting" },
  ];

  useEffect(() => {
    const path = location.pathname.split("/")[2] || "post";
    dispatch(setTab(path));
  }, [location.pathname, dispatch]);

  const handleTabClick = (path) => {
    dispatch(setTab(path));
    navigate(`/register/${path}`);
  };

  return (
    <div>
      <Tabs currentTab={currentTab} steps={steps} onTabClick={handleTabClick} />
      <Routes>
        <Route path="registerBody" element={<Register_body />} />
        <Route path="emailVerification" element={<EmailVerification />} />
        <Route path="profileSetting" element={<ProfileSetting />} />
      </Routes>
    </div>
  );
};

export default register;
