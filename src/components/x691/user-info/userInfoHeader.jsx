import React, { useState,useEffect } from 'react'

const UserInfoHeader = () => {

    return<>

                <div className='flex gap-4 mt-4 mb-4 flex-wrap justify-center items-center w-full '>
                    <div className='  bg-[#890023] rounded-md h-14 min-h-14 px-4 py-2 min-w-[225px] max-w-[225px] overflow-auto'>
                        <h2 className='text-white font-mono'>full name</h2>
                    </div>
                    <div className='  bg-[#890023] rounded-md h-14 min-h-14 px-4 py-2 min-w-[200px] max-w-[200px] overflow-auto mr-28 '>
                        <h2 className='text-white font-mono'>user name</h2>
                    </div>
                </div>
    </>
}

export default UserInfoHeader;