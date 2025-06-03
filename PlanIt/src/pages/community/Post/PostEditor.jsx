import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import PostContentEditor from "../../../components/units/community/posts/PostForm/PostContentEditor";
import PostImageUploader from "../../../components/units/community/posts/PostForm/PostImageUploader";
import PostChipSelector from "../../../components/units/community/posts/PostForm/PostChipSelector";
import PostLocationPicker from "../../../components/units/community/posts/PostForm/PostLocationPicker";
import { PostFormContainer } from "../../../components/units/community/posts/PostForm/styles/postFormCommon.styles";
import CATEGORIES from "../../../components/units/community/posts/PostDetail/dummy/dummyCategories";
import PostFormHeader from "../../../components/units/community/posts/PostForm/PostFormHeader";
import PostFormModal from "../../../components/units/community/posts/PostForm/PostFormModal";
import ModalOverlay from "../../../components/commons/ModalOveray";
import PostActions from "../../../components/units/community/posts/PostForm/PostActions";

const PostEditor = () => {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        title: "",
        content: "",
        category: [],
        location: null,
        images: []
    });

    const [errors, setErrors] = useState({
        title: false,
        content: false,
        category: false,
        location: false
    });

    const [showModal, setShowModal] = useState(false);

    const handleChange = (field, value) => {
        setFormData(prev => ({
            ...prev,
            [field]: value
        }));

        if(value) {
            setErrors(prev => ({
                ...prev,
                [field]: false
            }));
        }
    };

    const handleCategorySelect = (categoryValue) => {
        setFormData(prev => ({
          ...prev,
          category: categoryValue
        }));
        setErrors(prev => ({
          ...prev,
          category: false
        }));
    };

    const handleLocationSelect = (location) => {
        setFormData(prev => ({
          ...prev,
          location
        }));
        setErrors(prev => ({
          ...prev,
          location: false
        }));
      };

    const handleImagesUpload = (newImages) => {
        setFormData(prev => ({
            ...prev,
            images: [...prev.images, ...newImages].slice(0,10) // 10개 제한
        }));
    };

    const handleImageRemove = (index) => {
        setFormData(prev => ({
            ...prev,
            images: prev.images.filter((_, i) => i !== index)
        }));
    };

    const handlePreview = () => {
        const newErrors = {
            title: !formData.title.trim(),
            content: !formData.content.trim(),
            category: !formData.category,
            location: !formData.location
        };

        setErrors(newErrors);
        const hasError = Object.values(newErrors).some(e => e);
        if (hasError) return;

        sessionStorage.setItem("postForm", JSON.stringify(formData));
        navigate("/community/postPreview");
    };

    const handleCancle = () => {
        setShowModal(true);
    };

    const handleModlaClose = () => {
        setShowModal(false);
    };

    const handleGoBack = () => {
        setShowModal(false);
        navigate(-1);
    }

    return(
        <>
            <PostFormHeader handleCancle={handleCancle} />
            {showModal && (
                <>
                    <ModalOverlay />
                    <PostFormModal onClose={handleModlaClose} onGoBack={handleGoBack} />
                </>
            )}
            <PostFormContainer>
                <PostContentEditor 
                    title={formData.title}
                    content={formData.content}
                    onTitleChange={(value) => handleChange('title', value)}
                    onContentChange={(value) => handleChange('content', value)}
                    titleError={errors.title}
                    contentError={errors.content}
                />
                <PostChipSelector 
                    categories={CATEGORIES}
                    selectedCategory={formData.category}
                    onCategorySelect={handleCategorySelect}
                    hasError={errors.category}
                />
                <PostLocationPicker
                    selectedLocation={formData.location}
                    onLocationSelect={handleLocationSelect}
                    hasError={errors.location}
                />
                <PostImageUploader 
                    images={formData.images}
                    onImagesUpload={handleImagesUpload}
                    onImageRemove={handleImageRemove}
                />
            </PostFormContainer>
            <PostActions onClick={handlePreview}/>
        </>
    );
};

export default PostEditor;