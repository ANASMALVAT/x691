import React, { Component } from 'react'
import "./styles/userInfo.css"
const UserInfo = ({userInfo}) => {
    return <>
        <div className='flex gap-4 mb-4 flex-wrap'>
            <div className=' user-info bg-[#001930] rounded-md h-18 min-h-18 px-4 py-2 min-w-[200px] max-w-[200px] overflow-auto  border-r-gray-400 border'>
                <h2 className='text-white font-mono'>{userInfo.user_name}</h2>
            </div>
            <div className='user-info bg-[#001930] rounded-md h-18 min-h-18 px-4 py-2 min-w-[200px] max-w-[200px] overflow-auto '>
                <h2 className='text-white font-mono'>{userInfo.user_id}</h2>
            </div>
            <div className='user-info bg-[#001930] rounded-md h-18 min-h-18 px-4 py-2 min-w-[200px] max-w-[200px] overflow-auto '>
                <h2 className='text-white font-mono'>{userInfo.user_state}</h2>
            </div>
            <div className='user-info bg-[#001930] rounded-md h-18 min-h-18 px-4 py-2 min-w-[250px] max-w-[250px] overflow-auto '>
                <a href={userInfo.user_url}  target="_blank" >
                    <h2 className='text-white font-mono break-words whitespace-pre-wrap'>{userInfo.user_url}</h2>
                </a>
            </div>
            <button className='bg-[#001930] text-white px-2 rounded-md'> details</button>
        </div>
    </>
}
export default UserInfo;