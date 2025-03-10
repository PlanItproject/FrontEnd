import { createSlice } from "@reduxjs/toolkit";
import img from "../../../../assets/profile.png";

const dummyTravelMates = [
  {
    id: 1,
    profileImg: img,
    username: "가나다라",
    participants: 1,
    location: "방콕, 태국",
    title: "카오산 근처에서 갈비 국수 드실 분!",
    tags: ["밥친구", "아무때나"],
  },
  {
    id: 2,
    profileImg: img,
    username: "홍길동",
    participants: 2,
    location: "서울, 한국",
    title: "홍대에서 맛집 탐방 같이 하실 분!",
    tags: ["혼밥러", "주말"],
  },
];

const travelMateSlice = createSlice({
  name: "travelMates",
  initialState: dummyTravelMates,
  reducers: {
    // 추가 로직 예정
    removeTravelMate: (state, action) => {
      return state.filter((mate) => mate.id !== action.payload);
    },
  },
});

export const { removeTravelMate } = travelMateSlice.actions;
export default travelMateSlice.reducer;
