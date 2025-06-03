import { useRef } from "react";
import useDragScrollX from "../../posts/PostList/hooks/useDragScrollX";
import useDragScrollY from "../../TravleMate/TravleList/hooks/useDragScrollY.js";
import dummyPostsContents from "./dummy/dummyPostItem";
import styled from "@emotion/styled";
import {
  toggleMyPosts,
  toggleSavedPosts,
  selectPost,
  toggleTravel,
  selectTravelMate,
} from "./store/myPostsSlice.js";
import {
  RecommendPostsBox,
  RecommendPostsTitleWrapper,
} from "./styles/RecomendationStores.style";
import { useDispatch, useSelector } from "react-redux";
import PostList from "./PostList.jsx";
import TravelList from "./TravelList.jsx";

const SelectedPostsText = styled.p`
  font-weight: 600;
  color: ${(props) =>
    props.selectedCount > 0 ? "#007bff" : "#333"} !important;
`;

const RecommendedPosts = () => {
  const savedPosts = useSelector((state) => state.savedPosts);
  const travelMates = useSelector((state) => state.travelMates);
  const selectdTravelMate = useSelector(
    (state) => state.Posts.selectedTravelMates
  );
  const isMyPostsOnly = useSelector((state) => state.Posts.isMyPostsOnly);
  const isSavedPostsOnly = useSelector((state) => state.Posts.isSavedPostsOnly);
  const isDeleteMode = useSelector((state) => state.Posts.isDeleteMode);
  const isTravelListOnly = useSelector((state) => state.Posts.isTravelListOnly);
  const selectedPosts = useSelector((state) => state.Posts.selectedPosts);

  const dispatch = useDispatch();

  const firstWrapperRef = useRef(null);
  const secondWrapperRef = useRef(null);
  const thirdWrapperRef = useRef(null);

  const firstDragScroll = useDragScrollX(firstWrapperRef);
  const secondDragScroll = useDragScrollX(secondWrapperRef);
  const thirdDragScroll = useDragScrollY(thirdWrapperRef);

  return (
    <>
      {!isSavedPostsOnly && !isTravelListOnly && (
        <RecommendPostsBox>
          <RecommendPostsTitleWrapper onClick={() => dispatch(toggleMyPosts())}>
            <p>
              {isDeleteMode
                ? "삭제할 포스트를 선택해주세요"
                : "내가 작성한 포스트"}
            </p>
            {isDeleteMode && (
              <SelectedPostsText selectedCount={selectedPosts.length}>
                총 {selectedPosts.length}개의 포스트
              </SelectedPostsText>
            )}
            <p>{isDeleteMode ? null : `${dummyPostsContents.length}개`}</p>
          </RecommendPostsTitleWrapper>
          <PostList
            onSelectPost={(postId) => dispatch(selectPost(postId))}
            isDeleteMode={isDeleteMode}
            isMyPostsOnly={isMyPostsOnly}
            scrollRef={firstWrapperRef}
            dragScroll={firstDragScroll}
            onMouseDown={firstDragScroll.handleStopPropagation}
          />
        </RecommendPostsBox>
      )}
      {!isMyPostsOnly && !isTravelListOnly && (
        <RecommendPostsBox>
          <RecommendPostsTitleWrapper
            onClick={() => dispatch(toggleSavedPosts())}
          >
            <p>
              {isDeleteMode
                ? "보관함에서 삭제할 포스트를 선택해주세요"
                : "저장한 포스트"}
            </p>
            {isDeleteMode && (
              <SelectedPostsText selectedCount={selectedPosts.length}>
                총 {selectedPosts.length}개의 포스트
              </SelectedPostsText>
            )}
            {isDeleteMode ? null : (
              <>
                <p>{savedPosts.length}개</p>
                <p>최대 100개 저장 가능</p>
              </>
            )}
          </RecommendPostsTitleWrapper>
          <PostList
            onSelectPost={(postId) => dispatch(selectPost(postId))}
            isDeleteMode={isDeleteMode}
            isSavedPostsOnly={isSavedPostsOnly}
            scrollRef={secondWrapperRef}
            dragScroll={secondDragScroll}
            onMouseDown={secondDragScroll.handleStopPropagation}
          />
        </RecommendPostsBox>
      )}
      {!isMyPostsOnly && !isSavedPostsOnly && (
        <RecommendPostsBox>
          <RecommendPostsTitleWrapper
            onClick={() => {
              console.log("여행메이트 클릭됨");
              dispatch(toggleTravel());
            }}
          >
            <p>
              {isDeleteMode
                ? "삭제할 포스트를 선택해주세요"
                : "여행메이트 찾기"}
            </p>
            {isDeleteMode && (
              <SelectedPostsText selectedCount={selectdTravelMate.length}>
                총 {selectdTravelMate.length}개의 포스트
              </SelectedPostsText>
            )}
            {isDeleteMode ? null : (
              <>
                <p>{travelMates.length}개</p>
                <p>최대 50개 저장 가능</p>
              </>
            )}
          </RecommendPostsTitleWrapper>
          <TravelList
            isDeleteMode={isDeleteMode}
            onSelectTravelMate={(id) => dispatch(selectTravelMate(id))}
            isTravelListOnly={isTravelListOnly}
            scrollRef={thirdWrapperRef}
            dragScroll={thirdDragScroll}
            onMouseDown={thirdDragScroll.handleStopPropagation}
          />
        </RecommendPostsBox>
      )}
    </>
  );
};

export default RecommendedPosts;
