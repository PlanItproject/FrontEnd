import { useEffect, useRef, useState } from 'react';

const useCommentForm = ({ initialValue, onSubmit, onHeightChange }) => {
    const [comment, setComment] = useState(initialValue);
    const [isMobile, setIsMobile] = useState(false);
    const textareaRef = useRef(null);
    const prevHeight = useRef(107);

    // 모바일 감지  (useEffect 안에서 처리!)
    useEffect(() => {
        const checkMobile = window.matchMedia("(max-width: 768px)").matches;
        setIsMobile(checkMobile);
    }, []) // 최초 한번만 실행
    
    // `initialValue`가 변경될 때마다 `comment`를 업데이트 (수정 기능 지원)
    useEffect(() => {
        setComment(initialValue);
    }, [initialValue]);

    useEffect(() => {
        if (textareaRef.current) {
            textareaAutosize({ target: textareaRef.current });
        }
    }, [comment]);

    // textarea 높이 자동 조정
    const textareaAutosize = (e) => {
        const element = e.target;
        
        const maxRows = 10; // 최대 줄 수 제한
        const lineHeight = parseFloat(getComputedStyle(element).lineHeight); //css 자동 가져오기

        element.style.height = "auto"; // 높이 초기화
        
        requestAnimationFrame(() => {
            const newHeight = Math.min(element.scrollHeight, maxRows * lineHeight);
            element.style.height = `${newHeight}px`;
            
            const currentRows = Math.floor(element.scrollHeight / lineHeight); // 현재 줄 수 계산
            element.style.overflowY = currentRows > maxRows ? 'auto' : 'hidden'; //10줄 초과 시 스크롤 표시
            
            // 기존 높이와 다를 때만 호출
            const calculatedHeight = element.offsetHeight + 60;
            const isHeightChanged = prevHeight.current !== calculatedHeight;
            const isValidOnHeightChange = typeof onHeightChange === 'function'; // onHeightChange가 있으면 높이 전달

            if (isHeightChanged && isValidOnHeightChange) {
                onHeightChange(calculatedHeight);
                prevHeight.current = calculatedHeight; // prevHeight 업데이트
            };
        });
    };

    const handleChange = (e) => {
        const value = e.target.value;
        setComment(value);  // 텍스트 값 업데이트
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
        handleChange,
    };
};

export default useCommentForm;