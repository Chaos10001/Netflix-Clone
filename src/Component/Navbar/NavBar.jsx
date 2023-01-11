import React, { useState } from 'react'
import { Bell, CaretDownFill, Search } from 'react-bootstrap-icons'
import './NavBar.scss'

const NavBar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    window.onscroll=()=>{
        setIsScrolled(window.pageYOffset === 0 ? false : true)
        return ()=> (window.onscroll = null)
    }
  return (
    <div className={isScrolled ? 'navbar scrolled' : 'navbar'}>
        <div className="container">
            <div className="left">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/150px-Netflix_2015_logo.svg.png" alt="" />
                <span>Homepage</span>
                <span>Series</span>
                <span>Movies</span>
                <span>New and Popular</span>
                <span>My List</span>
            </div>
            <div className="right">
                <Search className='icon'/>
                <span>KID</span>
                <Bell className='icon'/>
                <img src="data:image/jpeg;base64,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" alt="" />
                <div className="profile">
                    <CaretDownFill className='icon'/>
                    <div className="options">
                        <span>Settings</span>
                        <span>Logout</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default NavBar