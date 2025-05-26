import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/authContext';

const useLogin = () => {
    const { login, logout } = useAuth();
    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false)

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
            await login(email, password);
            navigate('/welcome');
        } catch(error) {
            setError("아이디나 비밀번호를 다시 확인해주세요.");
        } finally {
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
        logout();
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