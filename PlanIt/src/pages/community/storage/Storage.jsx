import RecommendedPosts from "../../../components/units/community/store/StoreList/StoreRecmoendation.jsx";
import styled from "@emotion/styled";
import CommnunityListControl from "../../../components/units/community/CommunityControls/CommunityListControl";

export const ScrollWrapper = styled.div`
  height: calc(100vh - 300px);
  overflow-y: auto;
`;

const Storage = () => {
  return (
    <ScrollWrapper>
      <CommnunityListControl />
      <RecommendedPosts />
    </ScrollWrapper>
  );
};

export default Storage;
