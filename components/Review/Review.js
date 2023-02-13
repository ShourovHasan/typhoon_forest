
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Review = () => {

    const settings = {
        className: "center",
        centerMode: true,
        infinite: true,
        centerPadding: "60px",
        autoplay: true,
        speed: 1000,
        vertical: true,
        slidesToShow: 3,
        slidesToScroll: 2,
    };
    return (

        <div className="py-16 bg-gray-50">
            <div className="container mx-auto px-4 flex flex-col lg:items-center justify-between lg:flex-row">
                <div className="mb-14 xl:mb-0">
                    <h1 className="text-2xl leading-tight md:text-4xl xl:text-5xl font-semibold leading-10   text-gray-800 xl:w-2/3 pr-16 lg:pr-0">Our customers love what we do</h1>
                    <p className="mt-4 text-base leading-normal text-gray-600 md:w-2/3 lg:w-3/4 pr-16 lg:pr-0">Over 500 companies use our Theme & Templates to understand their business and marketing better.</p>
                    <button className="w-full sm:w-auto mt-12 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 flex items-start justify-center sm:justify-start px-8 py-4 bg-blue-400 hover:bg-gray-600 rounded text-base font-medium leading-none text-center text-white">Add Your Review</button>

                </div>
                <div className="xl:w-1/2 ">
                    <Slider {...settings}>
                        <div className="relative bg-white shadow rounded p-4 xl:p-8 mb-3">

                            <img src="https://cdn.tuk.dev/assets/components/26May-update/quote.png" aria-hidden="true" />
                            <div className="pl-4 pt-4 flex items-start justify-between">
                                <div className="mr-6">
                                    <p className="xl:text-xl xl:leading-loose text-gray-600">This website has a bunch of amazing components which improves my design</p>
                                    <div className="flex justify-between items-center">
                                        <p className="mt-4 text-base font-semibold leading-none text-gray-800">Anna Smith</p>
                                        <p className="mt-4 text-base font-semibold leading-none text-gray-800">Date : 12-02-2023</p>
                                    </div>
                                </div>
                                <img src="https://cdn.tuk.dev/assets/components/26May-update/avatar-1.png" alt="Display Avatar of Anna Smith" role="img" />
                            </div>
                            <svg className="absolute z-10  bottom-[-10px] " width={16} height={10} viewBox="0 0 16 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M8 10L0 0L16 1.41326e-06L8 10Z" fill="white" />
                            </svg>
                        </div>
                        <div className="relative bg-white shadow rounded p-4 xl:p-8 mb-3">

                            <img src="https://cdn.tuk.dev/assets/components/26May-update/quote.png" aria-hidden="true" />
                            <div className="pl-4 pt-4 flex items-start justify-between">
                                <div className="mr-6">
                                    <p className="xl:text-xl xl:leading-loose text-gray-600">This website has a bunch of amazing components which improves my design</p>
                                    <div className="flex justify-between items-center">
                                        <p className="mt-4 text-base font-semibold leading-none text-gray-800">Anna Smith</p>
                                        <p className="mt-4 text-base font-semibold leading-none text-gray-800">Date : 12-02-2023</p>
                                    </div>
                                </div>
                                <img src="https://cdn.tuk.dev/assets/components/26May-update/avatar-1.png" alt="Display Avatar of Anna Smith" role="img" />
                            </div>
                            <svg className="absolute z-10  bottom-[-10px] " width={16} height={10} viewBox="0 0 16 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M8 10L0 0L16 1.41326e-06L8 10Z" fill="white" />
                            </svg>
                        </div>
                        <div className="relative bg-white shadow rounded p-4 xl:p-8 mb-3">

                            <img src="https://cdn.tuk.dev/assets/components/26May-update/quote.png" aria-hidden="true" />
                            <div className="pl-4 pt-4 flex items-start justify-between">
                                <div className="mr-6">
                                    <p className="xl:text-xl xl:leading-loose text-gray-600">This website has a bunch of amazing components which improves my design</p>
                                    <div className="flex justify-between items-center">
                                        <p className="mt-4 text-base font-semibold leading-none text-gray-800">Anna Smith</p>
                                        <p className="mt-4 text-base font-semibold leading-none text-gray-800">Date : 12-02-2023</p>
                                    </div>
                                </div>
                                <img src="https://cdn.tuk.dev/assets/components/26May-update/avatar-2.png" alt="Display avatar of Dany John" role="img" />
                            </div>
                            <svg className="absolute z-10  bottom-[-10px] " width={16} height={10} viewBox="0 0 16 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M8 10L0 0L16 1.41326e-06L8 10Z" fill="white" />
                            </svg>
                        </div>
                        <div className="relative bg-white shadow rounded p-4 xl:p-8 mb-3">

                            <img src="https://cdn.tuk.dev/assets/components/26May-update/quote.png" aria-hidden="true" />
                            <div className="pl-4 pt-4 flex items-start justify-between">
                                <div className="mr-6">
                                    <p className="xl:text-xl xl:leading-loose text-gray-600">This website has a bunch of amazing components which improves my design</p>
                                    <div className="flex justify-between items-center">
                                        <p className="mt-4 text-base font-semibold leading-none text-gray-800">Anna Smith</p>
                                        <p className="mt-4 text-base font-semibold leading-none text-gray-800">Date : 12-02-2023</p>
                                    </div>
                                </div>
                                <img src="https://cdn.tuk.dev/assets/components/26May-update/avatar-3.png" alt="Display Avatar of Mike Blake" role="img" />
                            </div>
                            <svg className="absolute z-10  bottom-[-10px] " width={16} height={10} viewBox="0 0 16 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M8 10L0 0L16 1.41326e-06L8 10Z" fill="white" />
                            </svg>
                        </div>
                    </Slider>
                </div>
            </div>
        </div>
    );
};

export default Review;