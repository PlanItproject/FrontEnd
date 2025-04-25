import { useRef } from"react";
import Button from "../../../../commons/Button";
import { PostFormTitle, PostFormImg, PostFormImgBox } from "./styles/postFormCommon.styles";

const PostImageUploader = ({ images, onImagesUpload, onImageRemove }) => {
    const fileInputRef = useRef(null);

    const handleInputTrigger = () => {
        fileInputRef.current.click();
    };

    const handleFileChange = (e) => {
        const files = Array.from(e.target.files);
        if (files.length) {
            onImagesUpload(files);
            // 파일 인풋 초기화
            e.target.value = "";
        }
    }

    return (
        <>
            <PostFormTitle>
                이미지 업로드
                <span>선택, 최대 10장 업로드 가능</span>
            </PostFormTitle>
            <PostFormImg>
                <input 
                    type="file"
                    ref={fileInputRef}
                    style={{ display: "none" }}
                    multiple
                    accept="image/*"
                    onChange={handleFileChange}
                />
                <Button 
                    type="button" 
                    variant="secondary" 
                    size="large"
                    onClick={handleInputTrigger}
                >
                    이미지 불러오기
                </Button>
                <PostFormImgBox>
                    {images.map((image, index) => (
                        <div key={index} className="image-preview">
                            <img 
                                src={URL.createObjectURL(image)}
                                alt={`Preview ${index}`}
                                style={{ cursor: "pointer", width: "240px", height: "240px", objectFit: "cover" }}
                                onClick={() => onImageRemove(index)}
                            />
                        </div>
                    ))}
                </PostFormImgBox>
            </PostFormImg>
        </>    
    )
};

export default PostImageUploader;