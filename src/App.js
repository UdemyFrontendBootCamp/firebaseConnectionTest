import { db } from "./firebase";
import { doc, getDoc, getDocs, collection } from "firebase/firestore";
import { useEffect } from "react";
import Seat from "./components/Seat";
import Subscription from "./components/Subcription";

function App() {
  // const getFetchData = async () => {
  //   // 컬렉션의 문서 하나만 가져오기
  //   const docRef = doc(db, "subscription", "m7G42aombPGoqGNuygxr");
  //   const docSnap = await getDoc(docRef);
  //   if (docSnap.exists()) {
  //     console.log("데이터 확인: ", docSnap.data());
  //   } else {
  //     console.log("");
  //   }

  //   // 컬렉션의 모든 문서 가져오기
  //   const querySnapshot = await getDocs(collection(db, "subscription"));
  //   querySnapshot.forEach((doc) => {
  //     // doc.data() is never undefined for query doc snapshots
  //     console.log(doc.id, " => ", doc.data());
  //   });
  // };

  // useEffect(() => {
  //   getFetchData();
  //   console.log(db);
  // }, []);

  return (
    <div className="App">
      <Seat />
      <Subscription />
    </div>
  );
}

export default App;
