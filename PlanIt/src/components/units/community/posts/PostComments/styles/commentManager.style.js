import styled from '@emotion/styled';

export const CommentContainer = styled.div`
    position: relative;
    height: 100%;
    display:flex;
    flex-direction: column;
`;

export const CommentListContainer = styled.div`
    padding: 0 32px;
    flex: 1;
    overflow-y = auto;
`;

export const EmptyCommentBox = styled.div`
    padding: 24px 0;
    color: var(--text-default-secondary);
    text-align: center;
    font-weight: 500;
    line-height: 1.45;
`;