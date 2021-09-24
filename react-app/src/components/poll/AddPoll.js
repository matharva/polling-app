import React, { useState } from "react";
import { projectFirestore, timestamp } from "../../firebase";
import Tabs from "../tabs/Tabs";

const Poll = () => {
  return (
    <>
      <header className="bg-white shadow-xl">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900">Polls</h1>
          <h1 className="text-sm font-semibold text-gray-600 mt-1">
            A place where instructors can upload different types of polls, which
            will be updated real-time to students
          </h1>
        </div>
      </header>
      <div className="bg-gray-50">
        {/* <h1>Poll</h1> */}
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8 ">
          {/* Replace with your content */}
          <div className="px-4 py-6 sm:px-0 ">
            <Tabs color="indigo" />
          </div>
          {/* /End replace */}
        </div>
      </div>
    </>
  );
};

export default Poll;
