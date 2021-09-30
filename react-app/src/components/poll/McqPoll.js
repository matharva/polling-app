import React, { useState } from "react";
import { projectFirestore, timestamp } from "../../firebase";

const McqPoll = () => {
  const [pollData, setPollData] = useState({
    question: "",
    option1: "",
    option2: "",
    option3: "",
    option1Count: 0,
    option2Count: 0,
    option3Count: 0,
    correctAnswer: "",
  });
  function handleSubmit(e) {
    e.preventDefault();
    console.log(pollData);
    const createdAt = timestamp();
    projectFirestore
      .collection("poll")
      .add({ ...pollData, createdAt, type: "mcq" });

    setPollData({
      question: "",
      option1: "",
      option2: "",
      option3: "",
      option1Count: 0,
      option2Count: 0,
      option3Count: 0,
      correctAnswer: "",
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
            Add Question
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
          {/* Options */}
          <label class="block text-gray-700 text-sm font-bold">Option 1</label>
          <input
            type="text"
            className="mb-2 appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
            onChange={handleChange}
            name="option1"
            value={pollData.option1 || ""}
          />
          <label class="block text-gray-700 text-sm font-bold">Option 2</label>
          <input
            type="text"
            className="mb-2 appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
            onChange={handleChange}
            name="option2"
            value={pollData.option2 || ""}
          />
          <label class="block text-gray-700 text-sm font-bold">Option 3</label>
          <input
            type="text"
            className="mb-2 appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
            onChange={handleChange}
            name="option3"
            value={pollData.option3 || ""}
          />
          <label class="block text-gray-700 text-sm font-bold">
            Correct Answer
          </label>
          <input
            type="text"
            className="mb-2 appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
            onChange={handleChange}
            name="correctAnswer"
            value={pollData.correctAnswer || ""}
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

export default McqPoll;
