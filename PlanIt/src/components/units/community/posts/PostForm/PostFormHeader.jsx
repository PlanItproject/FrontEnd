import { ArrowLeft } from 'lucide-react';
import { PostHeaderContainer } from '../PostDetail/styles/PostHeader.styles';

const PostFormHeader = ({ handleCancle }) => {
    return (
        <>
            <PostHeaderContainer >
                <ArrowLeft onClick={handleCancle} style={{ cursor: "pointer" }}/>
                <span style={{
                    margin: "0 auto",
                    fontSize: "18px",
                    fontWeight: "600",
                    lineHeight: "1.45",
                    letterSpacing: "-0.36"
                }}>
                    포스트 작성하기
                </span>
            </PostHeaderContainer>
        </>
    );
};

export default PostFormHeader;