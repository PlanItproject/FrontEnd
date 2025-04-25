import Input from "../../../../commons/Input/Input";
import CATEGORIES from "../PostDetail/dummy/dummyCategories";
import { PostFormTitle, PostFormContentsSection, PostFormContents } from "./styles/postFormCommon.styles";

const PostContentEditor = ({ title, content, onTitleChange, onContentChange, titleError, contentError }) => {
    return (
        <>
            <PostFormTitle>
                제목
                <span>필수</span>
            </PostFormTitle>
            <Input
                // id={id}
                type='text'
                value={title}
                onChange={(e) => onTitleChange(e.target.value)}
                placeholder='최소 4자 이상, 최대 40자 이내 작성 가능'
                $hasError={titleError}
                required
            />
            <PostFormContentsSection>
                <h5>본문</h5>
                <PostFormContents
                    value={content}
                    onChange={(e) => onContentChange(e.target.value)}
                />
            </PostFormContentsSection>
        </>
    );
};

export default PostContentEditor;