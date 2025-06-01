import axios from 'axios';

const API_URL = 'http://localhost:3000';

// 모든 API 요청의 기본 설정을 하는 부분입니다.
const createAxiosInstance = () => {
    const instance = axios.create({
        // 모든 API 요청 앞에 붙는 기본 주소입니다
        // 예를 들어, api.get('/users') 이면 http://locahost:3000/users 로 요청이 갑니다 !
        baseURL: API_URL,
        // 모든 요청에 기본으로 붙는 헤더이고, JSON 형식으로 통신을 할거에요! 라고 설정을 한겁니다.
        headers: {
            'Content-Type': 'application/json',
        }
    });

    // 요청 인터셉터
    // 여기는 API 요청이 서버로 가기 전에 중간에 가로채서 하는 부분입니다
    // 밑에 코드는 로컬스토리지에서 토큰을 가져와서 자동으로 헤더에 넣어주는 작업을 하는 코드입니다 !
    // 예를 들어서 로그인 후에 받은 토큰을 모든 API 요청에 자동으로 포함시켜주는 코드입니다.
    instance.interceptors.request.use(
        (config) => {
            // 토큰이 필요하다면 여기서 추가하기
            const token = localStorage.getItem('token');
            if (token) {
                config.headers.Authorization = `Bearer ${token}`;
            }
            return config;
        },
        (error) => {
            return Promise.reject(error);
        }
    )

    // 여기는 서버에서 응답이 왔을 때 가로채는 코드입니다.
    // 밑에 코드는 401 에러가 왔을 때 토큰을 지우고 로그인 페이지로 보내는 등의 처리를 할 수 있습니다.
    // 예를 들어서 토큰이 만료됐을 때 자동으로 로그아웃 처리를 해주는 것입니다 !
    instance.interceptors.response.use(
        (response) => {
            return response;
        },
        (error) => {
            const errorResponse = error.response?.data;

            if (error.response?.status === 401) {
                localStorage.removeItem('token');
                // 여기에 로그인 페이지로 리다이렉트 등을 처리
            }

            return Promise.reject(errorResponse);
        }
    )
    return instance;
}

// 간단히 예를 들어서
// 이렇게 생성된 api로
// await api.get('/users');  // GET http://localhost:3000/users
// await api.post('/login', { email, password });  // POST http://localhost:3000/login

// 위 요청들은 자동으로
// 1. JSON 형식으로 통신하고
// 2. 토큰이 있다면 자동으로 포함되고
// 3. 401 에러가 나면 자동으로 로그아웃 처리됩니다

export const api = createAxiosInstance();