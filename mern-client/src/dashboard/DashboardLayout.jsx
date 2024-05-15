
import React from 'react'
import { Outlet } from 'react-router-dom'
import { SideBar } from './SideBar'
import AtHomeLogo from '../assets/AtHome.png';
import IronPikeStudioLogo from '../assets/Iron-pike-studio.png';
import DriveroLogo from '../assets/Drivero.png';


const DashboardLayout = () => {
    return (
        <div>
            <div className='flex gap-4 flex-col md:flex-row bg-tan'>
                <SideBar/>
                <Outlet/>
            </div>
            <p className='font-bold border-b text-center font-size:'>Sponsors:</p>
            <div className='flex justify-around m-1'>
                <img className='h-60 w-60 rounded-lg' src={AtHomeLogo} alt="logo"/>
                <img className='h-60 w-72 rounded-lg' src={IronPikeStudioLogo} alt="logo"/>
                <img className='h-60 w-64 rounded-lg' src={DriveroLogo} alt="logo"/>
            </div>
        </div>
        
    )
}

export default DashboardLayout