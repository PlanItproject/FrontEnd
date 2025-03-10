import Input from "../../../components/commons/Input/index.js";
import Button from "../../../components/commons/Button/index.js";
import { useState } from "react";
import { Link } from "react-router-dom"
import styled from "@emotion/styled";
import { Form, ButtonWrapper } from "../styles.js";

const TextWrapper = styled.div`
    display: flex;
    justify-content: center;
    padding: 18px 0;
    font-size: 14px;
    gap: 8px;
`

const StyledLink = styled(Link)`
    color: #1E1E1E;
`

const FindAccount = ({ onNext }) => {
    const [email,setEmail] = useState('');
    const [error,setError] = useState('');

    const handleFindAccount = (e) => {
        e.preventDefault();
        if (email === 'user@example.com') { //임시 'user@example.com'
            onNext({ email });
        } else {
            setError('가입 이력이 없는 메일 주소입니다.')
        }
    }

    return(
        <Form onSubmit={handleFindAccount}>
            <Input 
                id='account-email'
                label='이메일 주소'
                type='email'
                value={email}
                onChange={(e) => setEmail(e.target.value.trim())} //입력값에서 공백 제거
                placeholder='abc@gmail.com'
                hasError={error && (error.includes("가입 이력"))}
                error={error}
                required
            />
            <ButtonWrapper>
                <TextWrapper>
                    <p>아직 회원이 아니신가요?</p>
                    <StyledLink to="/">회원가입</StyledLink>
                </TextWrapper>
                <Button 
                    type='submit' 
                    variant='primary' 
                    size='large' 
                    fullWidth 
                    // style={{ marginBottom: "120px"}} 
                    disabled={!email.trim()} // disabled 추가
                >
                    다음으로
                </Button>
            </ButtonWrapper>
        </Form>
    )
}

export default FindAccount;