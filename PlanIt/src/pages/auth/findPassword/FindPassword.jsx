import Input from '../../../components/commons/Input/index.js';
import Button from '../../../components/commons/Button/index.js';
import { useState } from 'react';
import styled from '@emotion/styled';
import { Form, ButtonWrapper } from '../styles.js';

const InputWrapper = styled.div``

const VerificationBtn = styled.button`
    padding: 4px 10px;
    position: absolute;
    z-index: 1;
    top: 39px;
    right: 24px;
    background-color: ${(props) => (props.disabled ? '#D9D9D9' : '#DBEBFF')};
    color: ${(props) => (props.disabled ? '#B3B3B3' : '#006DF5')};
    border:none;
    border-radius: 6px;
    font-family: var(--font-family-body);
    font-size: 14px;
    line-height: 1.4;
    cursor:pointer;
`

const TextWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 8px;
    padding: 18px;
    font-size: 14px;
`

const ResendButton = styled.button`
    all: unset;
    color: #1E1E1E;
    cursor: pointer;
    text-decoration: underline;
`

const FindPassword = ({ email, onNext }) => {
    const [inputEmail, setInputEmail] = useState('');
    const [verificationCode, setVerificationCode] = useState('');
    const [isSent, setIsSent] = useState(false); //인증버튼 상태관리
    // const [error,setError] = useState('');

    const handleEmailChange = (e) => {
        setInputEmail(e.target.value.trim());
        setIsSent(false); // 이메일 변경 시 인증버튼 활성화
    }

    const handleSendCode = (e) => {
        e.preventDefault();
        // 인증코드 발송
        console.log('인증 코드 발송');
        setIsSent(true);
    }

    const handleResendCode = (e) => {
        e.preventDefault();
        // 인증코드 재발송
        console.log('인증 코드 재발송');
    }

    const handleVerifyCode = (e) => {
        e.preventDefault();
        if (verificationCode === '1234') { //임시 '1234'
            onNext({ email: inputEmail }) // 이메일 정보 전달
        } else {
            alert('인증정보가 올바르지 않습니다.')
        }
    }
    return(
        <>  
            <form onSubmit={handleSendCode} style={{ position: "relative" }}>
                <Input 
                    id='pw-email'
                    label='이메일 주소'
                    type='email'
                    value={inputEmail}
                    placeholder='abc@gmail.com'
                    onChange={handleEmailChange}
                />
                <VerificationBtn 
                    type='submit' 
                    disabled={isSent || !inputEmail.trim()} // 이메일 빈값일 경우 인증 버튼 비활성
                >
                    {isSent ? '전송완료' : '인증하기'}
                </VerificationBtn>
            </form>
            <Form onSubmit={handleVerifyCode}>
                <InputWrapper>
                    <Input 
                        id='verification-code'
                        label='인증번호 입력'
                        type='text'
                        value={verificationCode}   
                        placeholder='메일 내 4자리 숫자를 입력하세요.'
                        onChange={(e) => {setVerificationCode(e.target.value.trim())}}
                    />
                    <TextWrapper>
                        <p>메일을 받지 못하셨나요?</p>
                        <ResendButton onClick={handleResendCode}>재전송하기</ResendButton> {/* 버튼으로 변경 */}
                    </TextWrapper>
                </InputWrapper>
                <ButtonWrapper>
                    <Button 
                        type='submit' 
                        variant='primary' 
                        size='large' 
                        fullWidth
                        disabled={!verificationCode.trim()}
                    >
                        다음으로
                    </Button>
                </ButtonWrapper>
            </Form>
        </>
    )
}

export default FindPassword;