import styled from "@emotion/styled";

export const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  background: var(
    --gradient,
    linear-gradient(
      180deg,
      var(--brand-blue-500, #2988ff) 47%,
      var(--gray-200, #e6e6e6) 100%
    ),
    linear-gradient(
      180deg,
      var(--brand-blue-500, #2988ff) 47%,
      var(--brand-lightgreen-400, #d2fc02) 100%
    )
  );
`;

export const Header = styled.div`
  background: var(--background-brand-default, #2988ff);
  display: flex;
  width: 100%;
  padding: 60px 20px 0px 20px;
  justify-content: space-between;
  align-items: center;
`;

export const BackButton = styled.button`
  background: none;
  border: none;
  color: white;
`;

export const RoomTitle = styled.h3`
  color: var(--text-brand-on-brand-default, #fff);

  font-family: Pretendard;
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: 145%;
`;

export const MessageContainer = styled.div`
  display: flex;
  height: auto;
  padding: 24px 24px 0 24px;
  flex-direction: ${({ isMine }) => (isMine ? "row-reverse" : "row")};
  align-items: flex-start;
`;

export const Profile = styled.img`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  margin: 0 8px;
`;

export const BubbleTime = styled.div`
  display: flex;
  align-items: flex-end;
  gap: 8px;

  flex-direction: ${({ isMine }) => (isMine ? "row-reverse" : "row")};
  align-self: ${({ isMine }) => (isMine ? "flex-end" : "flex-start")};
`;

export const BubbleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
  align-self: stretch;
`;

export const Username = styled.span`
  font-size: 12px;
  color: #fff;
  margin-bottom: 2px;
`;

export const Bubble = styled.div`
  background-color: ${({ isMine }) => (isMine ? "#d2fc02" : "#fff")};
  color: #000;
  display: flex;
  padding: 12px;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
  flex: 1 0 0;
  border-radius: 6px;
`;

export const Time = styled.span`
  color: var(--text-brand-on-brand-default, #fff);

  font-family: Pretendard;
  font-size: 10px;
  font-style: normal;
  font-weight: 500;
  line-height: 140%; /* 14px */
`;

export const InputBar = styled.div`
  display: flex;
  position: fixed;
  bottom: 0;
  width: 100%;
  padding: 20px 20px 44px 20px;
  align-items: center;
  gap: 8px;
  border-radius: 34px 34px 0px 0px;
  background: var(--background-default-default, #292929);
`;

export const Input = styled.input`
  display: flex;
  height: 40px;
  padding: 18px 20px;
  align-items: center;
  gap: 10px;
  flex: 1 0 0;
  border-radius: 28px;
  border: 0.4px solid var(--border-neutral-secondary, #808080);
  background: var(--background-default-default, #292929);
`;

export const SendButton = styled.button`
  padding: 10px 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  flex-shrink: 0;
  border-radius: 24px;
  background-color: #2988ff;
  color: white;
  border: none;
`;
