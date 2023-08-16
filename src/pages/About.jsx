import React from "react";
import profile from "../assets/profile.png";

const About = () => {
  return (
    <section className="section">
      <div className="relative h-full container mx-auto">
        <div className="flex flex-col w-full lg:flex-row lg:justify-between items-center lg:px-32 lg:py-24 pt-[6rem] lg:pt-44">
          {/* blob shape with image */}
          <div className="flex justify-center lg:justify-start mb-2 w-[90%] lg:w-full">
            <div className="relative overflow-hidden w-full aspect-video lg:aspect-auto lg:w-11/12 lg:h-[25rem] bg-green-400 rounded-lg">
              <img src={profile} alt="" className="scale-125 absolute top-20" />
            </div>
          </div>

          {/* text */}
          <div className="flex flex-col items-center lg:items-start w-[90%]">
            <span className="font-bold block text-2xl  -mb-3 mt-1 lg:mt-0">
              ABOUT ME
            </span>
            <h1 className="text-4xl lg:text-5xl font-bold my-5 lg:my-7 text-center lg:text-start break-words">
              Full-Stack Developer based in Delhi, India.
            </h1>
            <p className="text-lg lg:text-xl text-center lg:text-start text-gray-500">
              Attainu certified full stack developer with expertise in the MERN
              (MongoDB, Express.js, React.js, Node.js) stack, In attainU I honed
              my technicalskills and gained practical experience in building
              sturdy and intuitive web applications. With a passion for creating
              visually appealing anduser-friendly interface, I seek to deliver
              exceptional user experiences through my coding abilities.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
