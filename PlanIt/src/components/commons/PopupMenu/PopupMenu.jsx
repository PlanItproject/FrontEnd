import { useEffect, useRef, useState } from "react";
import { Blur, Line, MenuContainer, MenuHeader, MenuItem, UserProfile } from "./PopupMenu.style"
import ProfileImage from "../Profile/ProfileImage";

const PopupMenu = ({ user, items, onClose, isVisible, actionHandlers }) => {
    const menuRef = useRef(null);
    const [isAnimating, setIsAnimating] = useState(false) ; // 애니메이션 상태
    const [isClosing, setIsClosing] = useState(false); // 닫기 상태 (slideDown)

    const isRender = isVisible || isAnimating; // 애니메이션이 진행 중이거나 메뉴가 visible 할 때 렌더링

    useEffect(() => {
        if (isVisible) {
            // ⚠️ isVisible 이 false라는 부분이 들어갔으면 좋겠다.

            setIsAnimating(true); // 메뉴가 보일 때 에니메이션 실행
            setIsClosing(false); // 닫히는 중 아님
        }

        const handleOutside = (e) => {
            if (menuRef.current && !menuRef.current.contains(e.target)) handleClose(); // 외부 클릭시 핍업 닫기
        };

        if (isVisible) {
            // 외부 클릭 이벤트 리스너 추가
            // ⚠️ pointerdown(mousedown+touchstart) 사용용, 구버전 고려해서 조건문 작성성
            document.addEventListener('mousedown', handleOutside);
            document.addEventListener('touchstart', handleOutside);
        }

        return () => {
            // 컴포넌트가 언마운트되거나, 팝업이 닫힐 때 이벤트 제거
            document.removeEventListener('mousedown', handleOutside);
            document.removeEventListener('touchstart', handleOutside);
        };
    }, [isVisible, onClose]);

    const handleClose = () => {
        setIsAnimating(true);
        setIsClosing(true);
        setTimeout(() => {
            onClose(); 
        }, 300) // 메뉴 외부 클릭 시, 300ms 후 onClose 실행
    }

    const handleAnimationEnd = () => {
        if(!isVisible) {
            setIsAnimating(false); 
            setIsClosing(false);
        }; // 에니메이션 종료 후 상태 초기화
    }

    const processedItems = typeof items === 'function'
    ? items(actionHandlers) // 함수를 실행한 결과 할당
    : items; // 아니면 items 자체를 할당

    if (!isRender) return null;

    return (
        <>
            <Blur onClick={onClose}/>
            <MenuContainer 
                ref={menuRef} 
                isVisible={!isClosing}
                onAnimationEnd={handleAnimationEnd}
            >
                <MenuHeader><Line /></MenuHeader>
                {user && (
                    <UserProfile>
                        {/* ⚠️ 프로필 이미지 없을 때 처리! */}
                        <ProfileImage src={user.profileImage} size={32}/>
                        <span>{user.name}</span>
                    </UserProfile>
                )}

                {processedItems.map((item) => (
                    // ⚠️ key 변경하기! 
                    <MenuItem key={`popup-${item.id}`} onClick={item.onClick}>
                        {item.label}
                    </MenuItem>
                ))}
            </MenuContainer>
        </>
    )
}

export default PopupMenu;