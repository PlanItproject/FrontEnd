import { PostDetailContainer } from './styles/PostDetail.styles'
import PostDetailHeader from "./PostHeader";
import PostContents from "./PostContents";
import ImageSlider from "./ImageSlider";

const PostDetailContents = ({ post }) => {
    const { title, content, createdAt, address, city, country, user, images } = post;

    return (
        <PostDetailContainer>
            <PostDetailHeader 
                user={user}
            />
            {images?.length > 0 ? (<ImageSlider images={images} />) : null}
            <PostContents 
                title={title}
                content={content}
                createdAt={createdAt}
                address={address}
                city={city}
                country={country}
            />
        </PostDetailContainer>
    )
}

export default PostDetailContents;