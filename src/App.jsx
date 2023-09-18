import { useState } from 'react'

import Sidebar from '../src/components/sidebar'
import Navbar from '../src/components/navbar'
import Footer from '../src/components/footer'

import { Outlet } from 'react-router-dom'


function App() {
    const [openSidebarToggle, setOpenSidebarToggle] = useState(false)

    const openSidebar = () => {
        setOpenSidebarToggle((prev) => !prev)
    }

    return (
        <>            
            <Navbar openSidebar={openSidebar} />
            <Sidebar openSidebarToggle={openSidebarToggle} openSidebar={openSidebar}/>
            <Outlet />
            <Footer />
        </>
    )
}

export default App
