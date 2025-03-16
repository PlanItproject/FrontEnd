import styled from "@emotion/styled";
import "../../../global.css";
import { FaLocationDot } from "react-icons/fa6";

const TravelContainer = styled.div`
  display: flex;
  width: auto;
  height: auto;
  flex-direction: column;
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
  align-items: center;
  justify-content: space-between;
  box-sizing: border-box;
  padding: 8px 10px 0 10px;
  gap: 4px;
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
  margin-bottom: 120px;
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

const TravelMate = ({ info }) => {
  return (
    <TravelContainer>
      <TravelHeader>
        <UserInfo>
          <Avatar src={info.profileImg} alt="User Avatar" />
          <Username>{info.username}</Username>
        </UserInfo>
        <Participants>{info.participants}명 참여 중</Participants>
      </TravelHeader>
      <CardMiddle>
        <Title>{info.title}</Title>
        <Location>
          <FaLocationDot /> {info.location}
        </Location>
        <TagContainer>
          {info.tags.map((tag, index) => (
            <Description key={index}>{tag}</Description>
          ))}
        </TagContainer>
      </CardMiddle>
    </TravelContainer>
  );
};

export default TravelMate;
