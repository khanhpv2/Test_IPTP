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
  useEffect(() => {
    getDataDetail(param)
  }, [])

  return (
    <div className='mt-10'>
      <h1 className='text-3xl font-bold text-center ' >Detail User</h1>
      <NavLink to="/" className="ml-10 px-6 py-2.5 bg-green-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out" > Back To Home</NavLink> <br />
      {/* <NavLink to={'/footer'}>Footer</NavLink> */}

     

      <div className="max-w-sm mx-auto overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800">
        <img className="object-cover object-center w-full h-56" src={`https://i.pravatar.cc/?u=${data.id}`} alt="avatar" />
        <div className="flex items-center px-6 py-3 bg-gray-900">
          <svg className="w-6 h-6 text-white fill-current" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M17 21C15.8954 21 15 20.1046 15 19V15C15 13.8954 15.8954 13 17 13H19V12C19 8.13401 15.866 5 12 5C8.13401 5 5 8.13401 5 12V13H7C8.10457 13 9 13.8954 9 15V19C9 20.1046 8.10457 21 7 21H3V12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12V21H17ZM19 15H17V19H19V15ZM7 15H5V19H7V15Z" />
          </svg>
          <h1 className="mx-3 text-lg font-semibold text-white">ID: {data.id}</h1>
        </div>
        <div className="px-6 py-4">
          <h1 className="text-xl font-semibold text-gray-800 dark:text-white">UserID: {data.userId}</h1>
          <p className="py-2 text-gray-700 dark:text-gray-400">Title: {data.title}</p>
          <div className="flex items-center mt-4 text-gray-700 dark:text-gray-200">
            <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M14 11H10V13H14V11Z" /><path fillRule="evenodd" clipRule="evenodd" d="M7 5V4C7 2.89545 7.89539 2 9 2H15C16.1046 2 17 2.89545 17 4V5H20C21.6569 5 23 6.34314 23 8V18C23 19.6569 21.6569 21 20 21H4C2.34314 21 1 19.6569 1 18V8C1 6.34314 2.34314 5 4 5H7ZM9 4H15V5H9V4ZM4 7C3.44775 7 3 7.44769 3 8V14H21V8C21 7.44769 20.5522 7 20 7H4ZM3 18V16H21V18C21 18.5523 20.5522 19 20 19H4C3.44775 19 3 18.5523 3 18Z" />
            </svg>
            <h1 className="px-2 text-sm">Status: {data.completed == true ? (<span style={{color:'green'}}>Completed</span>) : ( <span style={{color:'red'}}>Not Completed</span>)}</h1>
          </div>
         
          
        </div>
      </div>

    </div>
  )
}
