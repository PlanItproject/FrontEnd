import { useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import { Wrapper } from "./styles/ChatRoom.style";
import ChatHeader from "./components/ChatHeader";
import ChatMessages from "./components/ChatMessages";
import ChatInputBar from "./components/ChatInputBar";
import dummyChatLog from "./dummy/dummyChatLog";

const ChatRoom = () => {
  const { roomId } = useParams();
  const navigate = useNavigate();
  const currentRoom = useSelector((state) => state.chat.currentRoom);

  const messages = dummyChatLog[roomId] || [];

  if (!currentRoom) return <div>잘못된 접근입니다. (채팅방 정보 없음)</div>;

  return (
    <Wrapper>
      <ChatHeader username={currentRoom.username} onBack={() => navigate(-1)} />
      {messages.map((msg, idx) => (
        <ChatMessages key={idx} message={msg} />
      ))}
      <ChatInputBar />
    </Wrapper>
  );
};

export default ChatRoom;
