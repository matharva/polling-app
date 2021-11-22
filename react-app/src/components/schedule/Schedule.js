import React, { useEffect, useState } from "react";
import Countdown from "./Timer";
import { Link } from "react-router-dom";
import axios from "axios";
import DeleteIcon from "@mui/icons-material/Delete";
import { useHistory } from "react-router-dom";

const PostCard = ({ post, setPosts }) => {
  async function handleDelete() {
    const postId = post._id;
    console.log(post._id);
    const token = localStorage.getItem("accessToken");
    if (!token) console.log("Token is not in local storage");
    let config = {
      headers: {
        Authorization: "Bearer " + token,
      },
    };
    const deletedItem = await axios.delete(
      "http://localhost:8000/post/" + postId,
      config
    );
    getPosts();
    console.log("Deleted Item: ", deletedItem);
  }

  async function getPosts() {
    const token = localStorage.getItem("accessToken");
    if (!token) console.log("Token is not in local storage");
    let config = {
      headers: {
        Authorization: "Bearer " + token,
      },
    };
    const allPosts = await axios.get("http://localhost:8000/post", config);
    setPosts(allPosts.data.data);
    console.log("All Posts: ", allPosts);
  }

  return (
    <>
      <div class="p-12 md:w-1/2 flex flex-col items-start" key={post._id}>
        <span class="inline-block py-1 px-2 rounded bg-indigo-50 text-indigo-500 text-xs font-medium tracking-widest">
          {post.isAssignment ? "Assignment" : "Post"}
        </span>
        <h2 class="sm:text-3xl text-2xl title-font font-medium text-gray-900 mt-4 mb-4">
          {post.title}
        </h2>
        <h2 class="sm:text-lg text-sm title-font font-small text-gray-900 mt-4 ">
          Posted At: {post.createdAt + " UTC"}
        </h2>
        <h2 class="sm:text-lg text-sm title-font font-small text-gray-900 mb-4">
          Deadline: {post.createdAt + " UTC"}
        </h2>
        <p class="leading-relaxed mb-8">{post.content}</p>
        <div class="flex items-center flex-wrap pb-4 mb-4 border-b-2 border-gray-100 mt-auto w-full">
          <a class="text-indigo-500 inline-flex items-center">
            Learn More
            <svg
              class="w-4 h-4 ml-2"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path d="M5 12h14"></path>
              <path d="M12 5l7 7-7 7"></path>
            </svg>
          </a>
          <span
            class="text-gray-400 mr-3 inline-flex items-center ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200"
            onClick={handleDelete}
          >
            <DeleteIcon />
          </span>
          <span class="text-gray-400 inline-flex items-center leading-none text-sm">
            <svg
              class="w-4 h-4 mr-1"
              stroke="currentColor"
              stroke-width="2"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
              viewBox="0 0 24 24"
            >
              <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
            </svg>
            6
          </span>
        </div>
      </div>
    </>
  );
};

const Schedule = () => {
  const [posts, setPosts] = useState([]);
  const history = useHistory();

  useEffect(() => {
    async function getPosts() {
      const token = localStorage.getItem("accessToken");
      if (!token) console.log("Token is not in local storage");
      let config = {
        headers: {
          Authorization: "Bearer " + token,
        },
      };
      const allPosts = await axios.get("http://localhost:8000/post", config);
      console.log("All Posts: ", allPosts);
      setPosts(allPosts.data.data);
    }
    getPosts();
  }, []);

  return (
    <div>
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 flex justify-between">
          <h1 className="text-3xl font-bold text-gray-900">Posts</h1>
          <button
            type="submit"
            className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            onClick={() => history.push("/main/addPost")}
          >
            Add
          </button>
        </div>
      </header>

      <main style={{ minHeight: "100vh" }}>
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          <div className="px-4 py-4 sm:px-0">
            <section class="text-gray-600 body-font overflow-hidden">
              <div class="container px-5 py-24 mx-auto">
                <div class="flex flex-wrap -m-12">
                  {posts.length > 0
                    ? posts.map((post) => {
                        return <PostCard post={post} setPosts={setPosts} />;
                      })
                    : null}
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Schedule;
