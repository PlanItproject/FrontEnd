import { ChevronLeft } from "lucide-react";
import { useEffect, useState } from "react";
import profile from "../../../assets/profile.png";
import { useNavigate } from "react-router-dom";
import Input from "../../../components/commons/Input/Input.jsx";
import Button from "../../../components/commons/Button/Button.jsx";
import * as profileSetting from "./styles/profileSetting_style.js";
import SelectBox from "../../../components/commons/SelectBox/SelectBox.jsx";
import { authApi } from "../../../api/auth.js";

const mbtiTypes = [
  "ISTJ", "ISFJ", "INFJ", "INTJ",
  "ISTP", "ISFP", "INFP", "INTP",
  "ESTP", "ESFP", "ENFP", "ENTP",
  "ESTJ", "ESFJ", "ENFJ", "ENTJ"
]

const ProfileSetting = ({ onNext, registerdEmail }) => {
  useEffect(() => {
    console.log("email", registerdEmail);
  },[registerdEmail])

  const navigate = useNavigate();

  const [profileData, setProfileData] = useState({
    nickname: '',
    mbti: 'ENTJ',
    gender: '남성',
    profileImg: null,
  })
  const [previewUrl, setPreviewUrl] = useState(null);

  const handleChange = (e) => {
    setProfileData({...profileData, [e.target.name]:e.target.value})
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();

      setProfileData((prev) => ({
        ...prev,
        profileImg: file
      }))
    }

    const objectUrl = URL.createObjectURL(file);
    setPreviewUrl(objectUrl);
  }

  const handleSubmit = async () => {
    if (!profileData.nickname.trim()) {
      alert("닉네임을 입력해주세요.");
      return;
    }

    const form = new FormData();

    const data = {
      email: registerdEmail,
      nickname: profileData.nickname,
      mbti: profileData.mbti,
      gender: profileData.gender
    }

    form.append('data', JSON.stringify(data));


    if (profileData.profileImg) {
      form.append("profile", profileData.profileImg);
      console.log('업로드 프로필 이미지', profileData.profileImg);
    } else { 
      // 이미지가 없으면 기본 프로필 추가
      try {
        const defaultImg = profile;
        const res = await fetch(defaultImg);

        if(!res.ok) {
          throw new Error("기본 이미지를 불러올 수 없습니다.")
        }

        const blob = await res.blob();
        const defaultFile = new File([blob], "default-profile.png", {
          type: blob.type,
        });

        form.append("profile", defaultFile); // 누락
        console.log('기본이미지', defaultFile);
      } catch (error) {
          alert("기본 프로필 이미지를 불러오는 데 실패했습니다.");
          return;
      }
    }

    try {
      const res = await authApi.completeRegister(form);
      console.log(res);
      navigate("/welcome");
    } catch (error) {

      if (error.response) {
        console.log("서버 응답 상태:", error.response.status);
        console.log("서버 응답 내용:", error.response.data);
      } else {
        console.error("서버 응답 없음");
      }

      alert("프로필 설정 중 오류가 발생했습니다. 다시 시도해주세요.");
    }

  };

  return (
    <profileSetting.Container>
      <profileSetting.FormHeader>
        <profileSetting.Header>
          <profileSetting.BackButton onClick={() => navigate(-1)}>
            <ChevronLeft size={20} color="#4B5563" />
          </profileSetting.BackButton>
        </profileSetting.Header>

        <profileSetting.Title>회원가입</profileSetting.Title>
      </profileSetting.FormHeader>

      <profileSetting.ProfileContainer>
        <profileSetting.ProfileWrapper>
          <label htmlFor="profile-upload" style={{ cursor: "pointer" }}>
            <profileSetting.ProfileImage 
              src={previewUrl || profile} 
              alt="Profile" 
            />
            <profileSetting.AddButton>+</profileSetting.AddButton>
          </label>
          <input 
            id="profile-upload"
            type="file"
            accept="image/*"
            style={{ display: "none" }}
            onChange={handleImageChange}
          />
        </profileSetting.ProfileWrapper>
      </profileSetting.ProfileContainer>

      <div>
        <profileSetting.Label>닉네임</profileSetting.Label>
        <Input 
          type="text"
          name="nickname"
          value={profileData.nickname}
          onChange={handleChange}
          placeholder="글자 수 제한"
        />
      </div>

      <div style={{ marginTop: "16px", position: "relative" }}>
        <profileSetting.Label>MBTI</profileSetting.Label>
        <SelectBox 
          name="mbti"
          value={profileData.mbti}
          onChange={handleChange}
          options={mbtiTypes}
        />
      </div>

      <div style={{ marginTop: "16px" }}>
        <profileSetting.Label>성별</profileSetting.Label>
        <profileSetting.GenderContainer>
          <profileSetting.GenderLabel>
            <input
              type="radio"
              name="gender"
              value="남성"
              checked={profileData.gender === "남성"}
              onChange={handleChange}
              id="profile-male"
              style={profileSetting.radioStyles.hiddenRadio}
            />
            <span
              style={{
                ...profileSetting.radioStyles.customRadio,
                ...(profileData.gender === "남성" 
                    ? profileSetting.radioStyles.checkedRadio
                    : {}
                  )
              }}
            >
              <span 
                style={{
                  ...profileSetting.radioStyles.radioIndicator,
                  ...(profileData.gender === "남성"
                      ? profileSetting.radioStyles.radioIndicatorChecked
                      : profileSetting.radioStyles.radioIndicatorUncheked
                  )
                }}
              />
            </span>
            남성
          </profileSetting.GenderLabel>
          <profileSetting.GenderLabel>
            <input
              type="radio"
              name="gender"
              value="여성"
              checked={profileData.gender === "여성"}
              onChange={handleChange}
              id="profile-female"
              style={profileSetting.radioStyles.hiddenRadio}
              />
            <span 
              htmlFor="profile-female" 
              style={{
                ...profileSetting.radioStyles.customRadio,
                ...(profileData.gender === "여성" 
                    ? profileSetting.radioStyles.checkedRadio
                    : {}
                  )
              }}
            >
              <span 
                style={{
                  ...profileSetting.radioStyles.radioIndicator,
                  ...(profileData.gender === "여성"
                      ? profileSetting.radioStyles.radioIndicatorChecked
                      : profileSetting.radioStyles.radioIndicatorUncheked
                  )
                }}
              />
            </span>
            여성
          </profileSetting.GenderLabel>
        </profileSetting.GenderContainer>
      </div>

      <Button
        type="submit"
        variant="primary"
        size="large"
        fullWidth
        onClick={handleSubmit}
      >
        가입하기
      </Button>
    </profileSetting.Container>
  );
};

export default ProfileSetting;
