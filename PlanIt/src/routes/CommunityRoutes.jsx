import { Route, Routes } from "react-router-dom";
import Post from "../pages/community/Post/Post.jsx";
import TravelMate from "../pages/community/travelMate/TravelMate.jsx";
import Storage from "../pages/community/storage/Storage.jsx";

const CommunityRoutes = () => {
  return (
    <Routes>
      <Route path="post" element={<Post />} />
      <Route path="travelmate" element={<TravelMate />} />
      <Route path="storage" element={<Storage />} />
    </Routes>
  );
};

export default CommunityRoutes;
