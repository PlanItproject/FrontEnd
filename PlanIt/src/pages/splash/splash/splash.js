import styled from "@emotion/styled";

const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: white;
  width: 100%;
  height: 55%;
  border-radius: 0 0 30px 30px;
  padding: 80px 44px 44px 44px;
  margin: 0 auto;
`;

const LanguageOption = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 75%;
  padding: 10px 16px;
  margin: 15px auto;
  border-radius: 100px;
  border: 1px solid ${(props) => (props.selected ? "#e0e0e0" : "none")};
  cursor: pointer;
  color: black;
  font-size: 18px;
`;

const FlagOption = styled.div`
  display: flex;
  align-items: center;
  gap: 18px;
`;

const Flag = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  background: #f5f5f5;
  border-radius: 50%;
  font-size: 16px;
`;

const RadioButton = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: 2px solid ${(props) => (props.selected ? "#3b82f6" : "#e0e0e0")};
  margin-left: auto;
  position: relative;

  &:after {
    content: "";
    width: 12px;
    height: 12px;
    background: #3b82f6;
    border-radius: 50%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: ${(props) => (props.selected ? "block" : "none")};
  }
`;

const ModalTitle = styled.h2`
  font-family: "Pretendard", serif;
  color: black;
  text-align: center;
  font-size: 20px;
  font-weight: 600;
  line-height: 145%;
`;

const ModalSubTitle = styled.p`
  font-family: "Pretendard", serif;
  color: black;
  text-align: center;
  margin-bottom: 24px;
  font-size: 18px;
  line-height: 145%;
  letter-spacing: -0.36px;
`;

export {
  LanguageOption,
  ModalContent,
  ModalTitle,
  ModalSubTitle,
  FlagOption,
  Flag,
  RadioButton,
};
