import styled from '@emotion/styled';

export const PostFilterTitle = styled.div`
    padding: 20px 40px;
    text-align: center;
    font-size: 20px;
`;

export const FilterRefresh = styled.button`
    width: auto;
    margin: 10px 20px;
    display: flex;
    align-items: center;
    gap: 6px;
    color: var(--primary-color);
`;

export const FilterCityTag = styled.div`
    padding: 20px;
`;

export const SearchCityBox = styled.div`
    width: 100%;
    position: relative;

    & > .searchIcon {
        position: absolute;
        width: 24px;
        height: 24px;
        top: 45px;
        right: 24px;
    }
`;

export const FilterLabel = styled.span`
    display: inline-block;
    margin: 0 0 8px 20px;
    font-size: 16px;
`;

export const CityTagBox = styled.div`
    display: flex;
    gap: 12px;
`;

export const FilterKeyword = styled.div`
    padding: 20px;
`;

export const FilterChipBox = styled.div`
    padding: 0 4px;
    margin-top: 14px;
    display: flex;
    flex-wrap: wrap;
    gap: 12px;
`;

export const FilterButtonWrapper = styled.div`
    padding: 44px 24px 20px 24px;
    display: flex;
    justify-contents: space-between;
    gap: 12px;

    & > button {
        width: calc(50% - 12px);
    }
`;