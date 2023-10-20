import React, { useEffect, useState } from 'react'

const UserCommitHeader = () => 
{   
    return (
        <>
         <div className='flex gap-4 mb-2 mt-4 flex-wrap justify-center'>
                <div className='  bg-[#890023] rounded-md  break-words h-[50px] px-4 py-2 text-center min-w-[240px] max-w-[220px] overflow-auto '>
                    <h2 className='text-white font-mono'>commit id</h2>
                </div>
                <div className=' text-center bg-[#890023] rounded-md  break-words h-[50px] px-4 py-2 min-w-[260px] max-w-[260px] overflow-auto '>
                    <h2 className='text-white font-mono'>commit message</h2>
                </div>
                <div className=' text-center bg-[#890023] rounded-md  break-words h-[50px] px-4 py-2 min-w-[220px] max-w-[220px] overflow-auto '>
                    <h2 className='text-white font-mono'>commit stats</h2>
                </div>
                <div className=' text-center bg-[#890023] rounded-md  break-words h-[50px] px-4 py-2 min-w-[220px] max-w-[220px] overflow-auto '>
                    <h2 className='text-white font-mono'>commit date</h2>
                </div>

            </div>
        </>
    )
}

export default UserCommitHeader;