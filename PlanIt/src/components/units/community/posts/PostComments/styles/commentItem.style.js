import styled from '@emotion/styled';

export const CommentItemContainer = styled.div`
    padding: 20px 0;
    line-height: 1.4;
    font-weight: 500;

    &:first-of-type {
        margin-top: 20px;
    }
`;

export const CommentHeader = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const UserSection = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: var(--body-caption-12px);
`;

export const UserName = styled.span`
    cursor: pointer;
`;

export const AuthorBadge = styled.span`
    color: var(--primary-color);
`;

export const MoreOptions = styled.button`
    display:flex;
    align-items: center;
    img {
        width: 24px;
        height: 24px;
    }
`;

export const LikeSection = styled.div`
    display: flex;
    align-items: center;
    gap: 4px;
    font-size: var(--body-caption-12px);
    color: var(--text-default-secondary);
`;

export const LikeButton = styled.button`
    display:flex;
    align-items: center;
    img {
        width: 24px;
        height: 24px;
    }
`;

export const LikeCount = styled.span``;

export const CommentBody = styled.p`
    margin-top: 15px;
`;

export const Mention = styled.span`
    color: var(--primary-color);
`;

export const CommentFooter = styled.div`
    margin-top: 8px;
    font-size: var(--body-caption-12px);
    color: var(--text-default-secondary);
`;
     
export const CreatedAt = styled.span``;

export const ReplyButton = styled.button`
    margin-left: 16px;
    color: initial;
`;

export const ShowRepliesBtn = styled.button`
    margin-top: 12px;
    font-size: var(--body-caption-12px);
    color: var(--primary-color);
`;

export const ReplyContainer = styled.div`
    padding-left: 20px;
`;