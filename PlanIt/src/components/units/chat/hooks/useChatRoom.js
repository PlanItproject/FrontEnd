import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import useChatRoom from "./hooks/useChatRoom";

const ChatRoom = () => {
  const { roomId } = useParams();
  const room = useSelector((state) => state.chat.currentRoom);
  const messages = useSelector(
    (state) => state.chat.messagesByRoom[roomId] || []
  );
  const { sendMessage } = useChatRoom(roomId);

  return (
    <div>
      <h2>{room?.username}</h2>
      <img src={room?.profile} alt="profile" />
      <div>
        {messages.map((msg) => (
          <p key={msg.id}>{msg.text}</p>
        ))}
      </div>
      <ChatInputBar onSend={sendMessage} />
    </div>
  );
};
