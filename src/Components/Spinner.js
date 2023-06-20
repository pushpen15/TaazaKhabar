import React from 'react'
import loading from './loading.gif'

const Spinner =(props)=> {
 
    return (
    <>
      <div className='text-center backgroundimage' style={{ margin: '35px 0px 50%',  height:'100%' ,}} >
        <img src={loading} alt="" srcSet="" />
     
        
      </div>
     
      </>
    )
  }

export default Spinner