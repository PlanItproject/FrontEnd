import Chip from "../../../../commons/Chip";
import { PostFormTitle, PostFromCategory } from "./styles/postFormCommon.styles";

const PostChipSelector = ({ categories, selectedCategory, onCategorySelect, hasError }) => {

    return(
        <>
            <PostFormTitle>
                카테고리
                <span>필수</span>
            </PostFormTitle>
            <PostFromCategory>
                {categories.slice(1).map(({ label, emoji, value }) => (
                    <Chip 
                        key={value}
                        label={label}
                        emoji={emoji}
                        size='medium'
                        state={value === selectedCategory ? 'selected' : 'default'}
                        value={value}
                        onClick={() => onCategorySelect(value)}
                        style={{ cursor : 'pointer' }}
                    />
                ))}
            </PostFromCategory>
        </>
    )
};

export default PostChipSelector;