import { useDispatch, useSelector } from "react-redux";
import styled from "@emotion/styled";
import {
  closeDeletePopup,
  startDelete,
  finishDeleteSuccess,
  finishDeleteFail,
} from "../store/myPostsSlice";

const PopupContainer = styled.div`
  display: flex;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: #fff;
  padding: 60px 20px;
  flex-direction: column;
  gap: 121px;
  border-radius: 20px;
  width: 320px;
  text-align: center;
  z-index: 1000;

  & > h3 {
    font-size: 20px;
    font-style: normal;
    font-weight: 600;
    line-height: 145%;
    margin-bottom: -113px;
  }

  & > p {
    text-align: center;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 145%;
    letter-spacing: -0.14px;
  }
`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
  z-index: 999;
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 12px;
`;

const Button = styled.button`
  padding: 16px 20px 16px 24px;
  font-size: 16px;
  border-radius: 28px;
  cursor: pointer;
  border: none;
  width: 100%;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 145%;
`;

const CancelButton = styled(Button)`
  background: transparent;
  border: 1px solid #5a5a5a;
`;

const ConfirmButton = styled(Button)`
  background: #2988ff;
  color: #fff;
`;

const DeletePopup = () => {
  const dispatch = useDispatch();
  const isDeletePopupOpen = useSelector(
    (state) => state.Posts.isDeletePopupOpen
  );

  if (!isDeletePopupOpen) return null;

  return (
    <>
      <Overlay onClick={() => dispatch(closeDeletePopup())} />
      <PopupContainer>
        <h3>정말 삭제하시겠습니까?</h3>
        <p>
          삭제 시 회원님의 포스트 및 댓글 내역이 <br /> 영구히 삭제됩니다
        </p>
        <ButtonContainer>
          <CancelButton onClick={() => dispatch(closeDeletePopup())}>
            돌아가기
          </CancelButton>
          <ConfirmButton
            onClick={() => {
              dispatch(startDelete());
              dispatch(closeDeletePopup());

              // 비동기 삭제 요청
              setTimeout(() => {
                const isSuccess = Math.random() > 0.3; // 음.. 확률로 일단 설정
                if (isSuccess) {
                  dispatch(finishDeleteSuccess());
                } else {
                  dispatch(finishDeleteFail());
                }
              }, 2000); // 2초 후에 성공/실패
            }}
          >
            삭제하기
          </ConfirmButton>
        </ButtonContainer>
      </PopupContainer>
    </>
  );
};

export default DeletePopup;
