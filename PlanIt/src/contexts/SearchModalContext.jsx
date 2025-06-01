import { createContext, useState, useContext } from "react";

const SearchModalContext = createContext();

export const SearchModalProvider = ({ children }) => {
    const [recentSearches, setRecentSearches] = useState([]); // 최근 검색한 목록

    const addSearchQuery = (query) => {
        if(!query.trim()) return; // 빈 문자열이면 추가 안함.
        setRecentSearches((prev) => {
            const updatedQuery = [query, ...prev.filter(q => q !== query)]; // 배열에 기존 검색어와 같은 내용이 있으면 제거하고, 맨 앞에 추가
            return updatedQuery.slice(0,30); // 최대 30개
        });
    }

    return (
        <SearchModalContext.Provider
            value={{ recentSearches, addSearchQuery }}
        >
            {children}
        </SearchModalContext.Provider>
    );
};

export const useSearchModal = () => useContext(SearchModalContext);