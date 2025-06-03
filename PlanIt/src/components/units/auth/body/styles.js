import styled from '@emotion/styled';

export const FormWrapper = styled.div`
`

export const FormBox = styled.div`
    margin-bottom: 16px;
`

export const ErrorMessage = styled.p`
    text-align: center;
    font-size: 12px;
    font-weight: 500;
    color: #EB4335;
`

export const Label = styled.label`
    display: block;
    margin-left: 20px;
    margin-bottom: 6px;
    font-size: 14px;
    line-height: 1.4;
    font-weight: 600;
`

export const Input = styled.input`
    width: calc(100% - 40px);
    padding: 18px 20px;
    font-size: 14px;
    border: 1px solid #B3B3B3;
    border-radius: 28px;
    outline: none;
`

export const ButtonWrapper = styled.div`
    min-height: 44vh;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    gap: 12px;
`