import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useLocation } from "react-router-dom";
import CommunityRoutes from "../../routes/CommunityRoutes.jsx";
import Tabs from "../../components/commons/Tabs/Tabs.jsx";
import DeletePopup from "../../components/units/community/store/StoreList/Popup/DeletePopup.jsx";
import DeleteStatusModal from "../../components/units/community/store/StoreList/Popup/DeleteStatusModal.jsx";
import CommunityHeader from "../../components/units/community/Header/CommunityHeader.jsx";
import BottomNavigation from "../../components/units/community/navigation/BottomNavigation.jsx";
import { setTab } from "../../store/community/slice/CommunitySlice.jsx";
import { CommunityProvider } from "../../contexts/CommunityProviders.jsx";
import {
  DeleteActionsWrapper,
  ActionButton,
} from "../../components/units/community/store/StoreList/styles/CommunityDeleteActions.style.js";
import {
  toggleDeleteMode,
  openDeletePopup,
} from "../../components/units/community/store/StoreList/store/myPostsSlice.js";
const Community = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();
  const currentTab = useSelector((state) => state.community.currentTab);
  const isDeleteMode = useSelector((state) => state.Posts.isDeleteMode);

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

  const handleCancel = () => dispatch(toggleDeleteMode());
  const handleConfirm = () => dispatch(openDeletePopup());

  return (
    <CommunityProvider>
      <div>
        <CommunityHeader />
        <div style={{ padding: "0 20px" }}>
          <Tabs
            currentTab={currentTab}
            steps={steps}
            onTabClick={handleTabClick}
          />
        </div>

        {isDeleteMode && (
          <DeleteActionsWrapper>
            <ActionButton variant="cancel" onClick={handleCancel}>
              취소하기
            </ActionButton>
            <ActionButton variant="confirm" onClick={handleConfirm}>
              선택완료
            </ActionButton>
          </DeleteActionsWrapper>
        )}
        {!isDeleteMode && <BottomNavigation />}

        <CommunityRoutes />
        <DeletePopup />
        <DeleteStatusModal />
      </div>
    </CommunityProvider>
  );
};

export default Community;
