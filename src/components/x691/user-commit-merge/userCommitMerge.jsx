import React, { useEffect, useState } from 'react'
import UserCommit from '../user-commit/userCommit';
import UserMerge from '../user-merge-request/userMerge';
import { useParams } from "react-router-dom";


const UserCommitMerge = () => 
{   
    const {detail} = useParams();
    const [userData,setUserData] = useState([]);
    useEffect(() => {
        var fullName = detail.replace("+"," ");
        var data = JSON.parse(sessionStorage.getItem('project'))[fullName];
        setUserData(data);
    },[])

    return <>
        <div className='flex flex-col min-h-screen min-w-full bg-blue-600'>
            <h1 className='text-white font-mono text-3xl mb-2'>Commits</h1>
            <UserCommit userCommit={userData?.user_commits ? userData.user_commits : []}/>
            <div className='w-full h-2 bg-slate-500 mt-8 mb-8'></div>
            <h1 className='text-white font-mono text-3xl mb-2'>Merge Requests</h1>
            <UserMerge userMerge={userData?.user_merge_requests ? userData.user_merge_requests : []}/>
        </div>
    </>
}

export default UserCommitMerge;