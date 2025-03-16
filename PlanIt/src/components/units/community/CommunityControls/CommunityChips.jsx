import { useRef } from "react";
import Chip from "../../../commons/Chip";
import CATEGORIES from "../posts/PostDetail/dummy/dummyCategories";
import useDragScrollX from "../posts/PostList/hooks/useDragScrollX";
import { PostChipWrapper } from "./CommunityChips.style";
import { usePostFilter } from "../../../../contexts/CommunityFilterContext";

const CommunityChips = () => {
    const wrapperRef = useRef(null);
    const { state, dispatch } = usePostFilter();

    const DragWrapper = useDragScrollX(wrapperRef);

    const handleChipClick = (value) => {
    if(value === CATEGORIES[0].value) { 
        dispatch({ type: 'SELECT_ALL' });
    } else {
        dispatch({ type: 'TOGGLE_CHIP', value });
    }
};

    return(
        <PostChipWrapper
            ref={wrapperRef}
            {...DragWrapper}
        >
            {CATEGORIES.map(({ label, emoji, value }) => (
                <Chip 
                    key={value} 
                    label={label} 
                    emoji={emoji} 
                    size='medium' 
                    state={state.selectedChips.includes(value) ? 'selected' : 'default'}
                    value={value} 
                    onClick={() => handleChipClick(value)}
                    style={{ cursor: 'pointer' }}
                />
            ))}
        </PostChipWrapper>
    )
};

export default CommunityChips;