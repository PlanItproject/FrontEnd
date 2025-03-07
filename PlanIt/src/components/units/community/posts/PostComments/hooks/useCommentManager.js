import { useCallback, useEffect, useMemo, useState } from 'react';
import { commentApi } from '../../../../../../api/comment';

// ❓ 날짜 포맷팅 유틸로 분리할까요?
const getDate = (date) => {
    const _date = new Date(date);
    const yyyy = _date.getFullYear();
    const mm = _date.getMonth() + 1;
    const dd = _date.getDate();
    return `${yyyy}.${mm}.${dd}`;
  };

// const useCommentManager = (postId) => { // ⚠️ 우선 더미데이터 활용하겠습니다. 
const useCommentManager = ( initialComments ) => {
    // const [comments, setComments] = useState([]);
    const [comments, setComments] = useState(() => initialComments || []);
    const [formHeight, setFormHeight] = useState(107);
    const [mentionUser, setMentionUser] = useState(null);

    // ⚠️ 댓글 로직 : request body 확인 후 수정!

    // useEffect(() => {
    //     fetchComments(); // 댓글 가져오기
    // }, [postId])
    
    // 폼 높이 변경 핸들러
    const handleFormHeightChange = useCallback((height) => {
        setFormHeight(height);
    }, []);

    // 댓글 목록 가져오기 
    // const fetchComments = async () => {
    //     try {
    //         const data = await commentApi.getComments(postId); //postId 에 맞는 댓글 가져오기
    //         setComments(data);
    //     } catch(error) {
    //         console.error('댓글 불러오기 실패', error);
    //     }
    // };
    
    // 댓글 추가
    const addComment = async (content) => {
        if(!content.trim()) return alert('댓글을 입력해 주세요.'); //❓ toast 메세지로?

        try {
            // const newComment = await commentApi.addComment({ postId, user, content });
            const newComment = await commentApi.addComment({ user, content });
            if (newComment) setComments((prev) => [...prev, newComment]);
        } catch(error) {
            console.log('댓글 등록 실패', error); // ❓ toast 메세지로?
        }
    };
    
    // 댓글 수정
    const editComment = async (id, content) => {
        if(!content.trim()) return alert('댓글을 입력해 주세요.') // ❓ toast 메세지로?
        
        // 수정한 내용이 없으면 리렌더링 방지
        const originalComment = comments.find(comment => comment.id === id);
        if(!originalComment) return; // 댓글 찾지 못했을 때 실행 종료
        if(content === originalComment.content) return; // 수정 내용 없으면 실행 종료

        try {
            const updatedComment = await commentApi.editComment({ id, content });
            if(updatedComment) setComments((prev) => 
                prev.map((comment) => comment.id === id ? {...comment, content} : comment)
            );
        } catch(error) {
            console.log('댓글 수정 실패', error); // ❓ toast 메세지로?
        }
    };
    
    // 댓글 삭제
    const deleteComment = async (id) => {
        if(!window.confirm('정말 삭제하시겠습니까?')) return; // 취소누르면 실행 종료, ❓ modal 활용?

        try {
            await commentApi.deleteComment(id);
            setComments((prevComment) => prevComment.filter(comment => comment.id !== id));
        } catch(error) {
            console.log('댓글 삭제 실패', error); // ❓ toast 메세지로?
        }
    };

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


