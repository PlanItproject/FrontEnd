import { useState } from 'react';
import { ChevronLeft } from 'lucide-react';
import Button from '../../../components/commons/Button/Button.jsx'
import Input from '../../../components/commons/Input/Input.jsx';
import * as basic from "./styles/basic_style.js"
import { authApi } from '../../../api/auth.js';
import { useNavigate } from 'react-router-dom';

const BasicInform = ({ onNext, formData, setFormData }) => {
    const navigate = useNavigate();

    const [errors, setErrors] = useState({
        name: '',
        phone: '',
        email: '',
        password: '',
        passwordConfirm: '',
        terms: '',
        general: ''
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;

        setErrors(prev => ({ ...prev, [name]: ''})); // 에러 초기화화
        
        if(name === 'phone') {
            const onlyNums = value.replace(/[^0-9]/g,'');
            setFormData(prev => ({ ...prev, [name]: onlyNums }));
        } else {
            setFormData(prev => ({
                ...prev,
                [name]: type === 'checkbox' ? checked : value
            }));
        }
    };

    const validateForm = () => {
        let isValid = true;
        const newErrors = { ...errors };

        if (!formData.name.trim()) {
            newErrors.name = "이름을 입력해주세요.";
            isValid = false;
        };

        if (!formData.email.trim()) {
            newErrors.email = "이메일을 입력해주세요.";
            isValid = false;
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = "유효한 이메일 주소를 입력해주세요.";
            isValid = false;
        };

        if (!formData.password) {
            newErrors.password = "비밀번호를 입력해주세요.";
            isValid = false;
        } else if (formData.password.length < 10) {
            newErrors.password = "비밀번호는 10자 이상이어야 합니다.";
            isValid = false;
        } else if (!/^(?=.*[a-zA-Z])(?=.*[0-9!@#$%^&*])/.test(formData.password)) {
            newErrors.password = "영문, 특수문자, 숫자 등 2가지 조합이 필요합니다.";
            isValid = false;
        };

        if (!formData.passwordConfirm) {
            newErrors.passwordConfirm = "비밀번호 확인을 입력해주세요."
            isValid = false;
        } else if (formData.password !== formData.passwordConfirm) {
            newErrors.passwordConfirm = "비밀번호가 일치하지 않습니다."
            isValid = false;
        };

        if (!formData.termsAgreed || !formData.privacyAgreed) {
            newErrors.terms = "필수 약관에 동의해주세요.";
            isValid = false;
        };

        setErrors(newErrors);
        return isValid;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!validateForm()) {
            return;
        }

        try {
            const res = await authApi.registerApp({ 
                name: formData.name,
                phoneNumber: formData.phone,
                email: formData.email,
                password: formData.password,
             });
            const { user } = res.data;
            onNext(formData);
        } catch (error) {
            if (error.response) {
                if(error.response.data && error.response.data.message) {
                    if(error.response.data.message.includes('가입 진행 중인 이메일')) {
                        setErrors(prev => ({
                            ...prev,
                            email: error.response.data.message
                        }));
                    } else {
                        setErrors(prev => ({
                            ...prev,
                            general: `회원가입 실패: ${error.response.data.message}`
                        }));
                    }
                } else { //메시지가 없는 서버 응답 에러
                    setErrors(prev => `회원가입 실패 : 알 수 없는 에러 (${error.response.status})`);
                };
            } else if (error.request) {
                setErrors(prev => ({
                    ...prev,
                    general : "서버로부터 응답이 없습니다."
                }));
            }
        }
    }

    return (
        <basic.FormContainer>
            <basic.FormHeader>
                <basic.Header>
                    <basic.BackButton onClick={() => navigate(-1)}>
                        <ChevronLeft size={20} color="#4B5563" />
                    </basic.BackButton>
                </basic.Header>
                <basic.Title>회원가입</basic.Title>
            </basic.FormHeader>
                <form onSubmit={handleSubmit} noValidate>
                    <basic.FormGroup>
                        <basic.Label htmlFor="name">이름</basic.Label>
                        <Input
                            id="name"
                            name="name"
                            type='text'
                            value={formData.name}
                            onChange={handleChange}
                            placeholder='성명을 입력해주세요.'
                            error={errors.name}
                            $hasError={errors.name}
                            required
                        />
                    </basic.FormGroup>

                    <basic.FormGroup>
                        <basic.Label htmlFor="phone">휴대폰 번호</basic.Label>
                        <Input
                            id="phone"
                            name="phone"
                            type="tel"
                            inputMode="numeric"
                            pattern="[0-9]*"
                            maxLength={11}
                            value={formData.phone}
                            onChange={handleChange}
                            placeholder="'-' 없이 입력해주세요."
                            error={errors.phone}
                            $hasError={errors.phone}
                            required
                        />
                    </basic.FormGroup>

                    <basic.FormGroup>
                        <basic.Label htmlFor="email">이메일 주소</basic.Label>
                        <Input
                            id="email"
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="abc@naver.com"
                            $hasError={errors.email}
                            error={errors.email}
                            required
                        />
                    </basic.FormGroup>

                    <basic.FormGroup>
                        <basic.Label htmlFor="password">비밀번호</basic.Label>
                        <Input
                            id="password"
                            name="password"
                            type="password"
                            value={formData.password}
                            onChange={handleChange}
                            placeholder="10자 이상 영문, 특수문자, 숫자 등 2가지 조합"
                            $hasError={errors.password}
                            error={errors.password}
                            required
                        />
                    </basic.FormGroup>

                    <basic.FormGroup>
                        <basic.Label htmlFor="passwordConfirm">비밀번호</basic.Label>
                        <Input
                            id="passwordConfirm"
                            name="passwordConfirm"
                            type="password"
                            value={formData.passwordConfirm}
                            onChange={handleChange}
                            placeholder="비밀번호를 다시 입력해주세요."
                            $hasError={errors.passwordConfirm}
                            error={errors.passwordConfirm}
                            required
                        />
                    </basic.FormGroup>
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
                    {errors.terms && <basic.errorMessage>{errors.terms}</basic.errorMessage>}
                    {errors.general && <basic.errorMessage>{errors.general}</basic.errorMessage>}
                    <Button variant="primary" size="large" fullWidth type="submit"> 다음으로 </Button>
                </form>


        </basic.FormContainer>
    )
}

export default BasicInform