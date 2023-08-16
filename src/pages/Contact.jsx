import React from "react";
const Contact = () => {
  return (
    <section className="section">
      <div className="relative h-full container mx-auto">
        <div className="flex flex-col w-full lg:flex-row lg:justify-between items-center lg:px-32 lg:py-14 pt-[7rem] lg:pt-40">
          {/* contact info */}
          <div className="flex text-center lg:text-start flex-col lg:items-start w-[90%] lg:w-full">
            <h1 className="font-bold block text-5xl mb-5 lg:text-7xl lg:mb-9">
              Contact
            </h1>
            <div className="mb-5 lg:mb-9">
              <p className="font-bold text-lg my-1">Phone Number</p>
              <a href="tel:+918826709142">+91 8826709142</a>
            </div>

            <div className="mb-7">
              <p className="font-bold text-lg my-1">Email</p>
              <a href="mailto:merndev0@gmail.com">merndev0@gmail.com</a>{" "}
            </div>
          </div>

          {/* text */}
          <div className="flex flex-col items-center lg:items-start w-[90%] lg:w-full mt-7">
            <form className="relative">
              <h1 className="font-bold block text-2xl">
                Leave your contact info - hear from me the same day!
              </h1>

              <div className="mt-9">
                <label
                  htmlFor="name"
                  className="font-semibold tracking-wide block"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="outline-0 block px-3 w-full h-[3rem] bg-transparent border-b-black border-b-2"
                  placeholder="Your Name"
                />
              </div>
              <div className="mt-9">
                <label
                  htmlFor="phone"
                  className="font-semibold tracking-wide block"
                >
                  Phone Number
                </label>
                <input
                  type="number"
                  id="phone"
                  minLength={10}
                  className="appearance-none outline-0 block px-3 w-full h-[3rem] bg-transparent border-b-black border-b-2"
                  placeholder="Your Name"
                />
              </div>

              <input
                type="submit"
                className="absolute lg:-bottom-32 lg:right-14 right-0 lg:px-0 lg:py-0 font-semibold tracking-wide px-7 py-2 mt-5 lg:w-24  lg:h-24 rounded-full bg-green-400 border"
                value="Submit"
              />
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
