import React from 'react';
import { useSelector } from 'react-redux';


const DisplayUser = () => {
  const data = useSelector((state)=>{
    return state.users;
  })
  // console.log(data);
  return (
    <div>
      hello
      {
        data.map((elm)=>{
          <li>hi</li>
        })
      }
    </div>
  )
}

export default DisplayUser