import { useState } from 'react';
import { ChevronLeft } from 'lucide-react';
import Button from '../../../components/commons/Button/Button.jsx'
import * as inquiry from './inquiry.js'
// import {ChevronDown} from "lucide-react";
import {useNavigate} from "react-router-dom";
import Input from '../../../components/commons/Input/Input.jsx';
import SelectBox from '../../../components/commons/SelectBox/SelectBox.jsx';

const categories = [ "계정찾기", "버그제보", "기타" ];

const Inquiry = ({
    email,
    handleChangeEmail
}) => {
    const [formData, setFormData] = useState({
        inquiry: '',
        category: '계정찾기'
    });
    // const [isOpen, setIsOpen] = useState(false);
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value});
    };

    // const handleCategorySelect = (categoryName) => {
    //     setFormData({...formData, category: categoryName});
    //     setIsOpen(false);
    // };
    
    const handleCategorySelect = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };


    return (
        <inquiry.FormContainer>
            <inquiry.FormHeader>
                <inquiry.Header>
                    <inquiry.BackButton onClick={() => navigate(-1)} >
                        <ChevronLeft size={20} color="#4B5563" />
                    </inquiry.BackButton>
                </inquiry.Header>
                <inquiry.Title>문의하기</inquiry.Title>
            </inquiry.FormHeader>

            <form>
                <Input 
                    label="이메일주소"
                    type="email"
                    id="login-email"
                    value={email}
                    placeholder="해당 주소로 답변을 보내드립니다."
                    onChange={(e) => handleChangeEmail(e.target.value)}
                />

                <div style={{ marginBottom:"16px" }}>
                    <inquiry.Label>카테고리</inquiry.Label>
                    <SelectBox 
                        name="category"
                        value={formData.category}
                        onChange={handleCategorySelect}
                        options={categories}
                    />
                    {/* <inquiry.SelectWrapper>
                        <inquiry.SelectButton type="button" style={{color: "#aab1bb"}} onClick={() => setIsOpen(!isOpen)}>
                            {formData.category || "카테고리를 선택해주세요"}
                            <ChevronDown size={20} color="#4B5563" />
                        </inquiry.SelectButton>
                        {isOpen && (
                            <inquiry.DropdownList>
                                {categories.map((category) => (
                                    <inquiry.DropdownItem
                                        key={category.id}
                                        onClick={() => handleCategorySelect(category.name)}
                                    >
                                        {category.name}
                                    </inquiry.DropdownItem>
                                ))}
                            </inquiry.DropdownList>
                        )}
                    </inquiry.SelectWrapper> */}
                </div>

                <Input 
                    label="문의내용"
                    id="inquiry"
                    name="inquiry"
                    type="text"
                    placeholder="문의하실 내용을 입력해주세요."
                    value={formData.inquiry}
                    onChange={handleChange}
                />    
            </form>

            <inquiry.ButtonGroup>
                <Button variant="secondary" size="large" fullWidth onClick={() => navigate(-1)}> 뒤로가기 </Button>
                <Button variant="primary" size="large" fullWidth type="submit"> 전송하기 </Button>
            </inquiry.ButtonGroup>
        </inquiry.FormContainer>
    );
};

export default Inquiry;