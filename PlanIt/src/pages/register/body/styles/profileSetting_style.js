import styled from '@emotion/styled';

const Container = styled.div`
    padding: 20px;
    max-width: 500px;
    margin: 20px auto;
    
`;

// const FormHeader = styled.div`
//     display: flex;
//     align-items: center;
//     gap: 40px;
// `

// const Header = styled.div`
//     display: flex;
//     align-items: center;
// `;

// const BackButton = styled.button`
//     width: 48px;
//     height: 48px;
//     display: flex;
//     align-items: center;
//     justify-content: center;
//     background-color: #EFF6FF;
//     border: none;
//     border-radius: 50%;
//     cursor: pointer;
// `;

const Title = styled.h1`
    font-size: 32px;
    font-weight: bold;
`;

const ProfileContainer = styled.div`
    display: flex;
    justify-content: center;
    padding: 50px;
    margin: 20px 0;
    background: var(--color-background-default-secondary);
    border-radius: 20px;
    position: relative;

    & > span {
        position: absolute;
        font-size: 12px;
        bottom: 24px;
        color: var(--color-text-default-tertiary);
    }
`;

const ProfileWrapper = styled.div`
    position: relative;
`;

const ProfileImage = styled.img`
    width: 100px;
    height: 100px;
    border-radius: 50%;
    background-color: #3b82f6;
    object-fit: cover;
`;

const AddButton = styled.button`
    position: absolute;
    bottom: 50px;
    right: -20px;
    border: none;
    background: var(--color-background-brand-tertiary);
    color: #2988FF;
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
    margin: 0 0 6px 20px;
    font-size: 14px;
    font-weight: 600;
    line-height: 1.45;

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

// const Select = styled.select`
//     width: 100%;
//     padding: 18px 20px;
//     border: 1px solid var(--color-border-neutral-secondary);
//     border-radius: 28px;
//     background: var(--color-background-default-default);
//     color: var(--color-text-default);
//     appearance: none;
//     cursor: pointer;
//     font-size: 14px;

//     option {
//         padding: 8px 12px;
//         font-size: 14px;
//         line-height: 1.5;
//         cursor: pointer;
//     }
// `;

// const DropDown = styled.div`
//     position: absolute;
//     right: 20px;
//     bottom: 13px;
//     pointer-events: none;
//     width: 16px;
// `;

const GenderContainer = styled.div`
    display: flex;
    gap: 16px;
    margin-bottom: 20px;
`;

const GenderLabel = styled.label`
    display: flex;
    align-items: center;
    gap: 4px;
    cursor: pointer;
    margin: 10px;
`;

const radioStyles = {
    hiddenRadio: {
        display: "none"
    },
    customRadio: {
        width: "20px",
        height: "20px",
        border: "2px solid #aaa",
        borderRadius: "50%",
        display: "inline-block",
        position: "relative",
        transition: "border-color 0.2s ease"
    },
    checkedRadio: {
        borderColor: "var(--color-icon-brand-default)"
    },
    radioIndicator: {
        content: "",
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: "10px",
        height: "10px",
        borderRadius: "50%",
        transition: "background-color 0.2s ease"
    },
    radioIndicatorChecked: {
        backgroundColor: "var(--color-icon-brand-default)",
    },
    radioIndicatorUncheked: {
        backgroundColor: "var(--color-background-netural-secondary)",
    }
}

export {
    Container,
    // FormHeader,
    ProfileContainer,
    ProfileWrapper,
    // Header,
    ProfileImage,
    // BackButton,
    // Title,
    Label,
    AddButton,
    Input,
    // Select,
    // DropDown,
    GenderContainer,
    GenderLabel,
    radioStyles
}