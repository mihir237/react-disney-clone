import React from 'react'

function Header() {
    return (
        <div className='bg-[#090b13] text-white h-[70px] flex items-center justify-between	 px-[36px] z-10'>
            <div className='flex'>
            <img className='w-[80px]' src='/images/logo.svg' alt='Disney'></img>
            <nav className='flex items-center ml-[25px]'>
                <a href="" className='flex items-center	mx-[12px] cursor-pointer  		'>
                    <img className='h-[20px]' src='/images/home-icon.svg' alt='Home'></img>
                    <span className='text-[12px]  tracking-[1.42px] transition ease-in-out delay-100 border-b-2 border-transparent	 hover:border-b-2 hover:border-white '>HOME</span>
                </a>
                <a href="" className='flex items-center	mx-[12px] cursor-pointer  		'>
                    <img className='h-[20px]' src='/images/search-icon.svg' alt='Home'></img>
                    <span className='text-[12px]  tracking-[1.42px] transition ease-in-out delay-100 border-b-2 border-transparent	 hover:border-b-2 hover:border-white '>SEARCH</span>
                </a>
                <a href="" className='flex items-center	mx-[12px] cursor-pointer  		'>
                    <img className='h-[20px]' src='/images/watchlist-icon.svg' alt='Home'></img>
                    <span className='text-[12px]  tracking-[1.42px] transition ease-in-out delay-100 border-b-2 border-transparent	 hover:border-b-2 hover:border-white '>WATCHLIST</span>
                </a>
                <a href="" className='flex items-center	mx-[12px] cursor-pointer  		'>
                    <img className='h-[20px]' src='/images/original-icon.svg' alt='Home'></img>
                    <span className='text-[12px]  tracking-[1.42px] transition ease-in-out delay-100 border-b-2 border-transparent	 hover:border-b-2 hover:border-white '>ORIGINALS</span>
                </a>
                <a href="" className='flex items-center	mx-[12px] cursor-pointer  		'>
                    <img className='h-[20px]' src='/images/movie-icon.svg' alt='Home'></img>
                    <span className='text-[12px]  tracking-[1.42px] transition ease-in-out delay-100 border-b-2 border-transparent	 hover:border-b-2 hover:border-white '>MOVIES</span>
                </a>
                <a href="" className='flex items-center	mx-[12px] cursor-pointer  		'>
                    <img className='h-[20px]' src='/images/series-icon.svg' alt='Home'></img>
                    <span className='text-[12px]  tracking-[1.42px] transition ease-in-out delay-100 border-b-2 border-transparent	 hover:border-b-2 hover:border-white  '>SERIES</span>
                </a>
                <a href="" className='flex items-center	mx-[12px] cursor-pointer  		'>
                    <img className='h-[15px] transition ease-in-out delay-100 	 hover:h-[20px] hover' src='https://www.hotstar.com/assets/4aa70ede8904e16b7630300c09219c8e.svg' alt='Home'></img>
                </a>
            </nav>
            </div>
            <div className='flex items-center cursor-pointer '>
                <img className='w-[48px] h-[48px] rounded-[50%]  ' src='https://i.pravatar.cc/300 '></img>
            </div>
        </div>
    )
}

export default Header