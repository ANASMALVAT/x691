import React, { Component } from 'react'

const UserInfoHeader = () => {
    return<>
                <div className='flex gap-4 mt-4 mb-4 flex-wrap '>
                    <div className='user-info  bg-[#890023] rounded-md h-16 min-h-16 px-4 py-2 min-w-[235px] max-w-[235px] overflow-auto'>
                        <h2 className='text-white font-mono'>full name</h2>
                    </div>
                    <div className=' user-info bg-[#890023] rounded-md h-18 min-h-18 px-4 py-2 min-w-[200px] max-w-[200px] overflow-auto '>
                        <h2 className='text-white font-mono'>user name</h2>
                    </div>
                    <div className='user-info bg-[#890023] rounded-md h-18 min-h-18 px-4 py-2 min-w-[200px] max-w-[200px] overflow-auto '>
                        <h2 className='text-white font-mono'>user id</h2>
                    </div>
                    <div className='user-info bg-[#890023] rounded-md h-18 min-h-18 px-4 py-2 min-w-[200px] max-w-[200px] overflow-auto'>
                        <h2 className='text-white font-mono'>user state</h2>
                    </div>
                    <div className='user-info bg-[#890023] rounded-md h-18 min-h-18 px-4 py-2 min-w-[250px] max-w-[250px] overflow-auto'>
                        <h2 className='text-white font-mono break-words whitespace-pre-wrap'>user url</h2>
                    </div>
                    <button className='px-2 w-20'></button>
                </div>
    </>
}

export default UserInfoHeader;