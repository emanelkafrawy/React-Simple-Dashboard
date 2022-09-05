import React, { useState } from 'react'
import logo2 from '../assets/logo2.png'
import user from '../assets/user.png'
import MenuList from "./MenuList"
const SideMenu = (props) => {
    const [inactive, setInactive] = useState(false)
    const [disappear, setDisappear] = useState(false)
    return (
        <div className={`side ${inactive ? 'inactive' : ''}`}>
            <div className='top-section'>
                <div className='logo'>
                    <img src={logo2} alt={"logo"} />
                </div>
                <div className='toggle-btn' onClick={() => { setInactive(!inactive) }}>
                    {inactive ?
                        <i class="bi bi-arrow-right-square-fill"></i>
                        :
                        <i class="bi bi-arrow-left-square-fill"></i>
                    }
                </div>
            </div>
            <div className='search-controller'>
                <button className="search-btn">
                    <i class="bi bi-search"></i>
                </button>
                <input type="text" placeholder='Search..' />
            </div>
            <div className='divider'></div>
            <MenuList setDisappear={setDisappear} disappear={disappear} />
            <div className='side-footer'>
                <div className='avatar'>
                    <img src={user} />
                </div>
                <div className='user-info'>
                    <h4>Eman Elkafrawy</h4>
                    <p>emanelkafrawy2018@gmail.com</p>

                </div>
            </div>
        </div>
    )
}

export default SideMenu