import styled from '@emotion/styled'
import CommunityChips from '../../../components/units/community/CommunityControls/CommunityChips';
import PostList from "../../../components/units/community/posts/PostList/PostList";
import CommnunityListControl from '../../../components/units/community/CommunityControls/CommunityListControl';
import RecommendedPosts from '../../../components/units/community/posts/PostList/PostRecomendation';

export const ScrollWrapper = styled.div`
    height: calc(100vh - 300px);
    overflow-y: auto;
`;

const Post = () => {

    return (
        <ScrollWrapper>
            <CommunityChips />
            <CommnunityListControl />
            {/* 검색 구현 할 때 예외처리 하기 */}
            {/* <PostList /> */}
            <RecommendedPosts />
        </ScrollWrapper>
    )
};

export default Post;
