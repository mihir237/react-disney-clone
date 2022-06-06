import React from 'react'

const Movies = () => {
    const rows = [];
    for (var i = 0; i < 10; i++) {
        rows.push(i);
        console.log(i)
    }
    return (
        <div className='mx-[40px] pt-[20px]'>
            <h4 className='py-[20px] text-xl font-bold '>Recommended for you</h4>
            <div className='grid grid-cols-5 gap-[25px] overflow-hidden pt-[30px] '>
            {/* <div className=''>
                    <img className=' rounded-[10px] transition ease-in-out delay-200 hover:-translate-y-1 hover:scale-[1.16] hover:translate-x-6    duration-300 ' alt="M" src={`https://picsum.photos/630/357` }></img>
                </div> */}
             {rows.map((row , index)=>(
                <div className=''>
                    <img key={index} className={` rounded-[10px] transition ease-in-out delay-200 hover:-translate-y-1 hover:scale-[1.16]  ${row%5 ? '' : 'hover:translate-x-6'} ${row%5===4 ? 'hover:-translate-x-6' : ''}   duration-300`}  alt="M" src={`https://picsum.photos/630/357?random=${row}` }></img>
                    {console.log(row%5)}
                </div>
                ))}
{/* {data.map((data , index)=>(
                <div className=''>
                    {data}
                </div>
                ))} */}
                
            </div>
        </div>
    )
}

export default Movies