
import { useEffect,useState } from "react"
const GitHubusers=()=>{
    const [data,setData]=useState()
    const [userName, setUserName] = useState<string>("kentcdodds");

    const fetchUsers=async()=>{
        try {
            const res=await fetch('https://api.github.com/users/'+userName)
            if(!res.ok){
                console.log('error',res.status)
                return;
            }
            const result=await res.json();
            setData(result);

            
        } catch (error) { console.log('error',error)
            
        }


    }
    useEffect(()=>{
       fetchUsers();

    },[userName])
    return(<div>
    <header><h2>Hi test</h2></header>
    <input type='text' value={userName} onChange={(event)=>{setUserName(event.target.value)}}></input>
    <select    id="users" value={userName} onChange={(event)=>{setUserName(event.target.value)}}>
    <option value="kentcdodds">Kent C. Dodds</option>
        <option value="gaearon">Dan Abramov</option>
      </select>
      <div className="user-container">
        <h5 className="info-item">{data?.name}</h5>
        <h5 className="info-item">{data?.location}</h5>
        <h5 className="info-item">{data?.blog}</h5>
        <h5 className="info-item">{data?.company}</h5>
      </div>

    </div>)

}
export default GitHubusers;