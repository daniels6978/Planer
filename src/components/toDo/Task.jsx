import React, { useState } from 'react';
import './styleToDo.css';

function Task() {

    const [isActive , setisActive] = useState('no')

    const show = () => { 
        if(isActive === 'no') {
            setisActive('active');
        } if (isActive === 'active') {
            setisActive('no');
        }
    }

  return (

    <div className='task'>
        <button onClick={show} className='collapsible'>Zadanie</button>
        <div className={`task_content ${isActive}`}>
                
        </div>
    </div>
 
  )
}

export default Task