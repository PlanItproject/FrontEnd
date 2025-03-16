import styled from '@emotion/styled';

export const SearchNotFound = styled.div`
    padding: 100px 20px;
    text-align: center;
    line-height: 1.45;
    letter-spacing: -0.14px;

    & > p:first-of-type {
        font-size: 20px;
        font-weight: 600;
        margin-bottom: 8px;
    }

    & > p:last-of-type {
        font-size: 14px;
    }
`;

export const RecommendPostsBox = styled.div`
    padding: 20px 0;

    &:last-of-type { margin-bottom : 48px; }
`;

export const RecommendPostsTitleWrapper = styled.div`
    padding: 10px 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 4px;
    line-height: 1.45;

    & > h5 {
        font-size: 18px;
        font-weight: 600;
        letter-spacing: -0.36px;
    }

    & > span {
        font-size: 14px;
        letter-spacing: -0.14px;
    }
`;

export const RecommendCardSwiper = styled.div`
    padding: 20px 0 20px 20px;
    display: flex;
    flex-wrap: nowrap;
    gap: 12px;
    width: 100%;
    overflow-x: hidden;
    -ms-overflow-style: none;
    scrollbar-width: none;
    
    & > div {
        cursor: pointer;
        flex: 0 0 calc(30% - 12px);

        @media (max-width: 768px) {
            flex: 0 0 calc(50% - 12px);
        }

        @media (max-width: 380px) {
            flex: 0 0 calc(80% - 12px);
        }
    }
`;