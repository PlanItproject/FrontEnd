import { useRef, useEffect } from 'react';
import useCommentManager from './hooks/useCommentManager'
import { dummyComments } from './dummy/dummyComments';
import CommentForm from './CommentForm';
import CommentList from './CommentList';
import { CommentContainer } from './styles/commentManager.style';

const CommentManager = () => {
    const { comments, formHeight, mentionUser, handlers } = useCommentManager(dummyComments)

    const commentListRef = useRef(null);

    useEffect(() => {
        // if (commentListRef.current) {
        //     commentListRef.current.scrollTop = commentListRef.current.scrollHeight;
        // }
        window.scrollTo(0, document.body.scrollHeight); 
    }, [formHeight, comments]);

    return (
        <CommentContainer ref={commentListRef} marginBottom={`${formHeight}px`}>
            <CommentList 
                comments={comments}
                handlers={{
                    onReply: handlers.onReply,
                    onEdit: handlers.onEdit,
                    onDelete: handlers.onDelete,
                }}
            />
            <CommentForm 
                onSubmit={handlers.onSubmit} 
                mentionUser={mentionUser} 
                onHeightChange={handlers.onFormHeightChange}
            />
        </CommentContainer>
    );
};

export default CommentManager;