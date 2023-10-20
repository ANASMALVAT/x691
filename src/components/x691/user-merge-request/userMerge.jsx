import React, { useEffect, useState } from 'react'
import TextField from '@mui/material/TextField';
import UserMergeHeader from './userMergeHeader';

const UserMerge = ({userMerge}) => 
{   

    const [merge, setMerge] = useState();
    const [originalMerge, setOriginalMerge] = useState();
    const [startDate,setStartDate] = useState("");
    const [endDate,setEndDate] = useState("");

    useEffect(()=>{
        setMerge(userMerge);
        setOriginalMerge(userMerge);

    },[userMerge])

    const changeStartDate = (event) => {
        const value = event.target.value;
        setStartDate(event.target.value);
    }
    
    const changeEndDate = (event) => {
        const value = event.target.value;
        setEndDate(event.target.value);
    }

  
    return (
        <>
        <UserMergeHeader/>
        {
         merge && merge.map((mergeItem,key) => 
         <div className='flex gap-2 mb-4  flex-wrap justify-center'>
                <div className='user-info text-center bg-[#001930] rounded-md  break-words h-[120px] px-4 py-2 min-w-[120px] max-w-[120px] overflow-auto '>
                    <a href={mergeItem.web_url}  target="_blank" >
                        <h2 className='text-white font-mono'>{mergeItem?.merge_id || ""}</h2>
                    </a>
                </div>

                <div className='user-info text-center bg-[#001930] rounded-md whitespace-pre-wrap break-words h-[120px] px-4 py-2 min-w-[225px] max-w-[225px] overflow-auto '>
                    <h2 className='text-white font-mono'>{mergeItem?.description || ""}</h2>
                </div>

                <div className='user-info text-center bg-[#001930] rounded-md whitespace-pre-wrap break-words h-[120px] px-4 py-2 min-w-[120px] max-w-[120px] overflow-auto '>
                    <h2 className='text-white font-mono'>{mergeItem?.state || ""}</h2>
                </div>

                <div className='user-info text-justify bg-[#001930] rounded-md whitespace-pre-wrap break-words h-[120px] px-4 py-2 min-w-[120px] max-w-[120px] overflow-auto '>
                        {mergeItem.merged_by &&
                            <>
                                <h2 className='text-white font-mono'>Username: {mergeItem?.merged_by['username'] || ""}</h2>
                                <h2 className='text-white font-mono'>Name: {mergeItem?.merged_by['name'] || ""}</h2>
                                <h2 className='text-white font-mono'>url: <a href={mergeItem?.merged_by['web_url'] || ""} target='_blank'>{mergeItem?.author['web_url'] || ""}</a></h2>
                            </>
                        }
                </div>

                <div className='user-info text-center bg-[#001930] rounded-md whitespace-pre-wrap break-words h-[120px] px-4 py-2 min-w-[200px] max-w-[200px] overflow-auto '>
                    <h2 className='text-white font-mono'>{mergeItem?.source_branch} ={'>'} {mergeItem?.target_branch}</h2>
                </div>

                <div className='user-info text-justify bg-[#001930] rounded-md  break-words h-[120px] px-4 py-2 min-w-[225px] max-w-[225px] overflow-auto '>
                    {mergeItem.author &&
                        <>
                            <h2 className='text-white font-mono'>Username: {mergeItem?.author['username'] || ""}</h2>
                            <h2 className='text-white font-mono'>Name: {mergeItem?.author['name'] || ""}</h2>
                            <h2 className='text-white font-mono'>url: <a href={mergeItem?.author['web_url'] || ""} target='_blank'>{mergeItem?.author['web_url'] || ""}</a></h2>
                        </>
                    }
                </div>
            </div>
        )}
        </>
    )
}

export default UserMerge;