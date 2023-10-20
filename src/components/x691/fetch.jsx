import React, { useState } from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Navigate, Route, Routes, useNavigate } from "react-router-dom";


const FetchGitlab = () => {
    let x691Token = "glpat-8DxvaWCXpLRsySsQekLd";
    let url = "https://git.cs.dal.ca/";
    let proId = "79514";
    let gropId = "68063";
    let grpToken = "glpat-bhmqiHzj1n-VwaeaRJ-x"
     
    const navigate = useNavigate();

    const [rootURL,setRootURL] = useState("");
    const [group,setGroup] = useState("");
    const [project,setProject] = useState("");
    const [token,setToken] = useState("");

    const changeURL = (event) => {
        const value = event.target.value;
        setRootURL(event.target.value);
    }
    const changeGroup = (event) => {
        setGroup(event.target.value);
    }
    const changeToken = (event) => {
        setToken(event.target.value);
    }
    const changeProject = (event) => {
        setProject(event.target.value);
    }
    const getProject = () => {
        
        sessionStorage.clear();
        sessionStorage.removeItem('project');
        sessionStorage.setItem('rootUrl',rootURL);
        sessionStorage.setItem('token',token);
        sessionStorage.setItem('project-id',project);
        if(rootURL === ""){
            sessionStorage.setItem('rootUrl',"https://git.cs.dal.ca/");
        }        
        navigate("/project");
    }

    const getGroup = () => {
        sessionStorage.clear();
        sessionStorage.setItem('rootUrl',rootURL);
        sessionStorage.setItem('token',token);
        sessionStorage.setItem('group-id',group);
        
        console.log(rootURL);
        if(rootURL === ""){
            sessionStorage.setItem('rootUrl',"https://git.cs.dal.ca/");
        }   
        navigate("/group");
    }

    return (<>
        <div className=' flex flex-col gap-2 h-[500px] w-[500px] mt-4 m-auto'>
            <TextField onChange={changeURL}  id="outlined-basic" label="Root Url" variant="outlined" />
            <TextField onChange={changeToken}  id="outlined-basic" label="Access token" variant="outlined" />
            <TextField onChange={changeGroup} id="outlined-basic" label="Group-ID" variant="outlined" />
            <TextField onChange={changeProject}  id="outlined-basic" label="Project-ID" variant="outlined" />
            <div className='flex gap-4'>
                <Button onClick={getProject} variant="outlined">Get Project</Button>
                <Button onClick={getGroup} variant="outlined">Get Group</Button>
            </div>
        </div>
    </>)

}

export default FetchGitlab;