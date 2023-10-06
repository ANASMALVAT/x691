import React, { useEffect, useState } from 'react'
import UserInfo from './userInfo';
import UserInfoHeader from './userInfoHeader';
import UserCommit from './userCommit';
import UserMerge from './userMerge';


const DisplayProject = () => {
    const [users,setUsers] = useState([]);
    useEffect(()=>{
        setUsers(JSON.parse(sessionStorage.getItem('project')));
        console.log(JSON.parse(sessionStorage.getItem('project')));
    },[])
    if(!users || users == null){
        return <>No Project Available</>
    }
    

    return <>
           
            <div className=' w-full h-full min-h-screen min-w-screen flex flex-col items-center mt-4 bg-[#626EE3]'>
                <UserInfoHeader/>
                {Object.keys(users).map((userName, index) => (
                    index === users.length - 2 ? <div></div> :
                    
                    <div className='main flex'>
                        <div className='user-info bg-[#001930] rounded-md h-16 px-4 py-2 min-w-[225px] max-w-[225px] overflow-auto mr-2'>
                            <h2 className='text-white font-mono'>{userName}</h2>
                        </div>
                        <div className='user-info-main'>
                            <UserInfo userInfo={users[userName].user_info}/>
                        </div>
                        <div className='user-commit'>
                            <UserCommit  userCommit={users[userName].user_commits}/>
                        </div>
                        <div className='user-merge'>
                            <UserMerge userMerge={users[userName].user_merge_requests}/>
                        </div>
                    </div>
                ))}
            </div>
    </>
}

export default DisplayProject;