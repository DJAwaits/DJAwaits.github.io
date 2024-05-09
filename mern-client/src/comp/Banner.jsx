import React from 'react'
import BannerCard from '../home/BannerCard'

const Banner = () => {
  return (
    <div className='px-4 lg:px-24 bg-tan flex items-center'>
      <div className='flex w-full flex-col md:flex-row justify-between items-center gap-12 py-40'>
        <div className='md:w-1/2 space-y-8 h-full'>
            <h2 className='text-5x1 font bold leading-snug text-black text-bold text-3xl'>Search across <span className='text-blue-700'>
                media</span></h2>
            <p className='md:w-4/5'>Find new titles to consume across different media types based on your prefernces with multiple seach types, there are over 70k titles across books, tv, anime etc.</p>
            <div>
                <a href='https://reccomender-7ckb5mzvqoyqunerf8haxa.streamlit.app/'>
                    <button className='bg-gunmetal px-6 py-2 text-white font-medium hover:bg-black transition-all ease-in duration-200'>Search</button>
                </a>
            </div>
        </div>
        {/* banner cards */}
        <div>
          <BannerCard></BannerCard>
        </div>
      </div>
    </div>
  )
}

export default Banner
