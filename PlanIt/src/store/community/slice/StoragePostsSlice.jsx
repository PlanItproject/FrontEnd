import { createSlice } from "@reduxjs/toolkit";
import dummyPostsContents from "../../../components/units/community/posts/PostList/dummy/dummyPostItem";

const savedPostsSlice = createSlice({
  name: "savedPosts",
  initialState: dummyPostsContents,
  reducers: {
    // 저장로직 추가 예정
    removedPosts: (state, action) => {
      state.savedPosts = state.savedPosts.filter(
        (post) => post.id !== action.payload
      );
    },
  },
});

export default savedPostsSlice.reducer;
