import { useRouter } from 'next/router';
import React from 'react'
import Code from './Code'
import Footer from './Footer';
import Sidebar from './Sidebar'

function Layout({ children }) {
    const router = useRouter();

    const [clicked, setClicked] = React.useState(false);

    const clickeHandler = () => {
        setClicked((prev) => !prev)
    };

    return (
        <>
            <Sidebar isClicked={clicked} setIsClicked={setClicked} />

            <div className={`lg:ml-52 my_transition transition relative`}>
                <header className='lg:hidden w-screen min-h-12 fixed top-0 left-0 z-10 shadow px-4 py-1 header'>
                    <div className='flex items-center justify-between'>
                        <div onClick={clickeHandler} className={`z-50 cursor-pointer transition`}>
                            {
                                clicked ? <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                                </svg> : <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12H12m-8.25 5.25h16.5" />
                                </svg>
                            }
                        </div>
                        <div className='whitespace-nowrap w-full flex flex-col items-center'>
                            <p onClick={() => router.push("/")} className="text-xl font-medium cursor-pointer w-fit">Mohammad Rahi</p>
                            <p className="text-transparent bg-gradient-to-r from-primary-text to-secondary-text bg-clip-text text-sm">Front-End Developer</p>
                        </div>
                    </div>
                </header>

                <main className='mt-12 lg:mt-0 py-1 max-w-7xl mx-auto'>
                    {/* Opening Html and Body tags */}
                    <Code element="html" close={false} br />
                    <div className="ml-4 inline-block">
                        <Code element="body" close={false} />
                    </div>

                    {/* Content */}
                    <div className='ml-6'>
                        {children}
                    </div>

                    {/* Closing Html and Body tags */}
                    <div className="ml-3">
                        <Code element="body" open={false} />
                    </div>
                    <Code element="html" open={false} />
                </main>
                
                <Footer />
            </div>
        </>
    )
}

export default Layout