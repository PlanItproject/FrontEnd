import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import PostDetailContents from '../../components/units/community/posts/PostDetail/PostDetailContents';
import Devider from '../../components/commons/Devider/Devider';
import CommentManager from '../../components/units/community/posts/PostComments/CommentManager';
import { dummyComments } from '../../components/units/community/posts/PostComments/dummy/dummyComments';
import dummyPostsContents from '../../components/units/community/posts/PostDetail/dummy/dummyPostDetails';

const PostDetailPage = () => {
    const { postId } = useParams();
    const [post, setPost] = useState(null);
    const [comments, setComments] = useState([]);

    useEffect(()=>{
        const selectPost = dummyPostsContents.find(post => post.id === postId);
        setPost(selectPost);

        const postComments = dummyComments.filter(comment => comment.postId === postId);
        setComments(postComments);
    },[postId])

    if(!post) {
        return <div>포스트를 찾을 수 없습니다.</div>
    }

    return (
        <div>
            <PostDetailContents post={post}/>
            <Devider />
            <CommentManager initialComments={comments}/>
        </div>
    )
}

export default PostDetailPage;