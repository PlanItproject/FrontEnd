import { createContext, useContext, useReducer,  } from "react";
import CATEGORIES from "../components/units/community/posts/PostDetail/dummy/dummyCategories";

const CommunityFilterContext = createContext();

const ALL_CATEGORY_VALUE = CATEGORIES[0].value;

const initialState = {
    selectedChips: [ALL_CATEGORY_VALUE],
    selectedCities: [],
};

const ChipfilterReducer = (state, action) => {
    switch(action.type) {
        case 'TOGGLE_CHIP':
            if(state.selectedChips.includes(ALL_CATEGORY_VALUE)) {
                return {
                    ...state, // 기존 상태 유지
                    selectedChips: [action.value]
                }; // '전체'가 선택되어있었다면 전체 선택 해제
            }
            if(state.selectedChips.includes(action.value)) {
                return {
                    ...state,
                    selectedChips: state.selectedChips.filter((chip) => chip !== action.value)
                }; // 이미 있는 value이면 배열에서 빼기
            }
            return {
                ...state,
                selectedChips: [...state.selectedChips, action.value] // 선택된 Chip 배열에 추가
            };
        case 'SELECT_ALL':
            return { 
                ...state,
                selectedChips: [ALL_CATEGORY_VALUE] 
            }; //'전체' 선택
        case 'SET_CITIES':
            return {
                ...state,
                selectedCities: action.cities
            };
        case 'ADD_CITY':
            return {
                ...state,
                selectedCities: [...state.selectedCities, action.city]
            };
        case 'REMOVE_CITY':
            return{
                ...state,
                selectedCities: state.selectedCities.filter(city => city !== action.city)
            };
        case 'RESET':
            return action.currentLocation 
                ? {
                    ...initialState,
                    selectedCities: [action.currentLocation]
                }
                : initialState;
        default:
            return state; // 기존 배열
    }
} 

export const CommunityFilterProvider = ({ children }) => {
    const [state, dispatch] = useReducer(ChipfilterReducer, initialState);

    return(
        <CommunityFilterContext.Provider value={{ state, dispatch }}>
            {children}
        </CommunityFilterContext.Provider>
    )
};

export const usePostFilter = () => {
    return useContext(CommunityFilterContext);
};