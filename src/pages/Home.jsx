import React from "react";
import { Link } from "react-router-dom";
import linkedin from "../assets/linkedin.svg";
import github from "../assets/github.svg";
import html5 from "../assets/html5.svg";
import css from "../assets/css.svg";
import javascript from "../assets/javascript.svg";
import scss from "../assets/scss.svg";
import tailwind from "../assets/tailwind.svg";
import git from "../assets/git.svg";
import mongodb from "../assets/mongodb.svg";
import express from "../assets/express.svg";
import nodejs from "../assets/nodejs.svg";
import react from "../assets/react.svg";
import reactrouter from "../assets/reactrouter.svg";
import redux from "../assets/redux.svg";
import framer from "../assets/framer.svg";
import vite from "../assets/vitejs.svg";
import profile from "../assets/profile.png";

const Home = () => {
  return (
    <section className="section bg-gray-100">
      <div className="relative h-full container mx-auto">
        <div className="flex flex-col pt-[6rem] lg:pt-32">
          {/* blob and text */}
          <div className="flex flex-col w-full lg:flex-row lg:justify-between items-center lg:px-32">
            {/* blob shape with image */}
            <div className="flex mb-2 lg:order-2 ">
              <div className="relative overflow-hidden w-48 h-48 lg:w-72 lg:h-72 bg-gradient-to-tr from-orange-400 to-green-400 rounded-blob animate-morph">
                <img
                  src={profile}
                  alt=""
                  className="absolute top-20 -left-3 lg:top-28 lg:-left-5 scale-[1.75]"
                />
              </div>
            </div>

            {/* text */}
            <div className="flex flex-col items-center lg:items-start">
              <h1 className="text-4xl lg:text-5xl font-bold my-5 lg:my-7 text-center">
                Full-Stack Developer
              </h1>
              <p className="text-lg lg:text-xl text-gray-500">
                Hi, I'm Mohit, A passionate Full-stack <br /> Developer based in
                Delhi, India.
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="w-6 h-6 inline align-top"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M12.2848 18.9935C12.1567 19.0875 12.0373 19.1728 11.9282 19.2493C11.8118 19.1721 11.6827 19.0833 11.5427 18.9832C10.8826 18.5109 10.0265 17.8176 9.18338 16.9529C7.45402 15.1792 6 12.9151 6 10.5C6 7.18629 8.68629 4.5 12 4.5C15.3137 4.5 18 7.18629 18 10.5C18 12.8892 16.4819 15.1468 14.6893 16.9393C13.8196 17.8091 12.9444 18.5099 12.2848 18.9935ZM19.5 10.5C19.5 16.5 12 21 12 21C11.625 21 4.5 16.5 4.5 10.5C4.5 6.35786 7.85786 3 12 3C16.1421 3 19.5 6.35786 19.5 10.5ZM13.5 10.5C13.5 11.3284 12.8284 12 12 12C11.1716 12 10.5 11.3284 10.5 10.5C10.5 9.67157 11.1716 9 12 9C12.8284 9 13.5 9.67157 13.5 10.5ZM15 10.5C15 12.1569 13.6569 13.5 12 13.5C10.3431 13.5 9 12.1569 9 10.5C9 8.84315 10.3431 7.5 12 7.5C13.6569 7.5 15 8.84315 15 10.5Z"
                    fill="#080341"
                  />
                </svg>
              </p>
              <button className="bg-black text-white px-7 py-2 rounded my-5 lg:my-7">
                Download CV
              </button>

              {/* social icons */}
              <div className="flex gap-x-2 lg:gap-x-4 mb-3 lg:mb-5">
                <Link to="https://www.linkedin.in/">
                  <img src={linkedin} alt="" className="w-9 h-9" />
                </Link>

                <Link to="https://github.com/Mohit-au50">
                  <img src={github} alt="" className="w-9 h-9" />
                </Link>
              </div>
            </div>
          </div>

          {/* tech icons */}
          <div className="flex flex-col lg:flex-row items-center lg:items-start lg:mt-7 lg:gap-x-5 lg:px-32">
            <h1 className="w-36 font-bold text-xl lg:mt-8 my-5 border-b lg:border-b-0 lg:border-r pb-2 lg:pb-0 border-gray-500">
              Tech Stack
            </h1>

            <div className="w-full h-[5rem] lg:h-auto lg:py-5 lg:w-[37rem] lg:px-9 relative grid place-items-center overflow-hidden">
              <div className="animate-scroll lg:animate-none flex gap-x-5 whitespace-nowrap lg:flex-wrap lg:gap-y-7">
                <div className=" w-14 h-14 rounded-full bg-white grid place-items-center shadow-lg perspective">
                  <img src={html5} alt="" className="w-9 h-9" />
                </div>
                <div className=" w-14 h-14 rounded-full bg-white grid place-items-center shadow-lg perspective">
                  <img src={css} alt="" className="w-9 h-9" />
                </div>
                <div className=" w-14 h-14 rounded-full bg-white grid place-items-center shadow-lg perspective">
                  <img src={javascript} alt="" className="w-9 h-9" />
                </div>
                <div className=" w-14 h-14 rounded-full bg-white grid place-items-center shadow-lg perspective">
                  <img src={scss} alt="" className="w-9 h-9" />
                </div>
                <div className=" w-14 h-14 rounded-full bg-white grid place-items-center shadow-lg perspective">
                  <img src={tailwind} alt="" className="w-9 h-9" />
                </div>
                <div className=" w-14 h-14 rounded-full bg-white grid place-items-center shadow-lg perspective">
                  <img src={git} alt="" className="w-9 h-9" />
                </div>
                <div className=" w-14 h-14 rounded-full bg-white grid place-items-center shadow-lg perspective">
                  <img src={mongodb} alt="" className="w-9 h-9" />
                </div>
                <div className=" w-14 h-14 rounded-full bg-white grid place-items-center shadow-lg perspective">
                  <img src={express} alt="" className="w-9 h-9" />
                </div>
                <div className=" w-14 h-14 rounded-full bg-white grid place-items-center shadow-lg perspective">
                  <img src={nodejs} alt="" className="w-9 h-9" />
                </div>
                <div className=" w-14 h-14 rounded-full bg-white grid place-items-center shadow-lg perspective">
                  <img src={react} alt="" className="w-9 h-9" />
                </div>
                <div className=" w-14 h-14 rounded-full bg-white grid place-items-center shadow-lg perspective">
                  <img src={reactrouter} alt="" className="w-9 h-9" />
                </div>
                <div className=" w-14 h-14 rounded-full bg-white grid place-items-center shadow-lg perspective">
                  <img src={redux} alt="" className="w-9 h-9" />
                </div>
                <div className=" w-14 h-14 rounded-full bg-white grid place-items-center shadow-lg perspective">
                  <img src={framer} alt="" className="w-9 h-9" />
                </div>
                <div className=" w-14 h-14 rounded-full bg-white grid place-items-center shadow-lg perspective">
                  <img src={vite} alt="" className="w-9 h-9" />
                </div>

                {/* duplicate the icons */}
                <div className="lg:hidden w-14 h-14 rounded-full bg-white grid place-items-center shadow-lg perspective">
                  <img src={html5} alt="" className="w-9 h-9" />
                </div>
                <div className="lg:hidden w-14 h-14 rounded-full bg-white grid place-items-center shadow-lg perspective">
                  <img src={css} alt="" className="w-9 h-9" />
                </div>
                <div className="lg:hidden w-14 h-14 rounded-full bg-white grid place-items-center shadow-lg perspective">
                  <img src={javascript} alt="" className="w-9 h-9" />
                </div>
                <div className="lg:hidden w-14 h-14 rounded-full bg-white grid place-items-center shadow-lg perspective">
                  <img src={scss} alt="" className="w-9 h-9" />
                </div>
                <div className="lg:hidden w-14 h-14 rounded-full bg-white grid place-items-center shadow-lg perspective">
                  <img src={tailwind} alt="" className="w-9 h-9" />
                </div>
                <div className="lg:hidden w-14 h-14 rounded-full bg-white grid place-items-center shadow-lg perspective">
                  <img src={git} alt="" className="w-9 h-9" />
                </div>
                <div className="lg:hidden w-14 h-14 rounded-full bg-white grid place-items-center shadow-lg perspective">
                  <img src={mongodb} alt="" className="w-9 h-9" />
                </div>
                <div className="lg:hidden w-14 h-14 rounded-full bg-white grid place-items-center shadow-lg perspective">
                  <img src={express} alt="" className="w-9 h-9" />
                </div>
                <div className="lg:hidden w-14 h-14 rounded-full bg-white grid place-items-center shadow-lg perspective">
                  <img src={nodejs} alt="" className="w-9 h-9" />
                </div>
                <div className="lg:hidden w-14 h-14 rounded-full bg-white grid place-items-center shadow-lg perspective">
                  <img src={react} alt="" className="w-9 h-9" />
                </div>
                <div className="lg:hidden w-14 h-14 rounded-full bg-white grid place-items-center shadow-lg perspective">
                  <img src={reactrouter} alt="" className="w-9 h-9" />
                </div>
                <div className="lg:hidden w-14 h-14 rounded-full bg-white grid place-items-center shadow-lg perspective">
                  <img src={redux} alt="" className="w-9 h-9" />
                </div>
                <div className="lg:hidden w-14 h-14 rounded-full bg-white grid place-items-center shadow-lg perspective">
                  <img src={framer} alt="" className="w-9 h-9" />
                </div>
                <div className="lg:hidden w-14 h-14 rounded-full bg-white grid place-items-center shadow-lg perspective">
                  <img src={vite} alt="" className="w-9 h-9" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
