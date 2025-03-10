import styled from '@emotion/styled'

const Container = styled.div`
    padding: 20px;
    max-width: 500px;
    margin: -70px auto;
    
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

const ProfileContainer = styled.div`
    display: flex;
    justify-content: center;
    padding: 50px;
    background-color: rgb(243,243,243);
    margin-bottom: 16px;
`;

const ProfileWrapper = styled.div`
    position: relative;
`;

const ProfileImage = styled.img`
    width: 100px;
    height: 100px;
    border-radius: 50%;
    background-color: #3b82f6;
`;

const AddButton = styled.button`
    position: absolute;
    bottom: 50px;
    right: -20px;
    border: none;
    background: #dbebff;
    color: #3b82f6;
    border-radius: 50%;
    width: 36px;
    height: 36px;
    font-size: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
`;

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
    width: 100%;
    padding: 8px;
    border: 1px solid #ddd;
    border-radius: 8px;
    font-size: 16px;
`;

const Select = styled.select`
    width: 100%;
    padding: 8px;
    border: 1px solid #ddd;
    border-radius: 8px;
    font-size: 16px;
`;

const GenderContainer = styled.div`
    display: flex;
    gap: 16px;
    margin-bottom: 20px;
`;

const GenderLabel = styled.label`
    display: flex;
    align-items: center;
    gap: 4px;
`;

export {
    Container,
    FormHeader,
    ProfileContainer,
    ProfileWrapper,
    Header,
    ProfileImage,
    BackButton,
    Title,
    Label,
    AddButton,
    Input,
    Select,
    GenderContainer,
    GenderLabel,
}