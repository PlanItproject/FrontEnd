import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";

const squish = keyframes`
    0% { transform: scale(1, 1); }
    25% { transform: scale(1.1, 0.9); }
    50% { transform: scale(0.9, 1.1); }
    75% { transform: scale(1.05, 0.95); }
    100% { transform: scale(1, 1); }
`;

export const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const DeleteStautsModal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Text = styled.h2`
  font-size: 32px;
  color: #fff;
  font-weight: 700;
  line-height: 125%;
`;

export const Title = styled.h2`
  font-size: 32px;
  color: var(--text-default-default, #1e1e1e);
  font-weight: 700;
  line-height: 125%;
`;

export const SubTitle = styled.p`
  font-size: 18px;
  color: var(--text-default-default, #1e1e1e);
  font-weight: 500;
  text-align: center;
  line-height: 145%;
`;

export const SubText = styled.p`
  font-size: 18px;
  color: #fff;
  font-weight: 500;
  text-align: center;
  line-height: 145%;
`;

export const Image = styled.img`
  width: 100px;
  height: 100px;
  margin-bottom: 100px;
`;

export const LoadingImg = styled.img`
  width: 60px;
  height: 10px;
`;

export const EarthImg = styled.img`
  width: 300px;
  height: 300px;
  margin-bottom: 24px;
  animation: spin 2s linear infinite;
  animation: ${squish} 2s ease-in-out infinite;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 24px;
  border-radius: 16px;
  width: 90%;
  max-width: 500px;
`;

export const TextBox = styled.div`
  display: flex;
  width: 274px;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  margin-bottom: 100px;
`;
