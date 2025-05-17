import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user: null, // 닉네임, id, mbti, bio, 여행한 나라, 프로필 이미지지
    isAuthenticated: false,
    followers: [],
    following: []
};

const accountSlice = createSlice({
    name: 'account',
    initialState,
    reducers: {
        setUser(state, action) {
            state.user = action.payload;
            state.isAuthenticated = true;
        },
        clearUser(state) {
            state.user = null;
            state.isAuthenticated = false;
            state.followers = [];
            state.following = [];
        },
        setFollowers(state, action) {
            state.followers = action.payload;
        },
        setFollowing(state, action) {
            state.following = action.payload;
        }
    }
});

export const { setUser, clearUser, setFollowers, setFollowing } = accountSlice.actions;
export default accountSlice.reducer;