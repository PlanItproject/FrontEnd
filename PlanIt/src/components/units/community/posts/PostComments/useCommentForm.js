import { useEffect, useRef, useState } from 'react';

const useCommentForm = ({ initialValue, onSubmit }) => {
    const [comment, setComment] = useState(initialValue);
    const textareaRef = useRef(null); // textarea 요소 참조
    const isMobile = window.matchMedia("(max-width: 768px)").matches; // 모바일 감지지
    
    // `initialValue`가 변경될 때마다 `comment`를 업데이트 (수정 기능 지원)
    useEffect(() => {
        setComment(initialValue);
    }, [initialValue]);

    // textarea 높이 자동 조정
    const textareaAutosize = (e) => {
        const element = e.target;
        const maxRows = 10; // 최대 줄 수 제한
        const lineHeight = 23.2; // CSS에서 설정한 line-height와 동일해야 함

        // 패딩 및 테두리 영향 방지 (scrollHeight의 증가 원인 중 하나)
        const computedStyle = window.getComputedStyle(element);
        const paddingTop = parseInt(computedStyle.paddingTop, 10);
        const paddingBottom = parseInt(computedStyle.paddingBottom, 10);
        const borderTop = parseInt(computedStyle.borderTopWidth, 10);
        const borderBottom = parseInt(computedStyle.borderBottomWidth, 10);
        const verticalPadding = paddingTop + paddingBottom + borderTop + borderBottom;

        element.style.height = "auto"; // 높이 초기화

        requestAnimationFrame(() => {
            const newHeight = Math.min(element.scrollHeight - verticalPadding, maxRows * lineHeight); // 패딩 고려하여 높이 설정

            if (element.style.height !== `${newHeight}px`) {
                element.style.height = `${newHeight}px`;
            }
        });

        setComment(element.value);
    };

    // PC에서 Enter → 등록, Shift+Enter → 개행
    const handleKeyDown = (e) => {
        if(!isMobile && e.key === "Enter" && !e.shiftKey) {
            e.preventDefault(); // 기본 개행 방지 (enter)
            handleSubmit();
        };
    };
    
    const handleSubmit = (e) => {
        if(e) e.preventDefault();
    
        if(comment.trim() === "") return; // 공백 입력 방지
    
        onSubmit(comment);
        setComment(''); // 입력창 초기화 
    
        setTimeout(() => {
            if (textareaRef.current) { // 비어있는 경우 
                textareaRef.current.value = ''; // 값 초기화
                textareaRef.current.style.height = 'auto'; //높이 초기화 
            }
        }, 0)
    };

    return {
        comment,
        setComment,
        textareaRef,
        handleKeyDown,
        handleSubmit,
        textareaAutosize,
    };
};

export default useCommentForm;