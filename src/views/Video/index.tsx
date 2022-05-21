import {useParams} from 'react-router-dom';
export default function Video(){
    let {videoId}=useParams()
    return (
        <div>video {videoId}</div>
    )
}