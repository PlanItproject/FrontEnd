import styled from '@emotion/styled';
import { useNavigate } from "react-router-dom";
import { ChevronLeft } from 'lucide-react';

const HeaderBox = styled.div`
    margin-bottom: 20px;
    position: relative;
    left: -20px;

    @media (max-width: 380px) {
        position: fixed;
        left: 20px;   
        margin-bottom: 10px;
    }

    @media (max-width: 360px) {
        position: relative;
        left: 0;
    }
`

const PrevButton = styled.button`
    width: 48px;
    height: 48px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #EFF6FF;
    border: none;
    border-radius: 50%;
    cursor: pointer;

    @media (max-width: 380px) {
        width: 42px;
        height: 42px;
    }
`;

const LoginHeader = () => {
    const navigate = useNavigate();

    return (
        <HeaderBox>
            <PrevButton onClick={() => navigate(-1)}>
                <ChevronLeft size={20} color="#4B5563" />
            </PrevButton>
        </HeaderBox>
    )
}

export default LoginHeader;