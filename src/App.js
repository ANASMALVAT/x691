import logo from './logo.svg';
import './App.css';
import FetchGitlab from './components/x691/fetch';
import DisplayProject from './components/x691/displayProject';
import DisplayGroup from './components/x691/displayGroup';
import UserCommitMerge from './components/x691/user-commit-merge/userCommitMerge';
import {createBrowserRouter, RouterProvider,} from "react-router-dom";


const router = createBrowserRouter
  ([
    {
      path: "/",
      element: <FetchGitlab/>
    },
    {
      path: "/project",
      element:<DisplayProject/>
      
    },
    {
      path:"/group",
      element:<DisplayGroup/>
    },
    {
      path: "/project/:detail",
      element:<UserCommitMerge/>
    },
   
  ]);
  

function App() {
  return (
    <div className="App flex justify-center items-center">
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;
