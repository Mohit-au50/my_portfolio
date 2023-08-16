import React from "react";
import { Link } from "react-router-dom";
import github from "../assets/github.svg";
import linkedin from "../assets/linkedin.svg";

const Portfolio = () => {
  return (
    <section className="section tracking-wide">
      <div className="container h-full mx-auto bg-violet-300">
        <div className="flex flex-col items-center pt-[6rem] pb-9 lg:pt-32 bg-yellow-300">
          <h1 className="text-4xl font-bold my-5">Portfolio</h1>
          {/* Project 1 */}
          <div className="w-[80%] flex flex-col items-center border-2 border-red-500 rounded-lg p-5 my-7">
            <div className="aspect-video w-full bg-green-400 rounded-lg mb-5"></div>
            <h2 className="text-2xl font-bold my-2">Multiuser Blog</h2>
            <p className="font-semibold text-gray-400">
              Experience the Power of Collaboration: A Multiuser Blog Platform
              Built with MERN Stack - Share and Discover Unique Perspectives,
              Engage in Discussions, and Build a Community through Interactive
              Blogging.
            </p>
            <div className="flex gap-4 mt-5">
              <Link className="flex gap-1 items-center text-md font-semibold ">
                Code <img src={github} alt="" className="w-7 h-7" />
              </Link>
              <Link className="flex gap-1 items-center text-md font-semibold">
                Demo <img src={linkedin} alt="" className="w-7 h-7" />
              </Link>
            </div>
          </div>

          {/* Project 2 */}
          <div className="w-[80%] flex flex-col items-center border-2 border-red-500 rounded-lg p-5 my-7">
            <div className="aspect-video w-full bg-green-400 rounded-lg mb-5"></div>
            <h2 className="text-2xl font-bold my-2">User Authentication</h2>
            <p className="font-semibold text-gray-400">
              Secure Access Made Simple: A User Authentication App Powered by
              MERN Stack - Safeguard Your Data and Control User Permissions with
              a Robust and Hassle-Free Authentication Solution.
            </p>
            <div className="flex gap-4 mt-5">
              <Link className="flex gap-2 items-center text-md font-semibold ">
                Code <img src={github} alt="" className="w-7 h-7" />
              </Link>
              <Link className="flex gap-2 items-center text-md font-semibold">
                Demo <img src={linkedin} alt="" className="w-7 h-7" />
              </Link>
            </div>
          </div>
          {/* Project 3 */}
          <div className="w-[80%] flex flex-col items-center border-2 border-red-500 rounded-lg p-5 my-7">
            <div className="aspect-video w-full bg-green-400 rounded-lg mb-5"></div>
            <h2 className="text-2xl font-bold my-2">CRUD App</h2>
            <p className="font-semibold text-gray-400">
              A crud application website made with MERN Stack for Efficient Data
              Management. Seamlessly Create, Read, Update, and Delete Data with
              Ease.
            </p>
            <div className="flex gap-4 mt-5">
              <Link className="flex gap-2 items-center text-md font-semibold ">
                Code <img src={github} alt="" className="w-7 h-7" />
              </Link>
              <Link className="flex gap-2 items-center text-md font-semibold">
                Demo <img src={linkedin} alt="" className="w-7 h-7" />
              </Link>
            </div>
          </div>
          {/* Project 4 */}
          <div className="w-[80%] flex flex-col items-center border-2 border-red-500 rounded-lg p-5 my-7">
            <div className="aspect-video w-full bg-green-400 rounded-lg mb-5"></div>
            <h2 className="text-2xl font-bold my-2">AttainU Clone</h2>
            <p className="font-semibold text-gray-400">
              With a focus on simplicity and design, created a clone of the
              AttainU website with the help of Node, Express, MongoDB. Used ejs
              template engine to render data dynamically from the database into
              the website
            </p>
            <div className="flex gap-4 mt-5">
              <Link
                to="https://github.com/Mohit-au50/backend-project"
                target="_blank"
                className="flex gap-2 items-center text-md font-semibold"
              >
                Code <img src={github} alt="" className="w-7 h-7" />
              </Link>
              <Link
                to="https://backend-project-zvav.onrender.com"
                target="_blank"
                className="flex gap-2 items-center text-md font-semibold"
              >
                Demo <img src={linkedin} alt="" className="w-7 h-7" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
