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
    width: 100%;
    padding: 18px 20px;
    font-size: 14px;
    border: 1px solid var(--color-border-neutral-secondary);
    border-radius: 28px;
    outline: none;
    background: transparent;
    color: var(--color-text-default-default);

    &::placeholder {
        font-family: var(--font-family-body);
        font-size: 14px;
        font-weight: 400; 
        line-height: 1.4;
        color: var(--text-default-secondary);
    }

    &:focus {
        border-color: #007BFF;

        &::placeholder {
            color: #808080;
        }
    }

    ${({ $hasError }) => $hasError && `
        border-color: #EB4355;

        &::placeholder {
            color: #D9D9D9;
        }
    `}
`