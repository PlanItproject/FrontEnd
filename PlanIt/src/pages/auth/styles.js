import styled from "@emotion/styled";

export const ButtonWrapper = styled.div`
    padding: 120px 0;

    @media (max-width: 380px) {
        padding: 0;
    }

    @media (max-width: 1024px) and (min-height: 920px) {
        padding-bottom: 350px;
    }
`

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    flex-grow: 1;
`