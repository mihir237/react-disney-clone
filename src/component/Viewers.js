import React from 'react'

const Viewers = () => {
    return (
        <div className='viewers grid grid-cols-5 mt-[20px] px-[40px] pt-[25px] gap-[25px]	'>
            <div className='border-[3px] border-[#f9f9f91a]  rounded-[10px] h-[90%] transition ease-in-out delay-200 hover:-translate-y-1 hover:scale-110    duration-300'>
                <img className='w-[100%] h-[100%]' alt="M" src="/images/viewers-disney.png"></img>
            </div>
            <div className='border-[3px] border-[#f9f9f91a] rounded-[10px] h-[90%] transition ease-in-out delay-200 hover:-translate-y-1 hover:scale-110    duration-300'>
                <img className='w-[100%] h-[100%]' alt="M" src="/images/viewers-marvel.png"></img>
            </div>
            <div className='border-[3px] border-[#f9f9f91a] rounded-[10px] h-[90%] transition ease-in-out delay-200 hover:-translate-y-1 hover:scale-110    duration-300'>
                <img className='w-[100%] h-[100%]' alt="M" src="/images/viewers-national.png"></img>
            </div>
            <div className='border-[3px] border-[#f9f9f91a] rounded-[10px] h-[90%] transition ease-in-out delay-200 hover:-translate-y-1 hover:scale-110    duration-300'>
                <img className='w-[100%] h-[100%]' alt="M" src="/images/viewers-pixar.png"></img>
            </div>
            <div className='border-[3px] border-[#f9f9f91a] rounded-[10px] h-[90%] transition ease-in-out delay-200 hover:-translate-y-1 hover:scale-110    duration-300'>
                <img className='w-[100%] h-[100%]'  alt="M" src="/images/viewers-starwars.png"></img>
            </div>
        </div>
    )
}

export default Viewers