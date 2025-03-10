import { IoMenu, IoPencil, IoSearch } from "react-icons/io5";
import { FaChevronDown } from "react-icons/fa6";
import {
  CommunityHeaderContainer,
  CommunityHeaderMenuBtn,
  CommunityHeaderLocation,
  CommunityHeaderRightContainer,
  CommunityHeaderPencilBtn,
  CommunityHeaderSearchBtn,
} from "../styles/CommunityHeader.js";

const CommunityHeader = () => {
  return (
    <CommunityHeaderContainer>
      <CommunityHeaderMenuBtn>
        <IoMenu size={24} />
      </CommunityHeaderMenuBtn>
      <CommunityHeaderLocation>
        <p>현위치</p>
        <FaChevronDown size={16} />
      </CommunityHeaderLocation>
      <CommunityHeaderRightContainer>
        <CommunityHeaderPencilBtn>
          <IoPencil size={24} />
        </CommunityHeaderPencilBtn>
        <CommunityHeaderSearchBtn>
          <IoSearch size={24} />
        </CommunityHeaderSearchBtn>
      </CommunityHeaderRightContainer>
    </CommunityHeaderContainer>
  );
};

export default CommunityHeader;
