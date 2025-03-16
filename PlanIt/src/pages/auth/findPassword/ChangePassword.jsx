import Input from "../../../components/commons/Input/index.js";
import Button from "../../../components/commons/Button/index.js";
import { useState } from "react";
import styled from "@emotion/styled";
import { Form, ButtonWrapper } from "../styles.js";

const FormWrapper = styled.div``

const ChangePassword = ({ email, onNext}) => {
    const [newPassword,setNewPassword] = useState('');
    const [confirmPassword,setConfirmPassword] = useState('');
    const [errors, setErrors] = useState({password:'', confirmPassword:''});
    

    // 비밀번호 조합체크
    const validatePassword = (password) => {
        const regex = /^(?=.*[A-Za-z])(?=.*[!@#$%^&*(),.?":{}|<>])(?=.*\d).{10,}$/; // 특문과 숫자 모두 포함해야한다는 조건
        return regex.test(password);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // 에러 초기화
        setErrors({password:'', confirmPassword:''});

        let hasError = false;
        const newErrors = {};
        
        if(!validatePassword(newPassword)) {
            newErrors.password = '비밀번호는 10자 이상이며 영문, 특수문자, 숫자 중 2가지 이상을 포함해야 합니다.';
            hasError = true;
        } 
        
        if (newPassword !== confirmPassword) {
            newErrors.confirmPassword = '비밀번호가 일치하지 않습니다.'
            hasError = true;
        } 
        
        if (hasError) {
            // 점진적인 오류 업데이트
            setErrors((prevErrors) => ({
                ...prevErrors, // 기존 오류 상태
                ...newErrors,  // 새로운 오류 상태
            }))
        } else {
            onNext(); // 없을 때 다음 단계로 진행
        }
    }

    return(
        <>
            <Form noValidate onSubmit={handleSubmit}>
                <FormWrapper>
                    <Input 
                        id='pw-password'
                        label='새비밀번호 입력'
                        type='password'
                        value={newPassword}
                        onChange={(e) => setNewPassword(e.target.value.trim())}
                        placeholder='10자 이상 영문,특수문자,숫자 중 2가지 조합'
                        hasError={Boolean(errors.password)} // 명시적으로 값 전달
                        error={errors.password}
                        required
                    />
                    <Input 
                        id='pw-confirm'
                        label='새비밀번호 확인'
                        type='password'
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value.trim())}
                        placeholder='입력하신 비밀번호를 다시 입력해주세요.'
                        hasError = {Boolean(errors.confirmPassword)} // 에러가 있으면 스타일 적용
                        error={errors.confirmPassword}
                        required
                    />
                </FormWrapper>
                <ButtonWrapper>
                    <Button 
                        type='submit' 
                        variant='primary' 
                        size='large' 
                        fullWidth 
                        disabled={!newPassword.trim() || !confirmPassword.trim()} // disalbed 추가
                    >
                        변경하기
                    </Button>
                </ButtonWrapper>
            </Form>
        </>
    )
}

export default ChangePassword;