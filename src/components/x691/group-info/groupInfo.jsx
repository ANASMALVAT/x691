import React from 'react'
import {useNavigate } from "react-router-dom";

import "../styles/userInfo.css"

const GroupInfo = ({groupInfo}) => {
    
    const navigate = useNavigate();
    const fetchProject = () => {
        sessionStorage.setItem('project-id',groupInfo.project_id);
        sessionStorage.removeItem("project");
        navigate("/project");
    }
    
    return <>
        <div className='flex gap-4 mb-4 flex-wrap' onClick={fetchProject} >
            <div className=' user-info-names bg-[#001930] rounded-md h-18 min-h-18 px-4 py-2 min-w-[200px] max-w-[200px] overflow-auto  border-r-gray-400 border'>
                <a href={groupInfo.user_url}  target="_blank" >
                    <h2 className='text-white font-mono'>{groupInfo.name}</h2>
                </a>
            </div>
        </div>
    </>
}

export default GroupInfo;