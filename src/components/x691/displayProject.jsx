import React, { useEffect, useState ,useLayoutEffect} from 'react'
import UserInfo from './user-info/userInfo';
import UserInfoHeader from './user-info/userInfoHeader';
import { FetchProject } from './fetchProject';
import DatePickerValue from './date-picker/datePicker';

const DisplayProject = () => {

    // fetching data and storing in session storage!
    const [users,setUsers] = useState([]);
    const [loading,setIsLoading] = useState(true);

    useLayoutEffect(() => {

        const fetchData = async () => {
            if(sessionStorage.getItem("project")){
                setUsers(JSON.parse(sessionStorage.getItem("project")));
                setIsLoading(false);
                return;
            }
            try {
                let rootURL = sessionStorage.getItem('rootUrl');
                let token = sessionStorage.getItem('token');
                let projectid = sessionStorage.getItem('project-id');
                const userData = await FetchProject(rootURL, token, projectid);
                sessionStorage.setItem("project", JSON.stringify(userData));
                setUsers(userData);
            } catch (error) {
                console.error("Error fetching data: ", error);
            }
            setIsLoading(false);
        };
        fetchData();
    },[]);

    //  Setting time and date
    const [startDate,setStartDate] = useState("");
    const [endDate,setEndDate] = useState("");
    const [sDate,setSDate] = useState("");
    const [eDate,setEDate] = useState("");

    useEffect(()=> {
        const dateString = JSON.stringify(startDate['$d']);
        if(dateString){
            const match = dateString.split('T');
            const extractedDate = match[0].replace(/"/g, '');
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

    if(!users || users == null){
        return <>No Data Available</>
    }

    return <>
           
            <div className=' w-full h-full min-h-screen min-w-screen flex flex-col items-center mt-4 bg-[#626EE3]'>
                <div className='flex gap-2'>
                    <DatePickerValue setDate={setStartDate}/>
                    <DatePickerValue setDate={setEndDate} />
                </div>
                <UserInfoHeader/>
                {
                    loading && 
                    <img src='https://www.purplerosetheatre.org/wp-content/themes/dt-the7-child-2020/images/loader.gif'></img>
                }

                {Object.keys(users).map((userName, index) => (
                    
                    <div className='main flex'>
                        <div className='user-info-main bg-[#001930] rounded-md h-12 px-4 py-2 min-w-[225px] max-w-[225px] overflow-auto mr-2'>
                            <h2 className='text-white font-mono'>{userName}</h2>
                        </div>
                        <div className='user-info-main'>
                            <UserInfo userInfo={users[userName].user_info} fullName={userName} sDate={sDate} eDate={eDate} />
                        </div>
                    </div>
                ))}
            </div>
    </>
}

export default DisplayProject;