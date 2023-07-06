import { useState, useEffect } from "react";
import { doc, getDoc, getDocs, collection } from "firebase/firestore";
import { db } from "../firebase";

const Seat = () => {
  const [seatData, setSeatData] = useState(false);

  const getFecthData = async () => {
    const docRef = doc(db, "seat", "5bYTsAVD5RBz5iWxZ7ou");
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      setSeatData(docSnap.data());
    } else {
      console.log("데이터가 존재하지 않습니다.");
    }
  };
  console.log(seatData);

  useEffect(() => {
    getFecthData();
  }, []);

  return (
    <>
      <h1>잔여좌석</h1>

      {seatData.seatCount &&
        seatData.seatCount.length > 0 &&
        seatData.seatCount.map((seat, i) => (
          <p key={i}>{seat ? "잔여좌석 있음" : "잔여좌석 없음"}</p>
        ))}
    </>
  );
};

export default Seat;
