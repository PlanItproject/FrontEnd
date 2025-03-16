import styled from '@emotion/styled';

export const SearchModalContainer = styled.div`
    padding: 36px 20px 20px 20px;
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background-color: #fff;
    font-weight: 600;
    line-height: 1.45;
    z-index: 1000;
`;

export const SeaerchModalHeader = styled.div`
    padding: 24px 0;
    font-size: 18px;
    text-align: center;
`;

export const SearchModalInputWrapper = styled.div`
    padding: 20px 0 4px 0;
    position: relative;
`;

export const RecentSearches = styled.div`
    padding: 20px 0;
    display: flex;
    flex-direction: column;
    gap: 20px;

    & > span { padding: 10px 12px; }

    & div.recentEmpty {
        font-size: 14px;
        font-weight: 400;
        color: var(--text-default-secondary);
    }
`;

export const RecentSearchesTags = styled.div`
    padding: 0 4px;
    display: flex;
    flex-wrap: wrap;
    gap: 12px;
`;