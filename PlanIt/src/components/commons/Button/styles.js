import styled from 'styled-components';
import '../../../global.css'

export const StyledButton = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: inherit;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    gap: 0.5rem;
    border: none;
    
    ${props => {
        switch(props.size) {
            case 'small':
                return `
            border-radius: 20px;
            padding: 8px 16px;
            font-size: 14px;
        `;
            case 'large':
                return `
                border-radius: 28px;
                padding: 16px 24px;
                font-size: 16px;
        `;
            default:
                return `
                border-radius: 24px;
                padding: 12px 20px;
                font-size: 15px;
        `;
    }
}}
    
    ${props => {
        switch(props.variant) {
            case 'secondary':
            return `
            background-color: white;
            border: 1px solid #D9D9D9;
            color: var(--text-default, #333);
        `;
        case 'outline':
            return `
            background-color: transparent;
            border: 2px solid var(--primary-color, #007bff);
            color: var(--primary-color, #007bff);
        `;
        case 'whiteDark':
            return `
            background-color: white;
            border : none;
            color: black;
            `
        default:
            return `
            background-color: var(--primary-color, #007bff);
            color: #F5F9FF;
        `;
    }
}}
    
    ${props => props.fullWidth && `
        width: 100%;
    `}

    ${props => props.ninetyWidth && `
        width: 90%;
    `}
    
    ${props => props.middleWidth && `
        width: 80%;
    `}
    
    &:disabled {
        cursor: not-allowed;
        opacity: 0.6;
    }
`;