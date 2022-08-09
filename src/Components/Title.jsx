import React from 'react'

export default function Title(props) {

    const { data } = props
    console.log('title', data);
    const groupBy = (arr, key) => {
        return arr.reduce((result, currentValue) => {
            (result[currentValue[key]] = result[currentValue[key]] || []).push(currentValue);
            return result;
        }, {})
    }
    const grouped = groupBy(data, 'userId')
    console.log('grouped', grouped);
    const lenght = Object.keys(grouped)
    console.log('lenght', lenght);
    return (
        <div>
            <table className='table-auto'>
                <thead>
                    <tr>
                        <th>User ID</th>
                        <th>Title</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        lenght.map((key, index) => {
                            return (
                                <tr>
                                    <th key={index}>{key}</th>
                                    <th>
                                        <ul style={{textAlign:'left'}}>
                                            {grouped[key].map((list) => (
                                                <li key={list.id}>{list.title}</li>
                                            ))}
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
