import React, { useState, useEffect } from "react";
import usePolls from "../../hooks/usePolls";
import { projectFirestore, timestamp } from "../../firebase";
import "./Poll.css"
const McqComp = ({ latestPoll }) => {
  //   console.log(latestPoll);
  const [isAnswered, setIsAnswered] = useState(false);
  const latestAnswer = { ...latestPoll, text: "", option1Count: 1, option2Count: 0, option3Count: 0 };
  //   console.log(latestAnswer);
  const [isPollSubmited, setIsPollSubmitted] = useState(false);
  const [answers, setAnswers] = useState(latestAnswer);
  const [isTimer, setIsTimer] = useState(false);

  // const localPolls = { ...latestPoll, text: "", option1Count: 0, option2Count: 0, option3Count: 0 };

  useEffect(() => {
    setIsAnswered(false);
  }, [latestPoll]);

  useEffect(() => {
    // setIsAnswered(false);
    console.log("Updated Object: ", answers)
    if(isPollSubmited){
      setIsAnswered(true);
      // const createdAt = timestamp();
      // projectFirestore
      // .collection("poll")
      // .add({ ...answers, createdAt, type: "mcq" });
      // Update in firebase
    }
  }, [answers]);

  function handleChange(e) {
    const name = e.target.name;
    const value = e.target.value;
    setAnswers({ ...answers, [name]: value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    setIsAnswered(true);
    if(answers.text === answers.option1){
      console.log("The user selected this ", answers.text)
      // localPolls.option1Count += 1
      setAnswers({ ...answers, option1Count: answers.option1Count + 1 });
    }
    if(answers.text === answers.option2){
      // localPolls.option2Count += 1
      console.log("The user selected this ", answers.text)
      setAnswers({ ...answers, option2Count: answers.option2Count + 1 });
    }
    if(answers.text === answers.option3){
      // localPolls.option3Count += 1
      console.log("The user selected this ", answers.text)
      setAnswers({ ...answers, option3Count: answers.option3Count + 1 });
    }
    // setAnswers({ ...answers, text: "" });
  }

  let count = 0
  function startRandomDemo(){
    if(count < 10){
      setTimeout(() => {
        const randomNumber = Math.ceil(Math.random() * 3);
        console.log("randomNumber", randomNumber)
        if(randomNumber === 1){
          setAnswers((ans) => { return {...ans, option1Count: ans.option1Count + 1 }});
        }
        if(randomNumber === 2){
          setAnswers((ans) => { return {...ans, option2Count: ans.option2Count + 1 }});
        }
        if(randomNumber === 3){
          setAnswers((ans) => { return {...ans, option3Count: ans.option3Count + 1 }});
        }
        count += 1
        startRandomDemo();
      }, 1000)
    }

  }
  // let 
  const optionOneValue = ((answers.option1Count / (answers.option1Count + answers.option2Count + answers.option3Count))*100).toFixed(2)
  const optionTwoValue = ((answers.option2Count / (answers.option1Count + answers.option2Count + answers.option3Count))*100).toFixed(2)
  const optionThreeValue = ((answers.option3Count / (answers.option1Count + answers.option2Count + answers.option3Count))*100).toFixed(2)

  const tempArr = [optionOneValue,
    optionTwoValue,
    optionThreeValue];
    tempArr.sort()
    let isThreeTaken = false;
    let isTwoTaken = false;
    let isOneTaken = false

    function orderInTempArr(value){
      console.log("In for: ", value)


      if(value === tempArr[0] && !isThreeTaken){
        isThreeTaken = true;
        return "third-item"
      } else if(value === tempArr[1] && !isTwoTaken){
        isTwoTaken = true;
        return "second-item";
      } else if (value === tempArr[2] && !isOneTaken){
        isOneTaken = true
        return "first-item"
      }
    }
  return (
    <div>
      {/* Poll starts */}
      <div className="mt-10 sm:mt-0">
        <div className="md:grid md:grid-cols-3 md:gap-6">
          <div className="md:col-span-1">
            <div className="px-4 sm:px-0">
              <h3 className="text-lg font-medium leading-6 text-gray-900">
                Multiple Choice Polls
              </h3>
              <p className="mt-1 text-sm text-gray-600">
                The instructor can conducts tests using the platform to judge if
                the users are engaged
              </p>
            </div>
          </div>
          <div className="mt-5 md:mt-0 md:col-span-2">
            <form>
              <div className="shadow overflow-hidden sm:rounded-md">
                <div className="px-4 py-5 bg-white space-y-6 sm:p-6">
                  <fieldset>
                    <div>
                      <legend className="text-base font-medium text-gray-900">
                        {latestAnswer.question}
                      </legend>
                      <p className="text-sm text-gray-500">
                        Such multiple choice can be asked and users can vote anonymously
                      </p>
                    </div>
                    <div className="mt-4 space-y-4" onChange={handleChange}>
                      {/* Radio Options Start */}
                      <div className="flex items-center">
                        <input
                          id="push-everything"
                          name="text"
                          type="radio"
                          value={latestAnswer.option1}
                          className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
                          onClick={() => console.log("option 1 clicked")}
                        />
                        <label
                          htmlFor="push-everything"
                          className="ml-3 block text-sm font-medium text-gray-700"
                        >
                          {latestAnswer.option1}
                        </label>
                      </div>
                      {/* Radio Options End */}
                      {/* Radio Options Start */}
                      <div className="flex items-center">
                        <input
                          id="push-email"
                          name="text"
                          type="radio"
                          value={latestAnswer.option2}
                          className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
                          onClick={() => console.log("option 2 clicked")}
                        />
                        <label
                          htmlFor="push-email"
                          className="ml-3 block text-sm font-medium text-gray-700"
                        >
                          {latestAnswer.option2}
                        </label>
                      </div>
                      {/* Radio Options End */}
                      {/* Radio Options Start */}
                      <div className="flex items-center">
                        <input
                          id="push-nothing"
                          name="text"
                          type="radio"
                          value={latestAnswer.option3}
                          className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
                        />
                        <label
                          htmlFor="push-nothing"
                          className="ml-3 block text-sm font-medium text-gray-700"
                        >
                          {latestAnswer.option3}
                        </label>
                      </div>
                      {/* Radio Options End */}
                    </div>
                  </fieldset>
                </div>
                {/* {isAnswered && (
                  <p className="p-2 ml-5 pb-5">
                    The correct answer is: {latestAnswer.correctAnswer}
                  </p>
                )} */}
                <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                  <button
                    type="submit"
                    onClick={handleSubmit}
                    className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    Save
                  </button>
                </div>
              </div>
            </form>
          </div>

        </div>
        {
          isAnswered ? (<div className="max-w-2xl mx-auto py-6 sm:px-6 lg:px-8 results-container">
          <div className="live-results__header text-lg font-medium leading-6 text-gray-900 mx-4"> <span>Live Results</span> </div>
          <div className="results__box mx-4 font-medium">
            <div className={`result__item bg-gray-50 ${orderInTempArr(optionOneValue)}`}>
              <div className="option__text">{answers.option1}</div>
              <div className="option__votes">{optionOneValue}%</div>
            </div> 
            <div className={`result__item bg-gray-50 ${orderInTempArr(optionTwoValue)}`}>
              <div className="option__text">{answers.option2}</div>
              <div className="option__votes">{optionTwoValue}%</div>
            </div> 
            <div className={`result__item bg-gray-50 ${orderInTempArr(optionThreeValue)}`}>
              <div className="option__text">{answers.option3}</div>
              <div className="option__votes">{optionThreeValue}%</div>
            </div> 
          </div>
          <div className="buttons__section">

            <button
              className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              onClick={startRandomDemo}
            >
              Start Demo
            </button>
            <button
              className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              onClick={() => setAnswers(latestAnswer)}
            >
              Clear
            </button>
          </div>
        </div>) : <></>
        }
          
      </div>
    </div>
  );
};

export default McqComp;
