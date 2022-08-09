import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { http } from '../utils/config'

export default function GroupID(props) {
    // const [data, setData] = useState([])
    const {dataParam} = props

    const groupBy = (arr, key) => {
        return arr.reduce((result, currentValue) => {
            (result[currentValue[key]] = result[currentValue[key]] || []).push(currentValue);
            return result;
        }, {})
    }
    const grouped = groupBy(dataParam, 'userId')
    // console.log('grouped', grouped);
    const lenght = Object.keys(grouped)
    // console.log('lenght', lenght);
    
  return (
    <div className='pb-5' >
         <table  className='mx-auto  pb-5'>
                <thead >
                    <tr>
                        <th className='border-2 border-gray-300	'>User ID</th>
                        <th className='border-2 border-gray-300	'>Title</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        lenght.map((key, index) => {
                            return (
                                <tr className='border-2 border-gray-300' key={index}>
                                    <th >{key}</th>
                                    <th className='border-2  border-gray-300'>
                                        <ul className='text-left' >
                                            {grouped[key].map((list,key) => {
                                               return <li  key={key}>{list.title}</li>
                                            })                                                      
                                            }
                                        </ul>
                                    </th>
                                </tr>
                            )
                        })
                    }
                    
                </tbody>
            </table>
    </div>
  )
}
