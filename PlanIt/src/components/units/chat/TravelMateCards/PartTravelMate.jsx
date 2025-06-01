import styled from "@emotion/styled";
import "../../../../global.css";
import time from "../../../../assets/icon/time.png";
import location from "../../../../assets/icon/location.png";

const TravelContainer = styled.div`
  display: flex;
  width: 100%;
  max-width: 188px;
  min-width: 140px;
  height: 320px;

  flex-shrink: 0;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 16px;
  background: #f5f5f5;
  padding: 16px;
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

const TravelHeader = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-sizing: border-box;
  padding: 8px 10px 0 10px;
  gap: 16px;
  algin-self: stretch;
`;

const UserInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const Avatar = styled.img`
  display: block;
  object-fit: cover;
  width: 30px;
  height: 30px;
  border-radius: 50%;
`;

const Username = styled.span`
  font-size: 12px;
  font-weight: 500;
  font-style: normal;
  line-height: 140%;
  color: #ffffff;
  white-space: nowrap;
`;

const Participants = styled.span`
  width: auto;
  white-space: nowrap;
  font-size: 10px;
  font-style: normal;
  font-weight: 500;
  line-height: 140%;
  color: #6ddf16;
`;

const Location = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: 140%;
  color: #ffffff;
`;

const Time = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: 140%;
  color: #ffffff;
`;

const CardMiddle = styled.div`
  display: flex;
  padding: 10px 10px 20px 10px;
  flex-direction: column;
  gap: 10px;
  align-items: flex-start;
  align-self: stretch;
`;

const Title = styled.span`
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: 145%;
  letter-spacing: -0.14px;
  color: #ffffff;
`;

const TagContainer = styled.div`
  display: flex;
  flex-wrap: nowrap;
  gap: 8px;
  white-space: nowrap;
`;

const Description = styled.span`
  height: auto;
  padding: 10px;
  border-radius: 6px;
  background: var(--background-brand-tertiary, #dbebff);
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 145%;
  letter-spacing: -0.14px;
  color: #006df5;
`;

const ETC = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const PartTravelMate = ({ info, onClick }) => {
  return (
    <TravelContainer onClick={onClick}>
      <TravelHeader>
        <UserInfo>
          <Avatar src={info.profileImg} alt="User Avatar" />
          <Username>{info.username}</Username>
          <Participants>{info.participants}명 참여 중</Participants>
        </UserInfo>
        <Title>{info.title}</Title>
        <ETC>
          <Time>
            <img src={time} /> {info.time}
          </Time>
          <Location>
            <img src={location} /> {info.location}
          </Location>
        </ETC>
      </TravelHeader>
      <CardMiddle>
        <TagContainer>
          {info.tags.map((tag, index) => (
            <Description key={index}>{tag}</Description>
          ))}
        </TagContainer>
      </CardMiddle>
    </TravelContainer>
  );
};

export default PartTravelMate;
