import Link from 'next/link'
import React from 'react'

const Sidebar = () => {
    return (
        <div id="sidebar" className='hidden fixed top-0 left-0 w-screen h-screen z-50'>
            <div
                onClick={() => document.querySelector("#sidebar").classList.add("hidden")}
                className='absolute top-0 left-0 w-screen h-screen bg-[#000000bb]'></div>
            <div className='flex relative'>
                <div className='h-screen fixed w-[85%] max-w-xs min-w-[200px] sm:w-96 sm:max-w-none bg-white'>
                    <div className="sidebar_header text-xl font-medium bg-black py-2 pl-8 select-none">
                        <Link href="/signin">
                            <p className='flex gap-2 items-center cursor-pointer'>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8">
                                    <path fillRule="evenodd" d="M18.685 19.097A9.723 9.723 0 0021.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 003.065 7.097A9.716 9.716 0 0012 21.75a9.716 9.716 0 006.685-2.653zm-12.54-1.285A7.486 7.486 0 0112 15a7.486 7.486 0 015.855 2.812A8.224 8.224 0 0112 20.25a8.224 8.224 0 01-5.855-2.438zM15.75 9a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" clipRule="evenodd" />
                                </svg>
                                Hello, sign in
                            </p>
                        </Link>
                    </div>

                    <div className="sidebar_menu text-black overflow-y-scroll h-full select-none">
                        <div>
                            <h2 className="sidebar_title text-xl font-medium mt-4 ml-8 mb-2">Digital Content &amp; Devices</h2>
                            <ul className='my-2'>
                                <li
                                    className='pl-8 py-3 cursor-pointer pr-4 hover:bg-gray-200 relative'
                                // onClick={() => document.getElementById("sub_menu").classList.remove("left-96")}
                                >
                                    <p className='flex justify-between items-center'>Amazon Music <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5">
                                        <path fillRule="evenodd" d="M16.28 11.47a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 011.06-1.06l7.5 7.5z" clipRule="evenodd" />
                                    </svg></p>

                                    {/* <ul id="sub_menu" className='absolute top-0 left-96 transition bg-white'>
                                        <h2 className="sidebar_title text-xl font-medium mt-4 ml-8 mb-2">Stream Music</h2>
                                        <ul className='my-2'>
                                            <li className='pl-8 py-3 cursor-pointer pr-4 hover:bg-gray-200'>
                                                Amazon Music Unlimited
                                            </li>
                                            <li className='pl-8 py-3 cursor-pointer pr-4 hover:bg-gray-200'>
                                                Free Streaming Music
                                            </li>
                                            <li className='pl-8 py-3 cursor-pointer pr-4 hover:bg-gray-200'>
                                                Podcasts
                                            </li>
                                            <li className='pl-8 py-3 cursor-pointer pr-4 hover:bg-gray-200'>
                                                Play Music
                                            </li>
                                            <li className='pl-8 py-3 cursor-pointer pr-4 hover:bg-gray-200'>
                                                Open Web Player
                                            </li>
                                            <li className='pl-8 py-3 cursor-pointer pr-4 hover:bg-gray-200'>
                                                Download the app
                                            </li>
                                        </ul>
                                    </ul> */}
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
                                    </svg> বাংলা</p>
                                    <ul>

                                    </ul>
                                </li>
                                <li className='pl-8 py-3 cursor-pointer pr-4 hover:bg-gray-200'>
                                    <p className='flex gap-2 items-center'> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 3v1.5M3 21v-6m0 0l2.77-.693a9 9 0 016.208.682l.108.054a9 9 0 006.086.71l3.114-.732a48.524 48.524 0 01-.005-10.499l-3.11.732a9 9 0 01-6.085-.711l-.108-.054a9 9 0 00-6.208-.682L3 4.5M3 15V4.5" />
                                    </svg>
                                        Bangladesh</p>
                                    <ul>

                                    </ul>
                                </li>
                                <li className='pl-8 py-3 cursor-pointer pr-4 hover:bg-gray-200'>
                                    Customer Service
                                </li>
                                <Link href="/signin">
                                    <li className='pl-8 py-3 cursor-pointer pr-4 hover:bg-gray-200'>
                                        Sign in
                                    </li>
                                </Link>
                            </ul>
                            <br /><br /><br />
                        </div>
                    </div>
                </div>

                <div
                    onClick={() => document.querySelector("#sidebar").classList.add("hidden")}
                    className='sidebar_close z-10 absolute top-4 ml-2 hidden sm:left-96 sm:block cursor-pointer'>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-9 text-white">
                        <path fillRule="evenodd" d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z" clipRule="evenodd" />
                    </svg>
                </div>
            </div>
        </div>
    )
}

export default Sidebar