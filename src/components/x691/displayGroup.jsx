import React, { useEffect, useState ,useLayoutEffect} from 'react'
import GroupInfo from './group-info/groupInfo';
import { FetchGroup } from './fetchGroup';

const DisplayGroup = () => {

    const [projects,setProjects] = useState([]);
    const [loading,setIsLoading] = useState(true);

    useLayoutEffect(() => {

        const fetchData = async () => {
            if(sessionStorage.getItem("group")){
                console.log(JSON.parse(sessionStorage.getItem("group")));
                setProjects(JSON.parse(sessionStorage.getItem("group")));
                setIsLoading(false);
                return;
            }
            try {
                let rootURL = sessionStorage.getItem('rootUrl');
                let token = sessionStorage.getItem('token');
                let groupid = sessionStorage.getItem('group-id');
                const projectData = await FetchGroup(rootURL, token, groupid);
                sessionStorage.setItem("group", JSON.stringify(projectData));
                setProjects(projectData);
            } catch (error) {
                console.error("Error fetching data: ", error);
            }
            setIsLoading(false);
        };
        fetchData();
    },[]);

    if(!projects || projects == null){
        return <>No Data Available</>
    }

    return <>
        <div className=' w-full h-full min-h-screen min-w-screen flex flex-col items-center mt-4 bg-[#626EE3]'>
            <h1 className='font-mono text-3xl text-white'>Projects: </h1>
            {
                loading && 
                <img src='https://www.purplerosetheatre.org/wp-content/themes/dt-the7-child-2020/images/loader.gif'></img>
            }
            <div className=' flex gap-4 w-full h-full flex-wrap justify-center mt-8'>
                {
                    projects.map((project,key) => {
                        return <GroupInfo  groupInfo={project}/>
                    })
                }
            </div>
        </div>
    </>
}

export default DisplayGroup;