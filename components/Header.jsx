import Image from 'next/image'
import Link from 'next/link'
import Sidebar from './Sidebar'

const Header = () => {
    return (
        <header>
            <div className='overflow-hidden'>
                {/* Header Top */}
                <div className='bg-[#232f3e] md:bg-[#131921] flex items-center p-1 px-2 flex-grow'>
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
                                src="/assets/images/amazon_logo.png"
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
                        <Link href="/signin">
                            <div className='border border-transparent hover:border-white cursor-pointer py-1 select-none px-1'>
                                <p>Hello, Sign In</p>
                                <p className='font-bold text-sm hidden lg:block'>Accounts &amp; Lists</p>
                            </div>
                        </Link>
                        <div className='hidden lg:block border border-transparent hover:border-white cursor-pointer py-1 select-none px-1'>
                            <p>Returns</p>
                            <p className='font-bold text-sm'>&amp; Orders</p>
                        </div>

                        <div className='flex items-center flex-col border border-transparent hover:border-white cursor-pointer py-1 select-none px-1'>
                            <span className='font-bold text-base text-orange-400 -m-1 -mr-1 md:mr-4'>0</span>
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
                <div className='bg-[#232f3e] flex items-center p-1 px-3 text-white text-sm font-medium'>
                    {/* Bottom Left */}
                    <div onClick={() => document.querySelector("#sidebar").classList.toggle("hidden")} className='hidden md:block border border-transparent hover:border-white cursor-pointer p-1 mr-3 select-none'>
                        <p className='flex items-center gap-1 font-bold'>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6">
                                <path fillRule="evenodd" d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z" clipRule="evenodd" />
                            </svg>
                            <span>All</span>
                        </p>
                    </div>

                    <Sidebar />

                    <div className='flex flex-col gap-2'>
                        <div className="search flex md:hidden items-center h-10 flex-grow rounded-md bg-orange-300 focus-within:border-orange-500 focus-within:border-2 mr-6 text-black">
                            <input type="text" className='p-2 h-full flex-grow flex-shrink focus:outline-none px-2 rounded-l-md font-normal' placeholder='Search Amazon' />

                            <div className="search_icon_wrapper bg-orange-300 rounded-md p-2">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                                </svg>
                            </div>
                        </div>

                        {/* Bottom Right */}
                        <div>
                            <ul className='bottom-right flex gap-3 overflow-x-scroll md:overflow-hidden w-screen whitespace-nowrap'>
                                <li className='border border-transparent hover:border-white cursor-pointer p-1 select-none'>Today&apos;s Deals</li>
                                <li className='border border-transparent hover:border-white cursor-pointer p-1 select-none'>Customer Service</li>
                                <li className='border border-transparent hover:border-white cursor-pointer p-1 select-none'>Registry</li>
                                <li className='border border-transparent hover:border-white cursor-pointer p-1 select-none'>Gift Cards</li>
                                <li className='border border-transparent hover:border-white cursor-pointer p-1 select-none mr-6'>Sell</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header