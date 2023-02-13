import {
  FaDribbble,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";
import { FiChevronsRight } from "react-icons/fi";
import { GrMail } from "react-icons/gr";
import { AiFillPhone, AiOutlineGlobal } from "react-icons/ai";
import { FaMapMarkerAlt } from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  console.log(currentYear);
  const socialMedia = (
    <div className="flex gap-1">
      <div
        className="p-2 duration-700 rounded-full cursor-pointer hover:bg-black hover:text-white"
        title="Facebook"
      >
        <FaFacebook className="text-3xl " />
      </div>
      <div
        className="p-2 duration-700 rounded-full cursor-pointer hover:bg-black hover:text-white"
        title="Facebook"
      >
        <FaInstagram className="text-3xl" />
      </div>
      <div
        className="p-2 duration-700 rounded-full cursor-pointer hover:bg-black hover:text-white"
        title="LinkedIn"
      >
        <FaLinkedin className="text-3xl" />
      </div>
      <div
        className="p-2 duration-700 rounded-full cursor-pointer hover:bg-black hover:text-white"
        title="Dribbble"
      >
        <FaDribbble className="text-3xl" />
      </div>
    </div>
  );

	return (
    //   className="max-w-[1400px] mx-auto"
    // Typhoon Forest
    <section>
      <div className="max-w-[1400px] mx-auto md:flex justify-between items-center px-6 lg:px-12">
        <h1 className="relative text-2xl font-bold">
          <span className="absolute text-4xl font-extrabold text-green-500 -top-4 -z-10">
            Typhoon
          </span>
          Forest<span className="text-red-500">.</span>
        </h1>
        <div className="hidden md:block">{socialMedia}</div>
      </div>
      <div className="max-w-[1400px] mx-auto grid md:grid-cols-2 lg:grid-cols-4 mt-5 gap-4 px-6 lg:px-12">
        {/* address section */}
        <div>
          <div className="flex">
            <FaMapMarkerAlt className="mr-2" />
            <div className="text-xs">
              <p>ROAD 3,GULSHAN-1, CAPITA SOUTH AVENUE TOWER,4TH FLR.</p>
              <p>DHAKA 1212 BANGLADESH.</p>
            </div>
          </div>
          <p className="flex items-center mt-1 duration-500 cursor-pointer hover:translate-x-4">
            <AiFillPhone className="mr-2" />
            +8801111122200
          </p>
          <p className="flex items-center mt-1 duration-500 cursor-pointer hover:translate-x-4">
            <GrMail className="mr-2" />
            typhoon@gamil.com
          </p>
          <p className="flex items-center mt-1 duration-500 cursor-pointer hover:translate-x-4">
            <AiOutlineGlobal className="mr-2" />
            typhoon.com.bd
          </p>
        </div>
        <div>
          <p className="flex items-center mt-1 duration-500 cursor-pointer hover:translate-x-4">
            <FiChevronsRight className="mr-1" />
            Contact Us
          </p>
          <p className="flex items-center mt-1 duration-500 cursor-pointer hover:translate-x-4">
            <FiChevronsRight className="mr-1" />
            Designers
          </p>
          <p className="flex items-center mt-1 duration-500 cursor-pointer hover:translate-x-4">
            <FiChevronsRight className="mr-1" />
            Terms & Conditions
          </p>
          <p className="flex items-center mt-1 duration-500 cursor-pointer hover:translate-x-4">
            <FiChevronsRight className="mr-1" />
            Returns & Exchanges
          </p>
          <p className="flex items-center mt-1 duration-500 cursor-pointer hover:translate-x-4">
            <FiChevronsRight className="mr-1" />
            FAQs
          </p>
        </div>
        <div>
          <p className="flex items-center mt-1 duration-500 cursor-pointer hover:translate-x-4">
            <FiChevronsRight className="mr-1" />
            Forum Support
          </p>
          <p className="flex items-center mt-1 duration-500 cursor-pointer hover:translate-x-4">
            <FiChevronsRight className="mr-1" />
            My Account
          </p>
          <p className="flex items-center mt-1 duration-500 cursor-pointer hover:translate-x-4">
            <FiChevronsRight className="mr-1" />
            Orders Tracking
          </p>
          <p className="flex items-center mt-1 duration-500 cursor-pointer hover:translate-x-4">
            <FiChevronsRight className="mr-1" />
            Size Guides
          </p>
          <p className="flex items-center mt-1 duration-500 cursor-pointer hover:translate-x-4">
            <FiChevronsRight className="mr-1" />
            ShortCode
          </p>
        </div>
        <div className="flex flex-col items-center justify-center gap-2 mt-4 lg:mt-0 md:items-start lg:items-end">
          <picture>
            <img
              className="w-40"
              src="https://i.ibb.co/VV2zy6v/5a902db97f96951c82922874.png"
              alt=""
            />
          </picture>
          <picture>
            <img
              className="w-40"
              src="https://i.ibb.co/7WKT5bS/67015-play-google-app-store-android-free-transparent-image-hd.jpg"
              alt="s"
            />
          </picture>
        </div>
        <div className="mx-auto md:hidden ">{socialMedia}</div>
      </div>
      <div className="py-4 mt-4 text-center text-white bg-gray-800">
        <h1>Copyright @{currentYear} || November Typhoon </h1>
      </div>
    </section>
  );
};

export default Footer;
