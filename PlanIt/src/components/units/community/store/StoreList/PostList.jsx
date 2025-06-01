import Card from "../../Card";
import useMyPostsFilter from "./hooks/useMyPostsFilter";
import styled from "@emotion/styled";
import { useSelector } from "react-redux";

export const RecommendCardSwiper = styled.div`
  padding: 20px 0 20px 20px;
  display: flex;
  flex-wrap: nowrap;
  gap: 12px;
  width: 100%;
  overflow-x: hidden;
  -ms-overflow-style: none;
  scrollbar-width: none;

  & > div {
    cursor: pointer;
    flex: 0 0 calc(40% - 12px);

    @media (max-width: 768px) {
      flex: 0 0 calc(60% - 12px);
    }

    @media (max-width: 380px) {
      flex: 0 0 calc(90% - 12px);
    }
  }
`;

const GridLayout = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 4px;
  padding: 20px;
  width: 100%;
`;

const SelectedCard = styled.div`
  border: ${({ isSelected }) =>
    isSelected ? "2px solid #007bff" : "2px solid transparent"};
  border-radius: 8px;
  transition: border 0.2s ease-in-out;
  cursor: ${({ isDeleteMode }) => (isDeleteMode ? "pointer" : "default")};
`;

const PostList = ({
  isMyPostsOnly,
  isSavedPostsOnly,
  scrollRef,
  dragScroll,
  isDeleteMode,
  onSelectPost,
}) => {
  const { filteredPosts } = useMyPostsFilter();
  const selectedPosts = useSelector((state) => state.Posts.selectedPosts);

  return isMyPostsOnly || isSavedPostsOnly ? (
    <GridLayout>
      {filteredPosts.map((post, index) => {
        const postId = post.id || `${post.title}-${index}`;
        const isSelected = selectedPosts.includes(postId);

        return (
          <SelectedCard
            key={postId}
            isSelected={isSelected}
            isDeleteMode={isDeleteMode}
            onClick={(e) => {
              e.stopPropagation();
              isDeleteMode && onSelectPost(postId);
            }}
          >
            <Card info={post} />
          </SelectedCard>
        );
      })}
    </GridLayout>
  ) : (
    <RecommendCardSwiper ref={scrollRef} {...dragScroll}>
      {filteredPosts.length > 0 ? (
        filteredPosts.map((post, index) => (
          <Card key={post.id || `${post.title}-${index}`} info={post} />
        ))
      ) : (
        <p style={{ textAlign: "center", color: "#888" }}>포스트가 없습니다.</p>
      )}
    </RecommendCardSwiper>
  );
};

export default PostList;
