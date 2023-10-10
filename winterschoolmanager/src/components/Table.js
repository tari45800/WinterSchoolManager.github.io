import styled from "styled-components";
import { useEffect, useState } from "react";
import { db } from "../Firebase";
import { collection, getDocs, addDoc } from "firebase/firestore/lite";

const TableContainer = styled.div`
  color: crimson;
`;

function Table() {
  const [el, setEl] = useState(null);

  const handleEl = (els) => {
    setEl(els);
  };

  useEffect(() => {
    const getData = async () => {
      try {
        const query = await getDocs(collection(db, "information"));
        handleEl(query.docs);
      } catch (error) {
        console.error("데이터를 불러오는 중 오류 발생:", error);
      }
    };

    getData();
  }, []);

  return (
    <TableContainer>
      {el &&
        el.map((doc) => {
          return (
            <>
              <div>{doc.id}</div>
              <div>{JSON.stringify(doc.data())}</div>
            </>
          );
        })}
    </TableContainer>
  );
}

export default Table;
