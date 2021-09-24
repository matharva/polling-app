import React, { useEffect } from "react";

const Footer = () => {
  useEffect(() => {
    function addMap() {
      var setting = {
        height: 300,
        width: 300,
        zoom: 17,
        queryString:
          "Lend-A-Hand India, Senapati Bapat Road, near Pride Panaroma, Bhageerath, Gokhalenagar, Pune, Maharashtra, India",
        place_id: "ChIJkTJR4HC_wjsRIi7R4VXOUJQ",
        satellite: false,
        centerCoord: [18.53463010532415, 73.82730270000002],
        cid: "0x9450ce55e1d12e22",
        lang: "en",
        cityUrl: "/india/pune",
        cityAnchorText: "Map of Pune, West Zone, India",
        id: "map-9cd199b9cc5410cd3b1ad21cab2e54d3",
        embed_id: "545546",
      };
      var d = document;
      var s = d.createElement("script");
      s.src = "https://1map.com/js/script-for-user.js?embed_id=545546";
      s.async = true;
      s.onload = function (e) {
        window.OneMap.initMap(setting);
      };
      var to = d.getElementsByTagName("script")[0];
      to.parentNode.insertBefore(s, to);
    }
    addMap();
  }, []);

  return (
    <div>
      <section class="container mx-auto text-center py-6 mb-12 helper ">
        <div class="w-full my-2 text-5xl font-bold leading-tight text-center text-white mx-auto">
          <div id="ContactUs">
            <h4 class="w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800">
              Contact Us:
            </h4>
            <div
              id="wrapper-9cd199b9cc5410cd3b1ad21cab2e54d3"
              className="get-map-working"
            >
              <div
                id="map-9cd199b9cc5410cd3b1ad21cab2e54d3"
                className="mx-auto"
              ></div>
              <a href="https://1map.com/map-embed"></a>
            </div>
          </div>
        </div>
        <div class="w-full mb-4">
          <div class="h-1 mx-auto bg-white w-1/6 opacity-25 my-0 py-0 rounded-t"></div>
        </div>
      </section>
      <footer className="bg-white">
        <div className="container mx-auto px-8">
          <div className="w-full flex flex-col md:flex-row py-6">
            <div className="flex-1 mb-6 text-black">
              <a
                className="text-black-600 no-underline hover:no-underline font-bold text-2xl lg:text-4xl"
                href="#"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
                </svg>
                LAHI HERALD
              </a>
            </div>

            <div className="flex-auto">
              <p style={{ color: "#1b1b1b" }}>Connect with us</p>

              <span>
                <a
                  href="http://www.lend-a-hand-india.org/index.php"
                  className="no-underline hover:underline text-gray-800 hover:text-pink-500"
                  style={{ color: "#582fee" }}
                >
                  Lend A Hand India
                </a>
              </span>

              <span>
                <a
                  href="https://www.facebook.com/lendahandindia/"
                  className="no-underline hover:underline text-gray-800 hover:text-pink-500 ml-5"
                  style={{ color: "#582fee" }}
                >
                  Facebook
                </a>
              </span>

              <span>
                <a
                  href="https://www.linkedin.com/company/lendahandindia/"
                  className="no-underline hover:underline text-gray-800 hover:text-pink-500 ml-3"
                  style={{ color: "#582fee" }}
                >
                  Linkedin
                </a>
              </span>

              <span>
                <a
                  href="https://twitter.com/lendahandindia?lang=en"
                  className="no-underline hover:underline text-gray-800 hover:text-pink-500 ml-3"
                  style={{ color: "#582fee" }}
                >
                  Twitter
                </a>
              </span>
            </div>
          </div>

          <p id="copyright" style={{ color: "#000", textAlign: "center" }}>
            Copyright © 2021 LEND A HAND INDIA
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
