import { useRef, useState } from 'react';
import { dummyComments } from './dummy/dummyComments';
import CommentForm from './CommentForm';
import CommentItem from './CommentItem';
import { CommentContainer, CommentListContainer, EmptyCommentBox } from './styles/commentManager.style';

const CommentManager = () => {
    // const [comments, setComments] = useState();
    const [formHeight, setFormHeight] = useState(104);
    const [mentionUser, setMentionUser] = useState(null);
    const commentListRef = useRef(null);

    // 폼 높이 변경 핸들러

    // 댓글 목록 가져오기 (무한 스크롤)

    // 댓글 추가
    const addComment = () => {
        console.log('새 댓글 추가: ', comment);
        setMentionUser(null); // 댓글 작성 후 mentionUser 초기화
    }

    // 댓글 수정
    const editComment = () => {};

    // 댓글 삭제
    const deleteComment = () => {}

    return (
        <CommentContainer>
            <CommentListContainer
                ref={commentListRef}
                style={{ marginBottom: formHeight }}
            >
                {!dummyComments || dummyComments.length === 0 ? (
                    <EmptyCommentBox>아직 댓글이 없어요!<br/>첫 번째 댓글을 작성해보세요.</EmptyCommentBox>
                    ) : (dummyComments.map((comment) => (
                    <CommentItem 
                        key={comment.id} {...comment}
                        user={comment.user}
                        content={comment.content}
                        isPostAuthor={comment.isPostAuthor}
                        initialLikeCount={comment.likeCount}
                        createdAt={comment.createdAt}
                        replies={comment.replies}
                        onReply={(userName) => setMentionUser(userName)}
                    />
                )))}
            </CommentListContainer>
            <CommentForm 
                onSubmit={addComment} 
                mentionUser={mentionUser} 
            />
        </CommentContainer>
    );
};

export default CommentManager;