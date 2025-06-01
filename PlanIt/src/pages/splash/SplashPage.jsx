import Earth from "../../assets/Earth.png";
import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";
import {useEffect, useState} from "react";
import Splash from "./splash/Splash.jsx";
import LoginModal from "./loginmodal/LoginModal.jsx";

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
    font-weight: bold;
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
    const [showModal, setShowModal] = useState(false);
    const [selectedLanguage, setSelectedLanguage] = useState(localStorage.getItem("lang") || "ko");
    const [isLoginMode, setIsLoginMode] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowModal(true);
        }, 3000);
        return () => clearTimeout(timer);
    }, []);

    const handleLanguageSelect = (lang) => {
        setSelectedLanguage(lang);
        localStorage.setItem("lang", lang);
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
                            onStart={() => setIsLoginMode(true)}
                        />
                    )}
                </ModalOverlay>
            )}
        </Container>
    );
};

export default SplashPage;