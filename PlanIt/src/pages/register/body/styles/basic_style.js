import styled from '@emotion/styled';

const FormContainer = styled.div`
    padding: 20px;
    max-width: 500px;
    margin: -70px auto;
`;

const Header = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 24px;
`;

const FormHeader = styled.div`
    display: flex;
    gap: 40px;
`

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
    margin-bottom: 20px;
`

const Label = styled.label`
    display: block;
    margin-bottom: 8px;
    font-size: 14px;
    
    &::after {
        content: '*';
        color: #f00;
        margin-left: 2px;
    }
`

const Input = styled.input`
    width: 90%;
    padding: 15px;
    border: 1px solid #E5E7EB;
    border-radius: 50px;
    font-size: 14px;
    
    &::placeholder {
        color: #9CA3AF;
    }
`

const CheckboxGroup = styled.div`
    margin-top: 30px;
`

const CheckboxLabel = styled.label`
    display: flex;
    align-items: center;
    margin-bottom: 10px;
    font-size: 14px;
    cursor: pointer;
`

const Checkbox = styled.input`
    margin-right: 8px;
`

export {
    FormContainer,
    Header,
    FormGroup,
    FormHeader,
    BackButton,
    Title,
    Label,
    Input,
    CheckboxGroup,
    CheckboxLabel,
    Checkbox,
}