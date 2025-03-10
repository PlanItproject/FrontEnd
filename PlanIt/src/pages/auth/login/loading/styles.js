import styled, { keyframes } from 'styled-components';

export const pulse = keyframes`
    0%, 100% {
        background-color: #808080;
        transform: scale(1);
        opacity: 0.6;
    }
    
    50% {
        background-color: #2988FF;
        transform: scale(1.5);
        opacity: 1;
    }

    gap: 12px
`

export const Dot = styled.div`
    width: 11px;
    height: 11px;
    margin: 0 12px;
    background-color: #808080;
    border-radius: 50%;
    animation: ${pulse} 1.5s infinite ease-in-out;
    animation-delay: ${({ delay }) => delay}s;
`

export const DotsContainer = styled.div`
    display: flex;
    justify-content: center;
`

export const LoadingBox = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items:center;
    gap: 30px;
    min-height: 100vh;
`