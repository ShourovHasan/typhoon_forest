import React from "react";

const AboutHeros = () => {
    return (
        <div className="dark:bg-gray-900">
            <div className="container mx-auto py-9 md:py-12 lg:py-24">
                <div className="relative mx-4">
                    <img src="https://i.ibb.co/q5k5j57/bench-accounting-nvzv-OPQW0gc-unsplash-1-1.png" alt="A work table with house plants" className="hidden w-full h-full lg:block" />
                    <img src="https://i.ibb.co/94jQFsV/bench-accounting-nvzv-OPQW0gc-unsplash-1-1.png" alt="A work table with house plants" className="hidden w-full h-full sm:block lg:hidden" />
                    <img src="https://i.ibb.co/cJz8LZ2/bench-accounting-nvzv-OPQW0gc-unsplash-1-1.png" alt="A work table with house plants" className="w-full h-full sm:hidden" />

                    <div className="absolute top-0 left-0 z-10 flex flex-col items-start mx-4 sm:mx-0 mt-36 sm:mt-0 sm:py-20 md:py-28 lg:py-20 xl:py-28 sm:pl-14 sm:justify-start">
                        <h1 className="text-4xl font-semibold text-gray-800 sm:text-5xl lg:text-6xl sm:w-8/12">Minimalist Furniture Design</h1>
                        <p className="mt-4 text-base leading-normal text-gray-800 sm:mt-5 sm:w-5/12">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                        <button className="hidden px-8 py-4 mt-8 text-base font-medium text-white bg-gray-800 sm:flex focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 hover:bg-gray-700">Explore</button>
                    </div>
                    <button className="absolute bottom-0 flex items-center justify-center w-full py-4 mt-8 text-base font-medium text-white bg-gray-800 sm:hidden dark:bg-white dark:text-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 hover:bg-gray-700">Explore</button>
                </div>
            </div>
        </div>
    );
};

export default AboutHeros;
