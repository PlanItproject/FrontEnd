import { useEffect, useRef } from "react";
import { Blur, Line, MenuContainer, MenuHeader, MenuItem, UserProfile } from "./PopupMenu.style"
import ProfileImage from "../Profile/ProfileImage";

const PopupMenu = ({ user, items, onClose, isVisible }) => {
    const menuRef = useRef(null);

    useEffect(() => {
        const handleOutside = (e) => {
            if (menuRef.current && !menuRef.current.contains(e.target)) {
                onClose(); // 메뉴 외부 클릭 시 onClose 실행
            }
        };

        if (isVisible) {
            // 외부 클릭 이벤트 리스너 추가
            document.addEventListener('mousedown', handleOutside);
            document.addEventListener('touchstart', handleOutside);
        }

        return () => {
            // 컴포넌트가 언마운트되거나, 팝업이 닫힐 때 이벤트 제거
            document.removeEventListener('mousedown', handleOutside);
            document.removeEventListener('touchstart', handleOutside);
        };
    }, [isVisible, onClose]);

    if (!isVisible) return null;

    return (
        <>
            <Blur onClick={onClose}/>
            <MenuContainer ref={menuRef} isVisible={isVisible}>
                <MenuHeader><Line /></MenuHeader>
                {user && (
                    <UserProfile>
                        <ProfileImage src={user.profileImage} size={32}/>
                        <span>{user.name}</span>
                    </UserProfile>
                )}

                {items.map((item, index) => (
                    <MenuItem key={index} onClick={() => item.onClick()}>
                        {item.label}
                    </MenuItem>
                ))}
            </MenuContainer>
        </>
    )
}

export default PopupMenu;