import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isMyPostsOnly: false,
  isSavedPostsOnly: false,
  isDeleteMode: false,
  selectedPosts: [],
  isDeletePopupOpen: false,
};

const myPostsSlice = createSlice({
  name: "Posts",
  initialState,
  reducers: {
    toggleMyPosts: (state) => {
      state.isMyPostsOnly = !state.isMyPostsOnly;
      if (state.isMyPostsOnly) state.isSavedPostsOnly = false;
    },
    toggleSavedPosts: (state) => {
      state.isSavedPostsOnly = !state.isSavedPostsOnly;
      if (state.isSavedPostsOnly) state.isMyPostsOnly = false;
    },
    resetMyPostsFilter: (state) => {
      state.isMyPostsOnly = false;
      state.isSavedPostsOnly = false;
      state.isDeleteMode = false;
      state.selectedPosts = [];
    },
    toggleDeleteMode: (state) => {
      state.isDeleteMode = !state.isDeleteMode;
    },

    selectPost: (state, action) => {
      const postId = action.payload;

      if (!postId) return;

      if (state.selectedPosts.includes(postId)) {
        state.selectedPosts = state.selectedPosts.filter((id) => id !== postId);
      } else {
        state.selectedPosts.push(postId);
      }
    },
    openDeletePopup: (state) => {
      state.isDeletePopupOpen = true;
    },
    closeDeletePopup: (state) => {
      state.isDeletePopupOpen = false;
    },
    deleteSelectedPosts: (state) => {
      state.selectedPosts = [];
      state.isDeleteMode = false;
      state.isDeletePopupOpen = false;
    },
  },
});

export const {
  toggleMyPosts,
  toggleSavedPosts,
  selectPost,
  toggleDeleteMode,
  openDeletePopup,
  closeDeletePopup,
  deleteSelectedPosts,
  resetMyPostsFilter,
} = myPostsSlice.actions;
export default myPostsSlice.reducer;
