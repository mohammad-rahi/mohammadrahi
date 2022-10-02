import React from 'react'
import Sidebar from './Sidebar'

function Layout({ children }) {
    return (
        <>
            <Sidebar />
            <div className="ml-52">
                {children}
            </div>
        </>
    )
}

export default Layout