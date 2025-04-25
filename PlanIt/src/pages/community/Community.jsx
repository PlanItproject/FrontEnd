import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useLocation } from "react-router-dom";
import CommunityRoutes from "../../routes/CommunityRoutes.jsx";
import Tabs from "../../components/commons/Tabs/Tabs.jsx";
import CommunityHeader from "../../components/units/community/Header/CommunityHeader.jsx";
import BottomNavigation from "../../components/units/community/navigation/BottomNavigation.jsx";
import { setTab } from "../../store/community/slice/CommunitySlice.jsx";
import { Bot } from "lucide-react";
import { CommunityProvider } from "../../contexts/CommunityProviders.jsx";

const Community = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();
  const currentTab = useSelector((state) => state.community.currentTab);

  const isEditorPage = location.pathname.includes("postEditor") || location.pathname.includes("postPreview");

  // Router 로 변경
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
    <CommunityProvider>
      <div>
      {!isEditorPage && <CommunityHeader />}
        <div style={{ padding: '0 20px' }}>
          {!isEditorPage && 
            <Tabs currentTab={currentTab} steps={steps} onTabClick={handleTabClick} />
          }
        </div>
        {!isEditorPage && <BottomNavigation />}
        <CommunityRoutes />
      </div>
    </CommunityProvider>
  );
};

export default Community;
