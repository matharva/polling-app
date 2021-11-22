import axios from "axios";
import React, { useState } from "react";
import { useHistory } from "react-router";

const AddPost = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [isAssignment, setIsAssignment] = useState(false);
  const history = useHistory();

  async function handleSubmit(e) {
    e.preventDefault();
    console.log(title, content, isAssignment);
    const data = {
      title,
      content,
      isAssignment,
    };

    const token = localStorage.getItem("accessToken");
    if (!token) console.log("Token is not in local storage");
    let config = {
      headers: {
        Authorization: "Bearer " + token,
      },
    };

    const newPost = await axios.post(
      "http://localhost:8000/post",
      data,
      config
    );
    console.log(newPost);
    setTitle("");
    setContent("");
    setIsAssignment(false);
    // history.push("/main/posts");
  }
  return (
    <>
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900">Add Post</h1>
        </div>
      </header>
      <main>
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          {/* Replace with your content */}
          <div className="px-4 py-6 sm:px-0">
            <div>
              <div className="hidden sm:block" aria-hidden="true">
                <div className="py-5">
                  <div className="border-t border-gray-200" />
                </div>
              </div>

              <div className="mt-10 sm:mt-0">
                <div className="md:grid md:grid-cols-3 md:gap-6">
                  <div className="md:col-span-1">
                    <div className="px-4 sm:px-0">
                      <h3 className="text-lg font-medium leading-6 text-gray-900">
                        Add New Posts
                      </h3>
                      <p className="mt-1 text-sm text-gray-600">
                        Teachers and Instructors can add posts, which would be
                        available on the student dashboard
                      </p>
                    </div>
                  </div>
                  <div className="mt-5 md:mt-0 md:col-span-2">
                    <form action="#" method="POST">
                      <div className="shadow overflow-hidden sm:rounded-md">
                        <div className="px-4 py-5 bg-white sm:p-6">
                          <div className="grid grid-cols-6 gap-6">
                            <div className="col-span-6 sm:col-span-3">
                              <label
                                htmlFor="first-name"
                                className="block text-sm font-medium text-gray-700"
                              >
                                Title
                              </label>
                              <input
                                type="text"
                                name="first-name"
                                id="first-name"
                                autoComplete="given-name"
                                className="mt-1 p-3 border-2 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                onChange={(e) => setTitle(e.target.value)}
                                value={title}
                              />
                            </div>

                            <div className="col-span-6 sm:col-span-4">
                              <label
                                htmlFor="email-address"
                                className="block text-sm font-medium text-gray-700"
                              >
                                Content
                              </label>
                              <input
                                type="text"
                                name="email-address"
                                id="email-address"
                                autoComplete="email"
                                className="mt-1 p-3 border-2 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                onChange={(e) => setContent(e.target.value)}
                                value={content}
                              />
                            </div>
                            <br />

                            <div className="col-span-6 sm:col-span-3">
                              <div className="mt-4 space-y-4">
                                <div className="flex items-start">
                                  <div className="flex items-center h-5">
                                    <input
                                      id="comments"
                                      name="comments"
                                      type="checkbox"
                                      className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
                                      onChange={() =>
                                        setIsAssignment(!isAssignment)
                                      }
                                    />
                                  </div>
                                  <div className="ml-3 text-sm">
                                    <label
                                      htmlFor="comments"
                                      className="font-medium text-gray-700"
                                    >
                                      Assignment
                                    </label>
                                    <p className="text-gray-500">
                                      Is the given post an assignment?
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                          <button
                            type="submit"
                            className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                            onClick={handleSubmit}
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
          </div>
          {/* /End replace */}
        </div>
      </main>
    </>
  );
};

export default AddPost;
