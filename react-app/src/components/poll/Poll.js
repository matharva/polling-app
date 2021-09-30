import React, { useEffect, useState } from "react";
import SpeechText from "./SpeechText";
import ImageUpload from "./ImageUpload";
import usePolls from "../../hooks/usePolls";
import McqComp from "./McqComp";
import "./Poll.css"
const Poll = () => {
  const { polls } = usePolls("poll");
  console.log(polls);
  const latestPoll = polls[0];
  console.log(latestPoll);
  
  return (
    <div>
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900">Polls</h1>
        </div>
      </header>
      <main>
        <div className="max-w-4xl mx-auto py-6 sm:px-6 lg:px-8">
          {/* Replace with your content */}
          <div className="px-4 py-6 sm:px-0">
            {(() => {
              if (latestPoll && latestPoll.type === "mcq")
                return <McqComp latestPoll={latestPoll} />;
              if (latestPoll && latestPoll.type === "brief")
                return <SpeechText latestPoll={latestPoll} />;
              if (latestPoll && latestPoll.type === "image")
                return <ImageUpload latestPoll={latestPoll} />;
              else console.log("In valid question type");
              return <span>Three</span>;
            })()}

            <br />
            <br />
            {/* Poll Ends */}

            <br />
            <br />
          </div>
          {/* /End replace */}
        </div>
        
      </main>
      
    </div>
  );
};

export default Poll;
