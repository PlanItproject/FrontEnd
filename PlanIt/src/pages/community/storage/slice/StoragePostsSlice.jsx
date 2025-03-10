import { createSlice } from "@reduxjs/toolkit";
import img from "../../../../assets/profile.png";
import run from "../../../../assets/run.jpg";

const dummyUserInfo = [
  {
    profileImg: img,
    username: "홍길동",
    time: new Date().toLocaleDateString("ko-KR"),
    location: "서울",
    title: "포스트 예시1",
    description: "예시 더미입니다.",
    image: run,
  },
  {
    profileImg: img,
    username: "홍길동2",
    time: new Date().toLocaleDateString("ko-KR"),
    location: "서울",
    title: "포스트 예시2",
    description: "예시 더미입니다2",
    image: run,
  },
];

const savedPostsSlice = createSlice({
  name: "savedPosts",
  initialState: dummyUserInfo,
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
