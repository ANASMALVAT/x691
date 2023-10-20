import React, { useEffect,useState } from 'react'
import "../styles/userInfo.css"
import Popup from 'reactjs-popup';

import {useNavigate } from "react-router-dom";

const UserInfo = ({userInfo,fullName,sDate,eDate}) => {

    const navigate = useNavigate();
    const [signal, setSignal] = useState("");
    const [addition, setAddition] = useState(0);
    const [commits, setCommit] = useState(0);
    const [weekMul, setWeekMul] = useState(1);


    const fetchDetail = () => {
        var hyphenatedName = fullName.replace(/ /g, "+");
        navigate(`/project/${hyphenatedName}`)
    }

    useEffect(() => {

        const project = JSON.parse(sessionStorage.getItem('project'));
        let commits = project[fullName].user_commits;
        let cnt = 0; 
        let cntCommit = 0;

        commits.map((commit) => {
            let commitDate = new Date(commit.committed_date).toISOString().split('T')[0];
            if((sDate === "" && eDate === "" ) || (commitDate >= sDate && commitDate <= eDate) || (commitDate >= sDate && eDate === "" ) || (commitDate <= eDate && sDate === "" )){
                cnt = cnt + commit.commit_stats.additions;
                cntCommit = cntCommit + 1;
            }
        });

        let weeks = 1;
        if(sDate != "" && eDate != ""){
            const startDate = new Date(sDate);
            const endDate = new Date(eDate);
            const timeDifference = endDate.getTime() - startDate.getTime();
            const daysDifference = timeDifference / (1000 * 3600 * 24);
            weeks = Math.floor(daysDifference / 7);
        }
        else if(sDate!= "" && eDate === ""){
            
            const startDate = new Date(sDate);
            const currentDate = new Date();
            const timeDifference = currentDate.getTime() - startDate.getTime();
            const daysDifference = timeDifference / (1000 * 3600 * 24);
            weeks = Math.floor(daysDifference / 7);
        }
        else if(sDate == "" && eDate != ""){
            const endDate = new Date(eDate);
            const currentDate = new Date();
            const timeDifference = endDate.getTime() - currentDate.getTime();
            const daysDifference = timeDifference / (1000 * 3600 * 24);
            weeks = Math.floor(daysDifference / 7);
        }
        weeks = Math.max(1,weeks);
        setAddition(cnt);
        setCommit(cntCommit);
        setWeekMul(weeks);
    },[sDate,eDate]);

    useEffect(() =>
    {
        if(addition >= process.env.REACT_APP_GREEN_SIGNAL * weekMul){
            setSignal(signal => "green");
        }

        else if(addition >= process.env.REACT_APP_ORANGE_SIGNAL * weekMul){
            setSignal(signal => "orange");
        }
        else{
            setSignal(signal => "red");
        }

    },[addition,commits,weekMul])

    return <>
        <div className='flex gap-4 mb-4 flex-wrap'>
            <div className=' user-info-names bg-[#001930] rounded-md h-12 min-h-12 px-4 py-2 min-w-[200px] max-w-[200px] overflow-auto  border-r-gray-400 border'>
                <a href={userInfo.user_url}  target="_blank" >
                    <h2 className='text-white font-mono'>{userInfo.user_name}</h2>
                </a>
            </div>

            <button onClick={fetchDetail} className='bg-[#001930] text-white px-2 rounded-md'> details</button>
            <Popup
                trigger={
                    <div className={`w-8 h-8 rounded-full m-auto ${signal === "green" ? "bg-green-900" : signal === "orange" ? "bg-yellow-500" : "bg-red-900"}`}></div>
                }
                position={"bottom right"}
                on={['hover', 'focus']}
            >
                <div className=' w-44 h-16 bg-white rounded-md pl-2 pt-1 text-left  '>
                    commits : {commits}
                    <br></br>
                    additions: {addition}
                </div>
            </Popup>
        </div>
    </>
}
export default UserInfo;