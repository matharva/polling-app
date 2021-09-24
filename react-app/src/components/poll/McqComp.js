import React, { useState, useEffect } from "react";
import usePolls from "../../hooks/usePolls";
const McqComp = ({ latestPoll }) => {
  //   console.log(latestPoll);
  const [isAnswered, setIsAnswered] = useState(false);
  const latestAnswer = { ...latestPoll, text: "" };
  //   console.log(latestAnswer);

  useEffect(() => {
    setIsAnswered(false);
  }, [latestPoll]);

  const [answers, setAnswers] = useState(latestAnswer);
  function handleChange(e) {
    const name = e.target.name;
    const value = e.target.value;
    setAnswers({ ...answers, [name]: value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log(answers);
    setIsAnswered(true);
    // setAnswers({ ...answers, text: "" });
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
                        These are delivered via SMS to your mobile phone.
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
                {isAnswered && (
                  <p className="p-2 ml-5 pb-5">
                    The correct answer is: {latestAnswer.correctAnswer}
                  </p>
                )}
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
      </div>
    </div>
  );
};

export default McqComp;
