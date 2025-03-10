import React from 'react';
import styled from 'styled-components';
import Button from '../../../components/commons/Button/Button.jsx';

const ModalOverlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
`;

const ModalContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    background: white;
    padding: 20px;
    border-radius: 10px;
    text-align: center;
    width: 80%;
    height: 45%;
`;

const ModalTitle = styled.h2`
    display: flex;
    justify-content: center;
    font-size: 20px;
    font-weight: 500;
    line-height: 30px;
`;

const ModalText = styled.p`
    display:flex;
    justify-content: center;
    margin: 20px 0;
    line-height: 20px;
`;

const ButtonGroup = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 10px;
    margin-top: 20%;
`;

const ResendPopup = ({ email, onClose, onResend }) => {
    return (
        <ModalOverlay>
            <ModalContent>
                <ModalTitle>재전송 가능 횟수는<br/>총 3회입니다</ModalTitle>
                <ModalText>
                    {email}으로 인증번호를 <br/>전송하시겠습니까?
                </ModalText>
                <ButtonGroup>
                    <Button variant="secondary" size="large" fullWidth onClick={onClose}>
                        뒤로가기
                    </Button>
                    <Button variant="primary" size="large" fullWidth onClick={onResend}>
                        재전송하기
                    </Button>
                </ButtonGroup>
            </ModalContent>
        </ModalOverlay>
    );
};

export default ResendPopup;
