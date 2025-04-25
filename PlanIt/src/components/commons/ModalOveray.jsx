import styled from '@emotion/styled';

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  backdrop-filter: blur(4px); 
  z-index: 9;
`;

export default ModalOverlay;