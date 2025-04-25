import { ChevronLeft } from "lucide-react";
import { useState } from "react";
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

const ProfileSetting = () => {
  const [formData, setFormData] = useState({
    nickname: "",
    mbti: "ENTJ",
    gender: "남성",
    profileImage: null,
    previewUrl: null, // 이미지 미리보기

  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData((prev) => ({
        ...prev,
        profileImage: file,
        previewUrl: URL.createObjectURL(file),
      }))
    }
  }

  const handleSubmit = async () => {
    if (!formData.nickname.trim()) {
      alert("닉네임을 입력해주세요.");
      return;
    }

    const form = new FormData();
    form.append(
      "data",
      JSON.stringify({
        nickname: formData.nickname,
        mbti: formData.mbti,
        gender: formData.gender,
      })
    );

    if (formData.profileImage) {
      form.append("profile", formData.profileImage);
    } else { // 사용자가 프로필 이미지 설정하지 않았을 시(required*)
      try {
        const res = await fetch(profile);
        const blob = await res.blob();
        const defaultFile = new File([blob], "default-profile.png", {
          type: blob.type,
        })
      } catch (error) {
          alert("기본 프로필 이미지를 불러오는 데 실패했습니다.");
          return;
      }
    }

    try {
      const res = await authApi.completeRegister(form);
      navigate("/welcome");
    } catch (error) {
      alert("프로필 설정 중 오류가 발생했습니다. 다시 시도해주세요.");
    }

  };

  return (
    <profileSetting.Container>
      <profileSetting.FormHeader>
        <profileSetting.Header>
          <profileSetting.BackButton>
            <ChevronLeft size={20} color="#4B5563" />
          </profileSetting.BackButton>
        </profileSetting.Header>

        <profileSetting.Title>회원가입</profileSetting.Title>
      </profileSetting.FormHeader>

      <profileSetting.ProfileContainer>
        <profileSetting.ProfileWrapper>
          <label htmlFor="profile-upload" style={{ cursor: "pointer" }}>
            <profileSetting.ProfileImage 
              src={formData.previewUrl || profile} 
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
          value={formData.nickname}
          onChange={handleChange}
          placeholder="글자 수 제한"
        />
      </div>

      <div style={{ marginTop: "16px", position: "relative" }}>
        <profileSetting.Label>MBTI</profileSetting.Label>
        {/* <profileSetting.Select 
          name="mbti" 
          value={formData.mbti} 
          onChange={handleChange}
        >
          {mbtiTypes.map((type) => (
            <option key={type} value={type}>
              {type}
            </option>
          ))}
        </profileSetting.Select>
        <profileSetting.DropDown>
          <ChevronDown  size={20} color="#2988ff"/>
        </profileSetting.DropDown> */}
        <SelectBox 
          name="mbti"
          value={formData.mbti}
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
              checked={formData.gender === "남성"}
              onChange={handleChange}
              id="profile-male"
              style={profileSetting.radioStyles.hiddenRadio}
            />
            <span
              style={{
                ...profileSetting.radioStyles.customRadio,
                ...(formData.gender === "남성" 
                    ? profileSetting.radioStyles.checkedRadio
                    : {}
                  )
              }}
            >
              <span 
                style={{
                  ...profileSetting.radioStyles.radioIndicator,
                  ...(formData.gender === "남성"
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
              checked={formData.gender === "여성"}
              onChange={handleChange}
              id="profile-female"
              style={profileSetting.radioStyles.hiddenRadio}
              />
            <span 
              htmlFor="profile-female" 
              style={{
                ...profileSetting.radioStyles.customRadio,
                ...(formData.gender === "여성" 
                    ? profileSetting.radioStyles.checkedRadio
                    : {}
                  )
              }}
            >
              <span 
                style={{
                  ...profileSetting.radioStyles.radioIndicator,
                  ...(formData.gender === "여성"
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
