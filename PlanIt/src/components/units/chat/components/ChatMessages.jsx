import {
  MessageContainer,
  Profile,
  BubbleWrapper,
  Username,
  Bubble,
  Time,
  BubbleTime,
} from "../styles/ChatRoom.style";

import { useSelector } from "react-redux";

const ChatMessage = ({ message }) => {
  const { currentRoom } = useSelector((state) => state.chat);
  const isMine = message.sender === "me";

  return (
    <MessageContainer isMine={isMine}>
      {!isMine && <Profile src={currentRoom?.profile} alt="profile" />}
      <BubbleWrapper isMine={isMine}>
        {!isMine && <Username>{currentRoom?.username}</Username>}
        <BubbleTime isMine={isMine}>
          <Bubble isMine={isMine}>{message.text}</Bubble>
          <Time>{message.time}</Time>
        </BubbleTime>
      </BubbleWrapper>
    </MessageContainer>
  );
};

export default ChatMessage;
