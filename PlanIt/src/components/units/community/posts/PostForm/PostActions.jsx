import Button from "../../../../commons/Button";
import { PostFormButtonWrapper } from "./styles/postAction.style";


const PostActions = ({ onClick, label="미리보기" }) => {

    return(
        <PostFormButtonWrapper>
            <Button type="submit" variant="primary" size="large" onClick={onClick}>
                {label}
            </Button>
        </PostFormButtonWrapper>
    );
};

export default PostActions;