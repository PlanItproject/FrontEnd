import { ChevronLeft } from "lucide-react";
import { useState } from "react";
import profile from "../../../assets/profile.png";
import { useNavigate } from "react-router-dom";
import Button from "../../../components/commons/Button/Button.jsx";
import * as profileSetting from "./styles/profileSetting_style.js";

const ProfileSetting = () => {
  const [formData, setFormData] = useState({
    nickname: "",
    mbti: "ENTJ",
    gender: "남성",
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    if (!formData.nickname.trim()) {
      alert("닉네임을 입력해주세요.");
      return;
    }
    navigate("/welcome");
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
          <profileSetting.ProfileImage src={profile} alt="Profile" />
          <profileSetting.AddButton>+</profileSetting.AddButton>
        </profileSetting.ProfileWrapper>
      </profileSetting.ProfileContainer>

      <div>
        <profileSetting.Label>닉네임</profileSetting.Label>
        <profileSetting.Input
          type="text"
          name="nickname"
          value={formData.nickname}
          onChange={handleChange}
          placeholder="글자 수 제한"
        />
      </div>

      <div style={{ marginTop: "16px" }}>
        <profileSetting.Label>MBTI</profileSetting.Label>
        <profileSetting.Select value={formData.mbti} onChange={handleChange}>
          {["ENTJ", "INTJ", "ENTP", "INFJ", "ENFP", "INFP"].map((type) => (
            <option key={type} value={type}>
              {type}
            </option>
          ))}
        </profileSetting.Select>
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
            />
            남성
          </profileSetting.GenderLabel>
          <profileSetting.GenderLabel>
            <input
              type="radio"
              name="gender"
              value="여성"
              checked={formData.gender === "여성"}
              onChange={handleChange}
            />
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
