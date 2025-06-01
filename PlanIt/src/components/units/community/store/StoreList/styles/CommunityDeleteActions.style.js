import styled from "@emotion/styled";

export const DeleteActionsWrapper = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  display: flex;
  gap: 8px;
  justify-content: space-between;
  padding: 20px 24px 44px 24px;
  border-radius: 20px 20px 0 0;
  background: var(--background-default-secondary, #f5f5f5);
`;

export const ActionButton = styled.button`
  display: flex;
  height: 56px;
  width: 100%;
  padding: 16px 20px 16px 24px;
  border: none;
  border-radius: 28px;
  cursor: pointer;
  font-size: 16px;
  font-weight: 600;
  line-height: 145%;
  justify-content: center;
  align-items: center;

  ${({ variant }) =>
    variant === "cancel"
      ? `
      background-color: #f5f5f5;
      border: 1px solid var(--border-default-default, #D9D9D9);
      background: var(--background-default-default, #FFF);
    `
      : `
      background-color: #007bff;
      color: white;
    `}
`;
