import { Header, BackButton, RoomTitle } from "../styles/ChatRoom.style";
import { IoIosArrowBack } from "react-icons/io";
import { FiMoreVertical } from "react-icons/fi";

const ChatHeader = ({ username, onBack }) => {
  console.log(username);
  return (
    <>
      <Header>
        <BackButton onClick={onBack}>
          <IoIosArrowBack size={24} />
        </BackButton>
        <RoomTitle>{username}</RoomTitle>
        <FiMoreVertical size={20} />
      </Header>
    </>
  );
};

export default ChatHeader;
