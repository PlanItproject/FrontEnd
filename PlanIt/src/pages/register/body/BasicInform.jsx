import { useState } from 'react';
import { ChevronLeft } from 'lucide-react';
import Button from '../../../components/commons/Button/Button.jsx'
import * as basic from "./styles/basic_style.js"

const BasicInform = ({ onNext }) => {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        password: '',
        passwordConfirm: '',
        termsAgreed: false,
        privacyAgreed: false,
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if(formData.name && formData.email && formData.password === formData.passwordConfirm) {
            onNext(formData);
        }
    }

    return (
        <basic.FormContainer>
            <basic.FormHeader>
                <basic.Header>
                    <basic.BackButton>
                        <ChevronLeft size={20} color="#4B5563" />
                    </basic.BackButton>
                </basic.Header>
                <basic.Title>회원가입</basic.Title>
            </basic.FormHeader>
                <form onSubmit={handleSubmit}>
                    <basic.FormGroup>
                        <basic.Label htmlFor="name">이름</basic.Label>
                        <basic.Input
                            id="name"
                            name="name"
                            type="text"
                            placeholder="성명을 입력해주세요"
                            value={formData.name}
                            onChange={handleChange}
                        />
                    </basic.FormGroup>

                    <basic.FormGroup>
                    <basic.Label htmlFor="phone">휴대폰 번호</basic.Label>
                        <basic.Input
                            id="phone"
                            name="phone"
                            type="tel"
                            placeholder="-없이 입력"
                            value={formData.phone}
                            onChange={handleChange}
                        />
                    </basic.FormGroup>

                    <basic.FormGroup>
                    <basic.Label htmlFor="email">이메일 주소</basic.Label>
                    <basic.Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="abc@naver.com"
                        value={formData.email}
                        onChange={handleChange}
                    />
                    </basic.FormGroup>

                    <basic.FormGroup>
                    <basic.Label htmlFor="password">비밀번호</basic.Label>
                    <basic.Input
                        id="password"
                        name="password"
                        type="password"
                        placeholder="비밀번호 조합 설정"
                        value={formData.password}
                        onChange={handleChange}
                    />
                    </basic.FormGroup>

                    <basic.FormGroup>
                    <basic.Label htmlFor="passwordConfirm">비밀번호</basic.Label>
                    <basic.Input
                        id="passwordConfirm"
                        name="passwordConfirm"
                        type="password"
                        placeholder="비밀번호를 다시 입력해주세요"
                        value={formData.passwordConfirm}
                        onChange={handleChange}
                    />
                    </basic.FormGroup>
                </form>

                <basic.CheckboxGroup>
                    <basic.CheckboxLabel>
                        <basic.Checkbox
                            type="checkbox"
                            name="termsAgreed"
                            checked={formData.termsAgreed}
                            onChange={handleChange}
                        />
                        [필수] 이용약관 동의
                    </basic.CheckboxLabel>
                    <basic.CheckboxLabel>
                        <basic.Checkbox
                            type="checkbox"
                            name="privacyAgreed"
                            checked={formData.privacyAgreed}
                            onChange={handleChange}
                        />
                        [필수] 개인정보 수집 및 이용동의
                    </basic.CheckboxLabel>
                </basic.CheckboxGroup>

            <Button variant="primary" size="large" fullWidth onClick={onNext} type="submit"> 다음으로 </Button>
        </basic.FormContainer>
    )
}

export default BasicInform