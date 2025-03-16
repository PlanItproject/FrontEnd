import { useState } from "react";
import { ListFilter, ArrowDownUp } from "lucide-react";
import CommunityFilter from "./CommunityFiilter/CommunityFilter";
import PopupMenu from "../../../commons/PopupMenu/PopupMenu";
import { FilterBottomWrapper, FilterButton, FilterIconWrapper, RecentSortBtn } from "./CommunityListControl.style";

const CommnunityListControl = () => {
    const [showFilter, setShowFilter]  = useState();

    const handleOpenFilter = () => setShowFilter((prev) => !prev);
    const handleCloseFilter = () => setShowFilter(false);

    return (
        <FilterBottomWrapper>
            <FilterButton type='button' onClick={handleOpenFilter}>
                <FilterIconWrapper>
                    <ListFilter size={20} color='#1E1E1E'/>
                </FilterIconWrapper>
                <span>Filter</span>
            </FilterButton>
            {showFilter && (
                <PopupMenu 
                    items={[]}
                    onClose={handleCloseFilter}
                    isVisible={showFilter}
                    FilterComponent={CommunityFilter}
                />
            )}
            <RecentSortBtn>
                <span>최신순</span>
                <ArrowDownUp size={16.5} color='#1E1E1E'/>
            </RecentSortBtn>
        </FilterBottomWrapper>
    )
}

export default CommnunityListControl;