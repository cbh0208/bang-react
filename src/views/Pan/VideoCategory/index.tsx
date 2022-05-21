import { useNavigate } from "react-router-dom";
export default function VideoCategory(){
    let navigate=useNavigate()
    const jump=()=>{
        navigate("/video/test",{replace:true})
    }
    return (
        <div onClick={jump}>VideoCategory</div>
    )
}