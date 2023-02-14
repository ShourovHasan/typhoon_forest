import Image from "next/image";
import { FaWindows } from "react-icons/fa";
import { IoMdArrowDropdown, IoMdArrowDropright } from "react-icons/io";
import { TfiWordpress } from "react-icons/tfi";


const Header = () => {
    return (
        <div>
            <header class=" container mx-auto px-4 py-6 xl:flex items-center justify-between  bg-[#070c3b]  text-white  lg:flex md:flex hidden 2xl:flex ">
                <a href="#" class="font-bold text-white text-2xl flex items-center">
                    <picture className="mr-2">
                        <img src='/TF_logo.png' className="w-10" alt="TF Logo" />
                    </picture>
                    {/* Typhoon Forest */}
                </a>
                <nav>
                    <ul class="flex items-center justify-center font-semibold">
                        <li class="relative group px-3 py-2">
                            <button class="hover:opacity-50 cursor-default " aria-haspopup="true">
                                Products
                            </button>
                            <div class="absolute lg:-left-48 top-3 transition group-hover:translate-y-5 translate-y-0 opacity-0 invisible group-hover:opacity-100 group-hover:visible duration-500 ease-in-out group-hover:transform z-50 min-w-[560px] transform">
                                <div class="relative top-6 p-6 bg-white rounded-xl shadow-xl w-full">
                                    <div class="w-10 h-10 bg-white transform rotate-45 absolute top-0 z-0 translate-x-0 transition-transform group-hover:translate-x-[12rem] duration-500 ease-in-out rounded-sm"></div>
                                    <div class="relative z-10">
                                        <div class="grid grid-cols-2 gap-6">
                                            <div>
                                                <p class="uppercase tracking-wider text-gray-500 font-medium text-[13px]">
                                                    The Suite
                                                </p>
                                                <ul class="mt-3 text-[15px]">
                                                    <li>
                                                        <a
                                                            href="#"
                                                            class="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-indigo-600"
                                                        >
                                                            Course Editor
                                                            <p class="text-gray-500 font-normal">
                                                                All in one editor
                                                            </p>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a
                                                            href="#"
                                                            class="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-indigo-600"
                                                        >
                                                            Accept payments
                                                            <p class="text-gray-500 font-normal">
                                                                Pre-build payments page
                                                            </p>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a
                                                            href="#"
                                                            class="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-indigo-600"
                                                        >
                                                            Close captioning
                                                            <p class="text-gray-500 font-normal">
                                                                Use AI to generate captions
                                                            </p>
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div>
                                                <p class="uppercase tracking-wider text-gray-500 font-medium text-[13px]">
                                                    Extensions
                                                </p>
                                                <ul class="mt-4 text-[15px]">
                                                    <li>
                                                        <a
                                                            href="#"
                                                            class="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-indigo-600"
                                                        >
                                                            Plugins
                                                            <p class="text-gray-500 font-normal">
                                                                Tweak existing functionality
                                                            </p>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a
                                                            href="#"
                                                            class="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-indigo-600"
                                                        >
                                                            Batch uploads
                                                            <p class="text-gray-500 font-normal">
                                                                Get your time back
                                                            </p>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a
                                                            href="#"
                                                            class="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-indigo-600"
                                                        >
                                                            Social sharing
                                                            <p class="text-gray-500 font-normal">
                                                                Generate content for socials
                                                            </p>
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li class="relative group px-3 py-2">
                            <button class="hover:opacity-50 cursor-default" aria-haspopup="true">
                                Solutions
                            </button>
                            <div class="absolute lg:-left-2 top-3 transition group-hover:translate-y-5 translate-y-0 opacity-0 invisible group-hover:opacity-100 group-hover:visible duration-500 ease-in-out group-hover:transform z-50 min-w-[260px] transform">
                                <div class="relative top-6 p-6 bg-white rounded-xl shadow-xl w-full">
                                    <div class="w-10 h-10 bg-white transform rotate-45 absolute top-0 z-0 -translate-x-4 transition-transform group-hover:translate-x-3 duration-500 ease-in-out rounded-sm"></div>
                                    <div class="relative z-10">
                                        <p class="uppercase tracking-wider text-gray-500 font-medium text-[13px]">
                                            Use cases
                                        </p>
                                        <ul class="mt-3 text-[15px]">
                                            <li>
                                                <a
                                                    href="#"
                                                    class="bg-transparent bg-clip-text text-transparent bg-gradient-to-br from-indigo-400 to-pink-700 via-blue-500 font-semibold hover:from-blue-600 hover:to-indigo-600 hover:via-pink-400 py-1 block"
                                                >
                                                    Creators
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    href="#"
                                                    class="bg-transparent bg-clip-text text-transparent bg-gradient-to-br from-indigo-400 to-pink-700 via-blue-500 font-semibold hover:from-blue-600 hover:to-indigo-600 hover:via-pink-400 py-1 block"
                                                >
                                                    Streamers
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    href="#"
                                                    class="bg-transparent bg-clip-text text-transparent bg-gradient-to-br from-indigo-400 to-pink-700 via-blue-500 font-semibold hover:from-blue-600 hover:to-indigo-600 hover:via-pink-400 py-1 block"
                                                >
                                                    Influence
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    href="#"
                                                    class="bg-transparent bg-clip-text text-transparent bg-gradient-to-br from-indigo-400 to-pink-700 via-blue-500 font-semibold hover:from-blue-600 hover:to-indigo-600 hover:via-pink-400 py-2"
                                                >
                                                    Programming
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    href="#"
                                                    class="bg-transparent bg-clip-text text-transparent bg-gradient-to-br from-indigo-400 to-pink-700 via-blue-500 font-semibold hover:from-blue-600 hover:to-indigo-600 hover:via-pink-400 py-1 block"
                                                >
                                                    Design
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li class="px-3 py-2 relative group">
                            <button class="hover:opacity-50 cursor-default" aria-haspopup="true">
                                Developers
                            </button>
                            <div class="absolute lg:-left-24 top-3 transition group-hover:translate-y-5 translate-y-0 opacity-0 invisible group-hover:opacity-100 group-hover:visible duration-500 ease-in-out group-hover:transform z-50 min-w-[560px] transform">
                                <div class="relative top-6 p-6 bg-white rounded-xl shadow-xl w-full">
                                    <div class="w-10 h-10 bg-white transform rotate-45 absolute top-0 z-0 -translate-x-4 transition-transform group-hover:translate-x-[105px] duration-500 ease-in-out rounded-sm"></div>
                                    <div class="relative z-10">
                                        <a
                                            href="#"
                                            class="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-indigo-600"
                                        >
                                            Documentation
                                            <p class="text-gray-500 font-normal">
                                                Start integrating in no time
                                            </p>
                                        </a>
                                        <div class="grid grid-cols-2 gap-6 mt-6">
                                            <div>
                                                <p class="uppercase tracking-wider text-gray-500 text-[13px]">
                                                    Get started
                                                </p>
                                                <ul class="mt-3 text-[15px]">
                                                    <li>
                                                        <a
                                                            href="#"
                                                            class="text-gray-600 hover:text-gray-800 py-1 block font-normal"
                                                        >
                                                            Libraries and SDKs
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a
                                                            href="#"
                                                            class="text-gray-600 hover:text-gray-800 py-1 block font-normal"
                                                        >
                                                            Plugins
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a
                                                            href="#"
                                                            class="text-gray-600 hover:text-gray-800 py-1 block font-normal"
                                                        >
                                                            Code samples
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a
                                                            href="#"
                                                            class="text-gray-600 hover:text-gray-800 py-1 block font-normal"
                                                        >
                                                            Tutorials
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div>
                                                <p class="uppercase tracking-wider text-gray-500 font-medium text-[13px]">
                                                    Guides
                                                </p>
                                                <ul class="mt-3 text-[15px]">
                                                    <li>
                                                        <a
                                                            href="#"
                                                            class="text-gray-600 hover:text-gray-800 py-1 block font-normal"
                                                        >
                                                            Accept online payments
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a
                                                            href="#"
                                                            class="text-gray-600 hover:text-gray-800 py-1 block font-normal"
                                                        >
                                                            Editing video like a pro
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a
                                                            href="#"
                                                            class="text-gray-600 hover:text-gray-800 py-1 block font-normal"
                                                        >
                                                            Automation techniques
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a
                                                            href="#"
                                                            class="text-gray-600 hover:text-gray-800 py-1 block font-normal"
                                                        >
                                                            Create stunning effects
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li class="px-3 py-2 relative group">
                            <button class="hover:opacity-50 cursor-default" aria-haspopup="true">
                                Resources
                            </button>
                            <div class="absolute lg:-left-2 top-3 transition group-hover:translate-y-5 translate-y-0 opacity-0 invisible group-hover:opacity-100 group-hover:visible duration-500 ease-in-out group-hover:transform z-50 min-w-[220px] transform">
                                <div class="relative top-6 p-6 bg-white rounded-xl shadow-xl w-full">
                                    <div class="w-10 h-10 bg-white transform rotate-45 absolute top-0 z-0 -translate-x-4 transition-transform group-hover:translate-x-3 duration-500 ease-in-out rounded-sm"></div>
                                    <div class="relative z-10">
                                        <ul class="text-[15px]">
                                            <li>
                                                <a
                                                    href="#"
                                                    class="text-gray-600 hover:text-gray-800 py-1 block font-normal"
                                                >
                                                    Get Support
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    href="#"
                                                    class="text-gray-600 hover:text-gray-800 py-1 block font-normal"
                                                >
                                                    Blog
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    href="#"
                                                    class="text-gray-600 hover:text-gray-800 py-1 block font-normal"
                                                >
                                                    Case Studies
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    href="#"
                                                    class="text-gray-600 hover:text-gray-800 py-1 block font-normal"
                                                >
                                                    Guides
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    href="#"
                                                    class="text-gray-600 hover:text-gray-800 py-1 block font-normal"
                                                >
                                                    News &amp; Events
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li class="px-3 py-2 relative group">
                            <a href="#" class="hover:opacity-50 cursor-default">
                                Pricing
                            </a>
                        </li>
                    </ul>
                </nav>
                <nav>
                    <ul>
                        <li>
                            <a
                                href="#"
                                class="rounded-full px-3 py-2 font-semibold bg-white bg-opacity-10 flex items-center group"
                            >
                                <span class="mr-2">Sign in</span>
                                <svg
                                    class="stroke-current"
                                    width="10"
                                    height="10"
                                    stroke-width="2"
                                    viewBox="0 0 10 10"
                                    aria-hidden="true"
                                >
                                    <g fill-rule="evenodd">
                                        <path
                                            class="opacity-0 group-hover:opacity-100 transition ease-in-out duration-200"
                                            d="M0 5h7"
                                        ></path>
                                        <path
                                            class="opacity-100 group-hover:transform group-hover:translate-x-1 transition ease-in-out duration-00"
                                            d="M1 1l4 4-4 4"
                                        ></path>
                                    </g>
                                </svg>
                            </a>
                        </li>
                    </ul>
                </nav>
            </header>
            <header class="relative flex flex-wrap sm:justify-start sm:flex-nowrap z-50 w-full bg-white text-sm py-4 dark:bg-gray-800 lg:hidden xl:hidden 2xl:hidden md:hidden">
                <nav class="max-w-[85rem] w-full mx-auto px-4 sm:flex sm:items-center sm:justify-between" aria-label="Global">
                    <div class="flex items-center justify-between">
                        <a class="flex-none text-orange-500 lg:text-2xl font-bold dark:text-white" href="#">TF</a>
                        <div class="sm:hidden">
                            <button type="button" class="hs-collapse-toggle p-2 inline-flex justify-center items-center gap-2 rounded-md border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm dark:bg-slate-900 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-400 dark:hover:text-white dark:focus:ring-offset-gray-800" data-hs-collapse="#navbar-collapse-basic" aria-controls="navbar-collapse-basic" aria-label="Toggle navigation">
                                <svg class="hs-collapse-open:hidden w-4 h-4" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
                                </svg>
                                <svg class="hs-collapse-open:block hidden w-4 h-4" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                    <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                                </svg>
                            </button>
                        </div>
                    </div>

                    <div id="navbar-collapse-basic" class="hidden basis-full grow sm:block text-xl">
                        <div class="flex flex-col gap-5 mt-5 sm:flex-row sm:items-center sm:justify-end sm:mt-0 sm:pl-5 ">
                            {/* <a class="font-medium text-blue-500" href="#" aria-current="page">Active</a> */}

                            <div class="hs-dropdown [--strategy:static] sm:[--strategy:absolute] [--adaptive:none] sm:[--trigger:hover]">
                                <button id="hs-mega-menu-basic-dr" type="button" class="flex items-center w-full  hover:text-gray-400 font-medium dark:text-gray-400 dark:hover:text-gray-500 text-gray-600 px-2 py-1 rounded-md">

                                    <FaWindows className="mr-1"></FaWindows>
                                    All Products
                                    <IoMdArrowDropdown className="ml-1"></IoMdArrowDropdown>
                                </button>

                                <div class="hs-dropdown-menu transition-[opacity,margin] duration-[0.1ms] sm:duration-[150ms] hs-dropdown-open:opacity-100 opacity-0 sm:w-48 hidden z-10 bg-white sm:shadow-md rounded-lg p-2  sm:dark:border before:absolute top-full sm:border before:-top-5 before:left-0 before:w-full before:h-5">

                                    <div class="hs-dropdown relative [--strategy:static] sm:[--strategy:absolute] [--adaptive:none] sm:[--trigger:hover]">
                                        <button type="button" class="flex justify-between w-full items-center text-sm text-gray-800 rounded-md py-2 px-3 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300">
                                            Website Templates
                                            <IoMdArrowDropright class="sm:-rotate-90 ml-2 text-gray-600 text-xl md:-rotate-0 lg:-rotate-0"></IoMdArrowDropright>
                                        </button>

                                        <div class="hs-dropdown-menu transition-[opacity,margin] duration-[0.1ms] sm:duration-[150ms] hs-dropdown-open:opacity-100 opacity-0 sm:w-48 hidden z-10 sm:mt-2 bg-white sm:shadow-md rounded-lg p-2 dark:bg-gray-800 sm:dark:border dark:border-gray-700 dark:divide-gray-700 before:absolute sm:border before:-right-5 before:top-0 before:h-full before:w-5 top-0 right-full !mx-[10px]">
                                            <a class="flex items-center gap-x-3.5 py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300" href="#">
                                                WORDPRESS STORE
                                            </a>
                                            <a class="flex items-center gap-x-3.5 py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300" href="#">
                                                HTML TEMPLATES
                                            </a>
                                            <a class="flex items-center gap-x-3.5 py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300" href="#">
                                                E-COMMERCE TEMPLATES
                                            </a>
                                            <a class="flex items-center gap-x-3.5 py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300" href="#">
                                                CMS TEMPLATES
                                            </a>
                                            <a class="flex items-center gap-x-3.5 py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300" href="#">

                                                WEBSITE BUILDERS

                                            </a>
                                        </div>
                                    </div>
                                    <a class="flex items-center gap-x-3.5 py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300" href="#">
                                        WordPress Themes
                                    </a>
                                    <div class="hs-dropdown relative [--strategy:static] sm:[--strategy:absolute] [--adaptive:none] sm:[--trigger:hover]">
                                        <button type="button" class="flex justify-between w-full items-center text-sm text-gray-800 rounded-md py-2 px-3 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300">
                                            Presentations
                                            <IoMdArrowDropright class="sm:-rotate-90 ml-2 text-gray-600 text-xl md:-rotate-0 lg:-rotate-0"></IoMdArrowDropright>
                                        </button>

                                        <div class="hs-dropdown-menu transition-[opacity,margin] duration-[0.1ms] sm:duration-[150ms] hs-dropdown-open:opacity-100 opacity-0 sm:w-48 hidden z-10 sm:mt-2 bg-white sm:shadow-md rounded-lg p-2 dark:bg-gray-800 sm:dark:border dark:border-gray-700 dark:divide-gray-700 before:absolute sm:border before:-right-5 before:top-0 before:h-full before:w-5 top-0 right-full !mx-[10px]">
                                            <a class="flex items-center gap-x-3.5 py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300" href="#">
                                                PRESENTATIONS TYPES
                                            </a>
                                            <a class="flex items-center gap-x-3.5 py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300" href="#">
                                                POPULAR CATEGORIES
                                            </a>
                                        </div>
                                    </div>
                                    <div class="hs-dropdown relative [--strategy:static] sm:[--strategy:absolute] [--adaptive:none] sm:[--trigger:hover]">
                                        <button type="button" class="flex justify-between w-full items-center text-sm text-gray-800 rounded-md py-2 px-3 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300">
                                            Graphics
                                            <IoMdArrowDropright class="sm:-rotate-90 ml-2 text-gray-600 text-xl md:-rotate-0 lg:-rotate-0"></IoMdArrowDropright>
                                        </button>

                                        <div class="hs-dropdown-menu transition-[opacity,margin] duration-[0.1ms] sm:duration-[150ms] hs-dropdown-open:opacity-100 opacity-0 sm:w-48 hidden z-10 sm:mt-2 bg-white sm:shadow-md rounded-lg p-2 dark:bg-gray-800 sm:dark:border dark:border-gray-700 dark:divide-gray-700 before:absolute sm:border before:-right-5 before:top-0 before:h-full before:w-5 top-0 right-full !mx-[10px]">
                                            <a class="flex items-center gap-x-3.5 py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300" href="#">
                                                GRAPHICS
                                            </a>
                                            <a class="flex items-center gap-x-3.5 py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300" href="#">
                                                TEMPLATES
                                            </a>
                                            <a class="flex items-center gap-x-3.5 py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300" href="#">
                                                WEB ELEMENTS
                                            </a>
                                            <a class="flex items-center gap-x-3.5 py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300" href="#">
                                                More
                                            </a>

                                        </div>
                                    </div>
                                    <div class="hs-dropdown relative [--strategy:static] sm:[--strategy:absolute] [--adaptive:none] sm:[--trigger:hover]">
                                        <button type="button" class="w-full flex justify-between items-center text-sm text-gray-800 rounded-md py-2 px-3 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300">
                                            Plugins
                                            <IoMdArrowDropright class="sm:-rotate-90 ml-2 text-gray-600 text-xl md:-rotate-0 lg:-rotate-0"></IoMdArrowDropright>
                                        </button>

                                        <div class="hs-dropdown-menu transition-[opacity,margin] duration-[0.1ms] sm:duration-[150ms] hs-dropdown-open:opacity-100 opacity-0 sm:w-48 hidden z-10 sm:mt-2 bg-white sm:shadow-md rounded-lg p-2 dark:bg-gray-800 sm:dark:border dark:border-gray-700 dark:divide-gray-700 before:absolute sm:border before:-right-5 before:top-0 before:h-full before:w-5 top-0 right-full !mx-[10px]">
                                            <a class="flex items-center gap-x-3.5 py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300" href="#">
                                                WordPress Plugins
                                            </a>
                                            <a class="flex items-center gap-x-3.5 py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300" href="#">
                                                PrestaShop Modules
                                            </a>
                                            <a class="flex items-center gap-x-3.5 py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300" href="#">
                                                JavaScript
                                            </a>
                                            <a class="flex items-center gap-x-3.5 py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300" href="#">
                                                Magento Extensions
                                            </a>

                                        </div>
                                    </div>
                                    <div class="hs-dropdown relative [--strategy:static] sm:[--strategy:absolute] [--adaptive:none] sm:[--trigger:hover]">
                                        <button type="button" class=" flex justify-between w-full items-center text-sm text-gray-800 rounded-md py-2 px-3 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300">
                                            3D
                                            <IoMdArrowDropright class="sm:-rotate-90 ml-2 text-gray-600 text-xl md:-rotate-0 lg:-rotate-0"></IoMdArrowDropright>
                                        </button>

                                        <div class="hs-dropdown-menu transition-[opacity,margin] duration-[0.1ms] sm:duration-[150ms] hs-dropdown-open:opacity-100 opacity-0 sm:w-48 hidden z-10 sm:mt-2 bg-white sm:shadow-md rounded-lg p-2 dark:bg-gray-800 sm:dark:border dark:border-gray-700 dark:divide-gray-700 before:absolute sm:border before:-right-5 before:top-0 before:h-full before:w-5 top-0 right-full !mx-[10px]">
                                            <a class="flex items-center gap-x-3.5 py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300" href="#">
                                                3D GRAPHICS
                                            </a>
                                            <a class="flex items-center gap-x-3.5 py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300" href="#">
                                                3D Models
                                            </a>
                                        </div>
                                    </div>

                                </div>
                            </div>

                            {/* <div class="hs-dropdown [--strategy:static] sm:[--strategy:absolute] [--adaptive:none] sm:[--trigger:hover]">
                            <button type="button" class="flex items-center w-full text-gray-600 hover:text-gray-400 font-medium dark:text-gray-400 dark:hover:text-gray-500">
                                Mega Menu
                                <svg class="ml-2 w-2.5 h-2.5 text-gray-600" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5" stroke="currentColor" stroke-width="2" stroke-linecap="round"></path>
                                </svg>
                            </button>

                            <div class="hs-dropdown-menu transition-[opacity,margin] sm:border duration-[0.1ms] sm:duration-[150ms] hs-dropdown-open:opacity-100 opacity-0 w-full hidden z-10 top-full left-0 min-w-[15rem] bg-white sm:shadow-md rounded-lg p-2 dark:bg-gray-800 sm:dark:border dark:border-gray-700 dark:divide-gray-700 before:absolute before:-top-5 before:left-0 before:w-full before:h-5">
                                <div class="sm:grid sm:grid-cols-3">
                                    <div class="flex flex-col">
                                        <a class="flex items-center gap-x-3.5 py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300" href="#">
                                            About
                                        </a>
                                        
                                    </div>

                                    <div class="flex flex-col">
                                        <a class="flex items-center gap-x-3.5 py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300" href="#">
                                            Careers
                                        </a>
                                        <a class="flex items-center gap-x-3.5 py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300" href="#">
                                            Careers: Overview
                                        </a>
                                        <a class="flex items-center gap-x-3.5 py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300" href="#">
                                            Careers: Apply
                                        </a>
                                    </div>

                                    <div class="flex flex-col">
                                        <a class="flex items-center gap-x-3.5 py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300" href="#">
                                            Log In
                                        </a>
                                        <a class="flex items-center gap-x-3.5 py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300" href="#">
                                            Sign Up
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div> */}

                            {/* <a class="font-medium text-gray-600 hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-500" href="#">Link</a> */}
                            <div className="">
                                <div className="flex-none">
                                    <div className="dropdown dropdown-end">
                                        <label tabIndex={0} className="btn btn-ghost btn-circle">
                                            <div className="indicator">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                                                <span className="badge badge-sm indicator-item">8</span>
                                            </div>
                                        </label>
                                        <div tabIndex={0} className="mt-3 shadow card card-compact dropdown-content w-52 bg-base-100">
                                            <div className="card-body">
                                                <span className="text-lg font-bold">8 Items</span>
                                                <span className="text-info">Subtotal: $999</span>
                                                <div className="card-actions">
                                                    <button className="btn btn-primary btn-block">View cart</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="dropdown dropdown-end">
                                        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                            <div className="w-10 rounded-full">
                                                <picture>
                                                    <img className="w-10" src="https://i.ibb.co/4TxsDNH/1665815821738.jpg" alt="s" />
                                                </picture>

                                            </div>
                                        </label>
                                        <ul tabIndex={0} className="p-2 mt-3 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
                                            <li>
                                                <a className="justify-between">
                                                    Profile
                                                    <span className="badge">New</span>
                                                </a>
                                            </li>
                                            <li><a>Settings</a></li>
                                            <li><a>Logout</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </nav>

            </header>
        </div>
        
        
    )
}

export default Header