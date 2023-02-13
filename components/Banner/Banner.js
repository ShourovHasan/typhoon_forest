import React from "react";

const Banner = () => {
  return (
    <section className="grid gap-4 px-4 py-2 mt-6 md:grid-cols-2">
      <div className="flex flex-col justify-center mb-6 text-center lg:text-start lg:mb-0">
        <h6>Best place to buy and sell digital products.</h6>
        <h1 className="mb-3 text-4xl font-bold">
          <span className="relative">
            Professional{" "}
            <div className="absolute w-5/6 h-2 bg-green-600 bottom-1 left-4 rounded-tl-md -z-10"></div>
          </span>{" "}
          WordPress Themes & Website{" "}
          <span className="relative">
            Templates{" "}
            <div className="absolute bottom-0 w-5/6 h-2 bg-red-600 left-4 rounded-br-2xl -z-10"></div>
          </span>{" "}
          for any project.
        </h1>
        <p>
          Discover thousands of easy to customize themes, templates & CMS
          products, made by world-class developers.
        </p>
      </div>
      <div className="relative flex items-center justify-center">
        <div className="absolute left-0 z-20 overflow-hidden duration-300 skew-y-6 h-80 w-52 md:w-60 hover:z-40 hover:skew-y-0">
          <picture>
            <img
              className=""
              src="https://mir-s3-cdn-cf.behance.net/project_modules/fs/6f5b8e161204661.63c12c688f43a.png"
              alt=""
            />
          </picture>
        </div>
        <div className="z-30 overflow-hidden shadow-lg h-96 w-52 md:w-60 ">
          <picture>
            <img
              className=""
              src="https://mir-s3-cdn-cf.behance.net/project_modules/fs/4b333a152343487.631c60138c7b9.png"
              alt=""
            />
          </picture>
        </div>
        <div className="absolute right-0 z-20 overflow-hidden duration-300 -skew-y-6 h-80 w-52 md:w-60 hover:z-40 hover:skew-y-0">
          <picture>
            <img
              src="https://mir-s3-cdn-cf.behance.net/project_modules/fs/554c6f162959425.63ddeeda51f0d.jpg"
              alt=""
            />
          </picture>
        </div>
      </div>
    </section>
  );
};

export default Banner;
