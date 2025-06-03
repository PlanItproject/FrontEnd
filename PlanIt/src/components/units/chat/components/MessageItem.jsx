import {
  MessageContainer,
  TopRow,
  Username,
  UnreadBadge,
  Time,
  Preview,
  ProfileImage,
  AvatarWrapper,
  UsernameAndTime,
} from "../styles/MessageItem.style";

const MessageItem = ({
  profile,
  username,
  preview,
  time,
  unreadCount,
  onClick,
}) => (
  <MessageContainer onClick={onClick}>
    <TopRow>
      <AvatarWrapper>
        <ProfileImage src={profile} />
        {unreadCount > 0 && (
          <UnreadBadge>+{Math.min(99, unreadCount)}</UnreadBadge>
        )}
      </AvatarWrapper>
      <UsernameAndTime>
        <Username>{username}</Username>
        <Time>{time}</Time>
      </UsernameAndTime>
    </TopRow>
    <Preview hasUnread={unreadCount > 0}>{preview}</Preview>
  </MessageContainer>
);

export default MessageItem;
