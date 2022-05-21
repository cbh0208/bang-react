import {useParams} from 'react-router-dom';
export default function Music(){
    let {musicId}=useParams()
    return (
        <div>Music-{musicId}</div>
    )
}