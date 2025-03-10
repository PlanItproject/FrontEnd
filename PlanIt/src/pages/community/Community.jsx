import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Routes, Route, useNavigate, useLocation } from "react-router-dom";
import Storage from "./storage/Storage.jsx";
import Tabs from "../../components/commons/Tabs/Tabs.jsx";
import Post from "./Post/Post.jsx";
import TravelMate from "./travelMate/TravelMate.jsx";
import CommunityHeader from "./Header/CommunityHeader.jsx";
import { setTab } from "../../pages/community/storage/slice/CommunitySlice.jsx";

const Community = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();
  const currentTab = useSelector((state) => state.community.currentTab);

  const steps = [
    { label: "포스트", path: "post" },
    { label: "여행 메이트", path: "travelmate" },
    { label: "보관함", path: "storage" },
  ];

  useEffect(() => {
    const path = location.pathname.split("/")[2] || "post";
    dispatch(setTab(path));
  }, [location.pathname, dispatch]);

  const handleTabClick = (path) => {
    dispatch(setTab(path));
    navigate(`/community/${path}`);
  };

  return (
    <div>
      <CommunityHeader />
      <Tabs currentTab={currentTab} steps={steps} onTabClick={handleTabClick} />
      <Routes>
        <Route path="post" element={<Post />} />
        <Route path="travelmate" element={<TravelMate />} />
        <Route path="storage" element={<Storage />} />
      </Routes>
    </div>
  );
};

export default Community;
