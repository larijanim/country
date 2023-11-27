import {  useState } from 'react'
import Country from './Country'
import { CountryType } from './Interface'
import UseFetch from './useFetch'


const  Countries=()=>{ 
    // const [list,setList]=useState<[]>([])
    const [show,setShow]=useState(false);
    const [currIndex,setCurrIndex]=useState<number|null>(null);
    const [currCountry,setCurrCountry]=useState<CountryType|null>(null)


    const { data } = UseFetch();
    

    const handleDetail=(index:number ,item:CountryType)=>{
        setShow(!show);
        setCurrIndex(index);
        setCurrCountry(
        item
      );
      console.log(item)

    }
    return( <div style={{display:'flex'}}>
    <div className='list'>{data?.map((item:CountryType,index)=>(<div key={index} className='item'>{show && currIndex==index?null:<span>{item.name}</span>}<button className='button' onClick={()=>handleDetail(index , item)}>{show && currIndex==index?`Close`:`Detail`}</button>
    {show && currIndex==index &&<Country country={currCountry} />}
    </div>))}</div></div>)





}
export default Countries;