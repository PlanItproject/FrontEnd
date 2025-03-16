import { configureStore } from "@reduxjs/toolkit";
import savedPostsReducer from "./community/slice/StoragePostsSlice.jsx";
import travelMateReducer from "./community/slice/TravelMateSlice.jsx";
import communityReducer from "./community/slice/CommunitySlice.jsx";

export const store = configureStore({
  reducer: {
    savedPosts: savedPostsReducer,
    travelMates: travelMateReducer,
    community: communityReducer,
  },
});
