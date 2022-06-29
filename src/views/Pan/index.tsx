import { Outlet,Link } from "react-router-dom";
import './index.css';
export default function Pan(){

    return (
        <div className="main">
            <div className="main_nav">
                <div className="main_nav-item"><Link to=''>pan</Link></div>
                <div className="main_nav-item"><Link to='pictureCategory'>图片</Link></div>
                <div className="main_nav-item"><Link to='documentCategory'>文档</Link></div>
                <div className="main_nav-item"><Link to='videoCategory'>视频</Link></div>
                <div className="main_nav-item"><Link to='musicCategory'>音频</Link></div>
                <div className="main_nav-item"><Link to='otherCategory'>其他</Link></div>
            </div>
            <div  className="main_body">
                <Outlet/>
            </div>
        </div>
        
    )
}