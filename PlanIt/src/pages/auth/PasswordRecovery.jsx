import { useMemo } from "react";
import { useNavigate } from "react-router-dom";
import AuthLayout from "./AuthLayout.jsx";
import FindPassword from "./findPassword/FindPassword.jsx";
import ChangePassword from "./findPassword/ChangePassword.jsx";
import PasswordChanged from "./findPassword/PasswordChanged.jsx";
import { useRecovery } from "../../hooks/useRecovery.js";

const titles = {
    1: '비밀번호 찾기',
    2: '비밀번호 변경'
};

const PasswordRecovery = () => {
    const { state, handleNextStep } = useRecovery();
    const navigate = useNavigate();

    const getTitle = () => titles[state.step] ?? '';

    const steps = useMemo(() => [
        <FindPassword email={state.email} onNext={handleNextStep} />,
        <ChangePassword email={state.email} onNext={handleNextStep} />,
        <PasswordChanged onReturn={() => navigate('/login')}/>
    ], [state.email, navigate]);

    const renderStep = ()  => steps[state.step - 1] ?? null;

    return (
        <AuthLayout 
            title={getTitle()}
            hideHeader={state.step === 3}
            hideTitle={state.step === 3}
        >
            {renderStep()}
        </AuthLayout>
    )  
}

export default PasswordRecovery;