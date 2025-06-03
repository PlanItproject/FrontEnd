import * as loginModal from './loginmodal.js'
import Button from "../../../components/commons/Button/index.js";
import Google from "../../../assets/Logo/google.svg";
import {useNavigate} from "react-router-dom";
import Findpwd from "../findpwd/Findpwd.jsx";


const LoginModal = (
    {
        handleGoogleLogin,
        handleChangeEmail,
        email,
        password,
        handleChangePassword,
}) => {
    const navigate = useNavigate();

    return (
        <loginModal.ModalContent>
            <loginModal.ModalTitle>LOG IN</loginModal.ModalTitle>
            <loginModal.ModalSubTitle>
                아직 회원이 아니신가요?
                <button onClick={() => navigate("/register")} style={{
                    color: '#6b7280',
                    border: 'none',
                    background: 'none',
                    textDecoration: 'underline',
                    cursor: 'pointer'}}>
                    회원가입</button>
            </loginModal.ModalSubTitle>

            <loginModal.InputLabel>아이디(이메일)</loginModal.InputLabel>
            <loginModal.Input
                type='email'
                id='login-email'
                value={email}
                placeholder='가입 시 등록한 이메일을 입력해주세요'
                onChange={(e) => handleChangeEmail(e.target.value)}
                required
            />

            <loginModal.InputLabel>비밀번호</loginModal.InputLabel>
            <loginModal.Input
                type="password"
                id="login-pw"
                value={password}
                placeholder='비밀번호 입력'
                onChange={(e) => handleChangePassword(e.target.value)}
                required
            />

            <loginModal.Buttons>
                <Button variant="primary" size="large" fullWidth>
                    로그인하기
                </Button>
                <Button variant='secondary' size='large' fullWidth onClick={handleGoogleLogin}>
                    <img src={Google} />
                    구글계정으로 시작하기
                </Button>
            </loginModal.Buttons>

            <loginModal.BottomLinks>
                <button onClick={() => navigate("/findAccount")}>계정찾기</button>
                <button onClick={() => navigate("/findPW")}>비밀번호 찾기</button>
                <button onClick={() => navigate("/inquiry")}>문의하기</button>
            </loginModal.BottomLinks>
        </loginModal.ModalContent>
    );
};

export default LoginModal;