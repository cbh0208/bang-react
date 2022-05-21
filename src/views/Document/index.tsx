import {useParams} from 'react-router-dom';
export default function Document(){
    let {documentId}=useParams()
    return (
        <div>Document-{documentId}</div>
    )
}