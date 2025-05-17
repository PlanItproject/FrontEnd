import { createContext, useContext, useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";
import { authApi } from "../api/auth";
import { useDispatch, useSelector } from "react-redux";
import { selectIsAuthenticated, selectUser } from "../store/account/accountSelector";
import { clearUser, setUser } from "../store/account/accountSlice";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const dispatch = useDispatch();
    const user = useSelector(selectUser); // 로그인 한 유저 정보
    const isAuthenticated = useSelector(selectIsAuthenticated); // 로그인 상태
    const [authChecked, setAuthChecked] = useState(false); //로그인 확인 완료
    const navigate = useNavigate();

    // 로그인 상태 확인 (ex.새로고침 시 자동 로그인)
    useEffect(() => {
        const checkAuth = async () => {
            try {
                const userData = await authApi.me(); // 자동로그인 확인
                dispatch(setUser(userData)); // redux에 유저 정보 저장
            } catch {
                dispatch(clearUser()); // 정보 없으면 redux에서 초기화
            } finally {
                setAuthChecked(true); // 
            }
        };

        checkAuth();
    }, []); 

    // 로그인
    const login = async (email, password) => {
        try {
            await authApi.login({ email, password }); // 쿠키 저장
            const userData = await authApi.me(); // 로그인 후 유저 정보 재요창
            dispatch(setUser(userData));
            navigate('/welcome');
        } catch (error) {
            console.log('로그인 실패 : ', error);
            throw new Error('로그인 실패');
        }
    };

    // 구글 로그인
    const loginWithGoogle = async (code) => {
    }

    // 로그아웃
    const logout = () => {
        dispatch(clearUser()); //redux에서 유저 정보 제거
        navigate('/splash');
    }

    return (
        <AuthContext.Provider value={{ user, isAuthenticated, authChecked, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);