import Card from '../../Card';
import dummyPostsContents from './dummy/dummyPostItem';
import { PostItemWrapper } from './styles/PostList.style';

const PostList = () => {
    return (
        <PostItemWrapper>
            {dummyPostsContents?.map((info, postId) => (
                <Card key={postId} info={info}/>
            ))}
        </PostItemWrapper>
    )
}

export default PostList;