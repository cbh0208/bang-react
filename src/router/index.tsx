import {RouteObject} from "react-router-dom";


import Login from '../views/User/Login';
import Reg from '../views//User/Reg';

import Home from "../views/Home";

import Pan from '../views/Pan'
import Category from '../views/Pan/Category'
import PictureCategory from '../views/Pan/PictureCategory'
import DocumentCategory from '../views/Pan/DocumentCategory'
import VideoCategory from '../views/Pan/VideoCategory'
import MusicCategory from '../views/Pan/MusicCategory'
import OtherCategory from '../views/Pan/OtherCategory'



import BookCase from "../views/BookCase";

import Picture from '../views/Picture'
import Document from "../views/Document";
import Video from "../views/Video";
import Music from "../views/Music";

import NotFound from "../views/ErrorPage/NotFound";
const routes:RouteObject[]=[
    {
        path:'/login',
        index:true,
        element:<Login/>
    },
    {
        path:'/reg',
        element:<Reg/>
    },
    {
        path:'/',
        element:<Home/>,
        children:[
            {
            }
        ]
    },
    {
        path:'/pan',
        element:<Pan/>,
        children:[
            {
                index:true,
                element:<Category/>
            },
            {
                path:'pictureCategory',
                element:<PictureCategory/>
            },
            {
                path:'documentCategory',
                element:<DocumentCategory/>
            },
            {
                path:'videoCategory',
                element:<VideoCategory/>
            },
            {
                path:'musicCategory',
                element:<MusicCategory/>
            },
            {
                path:'otherCategory',
                element:<OtherCategory/>
            }
        ]
    },
    {
        path:'/picture/:pictureId/',
        element:<Picture/>

    },
    {
        path:'/document/:documentId/',
        element:<Document/>
    },
    {   
        path:'/video/:videoId/',
        element:<Video/>
    },
    {
        path:'/music/:musicId/',
        element:<Music/>
    },
    {
        path:'/bookcase',
        element:<BookCase/>
    },
    {
        path:'*',
        element:<NotFound/>
    }
]


export default routes
