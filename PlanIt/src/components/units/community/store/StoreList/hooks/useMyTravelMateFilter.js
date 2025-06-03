import travelMateDummyData from "../dummy/dummyTravelMate";

const useMyTravelMateFilter = () => {
  return {
    filteredTravelMates: travelMateDummyData,
    isTravelListOnly: false,
  };
};

export default useMyTravelMateFilter;
