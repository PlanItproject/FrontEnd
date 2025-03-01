import { useEffect } from 'react';
import useCommentForm from './hooks/useCommentForm';
import sendIcon from '../../../../../assets/icon/send.svg'
import { Form, CommentBox, SendButton } from './styles/commentForm.style';

const CommentForm = ({ onSubmit, mentionUser, onHeightChange }) => {
    const { comment, setComment, textareaRef, handleChange, handleKeyDown, handleSubmit } = useCommentForm({
        onSubmit,
        onHeightChange,
    });

    useEffect(() => {
        if (mentionUser) {
            setComment(`@${mentionUser} `);
        }
    }, [mentionUser, setComment]);

    return(
        <Form onSubmit={handleSubmit}>
            <CommentBox 
                ref={textareaRef}
                value={comment}
                onChange={handleChange}
                onKeyDown={handleKeyDown} // Enter 키 처리
                placeholder='댓글 입력하기'
                rows={1}
            />
            <SendButton type='submit'>
                <img src={sendIcon}/>
            </SendButton>
        </Form>
    );
};

export default CommentForm;