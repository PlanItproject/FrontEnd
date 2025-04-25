import { api } from './config.js';

export const authApi = {
    login: (data) =>
        api.post('/public/users/login', data),
    registerApp: (data) => 
        api.post('/public/users/register/app', data),
    registerGoogle: (data) => 
        api.post('/public/users/register/google', data),
    verifyEmail: (data) => 
        api.post('/public/users/register/email/verify', data),
    sendEmailCode : (email) => 
        api.post('/public/users/email/send', {}, {
            params: {email},
        }),
    resendEmailCode: (email) => 
        api.post('/public/users/register/email/resend', {}, {
            params: {email},
        }),
    completeRegister: (data) =>
        api.post('/public/users/register/final', data),
    // 자동 로그인 체크용 : 서버가 accessToken 쿠키 보고 유지 정보를 준다.
    me: () => 
        api.get('/v1/users/profile/read'),
    logout: () =>
        api.post('/logout'),
}


// 이제 이걸 다른데서 쓰는 예시를 보여드리면

// const handleLogin = async (email, passowrd) => {
//     try {
//         const response = await.authApi.login(email, passowrd);
//         const { token, user } = response.data;
//
//         localStorage.setItem('token', token);
//
//         console.log('로그인 성공!', user);
//     } catch (error) {
//         console.log('로그인 실패:', error.message);
//     }
// }