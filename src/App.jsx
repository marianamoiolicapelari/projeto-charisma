import { useState } from 'react'

import Sidebar from '../src/components/sidebar'
import Navbar from '../src/components/navbar'
import Main from '../src/components/main'
import Footer from '../src/components/footer'

import { Wrapper } from '../src/styles'

function App() {
    const [openSidebarToggle, setOpenSidebarToggle] = useState(false)

    const openSidebar = () => {
        setOpenSidebarToggle((prev) => !prev)
    }

    return (
        <Wrapper>
            <Navbar OpenSidebar={openSidebar} />
            <Sidebar openSidebarToggle={openSidebarToggle} OpenSidebar={openSidebar}/>
            <Main />
            <Footer />
        </Wrapper>
    )
}

export default App
