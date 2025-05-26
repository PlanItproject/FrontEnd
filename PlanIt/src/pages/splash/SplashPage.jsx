import Earth from "../../assets/Earth.png";
import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";
import {useEffect, useState, useRef} from "react";
import Splash from "./splash/Splash.jsx";
import LoginModal from "./loginmodal/LoginModal.jsx";
import { setLanguage } from "../../api/common.js";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/authContext.jsx";

const squish = keyframes`
    0% { transform: scale(1, 1); }
    25% { transform: scale(1.1, 0.9); }
    50% { transform: scale(0.9, 1.1); }
    75% { transform: scale(1.05, 0.95); }
    100% { transform: scale(1, 1); }
`;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100vh;
    background-color: #3b82f6;
    text-align: center;
    color: white;
`;

const Image = styled.img`
    width: 300px;
    animation: ${squish} 2s ease-in-out infinite;
`;

const Title = styled.h1`
    font-family: "Alfa Slab One", serif;
    font-size: 48px;
    font-weight: 400;
    margin-bottom: 10px;
`;

const Subtitle = styled.p`
    font-size: 16px;
`;

const ModalOverlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: transparent;
    display: flex;
    justify-content: center;
    align-items: flex-start;
`;

const SplashPage = () => {
    const { authChecked, isAuthenticated } = useAuth();
    const [showModal, setShowModal] = useState(false);
    const [selectedLanguage, setSelectedLanguage] = useState(localStorage.getItem("lang") || "ko");
    const [isLoginMode, setIsLoginMode] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const timer = setTimeout(() => {
            if(authChecked) {
                if (isAuthenticated) {
                    navigate("/community/post"); // 메인 만들고 변경
                } else {
                    setShowModal(true);
                }
            }
        }, 3000);
        return () => clearTimeout(timer);
    }, [authChecked, isAuthenticated, navigate]);

    const handleLoginMode = () => {
        setIsLoginMode(true);
    }

    const handleLanguageSelect = async (lang) => {
        setSelectedLanguage(lang);
        try {
            const serverLang = lang === 'ko' ? 'KOREAN' : 'ENGLISH';
            await setLanguage(serverLang);
        } catch (error) {
            console.error("언어 설정 실패: ",error);
        }
    }

    return (
        <Container>
            <Image src={Earth} alt="Passport Icon" />
            <Title>PlanIt</Title>
            <Subtitle>한달살기 장기여행은 플랜잇에서</Subtitle>

            {showModal && (
                <ModalOverlay>
                    {isLoginMode ? (
                        <LoginModal />
                    ) : (
                        <Splash
                            selectedLanguage={selectedLanguage}
                            onLanguageSelect={handleLanguageSelect}
                            onStart={handleLoginMode}
                        />
                    )}
                </ModalOverlay>
            )}
        </Container>
    );
};

export default SplashPage;