import { doc, getDoc, getDocs, collection } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../firebase";

const Subscription = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const querySnapShot = await getDocs(collection(db, "subscription"));
      const fetchedData = querySnapShot.docs.map((doc) => {
        return doc.data();
      });
      console.log(fetchedData);
      setData(fetchedData);
    };
    fetchData();
  }, []);

  return (
    <div>
      {data.length > 0 && (
        <div>
          {data.map((e, i) => (
            <div key={i}>
              <div>{e.cafeName}</div>
              <div>{e.add}</div>
              <img
                src={e.image}
                alt="카페 이미지"
                width="500px"
                height="300px"
              ></img>
              <div>
                {data.tag && (
                  <div>
                    {e.tag.map((element, index) => (
                      <div key={index}>{element}</div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Subscription;
