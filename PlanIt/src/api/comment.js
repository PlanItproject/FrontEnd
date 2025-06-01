import { api } from "./config";

// ⚠️ endpoint와 request body 확인 후 수정하기

export const commentApi = {
    // 댓글 목록 가져오기
    getComments: async () => {
        try {
            const res = await api.get('/comments');
            return res.data; // 댓글 목록 반환
        } catch (error) {
            console.error('댓글 불러오기를 실패하였습니다.', error);
            return []; // 빈 배열 반환
        }
    },

    // 댓글 추가
    addComment: async (data) => {
        try {
            const res = await api.post('/comments', data);
            return res.data; // 추가된 댓글 반환
        } catch (error) {
            console.error('댓글 등록에 실패하였습니다.', error);
            return null; // 실패 시 null 반환
        }
    },

    // 댓글 수정
    editComment: async ({ id, content }) => {
        try {
            const res = await api.put(`/comments/${id}`, { content });
            return res.data; // 수정된 댓글 반환
        } catch (error) {
            console.error('댓글 수정에 실패하였습니다.', error);
            return null; // 실패 시 null 반환
        }
    },

    // 댓글 삭제
    deleteComment: async (id) => {
        try {
            await api.delete(`/comments/${id}`); // 오타 수정: /commnets → /comments
            return true; // 성공적으로 삭제
        } catch (error) {
            console.error('댓글 삭제에 실패하였습니다.', error);
            return false; // 실패 시 false 반환
        }
    }
};