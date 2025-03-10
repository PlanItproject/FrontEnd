import React from "react";
import styled from "@emotion/styled";
import "../../global.css";
import { FaLocationDot } from "react-icons/fa6";
import "../../../Fonts/static/pretendard.css";

const CardContainer = styled.div`
  display: flex;
  width: auto;
  height: auto;
  flex-direction: column;
  border-radius: 16px;
  background: #f5f5f5;
`;

const CardHeader = styled.div`
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
`;

const Time = styled.span`
  font-size: 10px;
  font-style: normal;
  font-weight: 500;
  line-height: 140%;
  color: #808080;
`;

const Location = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: 140%;
  color: #808080;
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
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 145%;
  letter-spacing: -0.14px;
`;

const Description = styled.span`
  margin-top: -10px;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: 140%;
  align-self: stretch;
  color: #808080;
`;

const Image = styled.img`
  width: 100%;
  height: auto;
  flex: 1 0 0;
  align-self: stretch;
  border-radius: 0 0 16px 16px;
`;

const Card = ({ info }) => {
  return (
    <CardContainer>
      <CardHeader>
        <UserInfo>
          <Avatar src={info.profileImg} alt="User Avatar" />
          <Username>{info.username}</Username>
        </UserInfo>
        <Time>{info.time}</Time>
      </CardHeader>
      <CardMiddle>
        <Location>
          <FaLocationDot /> {info.location}
        </Location>
        <Title>{info.title}</Title>
        <Description>{info.description}</Description>
      </CardMiddle>
      <Image src={info.image} alt="Conetnt Img"></Image>
    </CardContainer>
  );
};

export default Card;
