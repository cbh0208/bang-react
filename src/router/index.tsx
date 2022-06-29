import {RouteObject} from "react-router-dom";


import Login from '../views/Common/User/Login';
import Reg from '../views/Common/User/Reg';

import Home from "../views/Common/Home";

import Pan from '../views/Pan'
import Category from '../views/Pan/Category'
import PictureCategory from '../views/Pan/PictureCategory'
import DocumentCategory from '../views/Pan/DocumentCategory'
import VideoCategory from '../views/Pan/VideoCategory'
import MusicCategory from '../views/Pan/MusicCategory'
import OtherCategory from '../views/Pan/OtherCategory'

import BookCase from "../views/BookCase";

import Tools from "../views/Tools"

import NotFound from "../views/Common/ErrorPage/NotFound";

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
        path:'/bookcase',
        element:<BookCase/>
    },
    {
        path:'/tools',
        element:<Tools/>
    },
    {
        path:'*',
        element:<NotFound/>
    }
]


export default routes
