import styled from '@emotion/styled';

export const ChipWrapper = styled.div`
    display: inline-flex;
    align-items: center;
    gap: 4px;
    font-weight: 400;
    letter-spacing: -0.14px;
    background: #F5F5F5;
    box-shadow: 2px 2px 15px 0px rgba(0, 0, 0, 0.12);

    padding: ${({ size }) => size === 'medium' ? '10px 16px' : '8px 12px'};
    border-radius: ${({ size }) => size === 'medium' ? '22px' : '18px'};
    font-size: ${({ size }) => size === 'medium' ? '14px' : '12px'};
    line-height: ${({ size }) => size === 'medium' ? '1.45' : '1.4'};
    
    border: ${({ state }) => state === 'selected' ? '0.5px solid #2988FF' : 'none'};

    & > span:first-of-type {
        font-size: ${({ size }) => size === 'medium' ? '18px' : '14px'};
        line-height: ${({ size }) => size === 'medium' ? '1.25' : '1.45'};
    }
`;