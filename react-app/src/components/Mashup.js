import React, { useEffect, useState } from "react";
import axios from "axios";

const ImageCard = ({ data }) => {
  return (
    <>
      <div class="p-4 md:w-1/3">
        <div class="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
          <img
            class="lg:h-48 md:h-36 w-full object-cover object-center"
            src={data.urlToImage}
            alt="blog"
          />
          <div class="p-6">
            <h2 class="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
              {data.source.name}
            </h2>
            <h1 class="title-font text-lg font-medium text-gray-900 mb-3">
              {data.title}
            </h1>
            <p class="leading-relaxed mb-3">{data.description}</p>
            <div class="flex items-center flex-wrap ">
              <a
                class="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0"
                href={data.url}
              >
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
              <span class="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                <svg
                  class="w-4 h-4 mr-1"
                  stroke="currentColor"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  viewBox="0 0 24 24"
                >
                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                  <circle cx="12" cy="12" r="3"></circle>
                </svg>
                {data.publishedAt}
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
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const Mashup = () => {
  const [data, setData] = useState([]);

  function handleClick() {
    async function getPosts() {
      const token = localStorage.getItem("accessToken");
      if (!token) console.log("Token is not in local storage");
      let config = {
        headers: {
          Authorization: "Bearer " + token,
        },
      };
      navigator.geolocation.getCurrentPosition(async (position) => {
        const geoData = {
          latitude: "",
          longitude: "",
        };
        geoData.latitude = position.coords.latitude;
        geoData.longitude = position.coords.longitude;
        console.log("Gelocation", geoData.latitude, geoData.longitude);
        console.log("Post Data: ", geoData);
        const allData = await axios.post(
          "http://localhost:8000/mashup",
          geoData,
          config
        );
        console.log("All data: ", JSON.parse(allData.data.data));
        setData(JSON.parse(allData.data.data));
      });

      //   navigator.geolocation.getCurrentPosition();
    }
    getPosts();
  }

  return (
    <div>
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 flex justify-between">
          <h1 className="text-3xl font-bold text-gray-900">Mashup</h1>
          <button
            type="submit"
            className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            onClick={handleClick}
          >
            Get Location Specific Data
          </button>
        </div>
      </header>

      <section class="text-gray-600 body-font">
        <div class="container px-5 py-10 mx-auto">
          <div class="flex flex-wrap -m-4">
            {data.articles?.length > 0
              ? data.articles.map((post) => {
                  return <ImageCard data={post} />;
                })
              : null}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Mashup;
