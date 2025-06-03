import styled from "@emotion/styled";

export const RecommendPostsBox = styled.div`
  padding: 20px 0;

  &:last-of-type {
    margin-bottom: 48px;
  }
`;

export const RecommendPostsTitleWrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  overflow: hidden;
  line-height: 1.45;

  p:nth-of-type(1) {
    font-size: 18px;
    font-weight: 600;
    lien-height: 145%;
    letter-spacing: -0.36px;
    text-align: center;
  }
  p:nth-of-type(2) {
    font-size: 14px;
    font-weight: 400;
    line-height: 145%;
    line-spacing: -0.14px;
    color: var(--color-text-default-tertiary);
  }

  p:nth-last-of-type(1):nth-of-type(3) {
    font-size: 14px;
    font-weight: 400;
    line-height: 145%;
    line-spacing: -0.14px;
    color: var(--color-text-default-secondary);
  }
`;

export const RecommendCardSwiper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px 4px;
  gap: 16px;
  overflow: auto;
  scrollbar-width: none;
  -ms-overflow-style: none;
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const TravelMateCardColumn = styled.div`
  display: flex;
  flex-direction: row;
  gap: 6px;
  flex: 0 0 auto;
`;

// export const TravelMateWrapper = styled.div`
//   display: grid;
//   grid-template-columns: repeat(2, 1fr);
//   gap: 16px;
//   padding: 20px;
//   justify-content: center;
// `;
