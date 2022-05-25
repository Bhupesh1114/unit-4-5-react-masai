import React, { useState } from 'react';
import { data } from "./data";
import style from "./Tabs.module.css";

const Tabs = () => {
    const [isOpen, setIsOpen] = useState<number>(0);
    const handleOpen = (index:number) => {
setIsOpen(index)
    }
    return (
      <div className={style.Container}>
           <div >
          {data.map((elem,ind) => {
              return (
                  <div key={ind}>
                      <div className={style.accordian} >
                      <h3 onClick={() => handleOpen(ind)}>{elem.desc}</h3>
                      </div>
                      {isOpen===ind && <p>{elem.title}</p>}
                  </div>
              )
          })}
    </div> 
      </div>
      
  )
}

export default Tabs