import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"
import PostContents from '../../../components/units/community/posts/PostDetail/PostDetailContents';
import PostActions from "../../../components/units/community/posts/PostForm/PostActions";

const PostPreview = () => {
    const navigate = useNavigate();
    const [postData, setPostData] = useState(null);
    // const post = sessionStorage.getItem("postForm");
    
    useEffect(() => {
        const post = sessionStorage.getItem("postForm");
        if(post) {
            setPostData(JSON.parse(post));
        } else {
            navigate("/community/postEditor")
        }
    }, [navigate]);
    
    const handleSubmit = () => {
        navigate("/community/post")
    };

    if(!postData) return null;

    return (
        <div>
            <PostContents post={postData} />
            <PostActions onClick={handleSubmit} buttonLabel="업로드하기" />
        </div>
    )
};

export default PostPreview;