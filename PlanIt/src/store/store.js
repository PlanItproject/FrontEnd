import { configureStore } from "@reduxjs/toolkit";
import savedPostsReducer from "./community/slice/StoragePostsSlice.jsx";
import travelMateReducer from "./community/slice/TravelMateSlice.jsx";
import communityReducer from "./community/slice/CommunitySlice.jsx";
import myPostsReducer from "../components/units/community/store/StoreList/store/myPostsSlice.js";
import chatReducer from "../components/units/chat/chatSlice.js";

export const store = configureStore({
  reducer: {
    savedPosts: savedPostsReducer,
    travelMates: travelMateReducer,
    community: communityReducer,
    Posts: myPostsReducer,
    chat: chatReducer,
  },
});
