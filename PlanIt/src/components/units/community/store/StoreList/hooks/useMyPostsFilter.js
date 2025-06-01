import { useSelector } from "react-redux";
import dummyPostsContents from "../dummy/dummyPostItem";

const useMyPostsFilter = () => {
  const isMyPostsOnly = useSelector((state) => state.Posts.isMyPostsOnly);

  const filteredPosts = isMyPostsOnly
    ? dummyPostsContents.filter((post) => post.isMine)
    : dummyPostsContents;

  return {
    filteredPosts:
      filteredPosts.length > 0 ? filteredPosts : dummyPostsContents,
    isMyPostsOnly,
  };
};

export default useMyPostsFilter;
