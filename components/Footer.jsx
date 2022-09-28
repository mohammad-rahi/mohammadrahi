import Image from "next/image";

const Footer = () => {
    return (
        <footer className="text-white">
            <a
                href="#"
                className="p-4 bg-[#37475a] hover:bg-[#3f4f5f] text-sm font-medium text-center select-none block"
            >
                Back to Top
            </a>
            <div className="bg-[#232f3e]">
                <div className="hidden lg:grid grid-cols-4 max-w-4xl mx-auto py-10">
                    <div>
                        <h3 className="font-bold">Get to Know Us</h3>
                        <p className="hover:underline cursor-pointer text-sm my-2">Careers</p>
                        <p className="hover:underline cursor-pointer text-sm my-2">Blog</p>
                        <p className="hover:underline cursor-pointer text-sm my-2">About Amazon</p>
                        <p className="hover:underline cursor-pointer text-sm my-2">Investor Relations</p>
                        <p className="hover:underline cursor-pointer text-sm my-2">Amazon Science</p>
                    </div>
                    <div>
                        <h3 className="font-bold">Make Money with Us</h3>
                        <p className="hover:underline cursor-pointer text-sm my-2">Sell products on Amazon</p>
                        <p className="hover:underline cursor-pointer text-sm my-2">Sell on Amazon Business</p>
                        <p className="hover:underline cursor-pointer text-sm my-2">Sell apps on Amazon</p>
                        <p className="hover:underline cursor-pointer text-sm my-2">Become an Affiliate</p>
                        <p className="hover:underline cursor-pointer text-sm my-2">Advertise Your Products</p>
                        <p className="hover:underline cursor-pointer text-sm my-2">Self-Publish with Us</p>
                        <p className="hover:underline cursor-pointer text-sm my-2">Host an Amazon Hub</p>
                        <p className="hover:underline cursor-pointer text-sm my-2">› See More Make Money with Us</p>
                    </div>
                    <div>
                        <h3 className="font-bold">Amazon Payment Products</h3>
                        <p className="hover:underline cursor-pointer text-sm my-2">Amazon Business Card</p>
                        <p className="hover:underline cursor-pointer text-sm my-2">Shop with Points</p>
                        <p className="hover:underline cursor-pointer text-sm my-2">Reload Your Balance</p>
                        <p className="hover:underline cursor-pointer text-sm my-2">Amazon Currency Converter</p>
                    </div>
                    <div>
                        <h3 className="font-bold">Let Us Help You</h3>
                        <p className="hover:underline cursor-pointer text-sm my-2">Amazon and COVID-19</p>
                        <p className="hover:underline cursor-pointer text-sm my-2">Your Account</p>
                        <p className="hover:underline cursor-pointer text-sm my-2">Your Orders</p>
                        <p className="hover:underline cursor-pointer text-sm my-2">Shipping Rates &amp; Policies</p>
                        <p className="hover:underline cursor-pointer text-sm my-2">Returns &amp; Replacements</p>
                        <p className="hover:underline cursor-pointer text-sm my-2">Manage Your Content and Devices</p>
                        <p className="hover:underline cursor-pointer text-sm my-2">Amazon Assistant</p>
                        <p className="hover:underline cursor-pointer text-sm my-2">Help</p>
                    </div>
                </div>
                <div className="grid lg:hidden grid-cols-2 text-sm py-4 px-3">
                    <div>
                        <p className="cursor-pointer my-2">Amazon.com</p>
                        <p className="cursor-pointer my-2">Your Lists</p>
                        <p className="cursor-pointer my-2">Find a Gift</p>
                        <p className="cursor-pointer my-2">Browsing History</p>
                        <p className="cursor-pointer my-2">Returns</p>
                    </div>
                    <div>
                        <p className="cursor-pointer my-2">Your Orders</p>
                        <p className="cursor-pointer my-2">Gift Cards &amp; Registry</p>
                        <p className="cursor-pointer my-2">Your Account</p>
                        <p className="cursor-pointer my-2">Sell products on Amazon</p>
                        <p className="cursor-pointer my-2">Your Recalls and Product Safety Alerts</p>
                        <p className="cursor-pointer my-2">Customar Service</p>
                    </div>
                </div>
                <span className="h-0 lg:h-[1px] bg-slate-600 block" ></span>
                <div className="hidden lg:flex gap-24 items-center justify-center py-8">
                    <Image
                        src="/assets/images/amazon_logo.png"
                        alt="Amazon Logo"
                        width={120}
                        height={40}
                        objectFit="contain"
                    />
                    <div className="flex gap-2">
                        <div className="border rounded flex items-center p-1 gap-1 cursor-pointer">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
                            </svg>
                            বাংলা
                        </div>
                        <div className="border rounded flex items-center p-1 gap-1 cursor-pointer">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 7.5l.415-.207a.75.75 0 011.085.67V10.5m0 0h6m-6 0h-1.5m1.5 0v5.438c0 .354.161.697.473.865a3.751 3.751 0 005.452-2.553c.083-.409-.263-.75-.68-.75h-.745M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            BDT - Bangladeshi Taka
                        </div>
                        <div className="border rounded flex items-center p-1 gap-1 cursor-pointer">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3 3v1.5M3 21v-6m0 0l2.77-.693a9 9 0 016.208.682l.108.054a9 9 0 006.086.71l3.114-.732a48.524 48.524 0 01-.005-10.499l-3.11.732a9 9 0 01-6.085-.711l-.108-.054a9 9 0 00-6.208-.682L3 4.5M3 15V4.5" />
                            </svg>
                            Bangladesh
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-[#131a22] py-6">
                <div className="hidden lg:grid grid-cols-7 gap-12 max-w-4xl mx-auto text-xs">
                    <div className="flex flex-col gap-2">
                        <div className="hover:underline cursor-pointer my-2">
                            <h6 className="font-medium">Amazon Music</h6>
                            <p className="font-[300] text-gray-300">Stream millions <br /> of songs</p>
                        </div>
                        <div className="hover:underline cursor-pointer my-2">
                            <h6 className="font-medium">Amazon Music</h6>
                            <p className="font-[300] text-gray-300">Stream millions <br /> of songs</p>
                        </div>
                        <div className="hover:underline cursor-pointer my-2">
                            <h6 className="font-medium">Amazon Music</h6>
                            <p className="font-[300] text-gray-300">Stream millions <br /> of songs</p>
                        </div>
                        <div className="hover:underline cursor-pointer my-2">
                            <h6 className="font-medium">Amazon Music</h6>
                            <p className="font-[300] text-gray-300">Stream millions <br /> of songs</p>
                        </div>
                    </div>
                    <div className="flex flex-col gap-2">
                        <div className="hover:underline cursor-pointer my-2">
                            <h6 className="font-medium">Amazon Music</h6>
                            <p className="font-[300] text-gray-300">Stream millions <br /> of songs</p>
                        </div>
                        <div className="hover:underline cursor-pointer my-2">
                            <h6 className="font-medium">Amazon Music</h6>
                            <p className="font-[300] text-gray-300">Stream millions <br /> of songs</p>
                        </div>
                        <div className="hover:underline cursor-pointer my-2">
                            <h6 className="font-medium">Amazon Music</h6>
                            <p className="font-[300] text-gray-300">Stream millions <br /> of songs</p>
                        </div>
                        <div className="hover:underline cursor-pointer my-2">
                            <h6 className="font-medium">Amazon Music</h6>
                            <p className="font-[300] text-gray-300">Stream millions <br /> of songs</p>
                        </div>
                        <div className="hover:underline cursor-pointer my-2">
                            <h6 className="font-medium">Amazon Music</h6>
                            <p className="font-[300] text-gray-300">Stream millions <br /> of songs</p>
                        </div>
                    </div>
                    <div className="flex flex-col gap-2">
                        <div className="hover:underline cursor-pointer my-2">
                            <h6 className="font-medium">Amazon Music</h6>
                            <p className="font-[300] text-gray-300">Stream millions <br /> of songs</p>
                        </div>
                        <div className="hover:underline cursor-pointer my-2">
                            <h6 className="font-medium">Amazon Music</h6>
                            <p className="font-[300] text-gray-300">Stream millions <br /> of songs</p>
                        </div>
                        <div className="hover:underline cursor-pointer my-2">
                            <h6 className="font-medium">Amazon Music</h6>
                            <p className="font-[300] text-gray-300">Stream millions <br /> of songs</p>
                        </div>
                        <div className="hover:underline cursor-pointer my-2">
                            <h6 className="font-medium">Amazon Music</h6>
                            <p className="font-[300] text-gray-300">Stream millions <br /> of songs</p>
                        </div>
                        <div className="hover:underline cursor-pointer my-2">
                            <h6 className="font-medium">Amazon Music</h6>
                            <p className="font-[300] text-gray-300">Stream millions <br /> of songs</p>
                        </div>
                    </div>
                    <div className="flex flex-col gap-2">
                        <div className="hover:underline cursor-pointer my-2">
                            <h6 className="font-medium">Amazon Music</h6>
                            <p className="font-[300] text-gray-300">Stream millions <br /> of songs</p>
                        </div>
                        <div className="hover:underline cursor-pointer my-2">
                            <h6 className="font-medium">Amazon Music</h6>
                            <p className="font-[300] text-gray-300">Stream millions <br /> of songs</p>
                        </div>
                        <div className="hover:underline cursor-pointer my-2">
                            <h6 className="font-medium">Amazon Music</h6>
                            <p className="font-[300] text-gray-300">Stream millions <br /> of songs</p>
                        </div>
                        <div className="hover:underline cursor-pointer my-2">
                            <h6 className="font-medium">Amazon Music</h6>
                            <p className="font-[300] text-gray-300">Stream millions <br /> of songs</p>
                        </div>
                        <div className="hover:underline cursor-pointer my-2">
                            <h6 className="font-medium">Amazon Music</h6>
                            <p className="font-[300] text-gray-300">Stream millions <br /> of songs</p>
                        </div>
                    </div>
                    <div className="flex flex-col gap-2">
                        <div className="hover:underline cursor-pointer my-2">
                            <h6 className="font-medium">Amazon Music</h6>
                            <p className="font-[300] text-gray-300">Stream millions <br /> of songs</p>
                        </div>
                        <div className="hover:underline cursor-pointer my-2">
                            <h6 className="font-medium">Amazon Music</h6>
                            <p className="font-[300] text-gray-300">Stream millions <br /> of songs</p>
                        </div>
                        <div className="hover:underline cursor-pointer my-2">
                            <h6 className="font-medium">Amazon Music</h6>
                            <p className="font-[300] text-gray-300">Stream millions <br /> of songs</p>
                        </div>
                        <div className="hover:underline cursor-pointer my-2">
                            <h6 className="font-medium">Amazon Music</h6>
                            <p className="font-[300] text-gray-300">Stream millions <br /> of songs</p>
                        </div>
                        <div className="hover:underline cursor-pointer my-2">
                            <h6 className="font-medium">Amazon Music</h6>
                            <p className="font-[300] text-gray-300">Stream millions <br /> of songs</p>
                        </div>
                    </div>
                    <div className="flex flex-col gap-2">
                        <div className="hover:underline cursor-pointer my-2">
                            <h6 className="font-medium">Amazon Music</h6>
                            <p className="font-[300] text-gray-300">Stream millions <br /> of songs</p>
                        </div>
                        <div className="hover:underline cursor-pointer my-2">
                            <h6 className="font-medium">Amazon Music</h6>
                            <p className="font-[300] text-gray-300">Stream millions <br /> of songs</p>
                        </div>
                        <div className="hover:underline cursor-pointer my-2">
                            <h6 className="font-medium">Amazon Music</h6>
                            <p className="font-[300] text-gray-300">Stream millions <br /> of songs</p>
                        </div>
                        <div className="hover:underline cursor-pointer my-2">
                            <h6 className="font-medium">Amazon Music</h6>
                            <p className="font-[300] text-gray-300">Stream millions <br /> of songs</p>
                        </div>
                        <div className="hover:underline cursor-pointer my-2">
                            <h6 className="font-medium">Amazon Music</h6>
                            <p className="font-[300] text-gray-300">Stream millions <br /> of songs</p>
                        </div>
                    </div>
                    <div className="flex flex-col gap-2">
                        <div className="hover:underline cursor-pointer my-2">
                            <h6 className="font-medium">Amazon Music</h6>
                            <p className="font-[300] text-gray-300">Stream millions <br /> of songs</p>
                        </div>
                        <div className="hover:underline cursor-pointer my-2">
                            <h6 className="font-medium">Amazon Music</h6>
                            <p className="font-[300] text-gray-300">Stream millions <br /> of songs</p>
                        </div>
                        <div className="hover:underline cursor-pointer my-2">
                            <h6 className="font-medium">Amazon Music</h6>
                            <p className="font-[300] text-gray-300">Stream millions <br /> of songs</p>
                        </div>
                        <div className="hover:underline cursor-pointer my-2">
                            <h6 className="font-medium">Amazon Music</h6>
                            <p className="font-[300] text-gray-300">Stream millions <br /> of songs</p>
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-3 lg:hidden gap-4 text-sm">
                    <div className="flex items-center justify-center p-1 gap-1 cursor-pointer">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
                        </svg>
                        বাংলা
                    </div>
                    <div className="flex items-center justify-center p-1 gap-1 cursor-pointer">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 7.5l.415-.207a.75.75 0 011.085.67V10.5m0 0h6m-6 0h-1.5m1.5 0v5.438c0 .354.161.697.473.865a3.751 3.751 0 005.452-2.553c.083-.409-.263-.75-.68-.75h-.745M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        BDT - B.D. Taka
                    </div>
                    <div className="flex items-center justify-center p-1 gap-1 cursor-pointer">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3 3v1.5M3 21v-6m0 0l2.77-.693a9 9 0 016.208.682l.108.054a9 9 0 006.086.71l3.114-.732a48.524 48.524 0 01-.005-10.499l-3.11.732a9 9 0 01-6.085-.711l-.108-.054a9 9 0 00-6.208-.682L3 4.5M3 15V4.5" />
                        </svg>
                        Bangladesh
                    </div>
                </div>
                <div className="text-center text-xs flex flex-col mt-4">
                    <div className="flex justify-center gap-4">
                        <p className="hover:underline cursor-pointer my-2">Conditions of Use</p>
                        <p className="hover:underline cursor-pointer my-2">Privacy Notice</p>
                        <p className="hover:underline cursor-pointer my-2">Interest-Based Ads</p>
                    </div>
                    <div className="-mt-1">© 1996-2022, Amazon.com, Inc. or its affiliates</div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;