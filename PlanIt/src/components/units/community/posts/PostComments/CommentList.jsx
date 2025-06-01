import CommentItem from './CommentItem';
import { CommentListContainer, CommentListHeader, EmptyCommentBox } from './styles/commentList.style';

// ⚠️ Context API 활용하여 props drilling 해결
// undefined 방지
const CommentList = ({ comments = [], handlers = {} }) => (
    <CommentListContainer>
        <CommentListHeader>코멘트</CommentListHeader>
        {comments.length === 0 ? (
            <EmptyCommentBox>아직 댓글이 없어요!<br/>첫 번째 댓글을 작성해보세요.</EmptyCommentBox>
        ) : (
            comments.map((comment) => (
                <CommentItem
                    key={comment.id}
                    commentData={comment}
                    handlers = {handlers}
                />
            ))
        )}
    </CommentListContainer>
);

export default CommentList;