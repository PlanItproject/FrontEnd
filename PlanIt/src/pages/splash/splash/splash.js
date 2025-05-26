import styled from "@emotion/styled";

const SplashModalContainer = styled.div`
  width: 100%;
  height: 100vh;
  background: var(--color-brand-default);
`;

const ModalContent = styled.div`
  background: var(--color-background-default-default);
  height: 72%;
  border-radius: 0 0 44px 44px;
  padding: 80px 44px 44px 44px;
`;

const LanguageOption = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 75%;
  padding: 10px 16px;
  margin: 15px auto;
  border-radius: 100px;
  border: 1px solid ${(props) => (props.selected ? "var(--color-border-default-default)" : "none")};
  cursor: pointer;
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
  font-size: 20px;
  font-weight: 600;
  line-height: 145%;
`;

const ModalSubTitle = styled.p`
  margin-bottom: 28px;
  font-size: 18px;
  line-height: 145%;
  letter-spacing: -0.36px;
`;

const Logo = styled.span`
  font-family: "Alfa Slab One", serif;
  font-size: 32px;
  font-weight: 400;
  position:fixed;
  transform: translateX(-50%);
  bottom: 5%;
`

export {
  SplashModalContainer,
  LanguageOption,
  ModalContent,
  ModalTitle,
  ModalSubTitle,
  FlagOption,
  Flag,
  RadioButton,
  Logo,
};
