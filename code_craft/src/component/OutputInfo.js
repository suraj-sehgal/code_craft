import React from 'react'
import './OutputInfo.scss';
import { useMyContext } from '../context/MyContext';

const OutputInfo = () => {
  const { output } = useMyContext();

  return (
    <div className='info'>
      <h3 style={{fontWeight:'bolder'}}>OutputInfo</h3>
      <div className='section'>
        <div className="item"><p><b>Status :</b> {output.status} </p></div> 
        <div className="item"><p><b>Time : </b> {output.time} </p></div>
        <div className="item"><p><b>Memory : </b>{output.memory} </p></div> 
      </div>
    </div>
  )
}

export default OutputInfo
