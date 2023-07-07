import React from 'react'
import  './navbar.scss'
import { SearchOutlined ,NotificationAddOutlined} from '@mui/icons-material'
import profileImg from './../../assets/profile.png'
 const Navbar = () => {
  return (
    <div className='navbar'>
        <div className='title'>Dashboard</div>
        <div className='navigation'>
            <div className='searchBar'>
            <input type="text" id='search' name='search' placeholder='Search..'/>
            <label htmlFor="search"><SearchOutlined/></label>
            </div>
            <NotificationAddOutlined />
            <img src={profileImg} alt="avatar" className='avatar' />
        </div>
    </div>
  )
}

export default Navbar;
