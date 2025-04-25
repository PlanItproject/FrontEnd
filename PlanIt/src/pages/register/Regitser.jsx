import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Routes, Route, useNavigate, useLocation } from "react-router-dom";
import Register_body from "./body/BasicInform.jsx";
import EmailVerification from "./body/EmailVerification.jsx";
import ProfileSetting from "./body/ProfileSetting.jsx";
import Tabs from "../../components/commons/Tabs/Tabs.jsx";
import { setTab } from "../../store/community/slice/CommunitySlice.jsx"

const Register = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();
  const currentTab = useSelector((state) => state.community.currentTab);

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    password: '',
    passwordConfirm: '',
    termsAgreed: false,
    privacyAgreed: false,
});

  const steps = [
    { label: "기본 정보 입력", path: "registerBody" },
    { label: "이메일 인증", path: "emailVerification" },
    { label: "프로필 설정", path: "profileSetting" },
  ];

  const [currentStep, setCurrentStep] = useState(0);

  useEffect(() => {
    const path = location.pathname.split("/")[2] || "post";
    dispatch(setTab(path));
  }, [location.pathname, dispatch]);

  const handleTabClick = (path) => {
    dispatch(setTab(path));
    navigate(`/register/${path}`);
  };

  const onNext = () => {
    setCurrentStep((prevStep) => prevStep + 1);
    navigate(`/register/${steps[currentStep + 1].path}`);
  };

  return (
      <div style={{ padding: '20px' }}>
        <Tabs currentTab={currentTab} steps={steps} onTabClick={handleTabClick} />
        <Routes>
          <Route path="registerBody" element={<Register_body onNext={onNext} formData={formData} setFormData={setFormData}/>} />
          <Route path="emailVerification" element={<EmailVerification onNext={onNext} registerdEmail={formData.email}/>} />
          <Route path="profileSetting" element={<ProfileSetting onNext={onNext}/>} />
        </Routes>
      </div>
  );
};

export default Register;
