import React from 'react'
import { useState } from 'react'

const AddCar = () => {

    const [model, setModel] = useState('');
    const [mark, setMark] = useState('');



    const handleSubmit = (e) => {  
      e.preventDefault();
      if (model != '' && mark !=''){
        const payLoad = {
          model,
          mark
        }
        fetch("http://localhost:8080/api/cassetts/addCar", {method:"POST", headers:{'Content-Type': 'application/json'}, body:JSON.stringify(payLoad)});

      }
    }




  return (

    <form onSubmit={(e) => handleSubmit(e) }>
        <label htmlFor="model">Podaj model</label>
        <input onChange={(e) => setModel(e.target.value)} id='model' type="text" name='model' />
        <label htmlFor="mark">Podaj marke</label>
        <input onChange={(e) => setMark(e.target.value)} id='mark' type="text" name='mark' />
        <button type='submit'>Dodaj</button>
    </form>



  )
}

export default AddCar