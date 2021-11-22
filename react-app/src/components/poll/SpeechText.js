// import React, { useState, useEffect } from "react";

// const SpeechRecognition =
//   window.SpeechRecognition || window.webkitSpeechRecognition;
// const mic = new SpeechRecognition();

// mic.continuous = true;
// mic.interimResults = true;
// mic.lang = "en-US";

// const SpeechText = ({ latestPoll }) => {
//   const [isListening, setIsListening] = useState(false);
//   const [note, setNote] = useState(null);

//   useEffect(() => {
//     handleListen();
//   }, [isListening]);

//   const handleListen = () => {
//     if (isListening) {
//       mic.start();
//       mic.onend = () => {
//         console.log("continue..");
//         mic.start();
//       };
//     } else {
//       mic.stop();
//       mic.onend = () => {
//         console.log("Stopped Mic on Click");
//       };
//     }
//     mic.onstart = () => {
//       console.log("Mics on");
//     };

//     mic.onresult = (event) => {
//       const transcript = Array.from(event.results)
//         .map((result) => result[0])
//         .map((result) => result.transcript)
//         .join("");
//       console.log(transcript);
//       setNote(transcript);
//       mic.onerror = (event) => {
//         console.log(event.error);
//       };
//     };
//   };

//   function handleSubmit(e) {
//     e.preventDefault();
//     console.log(note);
//     setNote("");
//     // setIsAnswered(true);
//     // setAnswers({ ...answers, text: "" });
//   }
//   return (
//     <div>
//       {/* Speech-text starts */}
//       <div className="mt-10 sm:mt-0">
//         <div className="md:grid md:grid-cols-3 md:gap-6">
//           <div className="md:col-span-1">
//             <div className="px-4 sm:px-0 ">
//               <h3 className="text-lg font-medium leading-6 text-gray-900">
//                 Polls that can be answered in brief
//               </h3>
//               <p className="mt-1 text-sm text-gray-600">
//                 The instructor can using this to get feedback from the students
//                 regarding the sessions. Also, the users can make use of the
//                 speech-to-text functionality instead of typing out long answers
//               </p>
//             </div>
//           </div>
//           <div className="mt-5 md:mt-0 md:col-span-2">
//             <div className="shadow overflow-hidden sm:rounded-md">
//               <div className="px-4 py-5 bg-white space-y-6 sm:p-6">
//                 <div>
//                   <label
//                     htmlFor="about"
//                     className="block text-sm font-medium text-gray-700"
//                   >
//                     {latestPoll && latestPoll.question}
//                   </label>
//                   <div className="mt-1 text-right">
//                     {isListening ? <span>🎙️</span> : <span>🛑🎙️</span>}
//                     {/* <button onClick={handleSaveNote} disabled={!note}>
//                         Save Note
//                       </button> */}
//                     <button
//                       className="p-2 bg-indigo-500 rounded-md text-white ml-5"
//                       onClick={() => setIsListening((prevState) => !prevState)}
//                     >
//                       Start/Stop
//                     </button>
//                     <button
//                       className="p-2 bg-indigo-500 rounded-md text-white ml-5 text-right"
//                       onClick={() => setNote("")}
//                     >
//                       Clear
//                     </button>
//                     <textarea
//                       id="about"
//                       name="about"
//                       rows={5}
//                       className="mt-2 p-2 shadow-sm focus: outline-none focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border border-gray-300 rounded-md"
//                       placeholder="Type your answer/opinion here... or use the speech to text option"
//                       defaultValue={""}
//                       value={note}
//                     />
//                     {/* <p>{note}</p> */}
//                   </div>
//                 </div>
//               </div>

//               <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
//                 <button
//                   type="submit"
//                   onClick={handleSubmit}
//                   className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
//                 >
//                   Save
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//       {/* Speech-text Ends */}
//     </div>
//   );
// };

// export default SpeechText;
