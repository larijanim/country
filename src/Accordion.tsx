import React from 'react'
import {data} from './Data'
import { useState } from 'react'

//https://github.com/briancodex/react-accordion-v1/blob/main/src/components/Accordion.js
function  Accordion()  {
    const [show,setShow]=useState({})
    //second solution
    // const [clicked, setClicked]=useState(false)

    const handleClick=(param,index)=>{
      //  setClicked(clicked===index?null:index); 
         setShow((prevShow) => ({
            ...prevShow,
            [param]: !prevShow[param],
          }));
    
    }
    console.log(show)

  return (
    <div  className='section'>
      {data.map((item,index)=>{ return(<>
        
            <p className='title' key={index}  id={item.title}>  {item.title}
            <span
                aria-expanded={show[item.title]}
                aria-controls={`content-${item.title}`}
                aria-label={
                    show[item.title]
                    ? 'Press Enter to close'
                    : 'Press Enter to expand'
                }
                onClick={() => handleClick(item.title,index)}
                // i used second sate to make sure it works same as the first solution
                >{show[item.title]?`-`:`+`}
                {/* {clicked === index ?` -`: ` +`} */}
            </span></p>
            <ul 
            id={`content-${item.title}`} 
            aria-labelledby={item.title}
            style={{ width:'80%', display: show[item.title] ? 'block' : 'none' }}
            > 
                {item.body.map((bodyItem, bodyIndex) => (
                    <li key={bodyIndex}>{bodyItem}</li>
                    ))}

            </ul>
       
      </>)})}

  </div>
  )
}

export default Accordion
