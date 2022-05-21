import { Outlet,Link } from "react-router-dom";
export default function Pan(){

    return (
        <div>
            <h1>pan</h1>
            <div>
                <ul>
                    <li><Link to=''>pan</Link></li>
                    <li><Link to='pictureCategory'>图片</Link></li>
                    <li><Link to='documentCategory'>文档</Link></li>
                    <li><Link to='videoCategory'>视频</Link></li>
                    <li><Link to='musicCategory'>音频</Link></li>
                    <li><Link to='otherCategory'>其他</Link></li>

                </ul>
            </div>
            <div>
                <Outlet/>
            </div>
        </div>
        
    )
}