import React from 'react'
import Code from './Code'
import Sidebar from './Sidebar'

function Layout({ children }) {
    return (
        <>
            <Sidebar />
            <div className="ml-52 max-w-7xl p-4">

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