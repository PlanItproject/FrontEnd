import styled from '@emotion/styled';

const Container = styled.div`
    padding: 20px;
    max-width: 500px;
    margin: 20px auto;
    
`;

const FormHeader = styled.div`
    display: flex;
    gap: 40px;
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
    margin-bottom: 42px;
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

const VerifyButton = styled.button`
    padding: 4px 10px;
    position: absolute;
    z-index: 1;
    top: 39px;
    right: 24px;
    background-color: ${(props) => (props.disabled ? '#D9D9D9' : '#DBEBFF')};
    color: ${(props) => (props.disabled ? '#B3B3B3' : '#006DF5')};
    border:none;
    border-radius: 6px;
    font-family: var(--font-family-body);
    font-size: 14px;
    line-height: 1.4;
    cursor:pointer;
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

export {
    Container,
    FormHeader,
    Header,
    FormGroup,
    InputWrapper,
    Input,
    VerifyButton,
    ResendText,
    ResendButton,
    Label,
    Title,
    BackButton
}