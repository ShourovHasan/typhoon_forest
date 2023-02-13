import React from "react";

const BestSeller = () => {
    const bestSeller = [
        {
            seller_id: 1,
            img: "https://www.hostinger.com/tutorials/wp-content/uploads/sites/2/2018/09/how-to-design-a-website-9.png",
            price: 250
        },
        {
            seller_id: 2,
            img: "https://www.hostinger.com/tutorials/wp-content/uploads/sites/2/2018/09/how-to-design-a-website-21-1024x500.png",
            price: 300
        },
        {
            seller_id: 3,
            img: "https://marketplace.canva.com/EAE6WTyrSQ0/2/0/1600w/canva-light-beige-sleek-and-simple-blogger-personal-website--7Q4-7tyJj4.jpg",
            price: 150
        },
        {
            seller_id: 4,
            img: "https://blog.hubspot.com/hs-fs/hubfs/34Website_Template_02-png.png?width=650&name=34Website_Template_02-png.png",
            price: 400
        },
        {
            seller_id: 5,
            img: "https://visme.co/blog/wp-content/uploads/2020/07/image1.png",
            price: 200
        },
        {
            seller_id: 6,
            img: "https://bootstrapmade.com/content/templatefiles/Impact/Impact-bootstrap-website-template-md.png",
            price: 600
        },
    ]
    return (
        <div className="">
            <div className="relative bg-gray-100 flex   justify-center items-center pt-9 sm:pt-12 lg:pt-16 pb-24 sm:pb-52">
                <div className="2xl:container 2xl:mx-auto flex flex-col justify-center items-center sm:pb-12 lg:pb-0 space-y-4 px-4 md:px-6 2xl:px-0">
                    <div className="">
                        <p className="text-lg lg:text-xl font-bold leading-9 text-center text-black">Best Seller Theme</p>
                    </div>
                    <div>
                        <p className="text-base leading-normal sm:leading-none text-center text-gray-600">Explore Theme that are bought most frequently by people</p>
                    </div>
                </div>
                <h1 className="hidden md:flex items-center absolute right-6 text-end font-bold text-blue-500 cursor-pointer">
                    <span>View More</span>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-5 h-5 mt-1 ml-2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                    </svg>

                </h1>
            </div>

            <div className="-mt-16 sm:-mt-48 lg:-mt-32 xl:-mt-40 2xl:container 2xl:mx-auto flex justify-center items-center space-y-4 px-4 md:px-6 2xl:px-0 mb-16">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-items-between gap-x-8 gap-y-7">
                    {
                        bestSeller.map(item => <div key={item.seller_id} className="flex justify-center w-full">
                            <div className="rounded-lg shadow-lg bg-white ">
                                <div className="relative overflow-hidden bg-no-repeat bg-cover">
                                    <img src={item.img} className="rounded-t-lg h-80 " alt="Louvre" />
                                    <div className="flex justify-end absolute top-0 right-0 bottom-0 cursor-pointer left-0 w-full h-full text-white overflow-hidden bg-fixed opacity-0 hover:opacity-50 transition duration-300 ease-in-out" style={{ backgroundColor: 'black' }}>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="mt-5 mr-5 w-10 h-10 z-50 text-white hover:text-red-500">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                                        </svg>
                                    </div>
                                </div>
                                <div className="p-6">
                                    <div className="flex items-center space-x-4 mb-5">
                                        <svg width="30" height="30" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M37.3155 2.98718C37.3012 2.91809 37.2675 2.85449 37.2184 2.80384C37.1693 2.7532 37.1068 2.71761 37.0381 2.70124C32.4624 1.58249 21.8897 5.56921 16.1616 11.295C15.1399 12.3084 14.2085 13.4089 13.378 14.5841C11.6116 14.4278 9.84517 14.5583 8.3397 15.2145C4.09204 17.0841 2.85532 21.9622 2.51079 24.0606C2.49125 24.1755 2.49862 24.2933 2.53233 24.4048C2.56603 24.5163 2.62515 24.6185 2.70504 24.7033C2.78492 24.7881 2.88339 24.8533 2.99271 24.8936C3.10202 24.9339 3.21919 24.9483 3.33501 24.9356L10.1561 24.1833C10.161 24.6975 10.192 25.2112 10.2491 25.7223C10.2834 26.0773 10.441 26.409 10.6944 26.6598L13.3358 29.295C13.5869 29.5481 13.9185 29.7056 14.2733 29.7403C14.7815 29.7972 15.2924 29.8282 15.8038 29.8333L15.0553 36.6458C15.0428 36.7616 15.0573 36.8787 15.0977 36.9879C15.1381 37.0971 15.2032 37.1955 15.288 37.2754C15.3727 37.3552 15.4748 37.4144 15.5863 37.4481C15.6977 37.4819 15.8155 37.4894 15.9303 37.47C18.0249 37.1341 22.9116 35.8973 24.7702 31.6497C25.4264 30.1442 25.5608 28.3864 25.4092 26.6286C26.5872 25.798 27.6906 24.8663 28.7069 23.8442C34.453 18.127 38.417 7.79031 37.3155 2.98718ZM22.9741 17.0239C22.4494 16.4996 22.092 15.8314 21.9471 15.1039C21.8022 14.3764 21.8763 13.6223 22.1601 12.9369C22.4438 12.2515 22.9245 11.6657 23.5412 11.2535C24.1579 10.8414 24.8831 10.6214 25.6249 10.6214C26.3666 10.6214 27.0918 10.8414 27.7085 11.2535C28.3252 11.6657 28.8059 12.2515 29.0896 12.9369C29.3734 13.6223 29.4475 14.3764 29.3026 15.1039C29.1577 15.8314 28.8003 16.4996 28.2756 17.0239C27.9277 17.3723 27.5145 17.6487 27.0597 17.8373C26.6048 18.0259 26.1173 18.123 25.6249 18.123C25.1325 18.123 24.6449 18.0259 24.1901 17.8373C23.7352 17.6487 23.322 17.3723 22.9741 17.0239Z"
                                                fill="#4B5563"
                                            />
                                            <path
                                                d="M13.1562 31.2055C12.7281 31.6344 12.0414 31.8016 11.2148 31.9445C9.35781 32.2609 7.71797 30.6562 8.05156 28.7789C8.17891 28.0672 8.55547 27.0695 8.78984 26.8352C8.84107 26.7849 8.87517 26.7198 8.8873 26.6491C8.89942 26.5784 8.88895 26.5056 8.85739 26.4412C8.82582 26.3768 8.77475 26.3239 8.71144 26.2902C8.64812 26.2564 8.57578 26.2434 8.50469 26.2531C7.46622 26.3802 6.50011 26.851 5.76016 27.5906C3.92344 29.4289 3.75 36.25 3.75 36.25C3.75 36.25 10.575 36.0765 12.4117 34.2383C13.1536 33.4989 13.6251 32.5313 13.75 31.4914C13.7789 31.1648 13.3812 30.9703 13.1562 31.2055Z"
                                                fill="#4B5563"
                                            />
                                        </svg>
                                        <div className="">
                                            <p className=" text-lg leading-5 font-semibold text-gray-800 mt-5">Magetique - Furniture Magent</p>
                                            <p className=" text-base leading-6 font-normal text-gray-600 opacity-60 mt-3">by RockThemes</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center justify-between mb-5">
                                        <div>
                                            <div className="flex item-center justify-start mt-2">
                                                <svg className="text-orange-600 w-5 h-5 fill-current text-gray-700" viewBox="0 0 24 24">
                                                    <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z">
                                                    </path>
                                                </svg>
                                                <svg className="text-orange-600 w-5 h-5 fill-current text-gray-700" viewBox="0 0 24 24">
                                                    <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z">
                                                    </path>
                                                </svg>
                                                <svg className="text-orange-600 w-5 h-5 fill-current text-gray-700" viewBox="0 0 24 24">
                                                    <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z">
                                                    </path>
                                                </svg>
                                                <svg className="text-orange-600 w-5 h-5 fill-current text-gray-500" viewBox="0 0 24 24">
                                                    <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z">
                                                    </path>
                                                </svg>
                                                <svg className="text-orange-600 w-5 h-5 fill-current text-gray-500" viewBox="0 0 24 24">
                                                    <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z">
                                                    </path>
                                                </svg>
                                            </div>
                                            <h1 className="mt-3">150 <span className="opacity-50">Sales</span></h1>
                                        </div>
                                        <div>

                                            <h1 className="text-gray-700 font-bold text-xl">
                                                ${item.price}
                                            </h1>
                                        </div>
                                    </div>
                                    <div className="flex justify-between">
                                        <button className="w-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700  px-4 py-4 bg-gray-600 hover:bg-blue-300 rounded text-base font-medium leading-none text-center text-white">Details</button>
                                        <button className="w-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700  px-4 py-4 ml-4 bg-blue-400 hover:bg-gray-600 rounded text-base font-medium leading-none text-center text-white">Live Demo</button>
                                    </div>
                                </div>
                            </div>
                        </div>)
                    }

                </div>
            </div>
        </div>
    );
};

export default BestSeller;
