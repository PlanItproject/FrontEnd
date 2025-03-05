import { CommentItemContainer, CommentHeader, UserSection, UserName, AuthorBadge, MoreOptions, LikeSection, LikeCount, LikeButton, CommentBody, Mention, CommentFooter, CreatedAt, ReplyButton, ShowRepliesBtn, ReplyContainer } from './styles/commentItem.style';
import { userMenuItems, moreMenuItems } from '../../../../../constants/menus';
import useMenuToggle from '../../../../../hooks/useMenuToggle';
import useReplies from './hooks/useReplies';
import useLike from './hooks/useLike';
import ProfileImage from '../../../../commons/Profile/ProfileImage';
import PopupMenu from '../../../../commons/PopupMenu/PopupMenu';
import moreIcon from '../../../../../assets/icon/more.svg';
import likeIcon from '../../../../../assets/icon/like.svg';
import likedIcon from '../../../../../assets/icon/liked.svg';
import { useMemo } from 'react';


const CommentItem = ({ commentData, handlers }) => {
    const { onReply, onEdit, onDelete } = handlers;
    const { user, content, isPostAuthor, likeCount: initialLikeCount, createdAt, replies = [], mentionUser = null } = commentData;
    const { showUserMenu, toggleUserMenu, closeUserMenu, showMoreMenu, toggleMoreMenu, closeMoreMenu } = useMenuToggle();
    const { showReplies, toggleReplies, commentRef } = useReplies();
    const { liked, likeCount, handleLikeToggle } = useLike(initialLikeCount);

    const memoizedReplies = useMemo(() => { // 대댓글 캐싱
        return replies.map((reply) => (
            <CommentItem
                // ⚠️ reply.id 없는 경우 어떻게 처리?
                key={reply.id}
                commentData={reply}
                handlers={handlers}
                replies={[]} // 대댓글의 대댓글 방지
            /> // 재귀
        ))
    }, [replies, handlers]);

    return  (
        <CommentItemContainer ref={commentRef}>
            <CommentHeader>
                <UserSection>
                    <ProfileImage src={user.profileImage} size={32} />
                    <UserName onClick={toggleUserMenu}>
                        {user.name}
                    </UserName>
                    {isPostAuthor && <AuthorBadge>작성자</AuthorBadge>}
                    {showUserMenu && (
                        <PopupMenu 
                            isVisible={showUserMenu} 
                            user={user} 
                            items={userMenuItems} 
                            onClose={closeUserMenu} 
                        />
                    )}
                    <MoreOptions onClick={toggleMoreMenu}>
                        <img src={moreIcon} alt="더보기"/>
                    </MoreOptions>
                    {showMoreMenu ? (
                        <PopupMenu 
                            isVisible={showMoreMenu} 
                            items={moreMenuItems} 
                            onClose={closeMoreMenu} 
                            actionHandlers={{ onEdit: onEdit || (() => {}), onDelete: onDelete || (() => {}) }} // undefined처리
                        />
                    ) : null}
                </UserSection>
                <LikeSection>
                    {likeCount > 0 && <LikeCount>{likeCount}</LikeCount>} 
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
                <ShowRepliesBtn onClick={toggleReplies}> 
                    {showReplies ? "답글접기" : `${replies.length}개의 답글 더 보기`} 
                </ShowRepliesBtn>
            )}

            {showReplies && ( // showReplies가 true일 때 노출
                <ReplyContainer>
                    {memoizedReplies}
                </ReplyContainer>
            )}
        </CommentItemContainer>
    )
};

export default CommentItem;