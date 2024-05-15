import React from 'react'
import Banner from '../comp/Banner'
import FavoriteBooks from './FavoriteBooks'
import AtHomeLogo from '../assets/AtHome.png';
import IronPikeStudioLogo from '../assets/Iron-pike-studio.png';
import DriveroLogo from '../assets/Drivero.png';

const Home = () => {
  return (
    <div className=''>
      <Banner/>
      <FavoriteBooks/>
      <p className='font-bold border-b text-center m-1'>Sponsors:</p>
      <div className='flex justify-around'>
        <img className='h-60 w-60 rounded-lg' src={AtHomeLogo} alt="logo"/>
        <img className='h-60 w-72 rounded-lg' src={IronPikeStudioLogo} alt="logo"/>
        <img className='h-60 w-64 rounded-lg' src={DriveroLogo} alt="logo"/>
      </div>
    </div>
  )
}

export default Home
