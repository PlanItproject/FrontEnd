import { useMemo } from 'react';
import { useNavigate } from 'react-router-dom'
import AuthLayout from "./AuthLayout.jsx";
import FindAccount from "./findAccount/FindAccount.jsx";
import FindPassword from "./findPassword/FindPassword.jsx";
import ChangePassword from "./findPassword/ChangePassword.jsx";
import PasswordChanged from "./findPassword/PasswordChanged.jsx";
import { useRecovery } from "../../hooks/useRecovery.js";

// 제목 객체
const titles = {
    1: '계정 찾기',
    2: '비밀번호 찾기',
    3: '비밀번호 변경'
}

const AccountRecovery = () => {
    const { state, handleNextStep } = useRecovery();
    const navigate = useNavigate();

    const getTitle = () => titles[state.step] ?? '';

    // 컴포넌트 배열
    const steps = useMemo(() => [
        <FindAccount onNext={handleNextStep} />,
        <FindPassword email={state.email} onNext={handleNextStep} />,
        <ChangePassword email={state.email} onNext={handleNextStep} />,
        <PasswordChanged onReturn={() => navigate('/login')}/>
    ], [state.email, navigate]); //state.email이나 navigate값이 변하지 않으면 배열 재사용

    const renderStep = () => steps[state.step - 1] ?? null;

    return (
        <AuthLayout 
            title={getTitle()}
            hideHeader={state.step === 4}
            hideTitle={state.step === 4}
        >
            {renderStep()}
        </AuthLayout>
    )

}

export default AccountRecovery;