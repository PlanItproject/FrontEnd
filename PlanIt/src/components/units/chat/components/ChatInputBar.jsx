import { InputBar, Input, SendButton } from "../styles/ChatRoom.style";
import { useState } from "react";
import sendImg from "../../../../assets/icon/paper-plane.svg";
const ChatInputBar = () => {
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (!input.trim()) return;
    console.log("Send:", input);
    setInput(""); // 추후 dispatch로 대체
  };

  return (
    <InputBar>
      <Input
        placeholder="채팅 입력하기"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <SendButton onClick={handleSend}>
        <img
          src={sendImg}
          alt="send"
          style={{ width: "24px", height: "24px" }}
        />
      </SendButton>
    </InputBar>
  );
};

export default ChatInputBar;
