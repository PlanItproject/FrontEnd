import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { authApi } from '../api/auth';
// import { authApiMock } from '../api/authApiMock';

const useLogin = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        // 자동 로그인 확인
        // Access Token을 httpOnly Cookie로 제공하여 자동 인증하는 경우 아래의 로직은 수정
        const token = localStorage.getItem('token');
        const tokenExpiry = localStorage.getItem('TokenExpiry');

        console.log("현재 token", token);
        console.log("현재 tokenExpiry", tokenExpiry);

        if (!token || !tokenExpiry || Number(tokenExpiry) < Date.now()) {
            console.log("Access Token 만료됨, 로그인 필요");
            localStorage.removeItem('token');
            localStorage.removeItem('TokenExpiry');
            
            // 현재 페이지가 /login이 아닌 경우에만 이동
            if (window.location.pathname !== "/login") {
                navigate('/login');
            }
        } else {
            console.log("자동 로그인 성공: 토큰 유효");
            // navigate('/welcome');
        }
    }, [navigate]);

    const handleChangeEmail = (e) => setEmail(e.target.value.trim());
    const handleChangePassword = (e) => setPassword(e.target.value.trim());

    const handleLogin = async () => {
        if(error) setError(null);

        if (!email.trim() || !password.trim()) {
            setError("이메일 혹은 패스워드를 입력해주세요.");
            return;
        }
        
        if (!email.includes("@")) {
            setError("올바른 이메일 형식이 아닙니다.");
            return;
        }

        setLoading(true);

        try{
            const response = await authApi.login({ email, password });

            localStorage.setItem("token", response.data.Token);
            localStorage.setItem("TokenExpiry", Date.now() + 24 * 60 * 60 * 1000); // 만료 시간
            // localStorage.setItem("user", JSON.stringify(response.data.user));

            navigate('/welcome');
        } catch(error) {
            setError("아이디나 비밀번호를 다시 확인해주세요.");
            setLoading(false);
        }
    }

    const handleGoogleLogin = () => {
        try {
            const GOOGLE_CLIENT_ID = import.meta.env.VITE_GOOGLE_CLIENT_ID;
            const googleAuthUrl = 'https://accounts.google.com/o/oauth2/v2/auth?' +
                    `client_id=${GOOGLE_CLIENT_ID}` +
                    '&response_type=code' +
                    '&scope=email profile' +
                    '&redirect_uri=http://localhost:5173';

            window.location.href = googleAuthUrl;
        } catch(error) {
            console.log(error.message)
        }
    }

    const handleLogout = () => {
        ['token', 'user', 'TokenExpiry'].map(localStorage.removeItem);
        navigate('/login');
    }

    return {
        email,
        setEmail,
        password,
        setPassword,
        loading,
        setLoading,
        error,
        setError,
        handleChangeEmail,
        handleChangePassword,
        handleLogin,
        handleGoogleLogin,
        handleLogout
    }
}

export default useLogin;