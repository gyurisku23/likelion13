import { Link } from "react-router";
import { useEffect, useState } from "react";
import styled from "styled-components";

function Home() {
  const [name, setName] = useState("김규리");

  useEffect(() => {
    const newName = localStorage.getItem("name") || "김규리";
    setName(newName);
  }, []);

  return (
    <div>
        <img
        src="https://i.namu.wiki/i/buz7yc4OCUUD2tYQLf3uM3mCmrN4Mj76qQtKF4UOMDuJzVQ9Zxlc5pCZ8OJxqVwTHQmdcuoaXU_b_FuM7YmIEA.webp"
        alt="프로필 이미지"
        style={{ width: "200px", borderRadius: "10px" }}
        />
      <p>이름: {name}</p>
      <p>나이: 22세</p>
      <p>학과: 소프트웨어학과</p>
      <p>멋쟁이사자처럼 13기 프론트 아기사자</p>
      <EditLink to="/account/edit">이름 바꾸러 가기</EditLink>
    </div>
  );
}

const EditLink = styled(Link)`
  margin-top: 20px;
  display: inline-block;
  color: #3366cc;
  text-decoration: underline;
`;

export default Home;