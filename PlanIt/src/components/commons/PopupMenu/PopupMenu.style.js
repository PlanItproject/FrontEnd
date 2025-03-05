import { keyframes } from '@emotion/react';
import styled from '@emotion/styled';

// 슬라이드 에니메이션
const slideUp = keyframes`
    from {
        opacity: 0;
        transform: translateY(100%);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
`;

const slideDown = keyframes`
    from {
        opacity: 1;
        transform: translateY(0);
    }
    to {
        opacity: 0;
        transform: translateY(100%);
    }
`
export const Blur = styled.div`
    position:fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 999;
    backdrop-filter: blur(5px);
`

export const MenuContainer = styled.div`
    position: fixed;
    left: 0;
    bottom: 0;
    z-index: 1000;
    width: 100%;
    padding: 20px 0;
    background: #fff;
    font-weight: 600;
    line-height: 1.45;
    border-radius: 40px 40px 0 0;
    box-shadow: 0 -4px 10px rgba(0, 0, 0, 0.05 );
    animation: ${({ isVisible }) => (isVisible ? slideUp : slideDown)} 0.3s ease-out;
    pointer-events: ${(props) => (props.isVisible ? 'auto' : 'none')};
`;

export const MenuHeader = styled.div`
    display: flex;
    justify-content: center;
`;

export const Line = styled.div`
    width: 40px;
    height: 3px;
    margin-bottom: 20px;
    background-color: var(--border-default);
`;

export const UserProfile = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    padding: 20px 40px;
    border-bottom: 0.5px solid var(--border-default);
    font-size: 14px;
`;

export const MenuItem = styled.div`
    padding: 20px 40px;
    cursor: pointer;
    text-align: center;
    font-size: 20px;

    & + & {
        border-top: 0.5px solid var(--border-default);
    }
`;