import { useRef } from "react";
import Card from "../../Card";
import useDragScrollX from "./hooks/useDragScrollX";
import dummyPostsContents from "./dummy/dummyPostItem";
import { useSearchModal } from "../../../../../contexts/SearchModalContext";
import { RecommendCardSwiper, RecommendPostsBox, RecommendPostsTitleWrapper, SearchNotFound } from "./styles/RecomendationPosts.style";

const RecommendedPosts = () => {
    const firstWrapperRef = useRef(null);
    const secondWrapperRef = useRef(null);
    const { recentSearches } = useSearchModal();

    const firstDragScroll = useDragScrollX(firstWrapperRef);
    const secondDragScroll = useDragScrollX(secondWrapperRef);

    const query = recentSearches.length > 0 ? recentSearches[0] : '';

    return(
        <>
            <SearchNotFound>
                <p>'{query}'에 해당하는 포스트가 아직 없어요.</p>
                <p>필터를 해제하거나 다른 검색어로 검색해보세요.</p>
            </SearchNotFound>
            <RecommendPostsBox>
                <RecommendPostsTitleWrapper>
                    <h5>일하기 좋은 방콕 카페</h5>
                    <span>포스트</span>
                </RecommendPostsTitleWrapper>
                <RecommendCardSwiper 
                    ref={firstWrapperRef}
                    {...firstDragScroll}
                >
                    {dummyPostsContents?.map((info, postId) => (
                        <Card 
                            key={postId} 
                            info={info} 
                            onMouseDown={firstDragScroll.handleStopPropagation}
                        />
                    ))}
                </RecommendCardSwiper>
            </RecommendPostsBox>
            <RecommendPostsBox>
                <RecommendPostsTitleWrapper>
                    <h5>일하기 좋은 방콕 카페</h5>
                    <span>여행 메이트</span>
                </RecommendPostsTitleWrapper>
                <RecommendCardSwiper 
                    ref={secondWrapperRef}
                    {...secondDragScroll}
                >
                    {dummyPostsContents?.map((info, postId) => (
                        <Card 
                            key={postId} 
                            info={info} 
                            onMouseDown={secondDragScroll.handleStopPropagation}
                        />
                    ))}
                </RecommendCardSwiper>
            </RecommendPostsBox>
        </>
    )
}

export default RecommendedPosts;