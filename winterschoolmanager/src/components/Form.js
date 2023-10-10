import { useState } from "react";
import styled from "styled-components";
import { db } from "../Firebase";
import { collection, setDoc, getDocs, doc } from "firebase/firestore/lite";

const FormContainer = styled.div`
  color: crimson;
`;

function Form() {
  const [formData, setFormData] = useState("");

  const handleFormData = (e) => {
    setFormData(e.target.value);
  };

  const addData = async () => {
    const query = await getDocs(collection(db, "information"));
    await setDoc(
      // query.docs 독스에 데이터가 들어가 있습니다.
      doc(db, "information", `학생${Object.keys(query.docs).length + 1}`),
      { 이름: formData }
    );

    setFormData("");
  };

  return (
    <FormContainer>
      <div>
        <h1>작성 폼</h1>
        <input value={formData} type=" text" onChange={handleFormData} />
        <button onClick={addData}>등록</button>
      </div>
    </FormContainer>
  );
}

export default Form;
