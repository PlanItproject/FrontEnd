import { Route, Routes } from "react-router-dom";
import Post from "../pages/community/Post/Post.jsx";
import TravelMate from "../pages/community/travelMate/TravelMate.jsx";
import Storage from "../pages/community/storage/Storage.jsx";
import PostEditor from "../pages/community/Post/PostEditor.jsx";
import PostPreview from "../pages/community/Post/PostPreview.jsx";

const CommunityRoutes = () => {
  return (
    <Routes>
      <Route path="post" element={<Post />} />
      <Route path="travelmate" element={<TravelMate />} />
      <Route path="storage" element={<Storage />} />
      <Route path="postEditor" element={<PostEditor />}/>
      <Route path="postPreview" element={<PostPreview />}/>
    </Routes>
  );
};

export default CommunityRoutes;
