import { useEffect, useState } from 'react';
import { usePostFilter } from '../../../../../contexts/CommunityFilterContext';
import { useCurrentLocation } from '../../../../../contexts/CurrentLocationContext';
import { RotateCw, Search, X } from 'lucide-react'
import { CityTagBox, FilterButtonWrapper, FilterChipBox, FilterCityTag, FilterKeyword, FilterLabel, FilterRefresh, PostFilterTitle, SearchCityBox } from "./style";
import CATEGORIES from '../../posts/PostDetail/dummy/dummyCategories';
import Input from '../../../../commons/Input/Input';
import Button from '../../../../commons/Button/Button';
import Chip from '../../../../commons/Chip';

const CommunityFilter = ({ onClose }) => {
    const { state, dispatch } = usePostFilter();
    const { currentLocation } = useCurrentLocation();
    const [removedLocation, setRemovedLocation] = useState(null);

    useEffect(() => {
        // 초기화 했을 떄, 현위치가 없으면 추가
        if (currentLocation && !state.selectedCities.includes(currentLocation) && currentLocation !== removedLocation) {
            dispatch({ type: 'ADD_CITY', city: currentLocation })
        };
    }, [currentLocation, dispatch, state.selectedCities, removedLocation]);

    const handleKeyDown = (e) => {
        if(e.key === 'Enter' && e.target.value.trim()) {
            const newCity = e.target.value.trim();
            if(!state.selectedCities.includes(newCity)) {
                dispatch({ type: 'ADD_CITY', city: newCity });
            };
            e.target.value = '';
        }
    };

    const handleRemoveCity = (city) => {
            dispatch({ type: 'REMOVE_CITY', city });
            if(city === currentLocation) setRemovedLocation(city);
    };

    const handleFilterRefresh = () => {
        dispatch({ type: 'RESET', currentLocation });
        setRemovedLocation(null);
    };

    return (
        <>
            <PostFilterTitle>필터 설정</PostFilterTitle>
            <FilterRefresh onClick={handleFilterRefresh}>
                <RotateCw size={20}/>        
                <span>필터 초기화</span>
            </FilterRefresh>
            <FilterCityTag>
                <SearchCityBox>
                    <FilterLabel>도시명</FilterLabel>
                    <Input 
                        // id={id}
                        type='text'
                        // value={value}
                        // onChange={onChange}
                        onKeyDown={handleKeyDown}
                        placeholder='검색하기'
                        // $hasError={hasError}
                        required
                    />
                    <div className='searchIcon'>
                        <Search color='#5A5A5A'/>
                    </div>
                    <CityTagBox>
                        {state.selectedCities.map((city) => (
                            <Button type='button' onClick={() => handleRemoveCity(city)}>
                                <span>{city === currentLocation ? `현위치 : ${city}` : city}</span>
                                <X size={20}/>
                            </Button>
                        ))}
                    </CityTagBox>
                </SearchCityBox>
            </FilterCityTag>
            <FilterKeyword>
                <FilterLabel>키워드</FilterLabel>
                <FilterChipBox>
                    {CATEGORIES.filter(({ value }) => value !== CATEGORIES[0].value).map(({ label, emoji, value }) => (
                        <Chip 
                            key={value}
                            label={label}
                            emoji={emoji}
                            size='medium'
                            state={state.selectedChips.includes(value) ? 'selected' : 'default'}
                            onClick={() => dispatch({ type: 'TOGGLE_CHIP', value })}
                            style={{ cursor: 'pointer'}}
                        />
                    ))}
                </FilterChipBox>
            </FilterKeyword>
            <FilterButtonWrapper>
                <Button type='button' variant='secondary' size='large' onClick={() => onClose()}>뒤로가기</Button>
                <Button type='submit' size='large'>적용하기</Button>
            </FilterButtonWrapper>
        </>
    )
};

export default CommunityFilter;