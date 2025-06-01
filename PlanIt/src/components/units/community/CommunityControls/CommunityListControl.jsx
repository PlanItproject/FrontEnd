import { useState } from "react";
import { ListFilter, ArrowDownUp } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { IoTrashBinSharp } from "react-icons/io5";
import {
  resetMyPostsFilter,
  toggleDeleteMode,
} from "../store/StoreList/store/myPostsSlice";
import CommunityFilter from "./CommunityFiilter/CommunityFilter";
import PopupMenu from "../../../commons/PopupMenu/PopupMenu";
import {
  FilterBottomWrapper,
  FilterButton,
  FilterIconWrapper,
  RecentSortBtn,
} from "./CommunityListControl.style";

const CommnunityListControl = () => {
  const [showFilter, setShowFilter] = useState();
  const dispatch = useDispatch();
  const isMyPostsOnly = useSelector((state) => state.Posts.isMyPostsOnly);
  const isTravelListOnly = useSelector((state) => state.Posts.isTravelListOnly);
  const isSavedPostsOnly = useSelector((state) => state.Posts.isSavedPostsOnly);
  const isDeleteMode = useSelector((state) => state.Posts.isDeleteMode);

  const handleOpenFilter = () => setShowFilter((prev) => !prev);
  const handleCloseFilter = () => setShowFilter(false);
  const handleResetFilter = () => dispatch(resetMyPostsFilter());
  const handleDeleteMode = () => dispatch(toggleDeleteMode());

  const handleTrashClick = () => {
    if (isDeleteMode) {
      handleResetFilter();
    } else {
      handleDeleteMode();
    }
  };

  return (
    <FilterBottomWrapper>
      <FilterButton type="button" onClick={handleOpenFilter}>
        <FilterIconWrapper>
          <ListFilter size={20} color="#1E1E1E" />
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
        <ArrowDownUp size={16.5} color="#1E1E1E" />
        {(isMyPostsOnly || isSavedPostsOnly || isTravelListOnly) && (
          <div onClick={handleTrashClick} style={{ cursor: "pointer" }}>
            <IoTrashBinSharp size={16} color="black" />
          </div>
        )}
      </RecentSortBtn>
    </FilterBottomWrapper>
  );
};

export default CommnunityListControl;
