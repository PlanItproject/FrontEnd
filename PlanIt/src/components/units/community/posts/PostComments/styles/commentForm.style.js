import styled from '@emotion/styled';

export const Form = styled.form`
    position: fixed;
    display: flex;
    width: 100%;
    padding: 20px 20px 44px 20px;
    bottom: 0;
    background-color: var(--background-default-default-tap);
    border-radius: 34px 34px 0 0;
`;

export const CommentBox = styled.textarea`
    display: block;
    width: calc(100% - 40px);
    padding: 10px 20px;
    border-radius: 28px;
    border: 0.4px solid var(--border-neutral-secondary);
    border-radius: 28px;
    background-color: #fff;
    font-size: 14px;
    letter-spacing: -0.14px;
    line-height: 1.4;
    resize: none;
    box-sizing: border-box;
    -ms-overflow-style: none;
    scrollbar-width: none;

    ::webkit-scrollbar { display: none; }
`;

export const SendButton = styled.button`
    margin-left: 8px;
`;