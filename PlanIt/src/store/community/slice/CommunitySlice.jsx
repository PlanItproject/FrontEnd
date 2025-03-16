import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    currentTab: "post",
};

const communitySlice = createSlice({
    name: "community",
    initialState,
    reducers: {
        setTab: (state, action) => {
            state.currentTab = action.payload;
        },
    },
});

export const { setTab } = communitySlice.actions;
export default communitySlice.reducer;
