import { api } from './config.js';

export const authApi = {
    login: (data) =>
        api.post('/login', data),
    logout: () =>
        api.post('/logout'),
    // 추가 로직
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