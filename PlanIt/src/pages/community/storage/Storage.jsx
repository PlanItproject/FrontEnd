import StorageBody from "./StorageBody.jsx";
import { useState } from "react";
import img from "../../../assets/profile.png";
import run from "../../../assets/run.jpg";

const Storage = () => {
  const [myPosts, setMyPosts] = useState([
    {
      id: 1,
      profileImg: img,
      username: "리액트",
      time: new Date().toLocaleDateString("ko-KR"),
      location: "제주도",
      title: "포스트1",
      description: "포스트1입니다.",
      image: run,
    },
    {
      id: 2,
      profileImg: img,
      username: "컴포넌트",
      time: new Date().toLocaleDateString("ko-KR"),
      location: "경기도",
      title: "포스트2",
      description: "포스트2입니다.",
      image: run,
    },
  ]);

  return <StorageBody myPosts={myPosts} />;
};

export default Storage;
