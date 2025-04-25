import { useState } from "react";
import { PostFormTitle, PostFormLocation } from "./styles/postFormCommon.styles";
import { CityTagBox } from "../../CommunityControls/CommunityFiilter/style";
import { Search, X } from "lucide-react";
import Input from "../../../../commons/Input/Input";
import Button from "../../../../commons/Button";

const PostLocationPicker = ({ selectedLocation, onLocationSelect, hasError }) => {
    const [inputValue, setInputValue] = useState('');

    const handleKeyDown = (e) => {
        if(e.key === 'Enter' && e.target.value.trim()) {
            const newCity = e.target.value.trim();
            e.target.value = '';
            const newLocation = {
                city: newCity,
                latitude: '',
                longitude: ''
            };
            onLocationSelect(newLocation);
        }
    };

    const handleChange = (e) => {
        setInputValue(e.target.value);
    }

    const handleRemoveCity = (city) => {
        onLocationSelect(null);
    };

    return (
        <>
            <PostFormTitle>
                장소 태그
                <span>필수</span>
            </PostFormTitle>            
            <PostFormLocation>
                <Input 
                    type="text"
                    label="장소검색"
                    value={inputValue}
                    onChange={handleChange}
                    onKeyDown={handleKeyDown}
                    placeholder="도시명 혹은 장소명으로 검색"
                    $hasError={hasError}
                    required
                />
                <div className='searchIcon'>
                    <Search color='#5A5A5A'/>
                </div>    
                <CityTagBox>
                    {selectedLocation && selectedLocation.city && (
                        <Button type='button' onClick={() => handleRemoveCity(selectedLocation.city)}>
                            <span>{selectedLocation.city}</span>
                            <X size={20}/>
                        </Button>
                    )}
                </CityTagBox>
            </PostFormLocation>
        </>
    )
};

export default PostLocationPicker;