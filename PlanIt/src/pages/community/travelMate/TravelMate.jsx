import RecommendedPosts from "../../../components/units/community/TravleMate/TravleRecomendation.jsx";
import styled from "@emotion/styled";
import CommunityChips from "../../../components/units/community/CommunityControls/CommunityChips";
import CommnunityListControl from "../../../components/units/community/CommunityControls/CommunityListControl";

export const ScrollWrapper = styled.div`
  height: calc(100vh - 300px);
  overflow-y: auto;
`;

const TravelMate = () => {
  return (
    <ScrollWrapper>
      <CommunityChips />
      <CommnunityListControl />
      <RecommendedPosts />
    </ScrollWrapper>
  );
};

export default TravelMate;
