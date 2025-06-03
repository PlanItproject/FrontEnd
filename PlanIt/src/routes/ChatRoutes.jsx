import { Routes, Route } from "react-router-dom";
import ChatTravelList from "../components/units/chat/chatTravleList";
import ChatRoom from "../components/units/chat/ChatRoom";

const ChatRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<ChatTravelList />} />
      <Route path=":roomId" element={<ChatRoom />} />
    </Routes>
  );
};

export default ChatRoutes;
