import { useNavigate,Link,Outlet } from "react-router-dom";


function Home(){
    let navigate=useNavigate()

    const jump=()=>{
        navigate("/",{replace:true})
    }
    return (
        <div>
            <nav>
                <div>
                    <Link to='/pan'>pan</Link>
                </div>
                <div>
                    <Link to='/bookcase'>bookcase</Link>
                </div>
                
                
            </nav>
            <button onClick={jump}></button>
            <Outlet/>
            
        </div>
    )
}
export default Home