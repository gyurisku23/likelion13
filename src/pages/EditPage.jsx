import { useState } from "react";
import { useNavigate } from "react-router";
import styled from "styled-components";

function EditPage() {
  const navigate = useNavigate();
  const [name, setName] = useState(localStorage.getItem("name") || "");

  const SaveName = () => {
    localStorage.setItem("name", name);
    navigate("/account"); 
  };

  return (
    <div>
      <h2>이름 변경</h2>
      <ChangeContent>
        <EditName
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        />
        <ChangeName onClick={SaveName}>저장</ChangeName>
      </ChangeContent>
    
    </div>
  );
}

const ChangeContent = styled.div`
  display: flex;
  gap: 8px; 
`;

const EditName = styled.input`
  font-size: 16px;
  height: 40px;
  flex: 1;
  padding: 0 12px;
  border: 1px solid #ccc;
  border-radius: 8px;
`;

const ChangeName = styled.button`
  background-color: rgba(13, 68, 233, 0.69);
  color: white;
  border-radius: 8px;
  height: 40px;
  padding: 0 12px;
  border: none;
  cursor: pointer;
`;
export default EditPage;