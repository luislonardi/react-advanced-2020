import React, { useState } from 'react';

const UseStateObject = () => {
  const [person,setPerson]=useState({
    name:'peter',
    age:'24',
    message:'random message'
  })
  const changeMessage= ()=>{
    setPerson({...person,message:'hello world'})
  }
  return <>
    <h1>{person.name}</h1>
    <h1>{person.age}</h1>
    <h1>{person.message}</h1>
    <button className='btn' onClick={changeMessage}>Change Message</button>
  
  
  
  </>
};

export default UseStateObject;
