import { configureStore } from "@reduxjs/toolkit";
import savedPostsReducer from "../slice/StoragePostsSlice.jsx";
import travelMateReducer from "../slice/TravelMateSlice.jsx";
import communityReducer from "../slice/CommunitySlice.jsx";

export const store = configureStore({
  reducer: {
    savedPosts: savedPostsReducer,
    travelMates: travelMateReducer,
    community: communityReducer,
  },
});
