import { useState } from 'react';
import { ChevronLeft } from 'lucide-react';
import Button from '../../../components/commons/Button/Button.jsx'
import * as Email from './styles/emailVerification.js'


const EmailVerification = ({ onNext }) => {
    const [formData, setFormData] = useState({
        email: '',
        verificationCode: ''
    });

    const handleChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value});
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (formData.email && formData.verificationCode.length === 4) {
            onNext();
        }
    };

    const handleResend = () => {
        // 인증번호 재발송 로직 추가
    };

    return (
        <Email.Container>
            <Email.FormHeader>
                <Email.Header>
                    <Email.BackButton>
                        <ChevronLeft size={20} color="#4B5563" />
                    </Email.BackButton>
                </Email.Header>

                <Email.Title>회원가입</Email.Title>
            </Email.FormHeader>
            <form onSubmit={handleSubmit}>
                <Email.FormGroup>
                    <Email.Label>이메일주소</Email.Label>
                    <Email.InputWrapper>
                        <Email.Input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="abc@gmail.com"
                        />
                        <Email.VerifyButton type="button">인증하기</Email.VerifyButton>
                    </Email.InputWrapper>
                </Email.FormGroup>

                <Email.FormGroup>
                    <Email.Label>인증번호 입력</Email.Label>
                    <Email.Input
                        type="text"
                        name="verificationCode"
                        value={formData.verificationCode}
                        onChange={handleChange}
                        placeholder="메일 내 4자리 숫자를 입력해주세요"
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