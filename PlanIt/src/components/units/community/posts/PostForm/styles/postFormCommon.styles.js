import styled from '@emotion/styled';

export const PostFormContainer = styled.div`
    height: calc(100vh - 243px);
    overflow-y: scroll;
    padding: 32px 20px 0 20px;
`;

export const PostFormTitle = styled.div`
    padding: 32px 12px 16px 12px;
    line-height: 1.4;
    letter-spacing: -0.36px;
    display: flex;
    align-items: center;
    gap: 6px;
    font-size: 18px;
    font-weight: 600;

    & > span {
        color: var(--color-text-default-secondary);
        font-size: 12px;
        font-weight: 500;
    }
`;

export const PostFormContentsSection = styled.div`
    padding: 4px 0 60px 0;
    display: flex;
    flex-direction: column;
    gap: 10px;

    & > h5 {
        display: block;
        padding: 10px;
        font-size: 18px;
        font-weight: 600;
    }
`;

export const PostFormContents = styled.textarea`
    // display: flex;
    // align-items: flex-start;
    // align-self: stretch;
    // gap: 10px;
    height: 280px;
    padding: 20px;
    border: 0.4px solid var(--color-border-neutral-default);
    border-radius: 28px;
`;

export const PostFromCategory = styled.div`
    display: flex;
    gap: 8px;
    flex-wrap: wrap;
    padding: 20px 0 60px 0;
`;

export const PostFormLocation = styled.div`
    padding: 20px 0 60px 0;
    display: flex;
    flex-direction: column;
    gap: 16px;
    position: relative;

    & > .searchIcon {
        position: absolute;
        width: 24px;
        height: 24px;
        top: 60px;
        right: 24px;
    }
`;

export const PostFormImg = styled.div`
    width: 100%;
    padding: 10px 0;

    & > button { width: 100%; }
`;

export const PostFormImgBox = styled.div`
    height: 319px;
    display: flex;
    gap: 6px;
    overflow-x: auto;  
    padding: 40px 0;
`;