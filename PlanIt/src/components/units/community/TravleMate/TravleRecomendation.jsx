import {
  RecommendPostsBox,
  RecommendPostsTitleWrapper,
  RecommendCardSwiper,
  TravelMateCardColumn,
} from "./TravleList/styles/RecomendationStores.style.js";
import { useSelector } from "react-redux";
import TravelMate from "../TravelMate.jsx";
import { useRef } from "react";
import useDragScrollY from "./TravleList/hooks/useDragScrollY.js";

const chunkByTwo = (array) => {
  const result = [];
  for (let i = 0; i < array.length; i += 2) {
    result.push(array.slice(i, i + 2));
  }
  return result;
};

const RecommendedPosts = () => {
  const firstWrapperRef = useRef(null);
  const travelMates = useSelector((state) => state.travelMates);
  const isMyPostsOnly = useSelector((state) => state.Posts.isMyPostsOnly);
  const isSavedPostsOnly = useSelector((state) => state.Posts.isSavedPostsOnly);

  const firstDragScroll = useDragScrollY(firstWrapperRef);

  return (
    <>
      {!isMyPostsOnly && !isSavedPostsOnly && (
        <RecommendPostsBox>
          <RecommendPostsTitleWrapper>
            <p>여행메이트 찾기</p>
            <p>{travelMates.length}개</p>
            <p>최대 50개 저장 가능</p>
          </RecommendPostsTitleWrapper>

          <RecommendCardSwiper ref={firstWrapperRef} {...firstDragScroll}>
            {chunkByTwo(travelMates).map((pair, idx) => (
              <TravelMateCardColumn key={idx}>
                {pair.map((info, innerIdx) => (
                  <TravelMate
                    key={innerIdx}
                    info={info}
                    onMouseDown={firstDragScroll.handleStopPropagation}
                  />
                ))}
              </TravelMateCardColumn>
            ))}
          </RecommendCardSwiper>
        </RecommendPostsBox>
      )}
    </>
  );
};

export default RecommendedPosts;
