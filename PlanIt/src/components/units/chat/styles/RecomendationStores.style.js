import styled from "@emotion/styled";

export const RecommendPostsBox = styled.div`
  &:last-of-type {
    margin-bottom: 48px;
  }
`;

export const Page = styled.div`
  display: flex;
  flex-direction: column;
  overflow-y: hidden;
  height: 100vh;
`;

export const RecommendPostsTitleWrapper = styled.div`
  padding: 24px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 4px;
  overflow: hidden;
  line-height: 1.45;

  p {
    color: var(--text-brand-default, #5ca5ff);
    text-align: center;

    font-family: Pretendard;
    font-size: 18px;
    font-style: normal;
    font-weight: 600;
    line-height: 145%; /* 26.1px */
    letter-spacing: -0.36px;
  }
  button {
    color: var(--text-brand-default, #5ca5ff);

    font-family: Pretendard;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 145%; /* 23.2px */
  }
`;

export const RecommendCardSwiper = styled.div`
  padding: 0px 24px 20px 24px;
  display: flex;
  flex-wrap: nowrap;
  gap: 12px;
  width: 100%;
  overflow-x: hidden;
  -ms-overflow-style: none;
  scrollbar-width: none;

  & > div {
    cursor: pointer;
    flex: 0 0 calc(40% - 12px);

    @media (max-width: 768px) {
      flex: 0 0 calc(60% - 12px);
    }

    @media (max-width: 380px) {
      flex: 0 0 calc(90% - 12px);
    }
  }
`;

export const TravelMateGridWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 0 10px 14px 4px;
  overflow-y: auto;
`;

export const TravelMateCardColumn = styled.div`
  display: flex;
  flex-direction: row;
  gap: 6px;
  flex: 0 0 auto;
`;

export const MessageScrollBox = styled.div`
  overflow-y: auto;
  flex: 1;

  padding: 0 20px 150px 20px;

  -webkit-overflow-scrolling: touch;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const ExpandedHeader = styled.div`
  position: relative;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 24px;

  p {
    color: var(--text-brand-default, #5ca5ff);
    font-family: Pretendard;
    font-size: 18px;
    font-weight: 600;
    line-height: 145%;
    letter-spacing: -0.36px;
    margin: 0;
  }

  .back-button {
    position: absolute;
    left: 24px;
    display: flex;
    align-items: center;
    color: var(--text-brand-default, #5ca5ff);
    font-weight: 500;
    font-size: 16px;
    background: transparent;
    border: none;
  }

  .more-icon {
    position: absolute;
    right: 24px;
    color: #000;
  }
`;
