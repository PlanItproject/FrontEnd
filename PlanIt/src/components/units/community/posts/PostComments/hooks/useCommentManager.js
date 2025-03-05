import { useCallback, useMemo, useState } from 'react';

const useCommentManager = (initialComments) => {
    const [comments, setComments] = useState(() => initialComments || []); // 초기 렌더링 시에만 계산!
    const [formHeight, setFormHeight] = useState(107);
    const [mentionUser, setMentionUser] = useState(null);

    // ⚠️ 로직 작성하기
    
    // 폼 높이 변경 핸들러
    const handleFormHeightChange = useCallback((height) => {
        setFormHeight(height);
    }, []);
    
    // 댓글 추가
    const addComment = useCallback((newComment) => {
        console.log('새 댓글 추가: ', newComment);
        setMentionUser(null); // 댓글 작성 후 mentionUser 초기화
    }, []);
    
    // 댓글 수정
    const editComment = useCallback((id, updateComment) => {
        console.log('댓글 수정:', updateComment)
    },[]);
    
    // 댓글 삭제
    const deleteComment = useCallback((id) => {
        console.log('댓글이 삭제되었습니다.')
    }, []);

    // 멘션
    const handleMentionUser = useCallback((userName) => {
        setMentionUser(userName);
    }, []);

    // 핸들러
    const handlers = useMemo(() => ({
        onReply: handleMentionUser,
        onEdit: editComment,
        onDelete: deleteComment,
        onSubmit: addComment,
        onFormHeightChange: handleFormHeightChange
    }), [handleMentionUser, editComment, deleteComment, addComment, handleFormHeightChange]);    
    
    return {
        comments,
        formHeight,
        mentionUser,
        handlers,
    };
};

export default useCommentManager;


