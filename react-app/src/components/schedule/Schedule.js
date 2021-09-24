import React, { useState } from "react";
import Countdown from "./Timer";
import { Link } from "react-router-dom";

const Schedule = () => {
  const [link, setLink] = useState("");
  const [time, setTime] = useState("");
  const [interval, setInterval] = useState("");
  const [duration, setDuration] = useState("");
  const [schedules, setSchedules] = useState([]);
  let scheduledMessages = [];

  function whatsapp(time, message) {
    const accountSid = "AC4f6cd40422527c351a3e8b22484dcac7";
    const authToken = "4b5586ce90a6e9da487feb6b23aff50c";
    const client = require("twilio")(accountSid, authToken);

    const CONTACT = "+918291523382";

    client.messages
      .create({
        from: "whatsapp:+14155238886",
        body: `The link for your ${time}am lecture is ${message}`,
        to: `whatsapp:${CONTACT}`,
      })
      .then((message) => console.log(message.sid));
  }

  function addIntervals(duration, interval) {
    const numberOfIntervals = duration / interval;
    console.log(`You can schedule polls for ${numberOfIntervals} times`);
    for (let i = 0; i < numberOfIntervals; i++) {
      if (i === 0) scheduledMessages.push(`${time}:00`);
      else scheduledMessages.push(`${time}:${interval * i}`);
    }
    console.log(scheduledMessages);
    setSchedules(scheduledMessages);
  }

  function handleSubmit(e) {
    e.preventDefault();
    // whatsapp(time, link);
    setTime("");
    setLink("");
    addIntervals(duration, interval);
    setDuration("");
    setInterval("");
  }

  return (
    <div>
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900">Polls</h1>
        </div>
      </header>
      {/* <h1>From Scheduler</h1> */}
      <main style={{ minHeight: "100vh" }}>
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          {/* Replace with your content */}
          <div className="px-4 py-6 sm:px-0">
            {/* <div className="border-4 border-dashed border-gray-200 rounded-lg h-96" /> */}
            <div className="mt-10 sm:mt-0">
              <div className="md:grid md:grid-cols-3 md:gap-6">
                <div className="md:col-span-1">
                  <div className="px-4 sm:px-0">
                    <h3 className="text-lg font-medium leading-6 text-gray-900">
                      Schedule Polls
                    </h3>
                    <p className="mt-1 text-sm text-gray-600">
                      The instructor can schedule polls so that message and
                      alerts can be sent to the students on specific interval of
                      time
                    </p>
                  </div>
                </div>
                <div className="mt-5 md:mt-0 md:col-span-2">
                  <form>
                    <div className="shadow overflow-hidden sm:rounded-md">
                      <div className="px-4 py-5 bg-white sm:p-6">
                        <div className="grid grid-cols-6 gap-6">
                          <div className="col-span-6 sm:col-span-3">
                            <label
                              htmlFor="country"
                              className="block text-sm font-medium text-gray-700"
                            >
                              Class
                            </label>
                            <select
                              id="country"
                              name="country"
                              autoComplete="country"
                              className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            >
                              <option>Class 8</option>
                              <option>Class 9</option>
                              <option>Class 10</option>
                              <option>Class 11</option>
                              <option>Class 12</option>
                            </select>
                          </div>

                          <div className="col-span-6 sm:col-span-4">
                            <label
                              htmlFor="email-address"
                              className="block text-sm font-medium text-gray-700"
                            >
                              Meet Link
                            </label>
                            <input
                              type="text"
                              name="email-address"
                              id="email-address"
                              autoComplete="email"
                              value={link}
                              onChange={(e) => setLink(e.target.value)}
                              className="mb-2 appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                            />
                          </div>

                          <div className="col-span-6 sm:col-span-6 lg:col-span-2">
                            <label
                              htmlFor="city"
                              className="block text-sm font-medium text-gray-700"
                            >
                              Time
                            </label>
                            <input
                              type="text"
                              name="time"
                              id="time"
                              value={time}
                              onChange={(e) => setTime(e.target.value)}
                              className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            />
                          </div>
                          {/* <div className="col-span-6 sm:col-span-6 lg:col-span-2">
                            <label
                              htmlFor="city"
                              className="block text-sm font-medium text-gray-700"
                            >
                              Duration (in Hours)
                            </label>
                            <input
                              type="text"
                              name="city"
                              id="city"
                              className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            />
                          </div> */}

                          <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                            <label
                              htmlFor="state"
                              className="block text-sm font-medium text-gray-700"
                            >
                              Duration (in Mins)
                            </label>
                            <input
                              type="text"
                              name="state"
                              id="state"
                              value={duration}
                              onChange={(e) => setDuration(e.target.value)}
                              className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            />
                          </div>

                          <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                            <label
                              htmlFor="postal-code"
                              className="block text-sm font-medium text-gray-700"
                            >
                              Schedule Interval
                            </label>
                            <input
                              type="text"
                              name="postal-code"
                              id="postal-code"
                              value={interval}
                              onChange={(e) => setInterval(e.target.value)}
                              autoComplete="postal-code"
                              className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            />
                          </div>
                        </div>
                      </div>
                      {schedules.map((message) => (
                        <p className="p-3 ml-5">
                          You can schedule a poll at {message} from{" "}
                          <Link to="/main/add-poll" className="text-blue-400">
                            here
                          </Link>
                        </p>
                      ))}
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

            {/* <Countdown hours={1} minutes={45} /> */}
          </div>
          {/* /End replace */}
        </div>
      </main>
    </div>
  );
};

export default Schedule;
