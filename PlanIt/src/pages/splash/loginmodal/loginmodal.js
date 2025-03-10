import styled from "@emotion/styled";

const ModalContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    background: white;
    width: 100%;
    height: 55%;
    border-radius: 0 0 30px 30px;
    padding: 32px;
    margin: 0 auto;
`;

const Input = styled.input`
    width: 90%;
    padding: 16px;
    border: 1px solid #e0e0e0;
    border-radius: 100px;
    margin-bottom: 16px;
    
    &::placeholder {
        color: #9ca3af;
    }
`;

const InputLabel = styled.p`
    text-align: left;
    margin-left: 10px;
    margin-bottom: 8px;
    color: black;
    font-weight: 500;
`;

const BottomLinks = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 24px;
    
    button {
        color: #6b7280;
        background: none;
        border: none;
        font-size: 14px;
    }
`;

const ModalTitle = styled.h2`
    color: black;
    text-align: center;
    margin-bottom: 24px;
    font-size: 32px;
    font-weight: bold;
`;

const ModalSubTitle = styled.p`
    color: black;
    text-align: center;
    margin-bottom: 24px;
    font-size: 16px;
`;

const Buttons = styled.div`
    display: flex;
    flex-direction: column;
    gap: 15px;
`
export {
    Buttons,
    ModalContent,
    ModalTitle,
    ModalSubTitle,
    Input,
    InputLabel,
    BottomLinks,
}