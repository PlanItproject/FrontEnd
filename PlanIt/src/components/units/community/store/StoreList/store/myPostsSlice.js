import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isMyPostsOnly: false,
  isTravelListOnly: false,
  isSavedPostsOnly: false,
  isDeleteMode: false,
  selectedPosts: [],
  selectedTravelMates: [],
  isDeletePopupOpen: false,
  isTravelMate: false,
  deleteStatus: null,
};

const myPostsSlice = createSlice({
  name: "Posts",
  initialState,
  reducers: {
    toggleMyPosts: (state) => {
      state.isMyPostsOnly = !state.isMyPostsOnly;
      if (state.isMyPostsOnly) state.isSavedPostsOnly = false;
    },
    toggleTravel: (state) => {
      state.isTravelMate = !state.isTravelMate;

      if (state.isTravelMate) {
        state.isMyPostsOnly = false;
        state.isSavedPostsOnly = false;

        state.isTravelListOnly = true;
      } else {
        state.isTravelListOnly = false;
      }
    },

    toggleSavedPosts: (state) => {
      state.isSavedPostsOnly = !state.isSavedPostsOnly;
      if (state.isSavedPostsOnly) state.isMyPostsOnly = false;
    },
    resetMyPostsFilter: (state) => {
      state.isMyPostsOnly = false;
      state.isSavedPostsOnly = false;
      state.isTravelListOnly = false;
      state.isDeleteMode = false;
      state.selectedPosts = [];
    },
    toggleDeleteMode: (state) => {
      state.isDeleteMode = !state.isDeleteMode;
    },
    selectTravelMate: (state, action) => {
      const travelId = action.payload;
      if (!travelId) return;

      if (state.selectedTravelMates.includes(travelId)) {
        state.selectedTravelMates = state.selectedTravelMates.filter(
          (id) => id !== travelId
        );
      } else {
        state.selectedTravelMates.push(travelId);
      }
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
    deleteSelectedTravelMates: (state) => {
      state.selectedTravelMates = [];
      state.isDeleteMode = false;
      state.isDeletePopupOpen = false;
    },
    startDelete: (state) => {
      state.deleteStatus = "loading";
    },
    finishDeleteSuccess: (state) => {
      state.deleteStatus = "success";
      state.selectedPosts = [];
    },
    finishDeleteFail: (state) => {
      state.deleteStatus = "fail";
    },
    resetDeleteStatus: (state) => {
      state.deleteStatus = null;
    },
  },
});

export const {
  toggleMyPosts,
  toggleSavedPosts,
  toggleTravel,
  selectPost,
  selectTravelMate,
  toggleDeleteMode,
  openDeletePopup,
  finishDeleteFail,
  finishDeleteSuccess,
  resetDeleteStatus,
  startDelete,
  closeDeletePopup,
  deleteSelectedPosts,
  deleteSelectedTravelMates,
  resetMyPostsFilter,
} = myPostsSlice.actions;
export default myPostsSlice.reducer;
