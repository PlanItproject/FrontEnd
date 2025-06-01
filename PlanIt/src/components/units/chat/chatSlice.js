import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentRoom: null,
  messagesByRoom: {}, // 채팅방 ID를 키로, 메시지 배열을 값으로 가지는 객체
};

const chatSlice = createSlice({
  name: "chat",
  initialState,
  reducers: {
    enterRoom: (state, action) => {
      state.currentRoom = action.payload; // {id: username, profile} 이 들어감!!
    },
    setMesasges: (state, action) => {
      const { roomId, messages } = action.payload;
      state.messagesByRoom[roomId] = messages; // roomId에 해당하는 메시지 배열을 설정
    },
    addMessage: (state, action) => {
      const { roomId, message } = action.payload;
      if (!state.messagesByRoom[roomId]) {
        state.messagesByRoom[roomId] = []; // 해당 채팅방이 없으면 초기화
      }
      state.messagesByRoom[roomId].push(message); // 메시지를 해당 채팅방에 추가
    },
  },
});

export const { enterRoom, setMessages, addMessage } = chatSlice.actions;
export default chatSlice.reducer;
