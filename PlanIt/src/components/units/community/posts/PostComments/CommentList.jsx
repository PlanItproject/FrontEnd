import CommentItem from './CommentItem';
import { CommentListContainer, EmptyCommentBox } from './styles/commentList.style';

const CommentList = ({ comments, handlers }) => (
    <CommentListContainer>
        {comments.length === 0 ? (
            <EmptyCommentBox>아직 댓글이 없어요!<br/>첫 번째 댓글을 작성해보세요.</EmptyCommentBox>
        ) : (
            comments.map((comment) => (
                <CommentItem
                    key={comment.id}
                    {...comment}
                    user={comment.user}
                    content={comment.content}
                    isPostAuthor={comment.isPostAuthor}
                    initialLikeCount={comment.likeCount}
                    createdAt={comment.createdAt}
                    replies={comment.replies}
                    handlers = {handlers}
                />
            ))
        )}
    </CommentListContainer>
);

export default CommentList;