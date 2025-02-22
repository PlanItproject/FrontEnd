import { useMemo } from 'react';
import { useNavigate } from 'react-router-dom'
import AuthLayout from "../components/auth/AuthLayout";
import FindAccount from "../components/auth/findAccount/FindAccount";
import FindPassword from "../components/auth/findPassword/FindPassword";
import ChangePassword from "../components/auth/findPassword/ChangePassword";
import PasswordChanged from "../components/auth/findPassword/PasswordChanged";
import { useRecovery } from "../hooks/useRecovery";

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