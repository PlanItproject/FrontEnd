import * as loginModal from './loginmodal.js'
import Button from "../../../components/commons/Button/index.js";
import Google from "../../../assets/Logo/google.svg";
import {useNavigate} from "react-router-dom";
// import Findpwd from "../findpwd/Findpwd.jsx";
import { Logo, SplashModalContainer  } from '../splash/splash.js';
import Input from '../../../components/commons/Input/Input.jsx';
import useLogin from '../../../hooks/useLogin.js';


const LoginModal = () => {

    const {
        email,
        password,
        handleChangeEmail,
        handleChangePassword,
        handleGoogleLogin,
        handleLogin,
        error,
    } = useLogin();

    const navigate = useNavigate();

    return (
        <SplashModalContainer>
            <loginModal.ModalContent>
                <loginModal.ModalTitle>LOG IN</loginModal.ModalTitle>
                <loginModal.ModalSubTitle>
                    아직 회원이 아니신가요?
                    <button onClick={() => navigate("/register/registerBody")}>
                        회원가입
                    </button>
                </loginModal.ModalSubTitle>
                
                <form 
                    style={{ textAlign:"left" }} 
                    onSubmit={(e) => {
                        e.preventDefault();
                        handleLogin();
                }}>
                    <Input 
                        label="아이디(이메일)"
                        id="login-email" 
                        type="email"
                        value={email}
                        onChange={handleChangeEmail}
                        placeholder="가입 시 등록한 이메일을 입력해주세요"
                        error={error && (
                            error.includes("이메일") || error.includes("올바른 이메일 형식")
                        )}
                        required
                    />
                    
                    <Input 
                        label="비밀번호"
                        id="login-pw" 
                        type="password"
                        value={password}
                        onChange={handleChangePassword}
                        placeholder="비밀번호 입력"
                        error={error && (
                            error.includes("비밀번호")
                        )}
                        required
                    />

                    <loginModal.Buttons>
                        <Button variant="primary" size="large" fullWidth type="submit">
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
                        <button onClick={() => navigate("/inquiry/inquiry")}>문의하기</button>
                    </loginModal.BottomLinks>
                </form>
            </loginModal.ModalContent>
            <Logo>PlanIt</Logo>
        </SplashModalContainer>
        
    );
};

export default LoginModal;