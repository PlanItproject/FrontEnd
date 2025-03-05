import { useEffect, useRef, useState } from 'react';

const useReplies = () => {
    const [showReplies, setShowReplies] = useState(false);
    const commentRef = useRef(null);

    useEffect(() => {
        if (showReplies && commentRef.current) {
            requestAnimationFrame(() => { // Dom 업데이트 후 스크롤 실행.
                commentRef.current.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            });
        }
    }, [showReplies, commentRef.current]);

    const toggleReplies = () => setShowReplies((prev) => !prev);

    return { showReplies, toggleReplies, commentRef }
};

export default useReplies;