import React from 'react'
import { Link } from 'react-router-dom';

const MenuList = ({ setDisappear, disappear }) => {

    return (
        <div className='main-menu'>
            <ul>
                <li>
                    <a className='menu-item'>
                        <div className='menu-icon'>
                            <i class="bi bi-speedometer2"></i>
                        </div>
                        DashBoard
                    </a>
                </li>
                <li >
                    <a className='menu-item' onClick={() => { setDisappear(!disappear) }}>
                        <div className='menu-icon'>
                            <i class="bi bi-newspaper"></i>
                        </div>
                        Content
                    </a>
                    <ul className={`sub-menu  ${disappear ? '' : 'disappear'}`}>
                        <li>
                            <Link to='/courses'>Courses</Link>
                        </li>
                        <li>
                            <Link to='/form'>Videos</Link>
                        </li>
                    </ul>
                </li>
                <li>
                    <a className='menu-item' >
                        <div className='menu-icon'>
                            <i class="bi bi-vector-pen"></i>
                        </div>
                        Design
                    </a>
                </li>
            </ul>
        </div>
    )
}

export default MenuList;