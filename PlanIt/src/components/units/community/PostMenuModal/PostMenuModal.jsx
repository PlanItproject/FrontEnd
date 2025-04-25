import styled from '@emotion/styled';
import { Link as RouterLink } from 'react-router-dom';
import { Blur } from '../../../commons/PopupMenu/PopupMenu.style';

const PostMenuModalWrap = styled.ul`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 250px;
    background: #fff;
    z-index: 9999;
    border-radius: 12px;
    box-shadow: 2px 2px 15px 0px rgba(0, 0, 0, 0.12);
    font-size: 14px;
    font-weight: 600;
    line-height: 1.45;

    & > li {
        padding: 20px 40px;
        text-align: center;
        list-style: none;
        cursor: pointer;
    }

    & > li:not(:first-of-type) {
        border-top: 1px solid #D9D9D9;
    }
`;

export const PostMenuLink = styled(RouterLink)`
    text-decoration: none;
    color: var(--text-default);
`;

const POST_MENUS = [
    {name: '포스트 작성하기', page: '/community/postEditor'},
    {name: '여행메이트 구하기', page: '/community/mate-form'}
];

const PostMenuModal = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    return (
        <>
            <Blur onClick={onClose}/>
            <PostMenuModalWrap>
                {POST_MENUS.map((menu) => (
                    <li key={menu.name}>
                        <PostMenuLink to={menu.page}>{menu.name}</PostMenuLink>
                    </li>
                ))}
            </PostMenuModalWrap>
        </>
    );
};

export default PostMenuModal;