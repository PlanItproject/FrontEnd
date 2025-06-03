import { useState, useEffect } from "react";

const useDragScrollY = (ref) => {
  const [startY, setStartY] = useState(0);
  const [scrollTop, setScrollTop] = useState(0);
  const [isDragging, setIsDragging] = useState(false);

  const handleTouchStart = (e) => {
    setStartY(e.touches[0].clientY); // 현재 Y좌표
    setScrollTop(ref.current.scrollTop); // 현재 스크롤 위치
    setIsDragging(true);
  };

  const handleTouchMove = (e) => {
    if (!isDragging) return;
    const diff = e.touches[0].clientY - startY; // Y좌표 차이
    ref.current.scrollTop = scrollTop - diff; // 스크롤 위치 조정
  };

  const handleTouchEnd = () => {
    setIsDragging(false); // 드래그 종료
    setStartY(0); // 초기화
  };

  const handleMouseDown = (e) => {
    setStartY(e.clientY); // 현재 Y 좌표
    setScrollTop(ref.current.scrollTop); // 현재 스크롤 위치
    setIsDragging(true);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    const diff = e.clientY - startY;
    ref.current.scrollTop = scrollTop - diff;
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
    document.addEventListener("mouseup", handleGlobalMouseUp);
    return () => {
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

export default useDragScrollY;
