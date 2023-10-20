import React, { useEffect, useState } from 'react'
import UserCommitHeader from './userCommitHeader';
import DatePickerValue from '../date-picker/datePicker';


const UserCommit = ({userCommit}) => 
{   
    const [originalCommit,setOriginalCommit] = useState();
    const [commit, setCommit] = useState();

    const [startDate,setStartDate] = useState("");
    const [endDate,setEndDate] = useState("");
    const [sDate,setSDate] = useState("");
    const [eDate,setEDate] = useState("");

    useEffect(()=>{
        setCommit(userCommit);
        setOriginalCommit(userCommit);
    },[userCommit])


    
    const changeStartDate = (event) => {
        const value = event.target.value;
        setStartDate(event.target.value);
    }
    
    const changeEndDate = (event) => {
        const value = event.target.value;
        setEndDate(event.target.value);
    }

    useEffect(()=> {
        const dateString = JSON.stringify(startDate['$d']);
        if(dateString){
            const match = dateString.split('T');
            const extractedDate = match[0].replace(/"/g, '');
            console.log(extractedDate);
            setSDate(sDate => extractedDate);
        }
    },[startDate,sDate]);

    useEffect(()=> {
        const dateString = JSON.stringify(endDate['$d']);
        if(dateString){
            const match = dateString.split('T');
            const extractedDate = match[0].replace(/"/g, '');
            setEDate(eDate => {return extractedDate});
        }
    },[endDate,eDate]);

    useEffect(() => {

        if(originalCommit){
            const filteredCommits = originalCommit.filter((commit) => {
                const commitDate = new Date(commit.committed_date).toISOString().split('T')[0];
                return commitDate >= sDate && commitDate <= eDate || (sDate === "" && eDate === "" ) || (commitDate >= sDate && eDate === "" ) || (commitDate <= eDate && sDate === "" );
            });
            setCommit(filteredCommits);
        }
    }, [sDate, eDate]);
  
    return (
        <>
        <div className='flex gap-2 h-14 mt-4 mb-8 justify-center items-start'>
            <DatePickerValue setDate={setStartDate}/>
            <DatePickerValue setDate={setEndDate} />
        </div>
        <UserCommitHeader/>
        {
         commit && commit.map((commitItem,key) => 
         <div className='flex gap-4 mb-4  flex-wrap justify-center'>
                <div className='user-info text-center bg-[#001930] rounded-md  break-words h-[120px] px-4 py-2 min-w-[240px] max-w-[220px] overflow-auto '>
                    <a href={commitItem.commit_url}  target="_blank" >
                        <h2 className='text-white font-mono'>{commitItem.commit_id}</h2>
                    </a>
                </div>
                <div className='user-info text-center bg-[#001930] rounded-md whitespace-pre-wrap break-words h-[120px] px-4 py-2 min-w-[260px] max-w-[260px] overflow-auto '>
                    <h2 className='text-white font-mono'>{commitItem.commit_message}</h2>
                </div>
                <div className='user-info text-center bg-[#001930] rounded-md  break-words h-[120px] px-4 py-2 min-w-[220px] max-w-[220px] overflow-auto '>
                    {Object.keys(commitItem.commit_stats).map(key => (
                        <li key={key} className='flex '>
                            <h2 className='text-white font-mono m-auto'>{key}: {commitItem.commit_stats[key]}</h2>
                        </li>
                    ))}
                </div>
                <div className='user-info text-center bg-[#001930] rounded-md break-words h-[120px] px-4 py-2 min-w-[220px] max-w-[220px] overflow-auto '>
                    <h2 className='text-white font-mono'>
                        {new Date(commitItem.committed_date).toISOString().split('T')[0]}
                    </h2>
                </div>
            </div>
        )}
        </>
    )
}

export default UserCommit;