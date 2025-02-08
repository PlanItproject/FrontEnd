import Input from "../../commons/Input";
import Button from "../../commons/Button";
import { useState } from "react";
import { Link } from "react-router-dom"
import styled from "@emotion/styled";

const Form = styled.form`
    display: flex;
    flex-direction: column;
    flex: 1;
    justify-content: space-between;
`

const ButtonWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    margin-top: auto;
`

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
                onChange={(e) => setEmail(e.target.value)}
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
                <Button type='submit' variant='primary' size='large' fullWidth style={{ marginBottom: "120px"}}>다음으로</Button>
            </ButtonWrapper>
        </Form>
    )
}

export default FindAccount;