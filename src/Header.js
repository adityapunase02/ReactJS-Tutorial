import React from 'react' 

import './Header.css' 

import SearchIcon from '@mui/icons-material/Search'; 
import HeaderOption from './HeaderOption';
import HomeIcon from '@mui/icons-material/Home';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import ChatIcon from '@mui/icons-material/Chat';
import NotificationsIcon from '@mui/icons-material/Notifications';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import AppsRoundedIcon from '@mui/icons-material/AppsRounded';
function Header() { 

  return ( 

    <div className='header'> 

        <div className="header__left"> 

            <img src="https://cdn-icons-png.flaticon.com/128/174/174857.png" alt="" /> 

            <div className="header__search"> 

                <SearchIcon /> 

                <input type="text" /> 

            </div> 

        </div> 

        <div className="header__right"> 
            <HeaderOption Icon={HomeIcon} title='Home'/>
            <HeaderOption Icon={SupervisorAccountIcon} title='My Network'/>
            <HeaderOption Icon={BusinessCenterIcon} title="Jobs"/>
            <HeaderOption Icon={ChatIcon} title="Messaging"/>
            <HeaderOption Icon={NotificationsIcon} title="Notifications" />
            <HeaderOption Icon={AccountCircleIcon} title='Me'/>
            <HeaderOption Icon={AppsRoundedIcon} title='Work'/>
            

        </div> 
    </div> 

  ) 

} 

 
 

export default Header 