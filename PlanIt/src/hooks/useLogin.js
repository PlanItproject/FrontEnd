import {useEffect, useReducer} from 'react';
import {useLocation, useNavigate} from 'react-router-dom';
import { authApi } from '../api/auth';
// import { authApiMock } from '../api/authApiMock';

// useState 가 많지는 않지만 가독성을 위해서 리듀서 쓰기
const initialState = {
    email: '',
    password: '',
    loading: false,
    error: null,
};

const reducer = (state, action) => {
    switch (action.type) {
        case 'SET_EMAIL':
            return {...state, email: action.payload};
        case 'SET_PASSWORD':
            return {...state, password: action.payload};
        case 'SET_LOADING':
            return {...state, loading: action.payload};
        case 'SET_ERROR':
            return {...state, error: action.payload};
        default:
            return state;
    }
}


// 로컬 스토리지 관리 유틸리티 함수 추가해서 사용하기
const getToken = () => localStorage.getItem('token');
const getTokenExpiry = () => Number(localStorage.getItem('TokenExpiry'));
const removeAuthData = () => {
    ['token','user','TokenExpiry'].forEach(localStorage.removeItem)
}


const useLogin = () => {
    const [state, dispatch] = useReducer(reducer, initialState)
    const navigate = useNavigate();
    const location = useLocation()

    useEffect(() => {
        // 자동 로그인 확인
        // Access Token을 httpOnly Cookie로 제공하여 자동 인증하는 경우 아래의 로직은 수정
        const token = getToken();
        const tokenExpiry = getTokenExpiry();

        if (!token || !tokenExpiry || tokenExpiry < Date.now()) {
            console.log("Access Token 만료됨, 로그인 필요");
            removeAuthData();
            
            // 현재 페이지가 /login이 아닌 경우에만 이동
            if (location.pathname !== "/login") {
                navigate('/login', {replace: true});
            }
        } else {
            console.log("자동 로그인 성공: 토큰 유효");
            // navigate('/welcome');
        }
    }, [navigate, location.pathname]);

    const handleChangeEmail = (e) => setEmail(e.target.value.trim());
    const handleChangePassword = (e) => setPassword(e.target.value.trim());

    const handleLogin = async () => {
        dispatch({type: 'SET_ERROR', payload: null})

        if (!state.email.trim() || !state.password.trim()) {
            dispatch({type:"SET_ERROR", payload: "이메일 혹은 패스워드를 입력해주세요."});
            return;
        }
        
        if (!state.email.includes("@")) {
            dispatch({type:"SET_ERROR", payload: "올바른 이메일 형식이 아닙니다."});
            return;
        }

        dispatch({type: 'SET_LOADING', payload: true})

        try{
            const response = await authApi.login({ email: state.email, password: state.password });
            // const response = await authApiMock.login({ email, password });

            localStorage.setItem("token", response.data.Token);
            localStorage.setItem("TokenExpiry", Date.now() + 24 * 60 * 60 * 1000); // 만료 시간
            // localStorage.setItem("user", JSON.stringify(response.data.user));

            navigate('/welcome');
        } catch (error) {
            dispatch({ type: 'SET_ERROR', payload: "아이디나 비밀번호를 다시 확인해주세요." });
        } finally {
            dispatch({ type: 'SET_LOADING', payload: false });
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
        email: state.email,
        password: state.password,
        loading: state.loading,
        error: state.error,
        handleChangeEmail,
        handleChangePassword,
        handleLogin,
        handleGoogleLogin,
        handleLogout
    }
}

export default useLogin;