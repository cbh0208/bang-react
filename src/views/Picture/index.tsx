import {useParams} from 'react-router-dom';
export default function Picture(){
    let {pictureId}=useParams()
    return (
        <div>Picture-{pictureId}</div>
    )
}