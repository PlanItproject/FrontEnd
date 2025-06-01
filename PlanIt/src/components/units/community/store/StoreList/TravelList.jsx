import { useSelector } from "react-redux";
import {
  RecommendCardSwiper,
  TravelMateCardColumn,
} from "./styles/RecomendationStores.style";
import styled from "@emotion/styled";
import TravelMate from "../../../community/TravelMate.jsx";
import useMyTravelMateFilter from "./hooks/useMyTravelMateFilter.js";

const SelectedCard = styled.div`
  transition: border 0.2s ease-in-out;
  cursor: ${({ isDeleteMode }) => (isDeleteMode ? "pointer" : "default")};
`;

const chunkByTwo = (array) => {
  const result = [];
  for (let i = 0; i < array.length; i += 2) {
    result.push(array.slice(i, i + 2));
  }
  return result;
};

const TravelList = ({
  isDeleteMode,
  onSelectTravelMate,
  scrollRef,
  dragScroll,
  onMouseDown,
}) => {
  const selectedTravelMates = useSelector(
    (state) => state.Posts.selectedTravelMates
  );

  const { filteredTravelMates } = useMyTravelMateFilter();

  return (
    <RecommendCardSwiper ref={scrollRef} {...dragScroll}>
      {chunkByTwo(filteredTravelMates).map((pair, idx) => (
        <TravelMateCardColumn key={idx}>
          {pair.map((info, innerIdx) => {
            const isSelected = selectedTravelMates.includes(info.id);
            return (
              <SelectedCard
                key={info.id || innerIdx}
                isSelected={isSelected}
                isDeleteMode={isDeleteMode}
                onClick={(e) => {
                  e.stopPropagation();
                  isDeleteMode && onSelectTravelMate(info.id);
                }}
              >
                <TravelMate
                  info={info}
                  isDeleteMode={isDeleteMode}
                  isSelected={isSelected}
                  onMouseDown={onMouseDown}
                />
              </SelectedCard>
            );
          })}
        </TravelMateCardColumn>
      ))}
    </RecommendCardSwiper>
  );
};

export default TravelList;
