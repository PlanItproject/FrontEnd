import styled from '@emotion/styled';

const FormContainer = styled.div`
    padding: 20px;
    max-width: 500px;
    margin: 20px auto;
`;

const FormHeader = styled.div`
    display: flex;
    align-items: center;
    gap: 40px;
    margin: 20px 0 40px 0;
`

const Header = styled.div`
    display: flex;
    align-items: center;
`;


const BackButton = styled.button`
    width: 48px;
    height: 48px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: var(--color-background-brand-tertiary);
    border: none;
    border-radius: 50%;
    cursor: pointer;
`;

const Title = styled.h1`
    font-size: 32px;
    font-weight: bold;
`;

const FormGroup = styled.div`
    margin-bottom: 20px;
`

const Label = styled.label`
    display: block;
    margin: 0 0 6px 20px;
    font-size: 14px;
    font-weight: 600;
    line-height: 1.45;
    
    &::after {
        content: ' *';
        color:  #EF2B9D;
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

const GoToLogin = styled.div`
    margin-top: 44px;
    padding: 10px;
    text-align: center;
    font-size: 14px;
    line-height: 1.45;

    button {
        color: var(--color-text-default-default);
        border-bottom: 1px solid var(--color-text-default-default);
        cursor: pointer;
        margin: 8px;
    }
`

const errorMessage = styled.div`
    display: block;
    text-align: center;
    padding: 8px 0 ;
    font-size: 12px;
    font-weight: 500;
    line-height: 1.4;
    color: #EB4335;
`;

export {
    FormContainer,
    Header,
    FormGroup,
    FormHeader,
    BackButton,
    Title,
    Label,
    CheckboxGroup,
    CheckboxLabel,
    Checkbox,
    GoToLogin,
    errorMessage
}