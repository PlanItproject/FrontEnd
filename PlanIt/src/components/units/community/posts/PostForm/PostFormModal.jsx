import Button from "../../../../commons/Button";
import { PostFormModalButtonWrapper, PostFormModalContainer, PostFormModalHeader } from "./styles/postFormModal.style";

const PostFormModal = ({ onClose, onGoBack }) => {
    return(
        <PostFormModalContainer>
            <PostFormModalHeader>
                <h5>포스트 작성을<br/>종료하시겠습니까?</h5>
                <div>임시저장한 내용은 다음 번에 불러올 수 있어요</div>
            </PostFormModalHeader>
            <PostFormModalButtonWrapper>
                <Button 
                    type="button" 
                    variant="secondary" 
                    size="large"
                    onClick={onClose}
                > 
                    작성화면으로 돌아가기
                </Button>
                <Button 
                    type="button" 
                    variant="primary" 
                    size="large"
                    onClick={onGoBack}
                > 
                    임시저장 후 나가기
                </Button>
            </PostFormModalButtonWrapper>
        </PostFormModalContainer>
    )
}

export default PostFormModal;