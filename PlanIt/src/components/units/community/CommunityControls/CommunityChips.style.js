import styled from '@emotion/styled';

export const PostChipWrapper = styled.div`
    padding: 20px 0 20px 20px;
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    width: 100%;
    
    @media (max-width: 768px) {
        flex-wrap: nowrap;
        overflow-x: hidden;
        -ms-overflow-style: none;
        scrollbar-width: none;
        
        & > div {
            flex-shrink: 0;
        }
    }

`;