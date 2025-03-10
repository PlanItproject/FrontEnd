import styled from '@emotion/styled';

const Container = styled.div`
    padding: 20px;
    max-width: 500px;
    margin: 70px auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

const FormHeader = styled.div`
    display: flex;
    flex-direction: column;
`

const Header = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 24px;
`;

const BackButton = styled.button`
    width: 48px;
    height: 48px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #EFF6FF;
    border: none;
    border-radius: 50%;
    cursor: pointer;
`;

const Title = styled.h1`
    font-size: 32px;
    font-weight: bold;
    margin : 0 0 42px 20px;
`;

const FormGroup = styled.div`
    margin-bottom: 24px;
`;

const Label = styled.label`
    display: block;
    font-size: 14px;
    margin-bottom: 8px;
    margin-left: 15px;
`;

const InputWrapper = styled.div`
    position: relative;
    display: flex;
    gap: 8px;
`;

const Input = styled.input`
    flex: 1;
    padding: 15px;
    width: 90%;
    border: 1px solid #E5E7EB;
    border-radius: 9999px;
    font-size: 14px;

    &::placeholder {
        color: #9CA3AF;
    }
`;

const ResendText = styled.div`
    text-align: center;
    font-size: 14px;
    color: #4B5563;
    margin-bottom: 10px;
`;

const ResendButton = styled.button`
    border: none;
    border-bottom: 1px solid black;
    background: none;
    margin-left: 8px;
    cursor: pointer;
    font-size: 14px;
`;

const nextButton = styled.div`
    display: flex;
    justify-content: center;
    width: 90%;
    position: absolute;
    bottom: 100px;
`

const sendBtn = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: absolute;
    width: 90%;
    gap: 10px;
    bottom: 100px;
`

export {
    Container,
    FormHeader,
    Header,
    FormGroup,
    InputWrapper,
    Input,
    ResendText,
    ResendButton,
    Label,
    Title,
    BackButton,
    nextButton,
    sendBtn
}