import { useEffect, useState } from "react";

const useDragScrollX = (ref) => {
  const [startY, setStartY] = useState(0);
  const [scrollTop, setScrollTop] = useState(0);
  const [isDragging, setIsDragging] = useState(false);

  // 모바일 터치 이벤트
  const handleTouchStart = (e) => {
    setStartY(e.touches[0].clientY); // 현재 Y좌표
    setScrollTop(ref.current.scrollTop); // 현재 스크롤 값
    setIsDragging(true); // 드래그 시작
  };

  const handleTouchMove = (e) => {
    if (!isDragging) return;
    const diff = e.touches[0].clientY - startY; // 시작 점과 현재 위치 차이 계산
    ref.current.scrollTop = scrollTop - diff; // 스크롤 이동
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
    setStartY(0); // 터치 종료 시 초기화
  };

  // 마우스 이벤트 처리
  const handleMouseDown = (e) => {
    setStartY(e.clientY);
    setScrollTop(ref.current.scrollTop);
    setIsDragging(true);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    const diff = e.clientY - startY;
    if (ref.current) {
      // 실제 DOM요소인지 확인
      ref.current.scrollTop = scrollTop - diff;
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    setStartY(0);
  };

  useEffect(() => {
    const handleGlobalMouseUp = () => {
      if (isDragging) {
        setIsDragging(false);
        setStartY(0);
      }
    };

    // 전역 mouseup 처리, ref 영역 밖에서 마우스를 뗀 경우 정상 종료
    document.addEventListener("mouseup", handleGlobalMouseUp);

    return () => {
      // 컴포넌트가 언마운트 될 때, 제거
      document.removeEventListener("mouseup", handleGlobalMouseUp);
    };
  }, [isDragging]);

  const handleStopPropagation = (e) => {
    e.stopPropagation();
  };

  return {
    onTouchStart: handleTouchStart,
    onTouchMove: handleTouchMove,
    onTouchEnd: handleTouchEnd,
    onMouseDown: handleMouseDown,
    onMouseMove: handleMouseMove,
    onMouseUp: handleMouseUp,
    handleStopPropagation,
  };
};

export default useDragScrollX;
