import React, { useState, useEffect } from "react";
import { projectFirestore, timestamp } from "../../firebase";
const ImagePoll = () => {
  const [pollData, setPollData] = useState({
    question: "",
  });
  function handleSubmit(e) {
    e.preventDefault();
    console.log(pollData);
    const createdAt = timestamp();
    projectFirestore
      .collection("poll")
      .add({ ...pollData, createdAt, type: "image" });

    setPollData({
      question: "",
    });
  }

  function handleChange(e) {
    const name = e.target.name;
    const value = e.target.value;
    setPollData({ ...pollData, [name]: value });
  }
  return (
    <div>
      <div className="max-w-md mx-auto shadow-md bg-white p-8 rounded-md">
        <form onSubmit={handleSubmit} className="flex flex-col">
          <div className="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate text-center mb-5">
            Image
          </div>

          <label class="block text-gray-700 text-sm font-bold">Question</label>
          <input
            type="text"
            placeholder="Enter the question here"
            className="mb-2 appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
            onChange={handleChange}
            name="question"
            value={pollData.question || ""}
          />

          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            type="submit"
          >
            Add Poll
          </button>
        </form>
      </div>
    </div>
  );
};

export default ImagePoll;
