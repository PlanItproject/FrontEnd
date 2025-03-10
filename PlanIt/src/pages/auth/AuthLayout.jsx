import styled from "styled-components";
import LoginHeader from './login/header/LoginHeader.jsx';

const AuthContainer = styled.div`
    padding: 47px 44px;
    max-width: 500px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    min-height: calc(100vh - 94px);

    @media (max-height: 900px) {
        padding: 30px 44px;
        min-height: calc(100vh - 60px);
    }

    @media (max-width: 380px) {
        padding: 30px 20px;
        max-width: 100%;
        min-height: calc(100vh - 60px);
    }

    @media (max-width: 360px) {
        padding: 15px 20px;
        justify-content: center;
    }
`

const AuthTitle = styled.h1`
    margin-bottom: 40px;
    font-size: 32px;
    font-weight: 700;
    line-height: 1.3;

    @media (max-width: 380px) {
        text-align: center;
    }
`

const AuthBody = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    min-height: 62vh;
`

const AuthLayout = ({ hideHeader = false, title, hideTitle = false, children }) => {
    return(
        <AuthContainer>
            {!hideHeader && <LoginHeader />}
            {!hideTitle && <AuthTitle>{title}</AuthTitle>}
            <AuthBody>{children}</AuthBody>
        </AuthContainer>
    )
}

export default AuthLayout;