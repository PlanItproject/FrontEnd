import styled from "styled-components";

const FormContainer = styled.div`
    padding: 20px;
    max-width: 500px;
`;

const Header = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 24px;
`;

const FormHeader = styled.div`
    display: flex;
    flex-direction: column;
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
    margin-left: 20px;
    margin-bottom: 42px;
`;

const FormGroup = styled.div`
    display: flex;
    flex-direction: column;
    padding: 10px;
    margin: 0 auto;
    width: 90%;
`

const Label = styled.label`
    display: block;
    margin-bottom: 8px;
    margin-left: 10px;
    font-size: 14px;
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

const ButtonGroup = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 100px;
    gap: 10px;
`
const SelectWrapper = styled.div`
    position: relative;
    width: 100%;
`;

const SelectButton = styled.button`
    width: 100%;
    padding: 15px;
    border: 1px solid #E5E7EB;
    border-radius: 50px;
    font-size: 14px;
    background: white;
    text-align: left;
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
    
    &::placeholder {
        color: #9CA3AF;
    }
`;

const DropdownList = styled.div`
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    margin-top: 8px;
    padding: 8px 0;
    background: white;
    border: 1px solid #E5E7EB;
    border-radius: 12px;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
    z-index: 10;
`;

const DropdownItem = styled.div`
    padding: 12px 16px;
    cursor: pointer;

    &:hover {
        background-color: #F3F4F6;
    }
`;

export {
    Input,
    FormContainer,
    Header,
    FormGroup,
    Label,
    FormHeader,
    BackButton,
    Title,
    ButtonGroup,
    SelectWrapper,
    SelectButton,
    DropdownList,
    DropdownItem
}