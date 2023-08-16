import React from "react";
import { Link } from "react-router-dom";
import github from "../assets/github.svg";
import linkedin from "../assets/linkedin.svg";
import profile from "../assets/profile.png";

const Projects = [
  {
    projectName: "Multiuser Blog",
    description:
      "Experience the Power of Collaboration: A Multiuser Blog PlatformBuilt with MERN Stack - Share and Discover Unique Perspectives,Engage in Discussions, and Build a Community through Interactive Blogging.",
    githubLink: "",
    hostedLink: "",
  },
  {
    projectName: "User Auth",
    description:
      "Secure Access Made Simple: A User Authentication App Powered by MERN Stack - Safeguard Your Data and Control User Permissions with a Robust and Hassle-Free Authentication Solution.",
    githubLink: "",
    hostedLink: "",
  },
  {
    projectName: "CRUD App",
    description:
      "A crud application website made with MERN Stack for Efficient Data Management. Seamlessly Create, Read, Update, and Delete Data with Ease.",
    githubLink: "",
    hostedLink: "",
  },
  {
    projectName: "AttainU Clone",
    description:
      "With a focus on simplicity and design, created a clone of the AttainU website with the help of Node, Express, MongoDB. Used ejs template engine to render user info dynamically from the database into the website",
    githubLink: "https://github.com/Mohit-au50/backend-project",
    hostedLink: "https://backend-project-zvav.onrender.com",
  },
];

const Portfolio = () => {
  return (
    <section className="section bg-gray-100">
      <div className="container h-full mx-auto">
        <div className="flex flex-col items-center pt-[6rem] pb-9 lg:pt-32 px-5 lg:px-24">
          <h1 className="text-4xl font-bold my-5 lg:text-7xl">Portfolio</h1>
          {Projects &&
            Projects.map((project, index) => (
              <div
                key={index}
                className="flex flex-col lg:flex-row items-center border-2 border-red-500 rounded-lg p-5 my-7"
              >
                <div
                  className={`bg-green-500 h-[12rem] w-full lg:h-[60vh] lg:basis-2/3 rounded-lg ${
                    index % 2 !== 0 ? "lg:order-2" : "bg-red-300"
                  }`}
                >
                  {/* <img src={profile} alt="" className="w-full h-[60vh]" /> */}
                </div>

                <div className="flex text-center lg:basis-1/2 lg:px-5 lg:py-9">
                  <div className="px-5">
                    <h2 className="text-2xl font-bold my-5 lg:text-3xl lg:my-7">
                      {project.projectName}
                    </h2>
                    <p className="font-semibold text-gray-400">
                      {project.description}
                    </p>
                    <div className="flex justify-center gap-x-4 mt-5 lg:mt-7 lg:gap-x-9">
                      <Link
                        to={project.githubLink}
                        className="flex gap-1 items-center text-md font-semibold "
                      >
                        Code <img src={github} alt="" className="w-7 h-7" />
                      </Link>
                      <Link
                        to={project.hostedLink}
                        className="flex gap-1 items-center text-md font-semibold"
                      >
                        Demo <img src={linkedin} alt="" className="w-7 h-7" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
