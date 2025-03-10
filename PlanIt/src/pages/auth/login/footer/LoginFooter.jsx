import styled from '@emotion/styled';
import { Link as RouterLink } from 'react-router-dom';

export const LoginMenuBox = styled.ul`
    display: flex;
    justify-content: space-between;
    margin-top: 40px;
    list-style: none;

    @media (max-width: 380px) {
        margin-top: 14px;
    }
`;

export const Link = styled(RouterLink)`
    display: block;
    padding: 8px;
    font-size: 14px;
    text-decoration: none;
    color: #808080;
    cursor: pointer;
`;

const LOGIN_MENUS = [
    {name: '계정찾기', page: '/findAccount'},
    {name: '비밀번호 찾기', page: '/findPW'},
    {name: '문의하기', page: '/contact'},
]

const LoginFooter = () => {
    return (
        <LoginMenuBox>
            {LOGIN_MENUS.map((menu) => (
                <li key={menu.name}>
                    <Link to={menu.page} id={menu.name}>{menu.name}</Link>
                </li>
            ))}
        </LoginMenuBox>
    )
}

export default LoginFooter;