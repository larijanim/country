import { useState,useEffect } from "react";
import { CountryType } from './Interface';
const  UseFetch=()=>{

    const [state, setState] = useState<CountryType[]|null>(null);

    const fetchData=async ()=>{
        try {
            const response= await fetch(`https://restcountries.com/v3.1/all`)
            if (!response.ok) {console.error('error',response.status); return;}
     
            const result=await response.json();
            const data=result.map((item )=>{return({name:item.name.common, flag:item.flags.png ,
                population:item.population,
                region:item.region,
                capital:item.capital})});
                setState(data);
        } catch (error) {
            console.error("Error fetching user data:", error);
        }
      

    }
    
    useEffect(()=>{
        fetchData();
    },[])
return({ data: state })


}
export default UseFetch;