import React, { useState } from 'react'
import Left from './gaj_left.json'

const Gaj_left = () => {
    const [input, setInput] = useState([])
  return (
    <div className='formpage1'>
    
    <div className='photo1'>
      <input type='text' placeholder='Searching Name.....' onChange={((e) => setInput(e.target.value))} />
      <img src="Image/search.jfif" alt="congration!" />
    </div>
    {Left.filter((f) => f.name.includes(input)).map((e) => {
      return <div className='record' key={e.sr_no}>
        <h4><span className='red'>{e.sr_no}</span></h4>
        <h4>{e.name}</h4>
        <h4>{e.id}</h4>
        <h4>{e.mob}</h4>
      </div>

    })}



</div>
)
}


export default Gaj_left
