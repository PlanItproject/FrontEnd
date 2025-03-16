import styled from '@emotion/styled';

export const PostItemWrapper = styled.div`
    padding: 20px 16px;
    display: flex;
    flex-wrap: wrap;
    height: auto;

    & > div {
        flex: 0 0 calc((100% - (3 * 6px)) / 4);
        margin: 0 6px 12px 0;
        
        &:nth-of-type(4n) {
            margin-right: 0;
        }

        @media (max-width: 1024px) {
            flex: 0 0 calc((100% - 6px) / 2);

            &:nth-of-type(2n) {
                margin-right: 0;
            }
        }

        @media (max-width: 380px) {
            flex: 0 0 100%;
            margin: 0 0 12px 0;
        }
    }
`;