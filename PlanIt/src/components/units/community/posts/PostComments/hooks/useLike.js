import { useState } from 'react';

const useLike = (initialLikeCount) => {
    const [liked, setLiked] = useState(false);
    const [likeCount, setLikeCount] = useState(Number(initialLikeCount) || 0);
    
    const handleLikeToggle = (e) => {
        e.preventDefault();
        // prev 값으로 likeCount를 업데이트
        setLiked((prev) => {
            setLikeCount((count) => (prev ? count - 1 : count + 1)); 
            return !prev; // liked 상태 반전
        });
    };

    return {
        liked,
        likeCount,
        handleLikeToggle
    };
};

export default useLike;