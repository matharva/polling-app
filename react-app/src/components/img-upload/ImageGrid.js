import React from "react";
import useFirestore from "../../hooks/useFirestore";
import { useAuth } from "../../contexts/AuthContext";
import "./ImageGrid.css";

const ImageGrid = ({ setSelectedImage }) => {
  // const { currentUser } = useAuth();
  const { docs } = useFirestore("images");
  console.log(docs);
  return (
    <>
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900">Image Grid</h1>
          <h1 className="text-sm font-bold text-gray-600 mt-1">
            A place where instructors can see images uploaded by their students
            in real time
          </h1>
        </div>
      </header>
      <div className="img-grid">
        {docs &&
          docs.map((doc) => (
            <div
              className="img-wrap bg-gray-100 p-5 rounded-md shadow-md"
              key={doc.id}
              onClick={() => setSelectedImage(doc.url)}
            >
              <img src={doc.url} className="img-grid-individual-image" alt="" />
              <p className="mt-2 text-sm font-semibold">{doc.user}</p>
              <p className="mt-1 text-xs">{doc.id}</p>
            </div>
          ))}
      </div>
    </>
  );
};

export default ImageGrid;
