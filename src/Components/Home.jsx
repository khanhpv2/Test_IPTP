import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { Link, NavLink, useHistory } from 'react-router-dom'
import { http } from '../utils/config'
import GroupID from './GroupID'

export default function Home(props) {
    const [data, setData] = useState([])
   
    const getAllDataApi = async () => {
        try {
            let result = await http.get('/todos')
            // console.log('result',result.data)
            setData(result.data)
        } catch (err) {
            console.log(err)
        }
    }
    const [key, setKey] = useState('a');
    const changeMenu = (value) => {
        console.log('value', value.target.value)
        setKey(value.target.value);
    }

    const [toggleId, setToggleId] = useState(false)
    // console.log(toggleId);
    const [toggleTitle, setToggleTitle] = useState(false)



    // useEffect(() => {
    //     getAllDataApi()
    // }, [])

    useEffect(() => {
        const dataSort = [...data]
        if (toggleId) {
            setData(sortDataById(dataSort))
        } else {
            getAllDataApi()
        }
    }, [toggleId])

    useEffect(() => {
        const dataSort = [...data]
        if (toggleTitle) {
            setData(sortAZ(dataSort))
        } else {
            getAllDataApi()
        }
    }, [toggleTitle])


    const renderTable = () => {
        return data.map((user, index) => {
            return <tr className='border border-slate-300 p-1' key={index}>
                <td className='border border-slate-300 p-1'>{user.id}</td>
                <td className='border border-slate-300 p-1'>{user.userId}</td>
                <td className='border border-slate-300 p-1'>{user.title}</td>
                <td className='border border-slate-300 p-1'>
                    <Link style={{ color: 'blue' }} to={`/detail/${user.id}`}>View Detail</Link>
                </td>
            </tr>

        })
    }

    const sortDataById = (arr) => arr.sort((firstId, secondId) => {
        return secondId.id - firstId.id
    })


    const sortAZ = (arr) => {
        return (arr.sort((firstTitle, secondTitle) => {
            let a = firstTitle.title.toLowerCase();
            let b = secondTitle.title.toLowerCase();
            if (b > a) {
                return -1;
            }

            return 1;
        }))

    }

    return (
        <div className='mx-auto'>
            <h1 className='text-3xl font-bold  my-3 text-center'>Home Page</h1>
            <div className='text-center mb-5'>
                <button value='a' className='bg-blue-500 text-center hover:bg-blue-700 text-white font-bold p-1 rounded-full mr-2' onClick={changeMenu}>View Normal</button>
                <button value='b' className="bg-transparent text-center hover:bg-blue-500 text-blue-700 font-semibold hover:text-white p-1 border border-blue-500 hover:border-transparent rounded" onClick={changeMenu}>Group By UserId</button>
            </div>
            {
                key === 'a' && (
                    <table className='table-auto mx-auto mt-5'>
                        <thead>
                            <tr>
                                <th className='p-2 mr-1 border border-current'>ID
                                    <button className='cursor-pointer' onClick={() => {
                                        // const dataSort = [...data];
                                        // setData(sortDataById(dataSort))
                                        setToggleId(!toggleId)
                                    }}><i className="fa fa-sort-down"></i></button>

                                </th>
                                <th className='border border-current p-2'>User ID</th>
                                <th className='border border-current p-2'>Title
                                    <button className='cursor-pointer' onClick={() => {
                                        setToggleTitle(!toggleTitle)
                                    }}><i className="fa fa-sort-down"></i></button>
                                </th>
                                <th className='border border-current p-2'>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {renderTable()}
                        </tbody>
                    </table>
                )
            }
            {
                key === 'b' && (
                    <GroupID dataParam={data} />
                )
            }
        </div>
    )
}
