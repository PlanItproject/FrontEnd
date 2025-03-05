import { Route, Routes } from 'react-router-dom';
import PostDetailPage from '../pages/posts/PostDetail';

const PostRoutes = () => {
    return(
        <Routes>
            <Route path=':postId' element={<PostDetailPage />}/>
        </Routes>
    );
};

export default PostRoutes;