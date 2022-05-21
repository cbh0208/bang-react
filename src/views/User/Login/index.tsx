import {login} from '../../../api/user'

export default function Login(){
    function submit(){
        login('123','123').then((res)=>{
            console.log(res);
            
        })
    }

    return (
        <div onClick={submit}>login</div>
    )
}