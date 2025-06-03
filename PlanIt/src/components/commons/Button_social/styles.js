import styled from 'styled-components';

export const StyledSocialBtn = styled.button.withConfig({ // HTML 요소에 존재하지 않는 속성 막기
    shouldForwardProp: (prop) => prop !== 'variant' && prop !== 'state',
  })`
    display: inline-flex;
    padding: 4px 10px;
    justify-content: center;
    align-items: center;
    gap: 4px;
    flex-shrink: 0;
    text-align: center;
    font-size: 14px;
    font-weight: 400;
    line-height: 1.45;
    letter-spacing: -0.14px;
    border-radius: 6px;
    transition: 0.2s all ease-in-out;
    
    // 기본 스타일
    ${({ variant }) => {
        return variant === 'primary'
        ? `
            // background-color: var(--color-background-brand-tertiary);
            background-color: #DBEBFF;
            color: var(--color-text-brand-on-brand-tertiary);
        `
        : `
            // color: var(--color-text-default-default);
            color: #1E1E1E;
            // border: 1px solid var(--color-border-default-secondary);
            border:1px solid #B3B3B3;
            // background-color: var(--color-background-default-default);
            background-color: #ffffff;
        `
    }};
    
    // 상태별 오버라이드
    ${({ variant, state }) => {
        if (variant === 'primary') {
            switch(state) {
                case 'pressed':
                    return `
                        // background-color: var(--color-background-info-tertiary-tap);
                        background-color: #ADD2FF;
                    `;
                case 'disabled':
                    return `
                        // background-color: var(--color-background-disabled-default);
                        background-color: #D9D9D9;
                    `;
                default: return '';
            }
        }
        else if (variant === 'secondary') {
            switch(state) {
                case 'pressed':
                    return `
                        // border: 1px solid var(--color-background-default-default-tap);
                        border: 1px solid #F5F5F5;
                    `;
                case 'disabled':
                    return `
                        // background-color: var(--color-background-disabled-default);
                        background-color: #D9D9D9;
                    `;
                default: return '';
            }
        }
    }}

    &:disabled {
        cursor: not-allowed;
        // color: var(--color-text-disabled-default);
        color: #B3B3B3;
    }
`;

export default StyledSocialBtn;