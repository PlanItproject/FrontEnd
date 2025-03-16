import { useState } from 'react';
import { ChevronLeft } from 'lucide-react';
import Button from '../../../components/commons/Button/Button.jsx'
import * as findPwd from './findpwd.js'
import ResendPopup from "./ResendPopup.jsx";
import {useNavigate} from "react-router-dom";


const Findpwd = () => {
    const [formData, setFormData] = useState({
        email: '',
        verificationCode: ''
    });

    const navigate = useNavigate();
    const [isSent, setIsSent] = useState(false);
    const [showResendPopup, setShowResendPopup] = useState(false);

    const handleChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value});
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // 인증번호 전송 로직 추후 추가
        setIsSent(true);
    };



    return (
        <findPwd.Container>
            <findPwd.FormHeader>
                <findPwd.Header>
                    <findPwd.BackButton>
                        <ChevronLeft onClick={() => navigate(-1)} size={20} color="#4B5563" />
                    </findPwd.BackButton>
                </findPwd.Header>

                <findPwd.Title>비밀번호 찾기</findPwd.Title>
            </findPwd.FormHeader>
            <form onSubmit={handleSubmit}>
                <findPwd.FormGroup>
                    <findPwd.Label>이메일주소</findPwd.Label>
                    <findPwd.InputWrapper>
                        <findPwd.Input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="abc@gmail.com"
                        />
                    </findPwd.InputWrapper>
                </findPwd.FormGroup>

                <findPwd.FormGroup>
                    <findPwd.Label>인증번호 입력</findPwd.Label>
                    <findPwd.Input
                        type="text"
                        name="verificationCode"
                        value={formData.verificationCode}
                        onChange={handleChange}
                        placeholder="메일 내 4자리 숫자를 입력해주세요"
                    />
                </findPwd.FormGroup>

                <findPwd.ResendText>
                    메일을 받지 못 하셨나요?
                    <findPwd.ResendButton type="button" onClick={() => setShowResendPopup(true)}>
                        재전송하기
                    </findPwd.ResendButton>
                </findPwd.ResendText>


                {isSent ? (
                    <>
                        <findPwd.sendBtn>
                            <Button style={{ border: "none", backgroundColor: "#d9d9d9", color:"#c1c1c1"}} variant="secondary" size="large" fullWidth>
                                전송완료
                            </Button>
                            <Button variant="primary" size="large" fullWidth>
                                다음으로
                            </Button>
                        </findPwd.sendBtn>
                    </>
                ) : (
                    <findPwd.nextButton>
                        <Button variant="primary" size="large" fullWidth type="submit" disabled={isSent}>
                            {isSent ? "전송완료" : "인증번호 전송"}
                        </Button>
                    </findPwd.nextButton>
                )}
            </form>

            {showResendPopup && (
                <ResendPopup
                    email={formData.email}
                    onClose={() => setShowResendPopup(false)}
                    onResend={() => setShowResendPopup(false)}
                />
            )}
        </findPwd.Container>
    );
};

export default Findpwd;