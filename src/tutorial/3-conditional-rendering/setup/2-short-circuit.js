import React, { useState } from 'react';
// short-circuit evaluation
// ternary operator

const ShortCircuit = () => {
  const [text,setText]= useState('')
  const [isError,setIsError]= useState(false)
  //const firstValue = text || 'hello world';
  //const secondValue = text && 'hello world';

  return (
      <>
      <h1>{text || 'john doe'}</h1>
      <button className='btn' onClick={()=>{
          setIsError(!isError)
      }}>Toggle error</button>
      {isError ? <p>there is an error...</p>: <div>
        <h2>There is no error</h2>
        </div>}
      
      
      
      </>

  )
};

export default ShortCircuit;
