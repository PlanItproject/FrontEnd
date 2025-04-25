import styled from "@emotion/styled";

export const PostFormModalContainer = styled.div`
    padding: 60px 20px;
    display: flex;
    flex-direction: column;
    gap: 121px;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 10;
    background: var(--color-background-default-default);
    border-radius: 20px;
`;

export const PostFormModalHeader = styled.div`
    text-align: center;

    & > h5 {
        font-size: 20px;
        font-weight: 600;
        line-height: 1.45;
    }

    & > div {
        margin-top: 20px;
        font-size: 14px;
        line-height: 1.45;
        letter-spacing: -0.14px;
    }
`;

export const PostFormModalButtonWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 12px;

`;