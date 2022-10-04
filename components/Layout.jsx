import React from 'react'
import Code from './Code'
import Sidebar from './Sidebar'

function Layout({ children }) {
    const [clicked, setClicked] = React.useState(false);

    const clickeHandler = () => {
        setClicked((prev) => !prev)
    };

    return (
        <>
            <Sidebar isClicked={clicked} setIsClicked={setClicked} />

            <div className={`${clicked && "md:ml-52"} max-w-7xl mx-auto p-4 relative`}>

                <div onClick={clickeHandler} className={`absolute top-4 right-4 cursor-pointer transition z-20`}>
                    {
                        clicked ? <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                        </svg> : <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12H12m-8.25 5.25h16.5" />
                        </svg>
                    }
                </div>

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

            </div>
        </>
    )
}

export default Layout