import styled from "@emotion/styled";
import "../../../../Fonts/static/pretendard.css";

const CommunityHeaderContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 12px 20px 20px 20px;
  margin-bottom: -60px;
  height: auto;
  justify-content: space-between;
  align-items: center;
  align-self: stretch;
`;

const CommunityHeaderMenuBtn = styled.button`
  border: none;
  background: inherit;
  flex-shrink: 0;
`;

const CommunityHeaderLocation = styled.div`
    display: flex;
    align-items: center;
    padding: 8px 4px 8px 8px;
    gap: 6px;

    p:nth-of-type(1) {
        font-family: "Pretendard"; serif
        text-align: "center";
        font-size: "16px";
        font-weight: "600";
        font-style: "normal";
        line-height: "145%";
    }
`;

const CommunityHeaderRightContainer = styled.div`
  display: flex;
  gap: 12px;
`;

const CommunityHeaderPencilBtn = styled.button`
  border: none;
  background: inherit;
  flex-shrink: 0;
  width: 24px;
  height: 24px;
`;

const CommunityHeaderSearchBtn = styled.button`
  border: none;
  background: inherit;
  flex-shrink: 0;
  width: 24px;
  height: 24px;
`;

export {
  CommunityHeaderContainer,
  CommunityHeaderMenuBtn,
  CommunityHeaderLocation,
  CommunityHeaderRightContainer,
  CommunityHeaderPencilBtn,
  CommunityHeaderSearchBtn,
};
