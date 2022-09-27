import Image from 'next/image'
import Link from 'next/link'

const Header = () => {
    return (
        <header className='overflow-hidden'>
            {/* Header Top */}
            <div className='bg-[#131921] flex items-center p-1 px-2 flex-grow'>
                {/* Header Left */}
                <div onClick={() => document.querySelector("#sidebar").classList.toggle("hidden")} className='block md:hidden border border-transparent hover:border-white cursor-pointer p-1 text-white'>
                    <p className='flex items-center gap-1 font-bold'>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6">
                            <path fillRule="evenodd" d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z" clipRule="evenodd" />
                        </svg>
                    </p>
                </div>

                <div className="logo flex items-center border border-transparent hover:border-white cursor-pointer py-1 select-none">
                    <Link href="/">
                        <Image
                            src="/amazon_logo.png"
                            width={150}
                            height={40}
                            objectFit="contain"
                            alt="Amazon Logo"
                        />
                    </Link>
                </div>

                <div className='text-white text-xs hidden lg:flex flex-col items-center border border-transparent hover:border-white cursor-pointer py-1 select-none px-1'>
                    <p>Deliver to</p>
                    <p className='font-bold text-sm flex'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                        </svg> Bangladesh
                    </p>
                </div>

                <div className="search hidden md:flex items-center h-10 flex-grow rounded-md bg-orange-300 focus-within:border-orange-500 focus-within:border-2 mx-4 lg:mx-8">
                    <div
                        onClick={() => document.querySelector("#dropdown-select").classList.toggle("hidden")}
                        className='bg-gray-200 cursor-pointer hover:bg-gray-300 border-r border-gray-400 h-full rounded-l-md hidden lg:flex items-center p-3 text-xs select-none'>
                        <ul>
                            <li className="relative">
                                <p className='flex'>
                                    All <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-3 ml-1">
                                        <path fillRule="evenodd" d="M12.53 16.28a.75.75 0 01-1.06 0l-7.5-7.5a.75.75 0 011.06-1.06L12 14.69l6.97-6.97a.75.75 0 111.06 1.06l-7.5 7.5z" clipRule="evenodd" />
                                    </svg>
                                </p>
                                <ul className='hidden absolute bg-white -left-2 top-full w-52 h-72 shadow overflow-y-scroll mt-4 z-10' id='dropdown-select'>
                                    <li className='p-1 hover:bg-gray-300'>All Departments</li>
                                    <li className='p-1 hover:bg-gray-300'>Books</li>
                                    <li className='p-1 hover:bg-gray-300'>Computers</li>
                                    <li className='p-1 hover:bg-gray-300'>Digital Music</li>
                                    <li className='p-1 hover:bg-gray-300'>Electronics</li>
                                    <li className='p-1 hover:bg-gray-300'>Language</li>
                                    <li className='p-1 hover:bg-gray-300'>Prime Video</li>
                                    <li className='p-1 hover:bg-gray-300'>Software</li>
                                    <li className='p-1 hover:bg-gray-300'>Video Games</li>
                                    <li className='p-1 hover:bg-gray-300'>Books</li>
                                    <li className='p-1 hover:bg-gray-300'>Computers</li>
                                    <li className='p-1 hover:bg-gray-300'>Digital Music</li>
                                    <li className='p-1 hover:bg-gray-300'>Electronics</li>
                                    <li className='p-1 hover:bg-gray-300'>Language</li>
                                    <li className='p-1 hover:bg-gray-300'>Prime Video</li>
                                    <li className='p-1 hover:bg-gray-300'>Software</li>
                                    <li className='p-1 hover:bg-gray-300'>Video Games</li>
                                    <li className='p-1 hover:bg-gray-300'>Books</li>
                                    <li className='p-1 hover:bg-gray-300'>Computers</li>
                                    <li className='p-1 hover:bg-gray-300'>Digital Music</li>
                                    <li className='p-1 hover:bg-gray-300'>Electronics</li>
                                    <li className='p-1 hover:bg-gray-300'>Language</li>
                                    <li className='p-1 hover:bg-gray-300'>Prime Video</li>
                                    <li className='p-1 hover:bg-gray-300'>Software</li>
                                    <li className='p-1 hover:bg-gray-300'>Video Games</li>
                                </ul>
                            </li>
                        </ul>
                    </div>

                    <input type="text" className='p-2 h-full flex-grow flex-shrink focus:outline-none px-2 rounded-l-md lg:rounded-none' />

                    <div className="search_icon_wrapper bg-orange-300 rounded-r-md p-2">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                        </svg>
                    </div>
                </div>

                {/* Others */}
                <div className="others text-white flex items-center justify-end text-xs space-x-8 whitespace-nowrap relative w-[65%] sm:w-3/4 md:w-auto">
                    <div className='border border-transparent hover:border-white cursor-pointer py-1 select-none px-1'>
                        <p>Hello, Sign In</p>
                        <p className='font-bold text-sm hidden lg:block'>Accounts &amp; Lists</p>
                    </div>

                    <div className='hidden lg:block border border-transparent hover:border-white cursor-pointer py-1 select-none px-1'>
                        <p>Returns</p>
                        <p className='font-bold text-sm'>&amp; Orders</p>
                    </div>

                    <div className='flex items-center flex-col border border-transparent hover:border-white cursor-pointer py-1 select-none px-1'>
                        <span className='font-bold text-base text-orange-400 -m-1 mr-4'>0</span>
                        <div className='flex items-center font-bold'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="h-8">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                            </svg>

                            <span className='self-end hidden md:block'>Cart</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Header Bottom */}
            <div className='bg-[#131921] md:bg-[#232f3e] flex items-center p-1 px-3 text-white text-sm font-medium'>
                {/* Bottom Left */}
                <div onClick={() => document.querySelector("#sidebar").classList.toggle("hidden")} className='hidden md:block border border-transparent hover:border-white cursor-pointer p-1 mr-3 select-none'>
                    <p className='flex items-center gap-1 font-bold'>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6">
                            <path fillRule="evenodd" d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z" clipRule="evenodd" />
                        </svg>
                        <span>All</span>
                    </p>
                </div>

                <div id="sidebar" className='hidden fixed top-0 left-0 w-screen h-screen z-50'>
                    <div
                        onClick={() => document.querySelector("#sidebar").classList.add("hidden")}
                        className='absolute top-0 left-0 w-screen h-screen bg-[#000000bb]'></div>
                    <div className='flex relative'>
                        <div className='h-screen fixed w-96 bg-white'>
                            <div className="sidebar_header text-xl font-medium bg-black py-2 pl-8 select-none">
                                <p className='flex gap-2 items-center'>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8">
                                        <path fillRule="evenodd" d="M18.685 19.097A9.723 9.723 0 0021.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 003.065 7.097A9.716 9.716 0 0012 21.75a9.716 9.716 0 006.685-2.653zm-12.54-1.285A7.486 7.486 0 0112 15a7.486 7.486 0 015.855 2.812A8.224 8.224 0 0112 20.25a8.224 8.224 0 01-5.855-2.438zM15.75 9a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" clipRule="evenodd" />
                                    </svg>
                                    Hello, sign in
                                </p>
                            </div>

                            <div className="sidebar_menu text-black overflow-y-scroll h-full select-none">
                                <div>
                                    <h2 className="sidebar_title text-xl font-medium mt-4 ml-8 mb-2">Digital Content &amp; Devices</h2>
                                    <ul className='my-2'>
                                        <li className='pl-8 py-3 cursor-pointer pr-4 hover:bg-gray-200'>
                                            <p className='flex justify-between items-center'>Amazon Music <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5">
                                                <path fillRule="evenodd" d="M16.28 11.47a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 011.06-1.06l7.5 7.5z" clipRule="evenodd" />
                                            </svg></p>

                                            <ul>

                                            </ul>
                                        </li>
                                        <li className='pl-8 py-3 cursor-pointer pr-4 hover:bg-gray-200'>
                                            <p className='flex justify-between items-center'>Kindle E-readers &amp; Books <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5">
                                                <path fillRule="evenodd" d="M16.28 11.47a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 011.06-1.06l7.5 7.5z" clipRule="evenodd" />
                                            </svg></p>

                                            <ul>

                                            </ul>
                                        </li>
                                        <li className='pl-8 py-3 cursor-pointer pr-4 hover:bg-gray-200'>
                                            <p className='flex justify-between items-center'>Appstore for Android <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5">
                                                <path fillRule="evenodd" d="M16.28 11.47a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 011.06-1.06l7.5 7.5z" clipRule="evenodd" />
                                            </svg></p>

                                            <ul>

                                            </ul>
                                        </li>
                                    </ul>
                                    <hr />
                                </div>
                                <div>
                                    <h2 className="sidebar_title text-xl font-medium mt-4 ml-8 mb-2">Shop By Department</h2>
                                    <ul className='my-2'>
                                        <li className='pl-8 py-3 cursor-pointer pr-4 hover:bg-gray-200'>
                                            <p className='flex justify-between items-center'>Electronics <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5">
                                                <path fillRule="evenodd" d="M16.28 11.47a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 011.06-1.06l7.5 7.5z" clipRule="evenodd" />
                                            </svg></p>

                                            <ul>

                                            </ul>
                                        </li>
                                        <li className='pl-8 py-3 cursor-pointer pr-4 hover:bg-gray-200'>
                                            <p className='flex justify-between items-center'>Computers <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5">
                                                <path fillRule="evenodd" d="M16.28 11.47a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 011.06-1.06l7.5 7.5z" clipRule="evenodd" />
                                            </svg></p>

                                            <ul>

                                            </ul>
                                        </li>
                                        <li className='pl-8 py-3 cursor-pointer pr-4 hover:bg-gray-200'>
                                            <p className='flex justify-between items-center'>Smart Home <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5">
                                                <path fillRule="evenodd" d="M16.28 11.47a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 011.06-1.06l7.5 7.5z" clipRule="evenodd" />
                                            </svg></p>

                                            <ul>

                                            </ul>
                                        </li>
                                        <li className='pl-8 py-3 cursor-pointer pr-4 hover:bg-gray-200'>
                                            <p className='flex justify-between items-center'>Arts &amp; Crafts <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5">
                                                <path fillRule="evenodd" d="M16.28 11.47a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 011.06-1.06l7.5 7.5z" clipRule="evenodd" />
                                            </svg></p>

                                            <ul>

                                            </ul>
                                        </li>
                                    </ul>
                                    <hr />
                                </div>
                                <div>
                                    <h2 className="sidebar_title text-xl font-medium mt-4 ml-8 mb-2">Programs &amp; Features</h2>
                                    <ul className='my-2'>
                                        <li className='pl-8 py-3 cursor-pointer pr-4 hover:bg-gray-200'>
                                            <p className='flex justify-between items-center'>Gift Cards <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5">
                                                <path fillRule="evenodd" d="M16.28 11.47a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 011.06-1.06l7.5 7.5z" clipRule="evenodd" />
                                            </svg></p>

                                            <ul>

                                            </ul>
                                        </li>
                                        <li className='pl-8 py-3 cursor-pointer pr-4 hover:bg-gray-200'>
                                            #FoundItOnAmazon
                                        </li>
                                        <li className='pl-8 py-3 cursor-pointer pr-4 hover:bg-gray-200'>
                                            <p className='flex justify-between items-center'>Amazon Live <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5">
                                                <path fillRule="evenodd" d="M16.28 11.47a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 011.06-1.06l7.5 7.5z" clipRule="evenodd" />
                                            </svg></p>

                                            <ul>

                                            </ul>
                                        </li>
                                        <li className='pl-8 py-3 cursor-pointer pr-4 hover:bg-gray-200'>
                                            <p className='flex justify-between items-center'>International Shopping <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5">
                                                <path fillRule="evenodd" d="M16.28 11.47a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 011.06-1.06l7.5 7.5z" clipRule="evenodd" />
                                            </svg></p>

                                            <ul>

                                            </ul>
                                        </li>
                                    </ul>
                                    <hr />
                                </div>
                                <div>
                                    <h2 className="sidebar_title text-xl font-medium mt-4 ml-8 mb-2">Help &amp; Settings</h2>
                                    <ul className='my-2'>
                                        <li className='pl-8 py-3 cursor-pointer pr-4 hover:bg-gray-200'>
                                            Your Account
                                        </li>
                                        <li className='pl-8 py-3 cursor-pointer pr-4 hover:bg-gray-200'>
                                            <p className='flex items-center gap-2'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
                                            </svg>

                                                English</p>

                                            <ul>

                                            </ul>
                                        </li>
                                        <li className='pl-8 py-3 cursor-pointer pr-4 hover:bg-gray-200'>
                                            <p className='flex gap-2 items-center'> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
                                            </svg>
                                                United States</p>

                                            <ul>

                                            </ul>
                                        </li>
                                        <li className='pl-8 py-3 cursor-pointer pr-4 hover:bg-gray-200'>
                                            Customer Service
                                        </li>
                                        <li className='pl-8 py-3 cursor-pointer pr-4 hover:bg-gray-200'>
                                            Sign in
                                        </li>
                                    </ul>
                                    <hr />
                                </div>
                            </div>
                        </div>

                        <div
                            onClick={() => document.querySelector("#sidebar").classList.add("hidden")}
                            className='sidebar_close z-10 absolute top-4 ml-2 left-96 cursor-pointer'>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-9 text-white">
                                <path fillRule="evenodd" d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z" clipRule="evenodd" />
                            </svg>
                        </div>
                    </div>
                </div>

                {/* Bottom Right */}
                <div>
                    <ul className='bottom-right flex gap-3 overflow-x-scroll md:overflow-hidden w-screen whitespace-nowrap'>
                        <li className='border border-transparent hover:border-white cursor-pointer p-1 select-none'>Today&apos;s Deals</li>
                        <li className='border border-transparent hover:border-white cursor-pointer p-1 select-none'>Customer Service</li>
                        <li className='border border-transparent hover:border-white cursor-pointer p-1 select-none'>Registry</li>
                        <li className='border border-transparent hover:border-white cursor-pointer p-1 select-none'>Gift Cards</li>
                        <li className='border border-transparent hover:border-white cursor-pointer p-1 select-none'>Sell</li>
                    </ul>
                </div>
            </div>
        </header>
    )
}

export default Header