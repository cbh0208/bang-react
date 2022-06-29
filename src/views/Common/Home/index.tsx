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
                <div>
                    <Link to='/tools'>tools</Link>
                </div>
                
                
            </nav>
            <button onClick={jump}>test</button>
            <Outlet/>
            
        </div>
    )
}
export default Home