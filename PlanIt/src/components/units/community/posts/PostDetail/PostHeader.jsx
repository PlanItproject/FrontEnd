import { useState } from 'react';
import { ArrowLeft } from 'lucide-react';
import { userMenuItems } from '../../../../../constants/menus';
import { PostAuthor, PostHeaderContainer, PostProfileWrapper } from './styles/PostHeader.styles';
import useMenuToggle from '../../../../../hooks/useMenuToggle';
import SocialBtn from '../../../../commons/Button_social/socialButton';
import ProfileImage from '../../../../commons/Profile/ProfileImage';
import Bookmark from '../../../../../assets/icon/bookmark.svg';
import PopupMenu from '../../../../commons/PopupMenu/PopupMenu';

const PostDetailHeader = ({ user }) => {
    const { showUserMenu, toggleUserMenu, closeUserMenu } = useMenuToggle();
    const [isPressed, setIsPressed] = useState(false);

    const handleFollow = () => {
        setIsPressed((prev) => !prev)
        if(!isPressed) {
            console.log('팔로우 추가!');
        } else {
            console.log('팔로우 취소ㅠ');
        }
    }

    return (
        <PostHeaderContainer>
            <ArrowLeft />
            <PostProfileWrapper>
                <ProfileImage src={user?.profileImage} size={32}/>
                <PostAuthor onClick={toggleUserMenu}>{user?.name}</PostAuthor>
                {showUserMenu && (
                    <PopupMenu
                        user={user}
                        items={userMenuItems}
                        isVisible={showUserMenu}
                        onClose={closeUserMenu}
                    />
                )}
                <SocialBtn 
                    variant='primary' 
                    state={isPressed ? 'pressed' : null} 
                    onClick={handleFollow}
                >
                    팔로우
                </SocialBtn>
            </PostProfileWrapper>
            <button>
                <img src={Bookmark} />
            </button>
        </PostHeaderContainer>
    )
};

export default PostDetailHeader;