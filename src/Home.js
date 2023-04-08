import React, { useState } from 'react'

const Home = () => {
  const [data, setData]=useState("")
  const [pin, setPin]=useState("")
  const [image, setImage]=useState()
  const handleImage=((e)=>
  {
    if(e.target.files && e.target.files.length>0)
    {
      setImage(e.target.files[0])
      
    }

  })
  const onSubmit=((e)=>
  {
    e.preventDefault();
  
  })
  const setRemove=((e)=>
  {
    setImage("");
  })
  return (
    <div className='formpage'>
      
      <form className='formgroup' onSubmit={onSubmit}>
      <img src="Image/best.jfif" alt="congration!"/>
        <div className='photo'>
        <input type='text' placeholder='Achiver Name' onChange={((e)=>setData(e.target.value))}/>
        <input type='text' placeholder='Pin' onChange={((e)=>setPin(e.target.value))}/>
        <input type='file' onChange={handleImage} />
        </div>
     
     
      </form>
      {image &&(
        <div className='congrulation'>
      <img src="Image/cong1.jfif" alt="Begineer"/>
        <h3>Congrulation! for <span className='green'>{pin}</span> in RCM Family</h3>
        <h4 className='red'>Mr. {data} </h4>
        <div className='fetching'>
        <img src={URL.createObjectURL(image)} alt="Begineer"/>
        <button type='submit' onClick={setRemove}>X</button>
        </div>


        <h4>Take <span className="red">ScreenShot</span> &amp; <span className="red">Whatapp</span> on Groups.</h4>
      </div>
 
      )}
          

    </div>
  )
}

export default Home
