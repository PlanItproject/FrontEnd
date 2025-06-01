import { useRef, useState } from "react";
import useDragScrollX from "./hooks/useDragScrollX";
import useDragScrollY from "./hooks/useDragScrollY";
import dummyTravelContents from "./dummy/dummyTravelMate";
import ChatTravelMate from "./TravelMateCards/ChatTravelMate";
import {
  RecommendCardSwiper,
  RecommendPostsBox,
  RecommendPostsTitleWrapper,
  TravelMateCardColumn,
  MessageScrollBox,
  Page,
  ExpandedHeader,
  TravelMateGridWrapper,
} from "./styles/RecomendationStores.style";
import BottomNavigation from "../../../components/units/community/navigation/BottomNavigation";
import { IoIosArrowForward } from "react-icons/io";
import { FiMoreVertical } from "react-icons/fi";
import { IoIosArrowBack } from "react-icons/io";
import messageList from "./dummy/messageList";
import MessageItem from "./components/MessageItem";
import PartTravelMate from "./TravelMateCards/PartTravelMate";
import partDummyTravelList from "./dummy/partDummyTravelList";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { enterRoom } from "../chat/chatSlice";

const chunkByTwo = (array) => {
  const result = [];
  for (let i = 0; i < array.length; i += 2) {
    result.push(array.slice(i, i + 2));
  }
  return result;
};

const ChatTravelList = () => {
  const [showAll, setShowAll] = useState(false);
  const firstWrapperRef = useRef(null);
  const firstDragScroll = useDragScrollX(firstWrapperRef);

  const fullListRef = useRef(null); // Y축 스크롤 대상 ref
  const yDragScroll = useDragScrollY(fullListRef);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleClick = (info) => {
    dispatch(
      enterRoom({
        id: info.id,
        username: info.username,
        profile: info.profileImg,
      })
    );
    navigate(`/chats/${info.id}`);
  };

  return (
    <Page>
      {showAll ? (
        <>
          <ExpandedHeader>
            <button className="back-button" onClick={() => setShowAll(false)}>
              <IoIosArrowBack style={{ width: "24px", height: "24px" }} />
              뒤로가기
            </button>
            <p>참여 중인 채팅</p>
            <FiMoreVertical
              className="more-icon"
              style={{ width: "24px", height: "24px" }}
            />
          </ExpandedHeader>
          <TravelMateGridWrapper ref={fullListRef} {...yDragScroll}>
            {chunkByTwo(partDummyTravelList).map((pair, idx) => (
              <TravelMateCardColumn key={idx}>
                {pair.map((info, innerIdx) => (
                  <PartTravelMate
                    key={innerIdx}
                    info={info}
                    onClick={() => handleClick(info)}
                  />
                ))}
              </TravelMateCardColumn>
            ))}
          </TravelMateGridWrapper>
        </>
      ) : (
        <>
          <RecommendPostsBox>
            <RecommendPostsTitleWrapper>
              <p>참여 중인 채팅</p>
              <button onClick={() => setShowAll(true)}>
                더보기
                <IoIosArrowForward style={{ width: "24px", height: "24px" }} />
              </button>
            </RecommendPostsTitleWrapper>

            <RecommendCardSwiper ref={firstWrapperRef} {...firstDragScroll}>
              <TravelMateCardColumn>
                {dummyTravelContents.map((info, postId) => (
                  <ChatTravelMate
                    key={postId}
                    info={info}
                    onMouseDown={firstDragScroll.handleStopPropagation}
                    onClick={() => handleClick(info)}
                  />
                ))}
              </TravelMateCardColumn>
            </RecommendCardSwiper>
          </RecommendPostsBox>

          <RecommendPostsTitleWrapper>
            <p>메세지함</p>
            <FiMoreVertical style={{ width: "24px", height: "24px" }} />
          </RecommendPostsTitleWrapper>

          <MessageScrollBox>
            <div>
              {messageList.map((msg) => (
                <MessageItem
                  key={msg.id}
                  {...msg}
                  onClick={() => handleClick(msg)}
                />
              ))}
            </div>
          </MessageScrollBox>

          <BottomNavigation activeTab="chats" />
        </>
      )}
    </Page>
  );
};

export default ChatTravelList;
