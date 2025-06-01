import { useState } from "react";
import { ArrowLeft, Search } from "lucide-react";
import { RecentSearches, RecentSearchesTags, SeaerchModalHeader, SearchModalContainer, SearchModalInputWrapper } from "./style";
import Chip from "../../../../commons/Chip";
import Input from "../../../../commons/Input/Input";
import { useSearchModal } from "../../../../../contexts/SearchModalContext";

const CommnunitySearchModal = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    const [query, setQuery] = useState('');
    const { recentSearches, addSearchQuery } = useSearchModal();

    const handleKeyDown = (e) => {
        if(e.key === 'Enter') {
            addSearchQuery(query);
            setQuery('');
            onClose();
        };
    };

    return(
        <SearchModalContainer>
            <ArrowLeft 
                size={24}
                onClick={onClose}
                style={{ cursor: 'pointer', position: 'absolute', top: '60px' }}
            />
            <SeaerchModalHeader>커뮤니티 내 검색</SeaerchModalHeader>
            <SearchModalInputWrapper>
                <Input 
                    // id={id}
                    type='text'
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    onKeyDown={handleKeyDown}
                    placeholder='검색하기'
                    // $hasError={hasError}
                    required
                />
                <Search color='#5A5A5A' style={{ position: 'absolute', top: '34px', right: '24px' }}/>
            </SearchModalInputWrapper>
            <RecentSearches>
                <span>최근 검색한</span>
                <RecentSearchesTags>
                    {recentSearches.length > 0 ? (
                        recentSearches.map((search, index) => (
                            <Chip key={index} label={search} size='medium' />
                        ))
                    ): (
                        <div className="recentEmpty">최근 검색한 내용이 없습니다.</div>
                    )}
                </RecentSearchesTags>
            </RecentSearches>
        </SearchModalContainer>
    )
};

export default CommnunitySearchModal;