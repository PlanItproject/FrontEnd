import { useReducer } from "react";

// 초기 상태
const initialState = {
    step: 1,
    email: ''
};

// 상태 변화 로직
const reducer = (state,action) => {
    switch(action.type) {
        case 'NEXT_STEP':
            return { ...state, step: state.step + 1 }; // 다음 단계로 이동
        case 'SET_EMAIL':
            return { ...state, email: action.payload }; // 이메일 업데이트(payload에 담긴 이메일 저장)
        case 'RESET':
            return initialState; // 초기 상태로
        default:
            return state; // 알 수 없는 action.type은 기존 상태 유지
    }
}

export const useRecovery = () => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const handleNextStep = (data) => {
        if(state.step === 1 && data?.email) {
            dispatch({ type: 'SET_EMAIL', payload: data.email }); // 이메일이 전달되면 SET_EMAIL 실행
        }
        dispatch({ type: 'NEXT_STEP'}); // 다음 단계로 이동
    }

    // const reset = () => dispatch({ type: 'RESET' }); // 상태 초기화, 향후 필요하면 추가

    return { state, handleNextStep };
};