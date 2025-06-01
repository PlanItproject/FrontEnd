import styled from "@emotion/styled";

export const MessageContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  padding: 12px 16px;
`;

export const TopRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const AvatarWrapper = styled.div`
  position: relative;
  width: 36px;
  height: 36px;
  flex-shrink: 0;
`;

export const ProfileImage = styled.img`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  object-fit: cover;
  padding: 3px 2px 0px 0px;
  align-items: center;
`;

export const UnreadBadge = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: -8px;
  left: -12px;
  background: #2988ff;
  color: #ffffff;
  font-size: 10px;
  font-weight: 600;
  padding: 10px;
  border-radius: 12px;
  width: 24px;
  height: 24px;
  text-align: center;
`;

export const UsernameAndTime = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex: 1;
`;

export const Username = styled.span`
  font-size: 14px;
  font-weight: 600;
  color: var(--text-default-default, #1e1e1e);
  line-height: 145%;
`;

export const Time = styled.span`
  font-size: 12px;
  color: #aaa;
  white-space: nowrap;
`;

export const Preview = styled.p`
  color: ${({ hasUnread }) =>
    hasUnread
      ? "var(--text-default-default, #1e1e1e)"
      : "var(--text-default-secondary, #808080)"};
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 145%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
