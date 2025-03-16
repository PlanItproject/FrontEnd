import styled from "@emotion/styled";
import Card from "../../../components/units/community/Card.jsx";
import TravelMate from "../../../components/units/community/TravelMate.jsx";
import { useSelector } from "react-redux";

const Header = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  p:nth-of-type(1) {
    font-size: 18px;
    font-weight: 600;
    lien-height: 145%;
    letter-spacing: -0.36px;
    text-align: center;
    margin-bottom: 4px;
  }
  p:nth-of-type(2) {
    font-size: 14px;
    font-weight: 400;
    line-height: 145%;
    line-spacing: -0.14px;
    color: var(--color-text-default-tertiary);
  }

  p:nth-last-of-type(1):nth-of-type(3) {
    font-size: 14px;
    font-weight: 400;
    line-height: 145%;
    line-spacing: -0.14px;
    color: var(--color-text-default-secondary);
  }
`;

const CardWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 12px;
  overflow-x: auto;
  padding: 20px 0 20px 20px;
`;

const TravelMateWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;
  padding: 20px;
  justify-content: center;
`;

const StorageBody = ({ myPosts }) => {
  const savedPosts = useSelector((state) => state.savedPosts);
  const travelMates = useSelector((state) => state.travelMates);

  return (
    <div>
      {/*내가 작성한 포스트에는 useState 로 관리.*/}
      <Header>
        <p>내가 작성한 포스트</p>
        <p>{myPosts.length}개</p>
        {myPosts.length === 0 ? (
          <p>저장된 포스트가 없습니다.</p>
        ) : (
          <CardWrapper>
            {myPosts.map((info, index) => (
              <Card key={index} info={info} />
            ))}
          </CardWrapper>
        )}
      </Header>
      <Header>
        {/*저장한 포스트 Redux 로 관리.*/}
        <p>저장한 포스트</p>
        <p>{savedPosts.length}개</p>
        <p>최대 100개 저장 가능</p>
        {savedPosts.length === 0 ? (
          <p>저장된 포스트가 없습니다.</p>
        ) : (
          <CardWrapper>
            {savedPosts.map((info, index) => (
              <Card key={index} info={info} />
            ))}
          </CardWrapper>
        )}
      </Header>
      <Header>
        {/*여행메이트 찾기도 Redux 로 관리.*/}
        <p>여행메이트 찾기</p>
        <p>{savedPosts.length}개</p>
        <p>최대 50개 저장 가능</p>
        {savedPosts.length === 0 ? (
          <p>저장된 포스트가 없습니다.</p>
        ) : (
          <TravelMateWrapper>
            {travelMates.map((info, index) => (
              <TravelMate key={index} info={info} />
            ))}
          </TravelMateWrapper>
        )}
      </Header>
    </div>
  );
};

export default StorageBody;
