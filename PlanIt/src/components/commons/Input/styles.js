import styled from "styled-components";

export const Container = styled.div`
    margin-bottom: 16px;
`
export const Label = styled.label`
    display: block;
    margin-left: 20px;
    margin-bottom: 6px;
    font-size: 14px;
    line-height: 1.4;
    font-weight: 600;
`

export const ErrorMessage = styled.p`
    display: block;
    margin-top: 6px;
    padding: 0 20px;
    font-size: 12px;
    font-weight: 500;
    line-height: 1.4;
    color: #EB4335;
`


export const StyledInput = styled.input`
    width: calc(100% - 40px);
    padding: 18px 20px;
    font-size: 14px;
    border: 1px solid #B3B3B3;
    border-radius: 28px;
    outline: none;

    &::placeholder {
        font-family: var(--font-family-body);
        font-size: 14px;
        font-weight: 400;
        line-height: 1.4;
        color: #808080;
    }

    &:focus {
        border-color: #007BFF;

        &::placeholder {
            color: #808080;
        }
    }

    ${({ hasError }) => hasError && `
        border-color: #EB4355;

        &::placeholder {
            color: #D9D9D9;
        }
    `}
`