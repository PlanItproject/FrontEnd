import Button from "../../../components/commons/Button/index.js";
import Lock from '../../../assets/auth/pw.png'
import styled from '@emotion/styled';
import { ButtonWrapper } from "../styles.js";

const ContentsWrapper = styled.div`
    display: flex;
    flex-grow: 1;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;

    img {
        width: 120px; 
        margin: 0 auto 60px;
    }

    h2 {
        font-size: 32px;
        font-weight: 700;
        line-height: 1.4;
    }

    p {
        margin-top: 8px;
        font-size: 18px;
        font-weight: 500;
    }
`

const PasswordChanged = ({ onReturn }) => {
    return(
        <>
            <ContentsWrapper>
                <img src={Lock} />
                <h2>비밀번호 변경 완료</h2>
                <p>비밀번호가 성공적으로 교체되었습니다.</p>
            </ContentsWrapper>
            <ButtonWrapper>
                <Button variant='primary' size='large' fullWidth onClick={onReturn}>로그인으로 돌아가기</Button>
            </ButtonWrapper>
        </>
    )
}

export default PasswordChanged;