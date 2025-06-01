import { useSelector, useDispatch } from "react-redux";
import {
  Modal,
  Content,
  Text,
  SubText,
  Image,
  EarthImg,
  LoadingImg,
  TextBox,
  DeleteStautsModal,
  Title,
  SubTitle,
} from "../styles/DeletePopUp.style";
import Button from "../../../../../../components/commons/Button/Button.jsx";
import { resetDeleteStatus } from "../store/myPostsSlice";
import Earth from "../../../../../../assets/Earth.png";
import Check from "../../../../../../assets/icon/Check.png";
import Error from "../../../../../../assets/icon/Error.png";
import load from "../../../../../../assets/icon/loading.png";
const DeleteStatusModal = () => {
  const status = useSelector((state) => state.Posts.deleteStatus);
  const dispatch = useDispatch();

  if (!status) return null;

  // return 문에 같이 넣으면 div 가 중첩되는 현상 때문에 분리
  if (status === "loading") {
    return (
      <Modal>
        <Content>
          <TextBox>
            <Text>삭제 진행 중</Text>
            <SubText>잠시만 기다려주세요</SubText>
          </TextBox>
          <EarthImg src={Earth} alt="로딩" />
          <LoadingImg src={load} alt="로딩 아이콘" />
        </Content>
      </Modal>
    );
  }

  return (
    <DeleteStautsModal>
      {status === "success" && (
        <Content>
          <TextBox>
            <Title>삭제 완료</Title>
            <SubTitle>
              선택된 포스트들이 안정적으로
              <br />
              삭제되었어요
            </SubTitle>
          </TextBox>
          <Image src={Check} alt="성공 아이콘" />
          <Button
            variant="primary"
            size="large"
            fullWidth
            onClick={() => dispatch(resetDeleteStatus())}
          >
            돌아가기
          </Button>
        </Content>
      )}
      {status === "fail" && (
        <Content>
          <TextBox>
            <Title>삭제 오류</Title>
            <SubTitle>
              삭제 요청에 오류가 발생했어요
              <br />
              다시 진행해주세요
            </SubTitle>
          </TextBox>
          <Image src={Error} alt="오류 아이콘" />
          <Button
            variant="primary"
            size="large"
            fullWidth
            onClick={() => dispatch(resetDeleteStatus())}
          >
            작성화면으로 돌아가기
          </Button>
        </Content>
      )}
    </DeleteStautsModal>
  );
};

export default DeleteStatusModal;
