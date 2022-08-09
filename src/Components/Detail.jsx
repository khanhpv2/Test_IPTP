import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { NavLink, useHistory } from 'react-router-dom'
// import { useSearchParams } from "react-router-dom";
import { useLocation } from "react-router-dom"
import { http } from '../utils/config';

export default function Detail(props) {
  // const history = useHistory();
  const [data, setData] = useState({})
//   console.log('data',data);

  const param = props.match.params.id
  const getDataDetail = async () => {
    try {
        let result = await http.get(`/todos/${param}`)
        // console.log('result',result.data)
        setData(result.data)
    } catch (err) {
        console.log(err)
    }
}
useEffect (()=>{
    getDataDetail(param)
},[])

  return (
    <div>
        <h1 className='text-3xl font-bold underline' >Detail User</h1>
        <NavLink to="/" >Home</NavLink> <br />
        {/* <NavLink to={'/footer'}>Footer</NavLink> */}


        <h3>Detail User</h3>
        <div>
            <p>Title: {data.title}</p>
            <p>ID: {data.id}</p>
            <p>UserID: {data.userId}</p>
            <p>Status: {data.completed == true ? 'Completed' : 'Not Completed' }</p>
             
            
        </div>
    </div>
  )
}
