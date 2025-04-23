import styled from 'styled-components';

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
    
    ${({ $variant }) => {
        switch($variant) {
            case 'secondary':
            return `
            background-color: var(--color-background-default-default);
            border: 1px solid var(--color-border-default-default);
            color: var(--color-text-default-default);

            &:focus {
                background-color: var(--color-background-default-default-tap);
            }

            &:disabled {
                border: 1px solid var(--color-border-disabled-default);
                color: var(--color-text-disabled-default);
            }
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
            background-color: var(--color-background-brand-default);
            color: var(--color-text-brand-on-brand-default);

            &:focus {
                background-color: var(--color-background-brand-default-tap);
            }

            &:disabled {
                background-color: var(--color-background-disabled-default);
                color: var(--color-text-disabled-default);
            }
        `;
    }
}}

    ${({ $fullWidth }) => $fullWidth && `width: 100%;`}
    ${({ $ninetyWidth }) => $ninetyWidth && `width: 90%;`}
    ${({ $middleWidth }) => $middleWidth && `width: 80%;`}

    
    &:disabled {
        cursor: not-allowed;
        opacity: 0.6;
    }
`;