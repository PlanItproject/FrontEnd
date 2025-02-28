import { useState } from 'react';
import { CommentItemContainer, CommentHeader, UserSection, UserName, AuthorBadge, MoreOptions, LikeSection, LikeCount, LikeButton, CommentBody, Mention, CommentFooter, CreatedAt, ReplyButton, ShowRepliesBtn, ReplyContainer } from './styles/commentItem.style';
import { userMenuItems, moreMenuItems } from '../../../../../constants/menus';
import ProfileImage from '../../../../commons/Profile/ProfileImage';
import PopupMenu from '../../../../commons/PopupMenu/PopupMenu';
import moreIcon from '../../../../../assets/icon/more.svg';
import likeIcon from '../../../../../assets/icon/like.svg';
import likedIcon from '../../../../../assets/icon/liked.svg';


const CommentItem = ({ user, content, isPostAuthor, initialLikeCount, createdAt, replies =[], mentionUser= null, onReply }) => {
    const [showUserMenu, setShowUserMenu] = useState(false);
    const [showMoreMenu, setShowMoreMenu] = useState(false);
    const [liked, setLiked] = useState(false);
    const [likeCount, setLikeCount] = useState(Number(initialLikeCount) || 0);
    const [showReplies, setShowReplies] = useState(false);
    
    const handleLikeToggle = (e) => {
        e.preventDefault();
        setLiked((prev) => !prev);
        setLikeCount((prev) => (liked ? prev - 1 : prev + 1)); // UI 단계
    };

    return  (
        <CommentItemContainer>
            <CommentHeader>
                <UserSection>
                    <ProfileImage src={user.profileImage} size={32} />
                    <UserName onClick={() => setShowUserMenu((prev) => !prev)}>
                        {user.name}
                    </UserName>
                    {isPostAuthor && <AuthorBadge>작성자</AuthorBadge>}
                    {showUserMenu && (
                        <PopupMenu isVisible={showUserMenu} user={user} items={userMenuItems} onClose={() => setShowUserMenu(false)} />
                    )}
                    <MoreOptions onClick={() => {setShowMoreMenu((prev) => !prev)
                    }}>
                        <img src={moreIcon} alt="더보기"/>
                    </MoreOptions>
                    {showMoreMenu && (
                        <PopupMenu isVisible={showMoreMenu} items={moreMenuItems} onClose={() => setShowMoreMenu(false)} />
                    )}
                </UserSection>
                <LikeSection>
                    {likeCount > 0 && <LikeCount key={likeCount}>{likeCount}</LikeCount>} 
                    <LikeButton type='button' onClick={handleLikeToggle}>
                        <img src={liked ? likedIcon : likeIcon} alt="좋아요"/>
                    </LikeButton>
                </LikeSection>
            </CommentHeader>

            <CommentBody>
                {mentionUser && <Mention>@{mentionUser}&nbsp;</Mention>}
                {content}
            </CommentBody>
            
            <CommentFooter>
                <span>작성일&nbsp;</span>
                <CreatedAt>{createdAt}</CreatedAt>
                <ReplyButton onClick={() => onReply(user.name)}>답글달기</ReplyButton>
            </CommentFooter>

            {replies.length > 0 && ( // 대댓글이 있을 때 노출, 토글버튼
                <ShowRepliesBtn onClick={() => setShowReplies(!showReplies)}> 
                    {showReplies ? "답글접기" : `${replies.length}개의 답글 더 보기`} 
                </ShowRepliesBtn>
            )}

            {showReplies && ( // showReplies가 true일 때 노출
                <ReplyContainer>
                    {replies.map((reply) => (
                        <CommentItem 
                            key={reply.id} 
                            user={reply.user}
                            content={reply.content}
                            isPostAuthor={reply.isPostAuthor}
                            createdAt={reply.createdAt}
                            mentionUser={reply.mentionUser}
                            replies={[]} // 대댓글의 대댓글 방지
                            onReply={onReply}
                        /> // 재귀
                    ))}
                </ReplyContainer>

            )}

        </CommentItemContainer>
    )
};

export default CommentItem;