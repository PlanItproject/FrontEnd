import { useState } from 'react';
import { useCurrentLocation } from '../../../../contexts/CurrentLocationContext';
import { IoMenu, IoPencil, IoSearch } from "react-icons/io5";
import { FaChevronDown } from "react-icons/fa6";
import CommnunitySearchModal from '../CommunityControls/CommunitySearchModal/CommnunitySearchModal';
import PostMenuModal from '../PostMenuModal/PostMenuModal';
import {
  CommunityHeaderContainer,
  CommunityHeaderMenuBtn,
  CommunityHeaderLocation,
  CommunityHeaderRightContainer,
  CommunityHeaderPencilBtn,
  CommunityHeaderSearchBtn,
} from './styles/CommunityHeader'

const CommunityHeader = () => {
  const { currentLocation } = useCurrentLocation();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isPostMenuOpen, setIsPostMenuOpen] = useState(false);

  return (
    <CommunityHeaderContainer>
      <CommunityHeaderMenuBtn>
        <IoMenu size={24} />
      </CommunityHeaderMenuBtn>
      <CommunityHeaderLocation>
        <p>{currentLocation}</p>
        <FaChevronDown size={16} />
      </CommunityHeaderLocation>
      <CommunityHeaderRightContainer>
        <CommunityHeaderPencilBtn>
          <IoPencil size={24} onClick={() => setIsPostMenuOpen(true)}/>
        </CommunityHeaderPencilBtn>
        <CommunityHeaderSearchBtn>
          <IoSearch size={24} onClick={() => setIsModalOpen(true)}/>
        </CommunityHeaderSearchBtn>
      </CommunityHeaderRightContainer>
      <CommnunitySearchModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}/>
      <PostMenuModal isOpen={isPostMenuOpen} onClose={() => setIsPostMenuOpen(false)}/>
    </CommunityHeaderContainer>
  );
};

export default CommunityHeader;
