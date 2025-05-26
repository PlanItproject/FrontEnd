import styled from "@emotion/styled";

const ModalContent = styled.div`
    padding: 44px 44px 28px 44px;
    background: var(--color-background-default-default);
    border-radius: 0 0 44px 44px;
    height: 72%;
`;

const BottomLinks = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 40px;
    
    button {
        color: var(--color-default-secondary);
        font-size: 14px;
    }
`;

const ModalTitle = styled.h2`
    text-align: center;
    font-size: 32px;
    font-weight: 700;
    line-height: 1.25;
`;

const ModalSubTitle = styled.p`
    text-align: center;
    margin-bottom: 48px;
    font-size: 14px;

    & > button {
        color: var(--color-text-default-default);
        border-bottom: 1px solid var(--color-border-default-default);
        margin: 8px;
        cursor: pointer;
    }
`;

const Buttons = styled.div`
    display: flex;
    flex-direction: column;
    gap: 15px;
    margin-top: 48px;
`
export {
    ModalContent,
    Buttons,
    ModalTitle,
    ModalSubTitle,
    BottomLinks,
}