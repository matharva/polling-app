import { useEffect, useState } from "react";
import { projectFirestore } from "../firebase";

const usePolls = (collection) => {
  console.log(collection);
  const [polls, setPolls] = useState([]);

  useEffect(() => {
    projectFirestore
      .collection(collection)
      .orderBy("createdAt", "desc")
      .onSnapshot((snapshot) => {
        let documents = [];
        snapshot.forEach((doc) => {
          if (doc.exists) {
            documents.push({ ...doc.data(), id: doc.id });
            //   console.log("Document data:", doc.data());
          }
        });
        setPolls(documents);
      });
  }, [collection]);

  return { polls };
};

export default usePolls;
