import { useState } from 'react';
import { ChevronLeft } from 'lucide-react';
import Input from '../../../components/commons/Input/Input.jsx';
import Button from '../../../components/commons/Button/Button.jsx'
import * as Email from './styles/emailVerification.js'
import { authApi } from '../../../api/auth.js';
import { useNavigate } from "react-router-dom";


const EmailVerification = ({ onNext, registerdEmail }) => {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({ verificationCode: '' });

    const [errors, setErrors] = useState({
        email: '',
        verificationCode: ''
    });
    console.log("registerdEmail :" + registerdEmail);

    const [isSent, setIsSent] = useState(false);

    const handleChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value});
        setIsSent(false);
    };

    const handleSendCode = async (e) => {
        e.preventDefault();
        setErrors({ email: '', verificationCode: '' });
        setIsSent(true);
        console.log('인증요청 시작');


        // if (formData.email !== registerdEmail) {
        //     setErrors(prev => ({
        //         ...prev,
        //         email: "이메일이 일치하지 않습니다."
        //     }));
        //     setIsSent(false);
        //     return;
        // }

        try {
            const res = await authApi.sendEmailCode(registerdEmail);
            setIsSent(true);
            setErrors({ ...errors, email: '' });
        } catch(error) {
            setIsSent(false);
            console.log('❌ 인증 코드 전송 실패:', error.response?.data || error.message);
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        setErrors({ email: '', verificationCode: '' });

        if (!formData.verificationCode || formData.verificationCode.length !== 4) {
            setErrors(prev => ({
                ...prev,
                verificationCode: "4자리 인증번호를 입력하세요."
            }));
            return;
        }

        try {
            const res = await authApi.verifyEmail({
                email: registerdEmail,
                verificationCode: formData.verificationCode,
            }); 
            onNext();
        } catch(error) {
            setErrors(prev => ({
                ...prev,
                verificationCode: "인증번호가 올바르지 않습니다."
            }));
        }
    };

    const handleResend = async (e) => {
        e.preventDefault();
        // 인증번호 재발송 로직 추가
        try {
            const res = await authApi.resendEmailCode(registerdEmail);
        } catch(error) {
            alert('안된다')
        }
    };

    return (
        <Email.Container>
            <Email.FormHeader>
                <Email.Header>
                    <Email.BackButton onClick={() => navigate(-1)}>
                        <ChevronLeft size={20} color="#4B5563" />
                    </Email.BackButton>
                </Email.Header>

                <Email.Title>회원가입</Email.Title>
            </Email.FormHeader>
            <form onSubmit={handleSubmit}>
                <Email.FormGroup style={{ position: "relative" }}>
                    <Input
                        type="email"
                        label="이메일 주소"
                        name="email"
                        value={registerdEmail}
                        readOnly
                        // onChange={handleChange}
                        // placeholder="abc@gmail.com"
                        error={errors.email}
                        $hasError={errors.email}
                        // required
                    />
                    <Email.VerifyButton 
                        onClick={handleSendCode} 
                        disabled={isSent || !registerdEmail}
                        type="button"
                    >
                        {isSent ? '전송완료' : '인증하기'}
                    </Email.VerifyButton>
                </Email.FormGroup>

                <Email.FormGroup>
                    <Input
                        type="text"
                        label="인증번호 입력"
                        name="verificationCode"
                        value={formData.verificationCode}
                        onChange={handleChange}
                        placeholder="메일 내 4자리 숫자를 입력해주세요요"
                        error={errors.verificationCode}
                        $hasError={errors.verificationCode}
                        required
                    />
                </Email.FormGroup>

                <Email.ResendText>
                    메일을 받지 못 하셨나요?
                    <Email.ResendButton type="button" onClick={handleResend}>
                        재전송하기
                    </Email.ResendButton>
                </Email.ResendText>

                <Button variant="primary" size="large" fullWidth type="submit">다음으로</Button>
            </form>
        </Email.Container>
    );
};

export default EmailVerification;