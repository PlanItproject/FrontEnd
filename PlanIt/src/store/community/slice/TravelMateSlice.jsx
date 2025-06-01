import { createSlice } from "@reduxjs/toolkit";
import dummyTravelMates from "../../../components/units/community/store/StoreList/dummy/dummyTravelMate";

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
